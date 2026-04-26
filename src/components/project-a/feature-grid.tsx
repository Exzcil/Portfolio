"use client";

import { motion } from "framer-motion";
import { A_FeatureBlock } from "./feature-block";

interface Feature {
  icon: string;
  title: string;
  description: string;
  metric?: string;
  imageLabel?: string;
  imageSrc?: string;
  imageSrcs?: string[];
}

export function A_FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div>
      {features.map((feature, i) => (
        <div
          key={feature.title}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20 last:mb-0"
        >
          {/* Image — dominant side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-40px" }}
            className={`w-full ${feature.imageSrcs ? "md:w-[80%]" : "md:w-[55%]"} ${
              i % 2 === 0 ? "md:order-1" : "md:order-2"
            }`}
          >
            {feature.imageSrcs ? (
              <div className="flex gap-3 sm:gap-4 bg-emerald-50/50 border border-subtle/10">
                {feature.imageSrcs.map((src) => (
                  <div key={src} className="flex-1 aspect-[3/5] flex items-center justify-center">
                    <img
                      src={src}
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            ) : feature.imageSrc ? (
              <div className="bg-emerald-50/50 border border-subtle/10 aspect-[4/3] flex items-center justify-center">
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] bg-emerald-50/50 flex items-center justify-center text-muted/30 text-sm border border-subtle/10">
                {feature.imageLabel || `${feature.title} 界面`}
              </div>
            )}
          </motion.div>

          {/* Text — supporting side, delayed */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            viewport={{ once: true, margin: "-40px" }}
            className={`w-full ${feature.imageSrcs ? "md:w-[20%]" : "md:w-[35%]"} ${
              i % 2 === 0 ? "md:order-2" : "md:order-1"
            }`}
          >
            <A_FeatureBlock
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              metric={feature.metric}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
