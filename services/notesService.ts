import { verifyCredential } from "../repositories/credentialsRepository.js";
import { newNotes, verifyNote } from "../repositories/notesRepository.js";
import { encrypt } from "../utils/ncrypt.js";

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
