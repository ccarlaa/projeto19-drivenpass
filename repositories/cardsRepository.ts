import prisma from "../database.js";
import { cards } from "@prisma/client";
import { decrypt } from "../utils/ncrypt.js";

export type newCard = Omit<cards, "id" | "creatAt" >;

export async function insert(newCard: newCard) {
    await prisma.cards.create({data: newCard});
}

export async function verifyCards(title: string, userId: number) { 
    const cardInfos = await prisma.cards.findFirst({where: {title: {equals: title, mode: 'insensitive'}, userId: userId}});
    return cardInfos;
}