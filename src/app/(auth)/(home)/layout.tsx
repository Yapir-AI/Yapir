import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";
import { Main } from "@/components/ui/main";
import type { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <Main>
      <TitleSection>
        <div>
          <H1>Reviews</H1>
          <HSub>Find all your recent reviews</HSub>
        </div>
      </TitleSection>
      {children}
    </Main>
  );
}
