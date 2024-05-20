import { Router } from "express";

import { UserController } from "../controllers/usercontroller";
import { UserService } from "../services/userService";

export const createUserRoute = () => {
    const router = Router();
    const userController = new UserController({ UserService });

    router.get("/", userController.getAllUsers);
}