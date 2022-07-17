import { Request, Response } from 'express';
import { newNoteService } from '../services/notesService.js';
import { insert } from '../repositories/notesRepository.js';

export async function newNoteController(req: Request, res: Response) {
    const { title, text } : { title: string, text: string } = req.body;
    const { userId } = res.locals.userId;
    const note = await newNoteService(title, text, userId);
    try {
        await insert(note);
        return res.status(201).send("Note successfully registered")
    } catch(error) {
        console.log(error)
        return res.status(500).send(error);
    }
}
