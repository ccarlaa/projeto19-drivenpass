import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js"
import { newCredentialMiddleware } from "../middlewares/credentialsMiddleware.js";
import { newCredentialController, getAllCredentialsController } from "../controllers/credentialController.js";

const credentialsRoute = Router();

credentialsRoute.post('/new-credential', validateToken, newCredentialMiddleware, newCredentialController );
credentialsRoute.get('/get-credentials', validateToken, getAllCredentialsController);

export default credentialsRoute;
