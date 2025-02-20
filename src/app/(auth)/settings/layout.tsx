import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";
import type { ReactNode } from "react";
import { Main } from "@/components/ui/main";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadCrumbHelper items={["Home", "Instructions"]} />
      <Main>
        <TitleSection>
          <div>
            <H1>Instructions</H1>
            <HSub>Manage your Yapir global instructions</HSub>
          </div>
        </TitleSection>
        {children}
      </Main>
    </>
  );
}
