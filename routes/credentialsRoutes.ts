import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js"
import { newCredentialMiddleware } from "../middlewares/credentialsMiddleware.js";
import { newCredentialController, getAllCredentialsController, getCredentialByIdController,deleteCredentialController } from "../controllers/credentialController.js";

const credentialsRoute = Router();

credentialsRoute.post('/new-credential', validateToken, newCredentialMiddleware, newCredentialController );
credentialsRoute.get('/get-credentials', validateToken, getAllCredentialsController);
credentialsRoute.get('/get-credentials/:id', validateToken, getCredentialByIdController);
credentialsRoute.delete('/delete-credential/:id', validateToken, deleteCredentialController);

export default credentialsRoute;
