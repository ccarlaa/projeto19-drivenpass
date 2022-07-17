import { verifyCredential } from "../repositories/credentialsRepository.js";
import { newCredential } from "../repositories/credentialsRepository.js";
import { encrypt } from "../utils/ncrypt.js";

export async function newCredentialService(title: string, password: string, username: string, url: string, userId: number) {
    const validateCredential = await verifyCredential(title);

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
