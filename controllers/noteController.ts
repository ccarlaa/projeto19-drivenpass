import { Request, Response } from 'express';
import { newNoteService, verifyAllNotes, verifyNoteService } from '../services/notesService.js';
import { insert, deleteNote } from '../repositories/notesRepository.js';

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

export async function getAllNotesController(req: Request, res: Response) {
    const { userId } = res.locals.userId;
    const notes = await verifyAllNotes(userId)
    return res.status(200).send(notes);
}

export async function getNoteByIdController(req: Request, res: Response) {
    const { id } = req.params;
    const { userId } : { userId: number } = res.locals.userId;
    const idNum = parseInt(id);
    const note = await verifyNoteService(idNum, userId);
    return res.status(200).send(note);
}

export async function deleteNoteController(req: Request, res: Response) {
    const { id } = req.params;
    const { userId } : { userId: number } = res.locals.userId;
    const idNum = parseInt(id);
    await verifyNoteService(idNum, userId);
    try {
        await deleteNote(idNum);
        return res.status(200).send("Note deleted");
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
}