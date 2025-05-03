import type { Metadata } from "next";
import { Lexend, Funnel_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/lib/reactQuery/provider";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/rich/ThemeProvider";
import { cookies } from "next/headers";

const sans = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-yapir-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-yapir-mono",
});

export const metadata: Metadata = {
  title: "Yapir",
  description: "You personal AI code reviewer.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable}`}
    >
      <body className={`antialiased transition-colors`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>
            <SidebarProvider defaultOpen={defaultOpen}>
              <TooltipProvider>{children}</TooltipProvider>
            </SidebarProvider>
          </QueryProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
