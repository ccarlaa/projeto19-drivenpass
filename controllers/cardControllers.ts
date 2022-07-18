import { Request, Response } from 'express';
import { newCardService, verifyAllCards } from '../services/cardsServices.js';
import { insert } from '../repositories/cardsRepository.js';

export async function newCardController(req: Request, res: Response) {
    const { title, number, name, cvc, password, type, expirationDate, isVirtual } : { 
        title: string,
        number: string,
        name: string,
        cvc: string,
        password: string,
        type: string,
        expirationDate: string,
        isVirtual: boolean,
    } = req.body;
    const { userId } = res.locals.userId;
    const cards = await newCardService(title, number, name, cvc, password, type, expirationDate, isVirtual, userId);
    try {
        await insert(cards);
        return res.status(201).send("Card successfully registered")
    } catch(error) {
        console.log(error)
        return res.status(500).send(error);
    }
}

export async function getAllCardsController(req: Request, res: Response) {
    const { userId } = res.locals.userId;
    const cards = await verifyAllCards(userId)
    return res.status(200).send(cards);
}
