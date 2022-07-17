import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function tokenGenerator(userId: number, email: string) {
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign({id: userId, email}, secretKey);
    return token;
}
