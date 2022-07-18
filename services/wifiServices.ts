import { encrypt } from "../utils/ncrypt.js";
import { newWifi } from "../repositories/wifiRepository.js";

export async function newWifiService(title: string, password: string, name: string, userId: number) {
    const passwordEncrypted = encrypt(password);
    const wifi : newWifi = {
        title,
        userId,
        password: passwordEncrypted,
        name
    };

    return wifi;
}
