import { Request, Response, NextFunction } from 'express';
import newNoteSchema from '../utils/Schemas/notesSchema.js';

export async function newNotesMiddleware(req: Request, res: Response, next: NextFunction) {
    const { error } = newNoteSchema.validate(req.body)

    if(error) {
        return res.status(422).send(`Unprocessable entity:\n ${error}`);
    }

    next();
}

