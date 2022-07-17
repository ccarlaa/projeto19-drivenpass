import { Request, Response, NextFunction,  } from 'express';
import { newCredentialService } from '../services/credentialsServices.js';
import { insert, getAllCredentials, getCredentialById } from '../repositories/credentialsRepository.js';

export async function newCredentialController(req: Request, res: Response) {
    const { title, username, url, password } : { title: string, username: string, url: string, password: string } = req.body;
    const { userId } = res.locals.userId;
    const credential = await newCredentialService(title, password, username, url, userId);
    try {
        await insert(credential);
        return res.status(201).send("Credential successfully registered")
    } catch(error) {
        console.log(error)
        return res.status(500).send(error);
    }
}

export async function getAllCredentialsController(req: Request, res: Response) {
    const { userId } = res.locals.userId;
    try {
        const credentials = await getAllCredentials(userId);
        return res.status(200).send(credentials);
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
}

export async function getCredentialByIdController(req: Request, res: Response) {
    const { id } = req.params;
    const { userId } : { userId: number } = res.locals.userId;
    const idNum = parseInt(id);
    try {
        const credential = await getCredentialById(idNum);
        if(credential.userId !== userId){
            return res.status(401).send("Unauthorized");
        }
        return res.status(200).send(credential);
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
}