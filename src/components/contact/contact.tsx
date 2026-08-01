import { ArrowDownToLine, ArrowUpRight, Code2, Network, Mail, MapPin, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="contact section-light">
      <div className="container-shell">
        <Reveal>
          <div className="contact-heading"><p className="eyebrow">07 · Start a conversation</p><h2>Let&apos;s build something <span>worth remembering.</span></h2><p>Have a complex product, a bold idea or a team ready for its next chapter? Let&apos;s make the direction clear.</p></div>
        </Reveal>
        <div className="contact-grid">
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={0.12} className="contact-card">
            <div><p className="contact-card-label">Direct contact</p><h3>Open to ambitious products and thoughtful collaborations.</h3></div>
            <div className="contact-list">
              <a href={`mailto:${portfolio.email}`}><Mail /> <span><small>Email</small>{portfolio.email}</span><ArrowUpRight /></a>
              <a href={`tel:${portfolio.phone.replaceAll(" ", "")}`}><Phone /> <span><small>Phone</small>{portfolio.phone}</span><ArrowUpRight /></a>
              <p><MapPin /> <span><small>Based in</small>{portfolio.location}</span></p>
            </div>
            <div className="contact-socials">
              <a href={portfolio.socials[0].href} aria-label="GitHub" target="_blank" rel="noreferrer"><Code2 /></a>
              <a href={portfolio.socials[1].href} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Network /></a>
              <a href={portfolio.cv} aria-label="Download CV" download><ArrowDownToLine /></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
