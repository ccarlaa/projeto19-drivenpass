import { newNotes, verifyNote } from "../repositories/notesRepository.js";
import { encrypt } from "../utils/ncrypt.js";
import { getAllNotes } from "../repositories/notesRepository.js";

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
        throw { status: 404, message: "Credential not find" }; 
    }
    return notes;
}

// export async function verifyNoteService(id: number, userId: number) {
//     const credential = await getCredentialById(id);
//     if(credential == undefined) {
//         throw { status: 404, message: "Credential not find" }; 
//     }
//     if(credential.userId !== userId){
//         throw { status: 401, message: "Unauthorized: Another user's credential" };
//     }
//     return credential
// }