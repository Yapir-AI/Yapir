import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";
import { Main } from "@/components/ui/main";
import type { ReactNode } from "react";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadCrumbHelper items={["Home", "Projects"]} />
      <Main>
        <TitleSection>
          <div>
            <H1>Projects</H1>
            <HSub>Projects represents your Git repositories.</HSub>
          </div>
        </TitleSection>
        {children}
      </Main>
    </>
  );
}
