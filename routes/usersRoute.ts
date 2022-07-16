import { Router } from "express";
import { newUserMiddleware } from "../middlewares/newUserMiddleware.js";
import { newUserController } from "../controllers/userController.js";

const userRoute = Router();

userRoute.post('/sign-up',newUserMiddleware, newUserController )

export default userRoute;
