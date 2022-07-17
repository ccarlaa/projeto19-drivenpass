import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js"
import { newCardController } from "../controllers/cardControllers.js";
import { newCardMiddleware } from "../middlewares/cardsMiddleware.js";

const cardsRoute = Router();

cardsRoute.post('/new-card', validateToken, newCardMiddleware, newCardController);
cardsRoute.get('/get-credentials', validateToken, );
cardsRoute.get('/get-credentials/:id', validateToken, );
cardsRoute.delete('/delete-credential/:id', validateToken, );

export default cardsRoute;
