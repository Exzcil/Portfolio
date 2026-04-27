import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@/styles/project-b-variables.css";

export const metadata: Metadata = {
  title: "网易云音乐 | 品牌体验案例",
};

export default function ProjectBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-b font-sans bg-surface text-on-surface selection:bg-accent/30">
      <div className="fixed top-6 left-6 sm:top-8 sm:left-8 z-50 flex flex-col gap-2">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-white/65 hover:text-white/90 transition-colors"
        >
          <span className="text-base leading-none">←</span>
          <span>返回首页</span>
        </Link>
        <Link
          href="/project-a"
          className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors pl-[1.35rem]"
        >
          <span className="text-xs">AI Agent 咔智食谱</span>
        </Link>
      </div>
      {children}
    </div>
  );
}
