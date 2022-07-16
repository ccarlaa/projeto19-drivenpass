import { Router } from "express";
import { bodyMiddleware } from "../middlewares/userMiddleware.js";
import { newUserController, signInController } from "../controllers/userController.js";

const userRoute = Router();

userRoute.post('/sign-up',bodyMiddleware, newUserController);
userRoute.post('/sign-in', bodyMiddleware, signInController)

export default userRoute;
