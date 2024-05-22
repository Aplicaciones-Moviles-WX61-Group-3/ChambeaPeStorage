import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id_user: {
        type: Number,
        required: true,
    },
    imageUrls: {
        type: Array,
        required: false,
    },
});

const UserModel = mongoose.model("Users", userSchema);

export { UserModel };

/**
  El schema de usuario debe tener la siguiente estructura:
    {
        id_user:
    }
 */