import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";
import { Main } from "@/components/ui/main";
import type { ReactNode } from "react";
import { CreateReviewerButton } from "@/app/(auth)/reviewers/(root)/CreateReviewerButton";
import { container } from "@/lib/di/container";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";

export default async function ReviewersLayout({
  children,
}: {
  children: ReactNode;
}) {
  const providers = await container.cradle.providerService.listProviders();

  return (
    <>
      <BreadCrumbHelper items={["Home", "Reviewers"]} />
      <Main>
        <TitleSection>
          <div>
            <H1>Reviewers</H1>
            <HSub>
              Associate Reviewers to your Projects so they can start reviewing
              your code.
            </HSub>
          </div>
          <CreateReviewerButton providers={providers} />
        </TitleSection>
        {children}
      </Main>
    </>
  );
}
