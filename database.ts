import pkg from "@prisma/client"; // precisamos instalar esse pacote!

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
export default prisma;