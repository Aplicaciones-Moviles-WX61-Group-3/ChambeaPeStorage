import { Router } from "express";

import { UserController } from "../controllers/userController.js";
import { UserService } from "../services/userService.js";

export const createUserRoute = () => {
    const router = Router();
    const userService = new UserService();
    const userController = new UserController({ userService });

    router.get("/", userController.getAllUsers);
    router.get("/:id_user", userController.getUserById);
    router.post("/", userController.createUser);
    router.delete("/:id_user", userController.deleteUser);
    router.patch("/:id_user/addImageUrl", userController.addImageUrl);
    router.patch("/:id_user/removeImageUrl", userController.removeImageUrl);

    return router;
}