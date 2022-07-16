import { newUser, verifyEmail } from "../repositories/usersRepository.js";
import { encrypt } from "../utils/bcrypt.js";

export function newUserService(email: string, password: string) {
    const validateEmail = verifyEmail(email);

    if(validateEmail != undefined) {
        throw { status: 409, message: "Email in use" }
    }

    const passwordEncrypted = encrypt(password);
    const user : newUser = {
        email,
        password: passwordEncrypted
    }
    return user
}