"use server";

import { actionClient } from "@/lib/safeAction/client";
import { revalidatePath } from "next/cache";
import { z } from 'zod/v3';
import { ProviderCreate } from "@/lib/provider/operation/create";
import { ProviderUpdate } from "@/lib/provider/operation/update";
import { routes } from "@/lib/route";

const revalidateProviders = () => revalidatePath(routes.providers);

export const createProvider = actionClient
  .schema(ProviderCreate.schema)
  .action(async ({ parsedInput, ctx: { providerCreateOperation } }) => {
    const id = await providerCreateOperation.execute(parsedInput);
    revalidateProviders();
    return id;
  });

export const updateProvider = actionClient
  .schema(ProviderUpdate.schema)
  .bindArgsSchemas<[id: z.ZodString]>([z.string().uuid()])
  .action(
    async ({
      parsedInput,
      bindArgsParsedInputs,
      ctx: { providerUpdateOperation },
    }) => {
      await providerUpdateOperation.execute(
        bindArgsParsedInputs[0],
        parsedInput,
      );
      revalidateProviders();
    },
  );

export const deleteProvider = actionClient
  .schema(z.string().uuid())
  .action(async ({ parsedInput: id, ctx: { providerDeleteOperation } }) => {
    await providerDeleteOperation.execute(id);
    revalidateProviders();
  });
