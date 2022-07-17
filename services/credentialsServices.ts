import { getAllCredentials, verifyCredential } from "../repositories/credentialsRepository.js";
import { newCredential, getCredentialById } from "../repositories/credentialsRepository.js";
import { encrypt } from "../utils/ncrypt.js";

export async function newCredentialService(title: string, password: string, username: string, url: string, userId: number) {
    const validateCredential = await verifyCredential(title, userId);

    if(validateCredential != undefined) {
        throw { status: 409, message: "Title in use" };
    }

    const passwordEncrypted = encrypt(password);
    const credential : newCredential = {
        title,
        userId,
        username,
        url,
        password: passwordEncrypted
    };

    return credential;
}

export async function verifyAllCredentials(userId: number) {
    const credentials = await getAllCredentials(userId);
    if(credentials == undefined) {
        throw { status: 404, message: "Credential not find" }; 
    }
    return credentials;
}

export async function verifyCredentialService(id: number, userId: number) {
    const credential = await getCredentialById(id);
    if(credential == undefined) {
        throw { status: 404, message: "Credential not find" }; 
    }
    if(credential.userId !== userId){
        throw { status: 401, message: "Unauthorized: Another user's credential" };
    }
    return credential
}
