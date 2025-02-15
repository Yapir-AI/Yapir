import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";
import type { ReactNode } from "react";
import { Main } from "@/components/ui/main";
import { AddGitButton } from "@/app/(auth)/git/addGitButton";

export default function GitLayout({ children }: { children: ReactNode }) {
  return (
    <Main>
      <TitleSection>
        <div>
          <H1>Git Apps</H1>
          <HSub>Manage the app installation on GitHub</HSub>
        </div>
        <AddGitButton />
      </TitleSection>
      {children}
    </Main>
  );
}
