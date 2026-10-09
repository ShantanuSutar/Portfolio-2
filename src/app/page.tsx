import { PortfolioShell } from "@/components/layout/portfolio-shell";
import { SocialLinks } from "@/components/navigation/social-links";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { personalInformation } from "@/data/portfolio";

export default function Home() {
  return (
    <PortfolioShell>
      <main id="main-content" tabIndex={-1}>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <footer className="site-footer">
        <SocialLinks variant="mobile" />
        <p>Designed and built by {personalInformation.name}.</p>
      </footer>
    </PortfolioShell>
  );
}
