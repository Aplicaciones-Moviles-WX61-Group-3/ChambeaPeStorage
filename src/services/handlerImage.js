import dotenv from "dotenv";
import pkg from "@azure/storage-blob";

dotenv.config();

const { BlobServiceClient } = pkg;

const SAS_TOKEN = process.env.SAS_TOKEN;
const ACCOUNT_NAME = process.env.ACCOUNT_NAME;
const CONTAINER_NAME = process.env.CONTAINER_NAME;

const blobServiceClient = new BlobServiceClient(`https://${ACCOUNT_NAME}.blob.core.windows.net/?${SAS_TOKEN}`);

const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);

export const uploadImage = async (file, id_user) => {
    const blobName = "user-" + id_user + "-" + file.originalname;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const data = file.buffer;
    // console.log(blobName);

    const blobHTTPHeaders = { blobContentDisposition: 'inline; filename=' + file.originalname };

    await blockBlobClient.upload(data, data.length, { blobHTTPHeaders });

    // await blockBlobClient.upload(data, data.length);

    const blobUrl = `https://${ACCOUNT_NAME}.blob.core.windows.net/${CONTAINER_NAME}/${blobName}`;

    return blobUrl;
};
export const deleteImage = async (blobName) => {
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const deleteBlobResponse = await blockBlobClient.delete();
    return deleteBlobResponse;
};

export const getImage = async (blobName) => {
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const downloadBlockBlobResponse = await blockBlobClient.download();
    const downloaded = await streamToBuffer(downloadBlockBlobResponse.readableStreamBody);
    return downloaded;
};
