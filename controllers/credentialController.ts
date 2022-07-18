import { Request, Response } from 'express';
import { newCredentialService, verifyCredentialService, verifyAllCredentials } from '../services/credentialsServices.js';
import { insert, getAllCredentials, deleteCredential } from '../repositories/credentialsRepository.js';

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
    const credentials = await verifyAllCredentials(userId)
    return res.status(200).send(credentials);
}

export async function getCredentialByIdController(req: Request, res: Response) {
    const { id } = req.params;
    const { userId } : { userId: number } = res.locals.userId;
    const idNum = parseInt(id);
    const credential = await verifyCredentialService(idNum, userId);
    return res.status(200).send(credential);
}

export async function deleteCredentialController(req: Request, res: Response) {
    const { id } = req.params;
    const { userId } : { userId: number } = res.locals.userId;
    const idNum = parseInt(id);
    await verifyCredentialService(idNum, userId);
    try {
        await deleteCredential(idNum);
        return res.status(200).send("Credential deleted");
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
}