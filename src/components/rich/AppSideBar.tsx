"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  BotMessageSquare,
  BrainIcon,
  FileCog,
  FolderGit2,
  GitBranchIcon,
  HomeIcon,
  type LucideIcon,
  NotebookPenIcon,
} from "lucide-react";
import packageJson from "@/../package.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import { routes } from "@/lib/route";

const navGroups: NavGroup[] = [
  {
    title: "Code",
    items: [
      { title: "Reviews", url: routes.home, icon: NotebookPenIcon },
      { title: "Projects", url: routes.projects, icon: FolderGit2 },
    ],
  },
  {
    title: "Customize",
    items: [
      { title: "Reviewers", url: routes.reviewers, icon: BotMessageSquare },
      {
        title: "Default Instructions",
        url: routes.settings,
        icon: FileCog,
      },
    ],
  },
  {
    title: "Configure",
    items: [
      {
        title: "Git Connections",
        url: routes.git,
        icon: GitBranchIcon,
      },
      { title: "AI Providers", url: routes.providers, icon: BrainIcon },
    ],
  },
];

export function AppSideBar() {
  const pathname = usePathname();

  const normalizeTrailingSlash = (path: Route) => {
    return path === "/" ? path : path.replace(/\/$/, "");
  };
  const normalizedPathname = normalizeTrailingSlash(pathname || "");

  const isActive = (href: string) => {
    const normalizedHref = normalizeTrailingSlash(href);
    return (
      normalizedPathname === normalizedHref ||
      normalizedPathname.startsWith(`${normalizedHref}/`)
    );
  };

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded bg-sidebar-primary text-sidebar-primary-foreground">
                  <HomeIcon className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Yapir</span>
                  <span className="">v{packageJson.version}</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {navGroups.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={isActive(item.url)}
                      tooltip={item.title}
                      asChild
                    >
                      <Link href={item.url} prefetch={true}>
                        <item.icon></item.icon>
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      {/*<SidebarFooter>Footer</SidebarFooter>*/}
      <SidebarRail />
    </Sidebar>
  );
}

type NavGroup = {
  title: string;
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
};
