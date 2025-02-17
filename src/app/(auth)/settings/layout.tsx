import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";
import type { ReactNode } from "react";
import { Main } from "@/components/ui/main";

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <Main>
      <TitleSection>
        <div>
          <H1>Settings</H1>
          <HSub>Manage your Yapir global settings</HSub>
        </div>
      </TitleSection>
      {children}
    </Main>
  );
}
