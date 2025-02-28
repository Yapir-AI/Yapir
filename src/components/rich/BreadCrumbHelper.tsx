"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { routes, type YapirRoute } from "@/lib/route";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/rich/ThemeToggle";

export type BreadCrumbItem = {
  label: string;
  href?: YapirRoute;
};

const breadCrumbs = {
  Home: routes.home,
  Projects: routes.projects,
  Reviewers: routes.reviewers,
  Instructions: routes.settings,
  Git: routes.git,
  Providers: routes.providers,
} as const satisfies Record<string, YapirRoute>;
type BreadCrumbs = typeof breadCrumbs;
type BreadCrumbKey = keyof BreadCrumbs;

export function BreadCrumbHelper({
  items,
}: {
  items: (BreadCrumbItem | BreadCrumbKey)[];
}) {
  return (
    <div className="w-full px-5">
      <Breadcrumb
        className={cn(
          "container mx-auto flex h-14 items-center transition-all",
        )}
      >
        <SidebarTrigger className="mr-5" />
        <BreadcrumbList>
          {items.map((item, index) => {
            const { label, href } =
              typeof item === "object"
                ? item
                : { label: item, href: breadCrumbs[item] };

            return (
              <Fragment key={label}>
                <BreadcrumbItem>
                  {href ? (
                    <>
                      <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                    </>
                  ) : (
                    <BreadcrumbPage>{label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index !== items.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
        <div className="grow" />
        <ThemeToggle />
      </Breadcrumb>
    </div>
  );
}
