import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";
import { Main } from "@/components/ui/main";
import type { ReactNode } from "react";
import { AddProviderButton } from "@/app/(auth)/providers/addProviderButton";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";

export default function ProvidersLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadCrumbHelper items={["Home", "Providers"]} />
      <Main>
        <TitleSection>
          <div>
            <H1>AI Providers</H1>
            <HSub>Manage your AI providers and their models.</HSub>
          </div>
          <AddProviderButton />
        </TitleSection>
        {children}
      </Main>
    </>
  );
}
