import { encrypt } from "../utils/ncrypt.js";
import { getAllWifi, newWifi } from "../repositories/wifiRepository.js";

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

export async function verifyAllWifi(userId: number) {
    const wifi = await getAllWifi(userId);
    if(wifi == undefined) {
        throw { status: 404, message: "Wi-fi not find" }; 
    }
    return wifi;
}
