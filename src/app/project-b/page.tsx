import { B_HeroSection } from "@/components/project-b/hero-section";
import { B_ProblemStatement } from "@/components/project-b/problem-statement";
import { B_StrategyBlock } from "@/components/project-b/strategy-block";
import { B_NarrativePanel } from "@/components/project-b/narrative-panel";
import { B_UIShowcase } from "@/components/project-b/ui-showcase";
import { B_EmotionMeter } from "@/components/project-b/emotion-meter";
import { B_QuoteBlock } from "@/components/project-b/quote-block";
import { B_OutcomeStory } from "@/components/project-b/outcome-story";
import { B_StrategyImage } from "@/components/project-b/strategy-image";
import { NextProjectCTA } from "@/components/ui/next-project-cta";
import { MotionSection } from "@/components/ui/motion-section";
import { projectBData } from "@/lib/project-b-data";

export default function ProjectBPage() {
  const d = projectBData;

  return (
    <div>
      <B_HeroSection {...d.hero} />
      <B_ProblemStatement text={d.problem.text} source={d.problem.source} imageSrc="/images/project-b/洞察.png" />
      <B_StrategyBlock />

      {d.narratives.map((segment, i) => (
        <B_NarrativePanel key={segment.title} segment={segment} index={i} />
      ))}

      <B_EmotionMeter />
      <B_UIShowcase />

      <B_QuoteBlock
        quote="好的设计像一首好歌，你不会注意它的存在，只会感受它带来的情绪"
        author="设计团队寄语"
      />

      <B_OutcomeStory title={d.outcome.title} body={d.outcome.body} />

      <B_StrategyImage />

      <MotionSection as="div">
      <NextProjectCTA
        href="/project-a"
        label="Next Project"
        title="咔智食谱 · AI 产品设计"
        variant="b"
      />
      </MotionSection>
    </div>
  );
}
