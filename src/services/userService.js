import { UserModel } from '../models/userModel.js';

export class UserService {
    async getAllUsers() {
        return UserModel.find();
    }

    async getUserById(id_user) {
        return UserModel.findOne({ id_user: id_user });
    }

    async createUser(user) {
        const newUser = new UserModel(user);
        return newUser.save();
    }

    async deleteUser(id_user) {
        return UserModel.deleteOne({ id_user: id_user });
    }

    async addImageUrl(id_user, imageUrl) {
        const user = await this.getUserById(id_user);
        if (!user) {
            throw new Error('User not found');
        }
        if (user.imageUrls.length >= 5) {
            throw new Error('Not more than 5 images can be added');
        }
        user.imageUrls.push(imageUrl);
        return user.save();
    }

    async removeImageUrl(id_user, imageUrl) {
        const user = await this.getUserById(id_user);
        if (!user) {
            throw new Error('User not found');
        }
        const index = user.imageUrls.indexOf(imageUrl);
        if (index === -1) {
            throw new Error('Image URL not found');
        }
        user.imageUrls.splice(index, 1);
        return user.save();
    }
}
