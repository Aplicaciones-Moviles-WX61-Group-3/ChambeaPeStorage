import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id_user: {
        type: String,
        required: true,
    },
    imageUrls: {
        type: Array,
        required: false,
    },
});

const UserModel = mongoose.model("User", userSchema);

export { UserModel };

/**
  El schema de usuario debe tener la siguiente estructura:
    {
        id_user:
        imageUrls: []
    }
 */