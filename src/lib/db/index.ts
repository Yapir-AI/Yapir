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
) => {
  const encryptionKey = process.env.PRISMA_FIELD_ENCRYPTION_KEY;

  if (encryptionKey)
    return new PrismaClient(options).$extends(fieldEncryptionExtension());

  console.warn(
    "Running without PRISMA_FIELD_ENCRYPTION_KEY. Secrets will not be encrypted in database. Ignore this while building",
  );
  return new PrismaClient(options);
};

if (process.env.NODE_ENV === "production") {
  prisma = prismaClient();
} else {
  if (!global.prisma) {
    global.prisma = prismaClient({ log: ["query"] });
  }
  prisma = global.prisma;
}

export default prisma;
