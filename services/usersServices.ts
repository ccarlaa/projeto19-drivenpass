import { newUser, verifyEmail, newSession } from "../repositories/usersRepository.js";
import { encrypt, verifyPassword } from "../utils/bcrypt.js";
import { tokenGenerator } from "../utils/token.js";

export async function newUserService(email: string, password: string) {
    const validateEmail = await verifyEmail(email);

    if(validateEmail != undefined) {
        throw { status: 409, message: "Email in use" };
    }

    const passwordEncrypted = encrypt(password);
    const user : newUser = {
        email,
        password: passwordEncrypted
    }
    return user;
}

export async function signInService(email: string, password: string) {
    const validateEmail = await verifyEmail(email);
    if(validateEmail == undefined) {
        throw { status: 404, message: "User not found" };
    }
    
    const passwordEncrypted = validateEmail.password;
    verifyPassword(password, passwordEncrypted);

    const userId = validateEmail.id;
    const token = tokenGenerator(userId, email);

    const session : newSession = {
        userId,
        token
    };

    return session;
}