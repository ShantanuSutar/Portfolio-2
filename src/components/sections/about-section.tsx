import { personalInformation } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section className="content-section about-section" id="about" aria-labelledby="about-title">
      <h2 id="about-title">About</h2>
      <p className="about-copy">{personalInformation.about}</p>
    </section>
  );
}
