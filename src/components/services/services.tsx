"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Blocks, CodeXml, Waypoints } from "lucide-react";
import { services } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = [Blocks, CodeXml, Waypoints];

export function Services() {
  return (
    <section className="services section-dark">
      <div className="dark-grid" />
      <div className="container-shell section-content">
        <Reveal><SectionHeading light eyebrow="03 · What I do" title="Systems with substance. Experiences with presence." description="A full-cycle approach connecting product intent, engineering decisions and the details people actually feel." /></Reveal>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <motion.article className="service-card" whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
                  <div className="service-top"><Icon /><span>{service.index}</span></div>
                  <div><h3>{service.title}</h3><p>{service.description}</p></div>
                  <span className="service-arrow"><ArrowUpRight /></span>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
