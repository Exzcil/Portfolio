"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
} as const;

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
} as const;

const introVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

const tagVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const [pinned, setPinned] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("");

  // Scroll spy — track which project section is in view
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target.getAttribute("data-section");
          if (entry.isIntersecting) {
            if (section === "hero") {
              setPinned(null);
            }
            setActiveSection(section ?? "");
          }
        }
      },
      { threshold: 0.5 },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handlePin = (id: string, href: string) => {
    setPinned(id);
    setTimeout(() => scrollTo(href), 500);
  };

  const btnClass = (section: string) =>
    `inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border transition-all duration-300 ${
      pinned && activeSection === section
        ? "text-white border-white/30 bg-white/10 shadow-[0_0_16px_-4px_rgba(255,255,255,0.2)]"
        : "text-white/50 border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 hover:text-white/90"
    }`;

  return (
    <>
      {/* Fixed top navigation — glass morphism */}
      <AnimatePresence>
        {pinned && (
          <motion.nav
            key="top-nav"
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -64, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-[100] h-16 backdrop-blur-xl bg-neutral-950/80 border-b border-white/5 shadow-lg shadow-black/20"
          >
            <div className="max-w-[90rem] mx-auto h-full px-8 sm:px-16 flex items-center justify-between gap-3">
              {/* Back to home */}
              <motion.button
                onClick={() => {
                  setPinned(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors duration-300"
              >
                <span className="text-base leading-none">←</span>
                <span>首页</span>
              </motion.button>

              <div className="flex items-center gap-3">
                <motion.a
                  layoutId="btn-a"
                  href="#project-01"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("project-01");
                  }}
                  className={btnClass("kaizhi")}
                  animate={
                    pinned && activeSection === "kaizhi"
                      ? { scale: [1, 1.08, 1] }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ position: "relative" }}
                >
                  Ai咔智食谱
                  <span className="text-xs leading-none">→</span>
                  {pinned && activeSection === "kaizhi" && (
                    <motion.span
                      layoutId="active-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-white/60"
                      initial={false}
                    />
                  )}
                </motion.a>
                <motion.a
                  layoutId="btn-b"
                  href="#project-02"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("project-02");
                  }}
                  className={btnClass("netease")}
                  animate={
                    pinned && activeSection === "netease"
                      ? { scale: [1, 1.08, 1] }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ position: "relative" }}
                >
                  网易云重塑
                  <span className="text-xs leading-none">→</span>
                  {pinned && activeSection === "netease" && (
                    <motion.span
                      layoutId="active-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-white/60"
                      initial={false}
                    />
                  )}
                </motion.a>
              </div>
          </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        data-section="hero"
        className="relative h-[85vh] min-h-[600px] bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white overflow-hidden"
      >
        {/* Background — barely perceptible scale-in */}
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent)] pointer-events-none"
        />

        <div className="relative z-10 h-full flex flex-col justify-between px-8 sm:px-16">
          {/* Top spacer */}
          <div />

          {/* Center content — staggered entry */}
          <div className="max-w-[90rem] w-full mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Layer 1: Main title + buttons — 0s */}
              <motion.div
                variants={titleVariants}
                className="flex items-end justify-between gap-6"
              >
                <h1 className="text-7xl sm:text-9xl md:text-[10rem] font-medium leading-[0.85] tracking-tighter">
                  <span className="block">个人作品集</span>
                </h1>

                {/* Desktop buttons */}
                <AnimatePresence mode="popLayout">
                  {!pinned ? (
                    <motion.div
                      key="hero-btns"
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="hidden sm:flex items-center gap-3 shrink-0 pb-2"
                    >
                      <motion.a
                        layoutId="btn-a"
                        href="#project-01"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePin("a", "project-01");
                        }}
                        className={btnClass("kaizhi")}
                      >
                        Ai咔智食谱
                        <span className="text-xs leading-none">→</span>
                      </motion.a>
                      <motion.a
                        layoutId="btn-b"
                        href="#project-02"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePin("b", "project-02");
                        }}
                        className={btnClass("netease")}
                      >
                        网易云重塑
                        <span className="text-xs leading-none">→</span>
                      </motion.a>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="hero-spacer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hidden sm:block w-[240px] shrink-0 pb-2"
                    />
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Layer 2: Mobile buttons — 0.2s */}
              <AnimatePresence>
                {!pinned && (
                  <motion.div
                    key="mobile-btns"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="sm:hidden flex flex-col items-start gap-3 mt-6"
                  >
                    <a
                      href="#project-01"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePin("a", "project-01");
                      }}
                      className={btnClass("kaizhi")}
                    >
                      Ai咔智食谱
                      <span className="text-xs leading-none">→</span>
                    </a>
                    <a
                      href="#project-02"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePin("b", "project-02");
                      }}
                      className={btnClass("netease")}
                    >
                      网易云重塑
                      <span className="text-xs leading-none">→</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Layer 3: Intro — 0.4s */}
              <motion.div variants={introVariants}>
                <div className="mt-12 sm:mt-16">
                  <span className="text-2xl sm:text-4xl md:text-5xl font-light text-white/30 tracking-tight">
                    产品设计
                  </span>
                </div>
                <div className="mt-16 sm:mt-24" />
                <p className="max-w-sm text-sm sm:text-base text-white/40 leading-relaxed font-light">
                  理性分析驱动产品架构，感性体验塑造品牌温度。两种设计语言，一个创作者。
                </p>
              </motion.div>

              {/* Layer 4: Tags — 0.6s, visually subdued */}
              <motion.div
                variants={tagVariants}
                className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
              >
                {["用户研究", "交互设计", "品牌体验", "数据可视化"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-white/50 tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll guide — appears after content settles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="pb-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="max-w-[90rem] mx-auto w-full flex items-center gap-4 text-white/30">
                <span className="text-xs tracking-[0.25em] uppercase text-white/20">
                  向下探索
                </span>
                <div className="flex-1 max-w-32 h-px bg-white/5" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
