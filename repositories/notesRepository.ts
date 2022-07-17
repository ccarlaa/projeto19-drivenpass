import prisma from "../database.js";
import { notes } from "@prisma/client";
import { decrypt } from "../utils/ncrypt.js";

export type newNotes = Omit<notes, "id" | "creatAt">;

export async function insert(note: newNotes) {
    await prisma.notes.create({data: note});
}

export async function verifyNote(title: string, userId: number) { 
    const noteInfos = await prisma.notes.findFirst({where: {title: {equals: title, mode: 'insensitive'}, userId: userId}});
    return noteInfos;
}

export async function getAllCredentials(userId: number) {
    const credentials = await prisma.credentials.findMany({where: {userId: userId}});
    let credentialsList = credentials.map((credential) => {
        let passwordDecrypted = decrypt(credential.password)
        return ({...credential, password: passwordDecrypted})
    });
    return credentialsList;
}

export async function getCredentialById(id: number) {
    const credential = await prisma.credentials.findFirst({where: {id: id}});
    if(credential) {
        const passwordDecrypted = decrypt(credential.password);
        const credentialInfos = {...credential, password: passwordDecrypted};
        return credentialInfos;
    }
    return credential;
}

export async function deleteCredential(id: number) {
    await prisma.credentials.delete({where: {id: id}});
}