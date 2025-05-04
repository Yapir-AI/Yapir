import { Main } from "@/components/ui/main";
import type { ReactNode } from "react";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadCrumbHelper items={["Projects"]} />
      <Main className="max-w-5xl">{children}</Main>
    </>
  );
}
