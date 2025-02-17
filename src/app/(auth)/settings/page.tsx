import type { Metadata } from "next";
import { DefaultInstructions } from "@/app/(auth)/settings/defaultInstructions";
import { container } from "@/lib/di/container";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Settings | Yapir",
};

export default async function SettingsPage() {
  const instructions = await container
    .resolve("instructionService")
    .getDefaultInstructions();

  return (
    <>
      <DefaultInstructions {...instructions} />
    </>
  );
}
