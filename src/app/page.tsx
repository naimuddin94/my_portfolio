import DeveloperBanner from "@/components/ui/shared/DeveloperBanner";
import ProjectsSection from "@/components/ui/shared/ProjectsSection";
import SkillsSection from "@/components/ui/shared/SkillsSection";

export default function Home() {
  return (
    <main>
      <DeveloperBanner />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
