import { PortfolioShell } from "@/components/layout/portfolio-shell";
import { SocialLinks } from "@/components/navigation/social-links";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { personalInformation, socialLinks } from "@/data/portfolio";
import { canonicalUrl, hasConfiguredSiteUrl } from "@/lib/site-url";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInformation.name,
  jobTitle: personalInformation.role,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "India",
  },
  sameAs: socialLinks.map((link) => link.href),
  ...(hasConfiguredSiteUrl ? { url: canonicalUrl } : {}),
};

export default function Home() {
  return (
    <PortfolioShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
