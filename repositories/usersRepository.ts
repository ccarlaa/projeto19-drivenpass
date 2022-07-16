import prisma from "../database.js";
import { users, sessions } from "@prisma/client";

export type newUser = Omit<users, "id" | "creatAt" > 

export type newSession = Omit<sessions, "id" | "creatAt">

export async function insert(user: newUser) {
    await prisma.users.create({data: user});
}

export async function verifyEmail(email: string) { 
    const userInfos = await prisma.users.findFirst({where: {email: email}});
    return userInfos;
}

export async function creatSession(session: newSession) {
    await prisma.sessions.create({data: session});
}