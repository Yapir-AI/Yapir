import { Prisma, PrismaClient } from "@prisma/client";
import { fieldEncryptionExtension } from "prisma-field-encryption";

declare global {
  var prisma: ReturnType<typeof prismaClient>;
}

let prisma: ReturnType<typeof prismaClient>;

const prismaClient = (
  options?: Prisma.Subset<
    Prisma.PrismaClientOptions,
    Prisma.PrismaClientOptions
  >,
) => new PrismaClient(options).$extends(fieldEncryptionExtension());

if (process.env.NODE_ENV === "production") {
  prisma = prismaClient();
} else {
  if (!global.prisma) {
    global.prisma = prismaClient({ log: ["query"] });
  }
  prisma = global.prisma;
}

export default prisma;
