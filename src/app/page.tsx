import { PortfolioShell } from "@/components/layout/portfolio-shell";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { personalInformation } from "@/data/portfolio";

export default function Home() {
  return (
    <PortfolioShell>
      <main id="main-content">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <footer className="site-footer">
        <p>Designed and built by {personalInformation.name}.</p>
      </footer>
    </PortfolioShell>
  );
}
