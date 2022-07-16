import bcrypt from 'bcrypt'

const hash: number = 10;

export function encrypt(word: string) {
    const wordHash = bcrypt.hashSync(word, hash);
    return wordHash
}