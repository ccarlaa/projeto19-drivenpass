import { Request, Response, NextFunction } from 'express';
import newUserSchema from '../utils/Schemas/userSchema.js';

export async function bodyMiddleware(req: Request, res: Response, next: NextFunction) {
    const { error } = newUserSchema.validate(req.body)

    if(error) {
        return res.status(422).send(`Unprocessable entity:\n ${error}`);
    }

    next();
}
