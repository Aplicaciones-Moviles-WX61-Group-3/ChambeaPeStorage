import { Router } from "express";

import { UserController } from "../controllers/userController.js";
import { UserService } from "../services/userService.js";

export const createUserRoute = () => {
    const router = Router();
    const userService = new UserService();
    const userController = new UserController({ userService });

    router.get("/", userController.getAllUsers);

    return router;
}