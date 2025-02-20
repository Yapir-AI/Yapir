import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";
import { Main } from "@/components/ui/main";
import type { ReactNode } from "react";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadCrumbHelper items={["Home"]} />
      <Main>
        <TitleSection>
          <div>
            <H1>Reviews</H1>
            <HSub>Find all your recent reviews</HSub>
          </div>
        </TitleSection>
        {children}
      </Main>
    </>
  );
}
