import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js"
import { newNotesMiddleware } from "../middlewares/notesMiddleware.js";
import { newNoteController, getAllNotesController } from "../controllers/noteController.js";

const notesRoute = Router();

notesRoute.post('/new-notes', validateToken, newNotesMiddleware, newNoteController );
notesRoute.get('/get-notes', validateToken, getAllNotesController);

export default notesRoute;
