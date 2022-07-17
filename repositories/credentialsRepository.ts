import prisma from "../database.js";
import { credentials } from "@prisma/client";
import { decrypt } from "../utils/ncrypt.js";

export type newCredential = Omit<credentials, "id" | "creatAt">;

export async function insert(credential: newCredential) {
    await prisma.credentials.create({data: credential});
}

export async function verifyCredential(title: string) { 
    const credentialsInfos = await prisma.credentials.findFirst({where: {title: {equals: title, mode: 'insensitive'}}});
    return credentialsInfos;
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
    const passwordDecrypted = decrypt(credential.password);
    const credentialInfos = {...credential, password: passwordDecrypted};
    return credentialInfos;
}