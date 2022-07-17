import { Request, Response, NextFunction,  } from 'express';
import { newCredentialService } from '../services/credentialsServices.js';
import { insert } from '../repositories/credentialsRepository.js';

export async function newCredentialController(req: Request, res: Response, next: NextFunction) {
    const { title, username, url, password } : { title: string, username: string, url: string, password: string } = req.body;
    const { userId } = res.locals.userId;
    const credential = await newCredentialService(title, password, username, url, userId);
    try {
        await insert(credential);
        return res.status(200).send("Credential successfully registered")
    } catch(error) {
        console.log(error)
        return res.status(500).send(error);
    }
}