import { PrismaClient } from "@prisma/client";

const dbSync = new PrismaClient();

export { dbSync };
