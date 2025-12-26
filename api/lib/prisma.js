import pkg from "@prisma/client";
const { PrismaClient } = pkg; // destructure PrismaClient from the package

const prisma = new PrismaClient();
export default prisma;
