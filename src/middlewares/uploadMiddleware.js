import multer from 'multer';

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image")) {
            cb(null, true);
        } else {
            cb(new Error("Not an image! Please upload an image."), false);
        }
    },
});

export const uploadSingle = upload.single('file');
