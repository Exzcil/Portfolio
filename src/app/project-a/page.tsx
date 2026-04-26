import { A_HeroSection } from "@/components/project-a/hero-section";
import { A_DataSection } from "@/components/project-a/data-section";
import { A_UserResearch } from "@/components/project-a/user-research";
import { A_InsightsSection } from "@/components/project-a/insights-section";
import { A_SolutionShowcase } from "@/components/project-a/solution-showcase";
import { A_FeatureGrid } from "@/components/project-a/feature-grid";
import { A_ComparisonTable } from "@/components/project-a/comparison-table";
import { A_OutcomeMetrics } from "@/components/project-a/outcome-metrics";
import { NextProjectCTA } from "@/components/ui/next-project-cta";
import { MotionSection } from "@/components/ui/motion-section";
import { projectAData } from "@/lib/project-a-data";

export default function ProjectAPage() {
  const d = projectAData;

  return (
    <div>
      <A_HeroSection {...d.hero} />

      {/* 01 Data — generous top, stepped into */}
      <MotionSection className="pt-28 pb-20 px-8 sm:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-sm text-muted/70 mb-16 font-mono tracking-wider">
            <span>01</span>
            <span className="h-px w-8 bg-current/20" />
            <span className="text-muted/60 uppercase tracking-[0.2em]">Data</span>
          </div>
          <A_DataSection methods={d.research.methods} insights={d.insights} />
        </div>
      </MotionSection>

      {/* 02 User Research — full-width persona spread */}
      <MotionSection className="py-24 px-8 sm:px-16">
        <div className="max-w-7xl mx-auto">
          <span className="block text-sm text-muted/60 font-mono tracking-wider mb-20">
            02 / User Research
          </span>
          <A_UserResearch personas={d.personas} journeyStages={d.journeyStages} />
        </div>
      </MotionSection>

      {/* 03 Insights — no section wrapper, lands directly */}
      <MotionSection className="py-20 px-8 sm:px-16 bg-emerald-950/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-7xl sm:text-8xl font-display font-bold text-emerald-600/10 leading-none block">
              03
            </span>
            <span className="text-sm text-muted/60 tracking-[0.2em] uppercase block -mt-2">
              Insights
            </span>
          </div>
          <A_InsightsSection insights={d.insights} />
        </div>
      </MotionSection>

      {/* 04 Solution — narrow reading room */}
      <MotionSection className="py-24 px-8 sm:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-sm text-muted/70 mb-16 sm:mb-20 font-mono tracking-wider">
            <span>04</span>
            <span className="h-px w-8 bg-current/20" />
            <span className="text-muted/60 uppercase tracking-[0.2em]">Solution</span>
          </div>
          <A_SolutionShowcase
            annotations={d.solutionAnnotations}
            description={d.solutionDescription}
          />
        </div>
      </MotionSection>

      {/* 05 Features — full-width rhythm, no container */}
      <MotionSection className="py-24 px-8 sm:px-16 bg-emerald-950/[0.02]">
        <div className="max-w-7xl mx-auto">
          <span className="block text-sm text-muted/60 font-mono tracking-wider mb-20">
            05 / Features
          </span>
          <A_FeatureGrid features={d.features} />
        </div>
      </MotionSection>

      {/* 06 Before & After — quiet, direct */}
      <MotionSection className="py-20 px-8 sm:px-16">
        <div className="max-w-7xl mx-auto">
          <span className="block text-sm text-muted/60 font-mono tracking-wider mb-16">
            06 / Before &amp; After
          </span>
          <A_ComparisonTable rows={d.comparisons} />
        </div>
      </MotionSection>

      {/* 07 Outcome — unadorned */}
      <MotionSection className="py-20 px-8 sm:px-16 bg-emerald-950/[0.02]">
        <div className="max-w-7xl mx-auto">
          <span className="block text-sm text-muted/60 font-mono tracking-wider mb-16">
            07 / Outcome
          </span>
          <A_OutcomeMetrics items={d.outcomes} />
        </div>
      </MotionSection>

      <NextProjectCTA
        href="/project-b"
        label="Next Project"
        title="网易云音乐 · 品牌体验"
        variant="a"
      />
    </div>
  );
}
