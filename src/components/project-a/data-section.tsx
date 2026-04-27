"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/count-up";

interface Method {
  name: string;
  description: string;
}

interface Insight {
  number: string;
  title: string;
  description: string;
}

export function A_DataSection({
  methods,
  insights,
}: {
  methods: Method[];
  insights: Insight[];
}) {
  return (
    <div>
      {/* Top row: key stat + methods */}
      <div className="grid md:grid-cols-12 gap-12 md:gap-20">
        {/* Hero stat */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="md:col-span-5"
        >
          <div className="text-[11rem] sm:text-[14rem] font-display font-semibold leading-[0.8] tracking-tighter text-emerald-600/15 select-none">
            <CountUp target={200} suffix="+" />
          </div>
          <div className="-mt-8 sm:-mt-12">
            <p className="text-lg sm:text-xl text-on-surface font-display leading-snug">
              用户研究与行为分析
            </p>
            <p className="text-sm text-muted mt-3 leading-relaxed max-w-xs">
              通过定量与定性方法，系统梳理家庭烹饪场景中的核心痛点与行为模式
            </p>
          </div>
        </motion.div>

        {/* Research methods — editorial list */}
        <div className="md:col-span-7">
          <div className="space-y-0">
            {methods.map((method, i) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-40px" }}
                className="group py-6 border-b border-subtle/30 last:border-b-0"
              >
                <div className="flex items-start gap-5">
                  <span className="text-xs text-muted/40 font-mono mt-1 w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base sm:text-lg font-medium text-on-surface">
                        {method.name}
                      </h3>
                      <div className="h-px flex-1 bg-subtle/30" />
                    </div>
                    <p className="text-sm text-muted mt-2 leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Data image */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: "-60px" }}
        className="my-16 bg-emerald-50/50 border border-subtle/10 rounded-xl overflow-hidden shadow-sm"
      >
        <img
          src="/images/project-a/数据.png"
          alt="研究数据"
          className="w-full h-auto block"
        />
      </motion.div>

      {/* Divider */}
      <div className="my-20 h-px bg-subtle/20" />

      {/* Bottom: Insight stats — CSS bars */}
      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        {insights.map((insight, i) => {
          const barWidths = ["75%", "60%", "85%"];
          return (
            <motion.div
              key={insight.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs text-emerald-500 font-mono">
                  {insight.number}
                </span>
                <div className="h-px flex-1 bg-subtle/20" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-on-surface leading-snug mb-3">
                {insight.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                {insight.description}
              </p>
              {/* Visual bar — decorative data representation */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
                viewport={{ once: true }}
                className="w-full h-2 bg-subtle/20 rounded-full overflow-hidden"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: barWidths[i] }}
                  transition={{ duration: 1, delay: 0.35 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500/30 to-emerald-500/10"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
