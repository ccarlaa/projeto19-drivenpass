import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js"
import { newCardController, getAllCardsController, getCardByIdController, deleteCardController } from "../controllers/cardControllers.js";
import { newCardMiddleware } from "../middlewares/cardsMiddleware.js";

const cardsRoute = Router();

cardsRoute.post('/new-card', validateToken, newCardMiddleware, newCardController);
cardsRoute.get('/get-cards', validateToken, getAllCardsController);
cardsRoute.get('/get-cards/:id', validateToken, getCardByIdController);
cardsRoute.delete('/delete-cards/:id', validateToken, deleteCardController);

export default cardsRoute;
