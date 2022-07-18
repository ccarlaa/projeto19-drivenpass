import { Request, Response, NextFunction } from 'express';
import newCardSchema from '../utils/cardSchema.js';

export async function newCardMiddleware(req: Request, res: Response, next: NextFunction) {
    const { error } = newCardSchema.validate(req.body)

    if(error) {
        return res.status(422).send(`Unprocessable entity:\n ${error}`);
    }

    next();
}

