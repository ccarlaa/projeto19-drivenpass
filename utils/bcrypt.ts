import bcrypt from 'bcrypt'

const hash: number = 10;

export function encrypt(word: string) {
    const wordHash = bcrypt.hashSync(word, hash);
    return wordHash
}

export function verifyPassword(password: string, passwordEncrypted: string) {
    if(!bcrypt.compareSync(password, passwordEncrypted)) {
        throw { status: 404, message: "Worng password" };
    }
}