import prisma from "../database.js";
import { users } from "@prisma/client";

export type newUser = Omit<users, "id" | "creatAt" > 

export async function insert(user: newUser) {
    await prisma.users.create({data: user});
}

export async function verifyEmail(email: string) { 
    await prisma.users.findFirst({where: {email: email}});
}