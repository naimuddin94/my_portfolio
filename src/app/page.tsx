import ContactSection from "@/components/ui/shared/Contact";
import DeveloperBanner from "@/components/ui/shared/DeveloperBanner";
import ExpertSection from "@/components/ui/shared/ExpertSection";
import ProjectsSection from "@/components/ui/shared/ProjectsSection";
import SkillsDiagramVertical from "@/components/ui/shared/SkillsDiagramVertical";

export default function Home() {
  return (
    <main>
      <DeveloperBanner />
      <ExpertSection />
      <SkillsDiagramVertical />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
