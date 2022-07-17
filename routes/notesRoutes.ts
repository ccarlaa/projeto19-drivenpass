import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js"
import { newNotesMiddleware } from "../middlewares/notesMiddleware.js";
import { newNoteController } from "../controllers/noteController.js";

const notesRoute = Router();

notesRoute.post('/new-notes', validateToken, newNotesMiddleware, newNoteController );

export default notesRoute;
