import prisma from "../database.js";
import { credentials } from "@prisma/client";

export type newCredential = Omit<credentials, "id" | "creatAt">;

export async function insert(credential: newCredential) {
    await prisma.credentials.create({data: credential});
}

export async function verifyCredential(title: string) { 
    const credentialsInfos = await prisma.credentials.findFirst({where: {title: {equals: title, mode: 'insensitive'}}});
    return credentialsInfos;
}