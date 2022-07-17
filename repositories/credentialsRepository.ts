import prisma from "../database.js";
import { credentials } from "@prisma/client";
import { decrypt } from "../utils/ncrypt.js";

export type newCredential = Omit<credentials, "id" | "creatAt">;

export async function insert(credential: newCredential) {
    await prisma.credentials.create({data: credential});
}

export async function verifyCredential(title: string, userId: number) { 
    const credentialsInfos = await prisma.credentials.findFirst({where: {title: {equals: title, mode: 'insensitive'}, userId: userId}});
    return credentialsInfos;
}

export async function getAllCredentials(userId: number) {
    const credentials = await prisma.credentials.findMany({where: {userId: userId}});
    if(credentials) {
        let credentialsList = credentials.map((credential) => {
            let passwordDecrypted = decrypt(credential.password)
            return ({...credential, password: passwordDecrypted})
        });
        return credentialsList;
    }
    return credentials
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