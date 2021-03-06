import { Request, Response, NextFunction } from 'express';
import { insert } from '../repositories/usersRepository.js';
import { creatSession } from '../repositories/sessionsRepository.js';
import { newUserService, signInService } from '../services/usersServices.js';

export async function newUserController(req: Request, res: Response) {
    const { email, password } : { email: string, password: string } = req.body;
    const user = await newUserService(email, password)
    try {
        await insert(user);
        return res.status(201).send("Successfully registered")
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
}

export async function signInController(req: Request, res: Response) {
    const { email, password } : { email: string, password: string } = req.body;
    const session = await signInService(email, password);
    const { token } = session;
    try {
        await creatSession(session);
        return res.status(200).send(token);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}
