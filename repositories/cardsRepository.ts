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

export async function getAllCards(userId: number) {
    const cards = await prisma.cards.findMany({where: {userId: userId}});
    if(cards) {
        let cardsList = cards.map((card) => {
            let passwordDecrypted = decrypt(card.password);
            let cvcDecrypted = decrypt(card.cvc);
            return ({...card, password: passwordDecrypted, cvc: cvcDecrypted});
        });
        return cardsList;
    }
    return cards;
}

export async function getCardById(id: number) {
    const card = await prisma.cards.findFirst({where: {id: id}});
    if(card) {
        const passwordDecrypted = decrypt(card.password);
        const cvcDecrypted = decrypt(card.cvc);
        return ({...card, password: passwordDecrypted, cvc: cvcDecrypted});
    }
    return card;
}

export async function deleteCard(id: number) {
    await prisma.cards.delete({where: {id: id}});
}