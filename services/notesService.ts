import { newNotes, verifyNote } from "../repositories/notesRepository.js";
import { encrypt } from "../utils/ncrypt.js";
import { getAllNotes, getNoteById } from "../repositories/notesRepository.js";

export async function newNoteService(title: string, text: string, userId: number) {
    const validateCredential = await verifyNote(title, userId);

    if(validateCredential != undefined) {
        throw { status: 409, message: "Title in use" };
    }

    const textEncrypted = encrypt(text);
    const note : newNotes = {
        title,
        text: textEncrypted,
        userId
    };

    return note;
}

export async function verifyAllNotes(userId: number) {
    const notes = await getAllNotes(userId);
    if(notes == undefined) {
        throw { status: 404, message: "Notes not find" }; 
    }
    return notes;
}

export async function verifyNoteService(id: number, userId: number) {
    const note = await getNoteById(id);
    if(note == undefined) {
        throw { status: 404, message: "Note not find" }; 
    }
    if(note.userId !== userId){
        throw { status: 401, message: "Unauthorized: Another user's note" };
    }
    return note
}