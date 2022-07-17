import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js"
import { newCredentialMiddleware } from "../middlewares/credentialsMiddleware.js";
import { newCredentialController } from "../controllers/credentialController.js";

const credentialsRoute = Router();

credentialsRoute.post('/new-credential', validateToken, newCredentialMiddleware, newCredentialController );
credentialsRoute.get('/sign-in', );

export default credentialsRoute;
