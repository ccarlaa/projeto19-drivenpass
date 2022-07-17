import prisma from "../database.js";
import { sessions } from "@prisma/client";

export type newSession = Omit<sessions, "id" | "creatAt">

export async function creatSession(session: newSession) {
    await prisma.sessions.create({data: session});
}

export async function verifySession(token: string) {
    const sessionInfos = await prisma.sessions.findFirst({where: {token: token}});
    return sessionInfos;
}