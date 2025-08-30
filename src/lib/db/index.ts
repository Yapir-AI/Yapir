import { Prisma, PrismaClient } from "@/generated/prisma/client";
import { fieldEncryptionExtension } from "prisma-field-encryption";

export type YapirPrismaClient = ReturnType<typeof prismaClient>;

let prisma: YapirPrismaClient;

const options = {
  omit: {
    aiProvider: { apiKey: true },
  },
} as const satisfies Prisma.Subset<
  Prisma.PrismaClientOptions,
  Prisma.PrismaClientOptions
>;

const prismaClient = () => {
  const encryptionKey = process.env.PRISMA_FIELD_ENCRYPTION_KEY;

  if (encryptionKey)
    return new PrismaClient(options).$extends(
      fieldEncryptionExtension({ dmmf: Prisma.dmmf }),
    );

  console.warn(
    "Running without PRISMA_FIELD_ENCRYPTION_KEY. Secrets will not be encrypted in database. Ignore this while building",
  );
  return new PrismaClient(options);
};

if (process.env.NODE_ENV === "production") {
  prisma = prismaClient();
} else {
  // @ts-expect-error
  if (!global.prisma) {
    // @ts-expect-error
    global.prisma = prismaClient();
  }
  // @ts-expect-error
  prisma = global.prisma;
}

export default prisma;
