"use client";

import { motion } from "framer-motion";

interface Persona {
  name: string;
  role: string;
  quote: string;
  tags: string[];
}

interface JourneyStage {
  stage: string;
  description: string;
  emotion: "low" | "medium" | "high";
}

export function A_UserResearch({
  personas,
  journeyStages,
}: {
  personas: Persona[];
  journeyStages: JourneyStage[];
}) {
  return (
    <div>
      {/* Personas spread */}
      <div className="grid md:grid-cols-2 gap-16 md:gap-20">
        {personas.map((persona, i) => (
          <motion.div
            key={persona.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true, margin: "-60px" }}
            className="group"
          >
            {/* Avatar + Name row */}
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg font-medium tracking-tight shrink-0">
                {persona.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-on-surface leading-tight">
                  {persona.name}
                </h3>
                <p className="text-sm text-muted mt-0.5">{persona.role}</p>
              </div>
            </div>

            {/* Quote — hero element */}
            <blockquote className="relative">
              <span className="absolute -top-4 -left-1 text-7xl text-emerald-200/40 leading-none select-none font-serif">
                &ldquo;
              </span>
              <p className="text-xl sm:text-2xl text-on-surface/80 leading-relaxed font-light pl-2">
                {persona.quote}
              </p>
            </blockquote>

            {/* Tags — subtle */}
            <div className="flex flex-wrap gap-3 mt-8">
              {persona.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-muted/50 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="my-20 h-px bg-subtle/20" />

      {/* Journey timeline — editorial */}
      <div>
        <h3 className="text-xs text-muted/40 tracking-[0.25em] uppercase mb-12">
          用户旅程 · 典型一天
        </h3>

        <div className="grid sm:grid-cols-4 gap-8 sm:gap-6">
          {journeyStages.map((stage, i) => {
            const emotionDots =
              stage.emotion === "high" ? 3 : stage.emotion === "medium" ? 2 : 1;

            return (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-30px" }}
                className="relative"
              >
                {/* Stage number */}
                <span className="text-xs text-emerald-500/50 font-mono block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Stage title */}
                <h4 className="text-base sm:text-lg font-medium text-on-surface mb-2">
                  {stage.stage}
                </h4>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {stage.description}
                </p>

                {/* Emotion indicator — abstract dots */}
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((dot) => (
                    <div
                      key={dot}
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                        dot <= emotionDots
                          ? "bg-emerald-400/60"
                          : "bg-subtle/20"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
