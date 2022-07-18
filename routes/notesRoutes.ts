import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js"
import { newNotesMiddleware } from "../middlewares/notesMiddleware.js";
import { newNoteController, getAllNotesController, getNoteByIdController } from "../controllers/noteController.js";

const notesRoute = Router();

notesRoute.post('/new-note', validateToken, newNotesMiddleware, newNoteController );
notesRoute.get('/get-notes', validateToken, getAllNotesController);
notesRoute.get('/get-notes/:id', validateToken, getNoteByIdController);
notesRoute.delete('/delete-note/:id', validateToken, getNoteByIdController);

export default notesRoute;
