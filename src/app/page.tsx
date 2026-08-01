import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Experience } from "@/components/experience/experience";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import { Services } from "@/components/services/services";
import { Skills } from "@/components/skills/skills";
import { Testimonials } from "@/components/testimonials/testimonials";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.name,
    jobTitle: portfolio.role,
    email: portfolio.email,
    address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
    sameAs: portfolio.socials.map((social) => social.href),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
