import { UserModel } from '../models/userModel.js';
import { uploadImage, deleteImage } from './handlerImage.js';

export class UserService {
    async getAllUsers() {
        return UserModel.find();
    }

    async getUserById(id_user) {
        return UserModel.findOne({ id_user: id_user });
    }

    async createUser(user) {
        const existingUser = await this.getUserById(user.id_user);
        if (existingUser) {
            throw new Error('User already exists');
        }
        const newUser = new UserModel(user);
        return newUser.save();
    }

    async deleteUser(id_user) {
        const user = await this.getUserById(id_user);
        if (!user) {
            throw new Error('User not found');
        }
        const removed = await this.removeAllImageUrls(id_user);
        return UserModel.deleteOne({ id_user: id_user });
    }

    async addImageUrl(id_user, file) {
        const user = await this.getUserById(id_user);

        if (!user) {
            throw new Error('User not found');
        }

        if (user.imageUrls.length >= 5) {
            throw new Error('Not more than 5 images can be added');
        }

        const imageUrl = await uploadImage(file, id_user);

        user.imageUrls.push(imageUrl);
        return user.save();
    }


    async removeImageUrl(id_user, imageUrl) {
        const user = await this.getUserById(id_user);
        if (!user) {
            throw new Error('User not found');
        }

        if (user.imageUrls.length <= 0) {
            throw new Error('No images to remove');
        }
        const index = user.imageUrls.indexOf(imageUrl);
        if (index === -1) {
            throw new Error('Image URL not found');
        }
        const deletedImageUrl = user.imageUrls[index];

        // Extraer el nombre del blob de la URL
        const blobName = deletedImageUrl.split('/').pop();
        await deleteImage(blobName);
        user.imageUrls.splice(index, 1);
        return user.save();
    }

    async removeAllImageUrls(id_user) {
        const user = await this.getUserById(id_user);
        if (!user) {
            throw new Error('User not found');
        }

        if (user.imageUrls.length <= 0) {
            throw new Error('No images to remove');
        }

        for (const imageUrl of user.imageUrls) {
            const blobName = imageUrl.split('/').pop();
            await deleteImage(blobName);
        }
        user.imageUrls = [];
        return user.save();
    }
}
