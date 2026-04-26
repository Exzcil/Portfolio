import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata: Metadata = {
  title: "Portfolio | UX Designer",
  description: "UX Designer Portfolio — 理性分析 × 感性体验",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-dvh antialiased font-sans">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
