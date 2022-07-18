import { Request, Response, NextFunction } from 'express';
import newWifiSchema from '../utils/Schemas/wifiSchema.js';

export async function newWifiMiddleware(req: Request, res: Response, next: NextFunction) {
    const { error } = newWifiSchema.validate(req.body)

    if(error) {
        return res.status(422).send(`Unprocessable entity:\n ${error}`);
    }

    next();
}
