import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { ProjectShowcase } from "@/components/landing/project-showcase";
import { SkillsSection } from "@/components/landing/skills";
import { AboutSection } from "@/components/landing/about-section";
import { ContactSection } from "@/components/landing/contact-section";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <Hero />
      <SkillsSection />
      <ProjectShowcase />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
