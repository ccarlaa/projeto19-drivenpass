import prisma from "../database.js";
import { wifi } from "@prisma/client";
import { decrypt } from "../utils/ncrypt.js";

export type newWifi = Omit<wifi, "id" | "creatAt" >;

export async function insert(newWifi: newWifi) {
    await prisma.wifi.create({data: newWifi});
}
