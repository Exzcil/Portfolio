import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@/styles/project-a-variables.css";

export const metadata: Metadata = {
  title: "咔智食谱 | AI 产品设计案例",
};

export default function ProjectALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-a font-sans bg-surface text-on-surface selection:bg-accent/20">
      <Link
        href="/"
        className="fixed top-6 left-6 sm:top-8 sm:left-8 z-50 flex items-center gap-1.5 text-sm text-muted/50 hover:text-muted/90 transition-colors"
      >
        <span className="text-base leading-none">←</span>
        <span>返回首页</span>
      </Link>
      {children}
    </div>
  );
}
