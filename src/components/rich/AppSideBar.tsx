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
  FolderGit2,
  GitBranchIcon,
  HomeIcon,
  type LucideIcon,
  NotebookPenIcon,
} from "lucide-react";
import packageJson from "@/../package.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes, type YapirRoute } from "@/lib/route";
import { type ReactElement, useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { createPortal } from "react-dom";

const navGroups: NavGroup[] = [
  {
    title: "Settings",
    items: [
      {
        title: "Projects",
        url: routes.projects,
        icon: FolderGit2,
        strict: true,
      },
      { title: "Reviewers", url: routes.reviewers, icon: BotMessageSquare },
      { title: "Notes", url: routes.notes, icon: NotebookPenIcon },
      {
        title: "Git Connections",
        url: routes.git,
        icon: GitBranchIcon,
      },
      { title: "AI Providers", url: routes.providers, icon: BrainIcon },
    ],
  },
];

const SIDE_BAR_CONTENT_ID = "sidebar-portal-content";

function useActivePathName() {
  const pathname = usePathname();

  const normalizeTrailingSlash = (path: string) => {
    return path === "/" ? path : path.replace(/\/$/, "");
  };

  const normalizedPathname = normalizeTrailingSlash(pathname || "");

  const isActive = (item: NavGroupItem) => {
    const normalizedHref = normalizeTrailingSlash(item.url);
    if (item.strict) return normalizedPathname === normalizedHref;
    return (
      normalizedPathname === normalizedHref ||
      normalizedPathname.startsWith(`${normalizedHref}/`)
    );
  };

  return { isActive };
}

export function AppSideBar() {
  const [ref] = useAutoAnimate();

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded">
                  <HomeIcon className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Yapir</span>
                  <span>v{packageJson.version}</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <div suppressHydrationWarning id={SIDE_BAR_CONTENT_ID} ref={ref} />
        <AppSideBarGroups navGroups={navGroups} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

function AppSideBarGroups({ navGroups }: { navGroups: NavGroup[] }) {
  const { isActive } = useActivePathName();

  return navGroups.map((group) => (
    <SidebarGroup key={group.title}>
      <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {group.items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                isActive={isActive(item)}
                tooltip={item.title}
                asChild
              >
                <Link href={item.url} prefetch={true}>
                  <item.icon />
                  {item.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  ));
}

export function SidebarPortal({ navGroups }: { navGroups: NavGroup[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (mounted) {
    const sidebarContainer = document.getElementById(SIDE_BAR_CONTENT_ID);
    if (!sidebarContainer) return null;

    return createPortal(
      <AppSideBarGroups navGroups={navGroups} />,
      sidebarContainer,
    );
  }

  return null;
}

type NavGroup = {
  title: string;
  items: {
    title: string;
    url: YapirRoute;
    icon: LucideIcon | (() => ReactElement);
    strict?: boolean;
  }[];
};

type NavGroupItem = NavGroup["items"][number];
