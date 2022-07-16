import { Request, Response, NextFunction } from 'express';
import { insert } from '../repositories/usersRepository.js';
import { newUserService } from '../services/usersServices.js';

export async function newUserController(req: Request, res: Response, next: NextFunction) {
    const { email, password } : { email: string, password: string } = req.body;
    const user = newUserService(email, password)
    try {
        await insert(user);
        return res.status(200).send("Registration successful")
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
}
