import ncrypt from "ncrypt-js"
import dotenv from "dotenv";

dotenv.config();

const ncryptObject = new ncrypt(process.env.SECRET_KEY);

export function encrypt(message : string) {
    const messageEncrypted: string = ncryptObject.encrypt(message);
    return messageEncrypted;
}

export function decrypt(message : string) {
    const messageDecrypted: string = ncryptObject.decrypt(message);
    return messageDecrypted;
}