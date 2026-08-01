"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Code2,
  Network,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { portfolio } from "@/data/portfolio";

const title = "FULL-STACK ENGINEER";
const titleWords = title.split(" ");
const wordOffsets = titleWords.reduce<number[]>((acc, word, index) => {
  acc.push(
    index === 0 ? 0 : acc[index - 1] + titleWords[index - 1].length,
  );
  return acc;
}, []);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 90],
  );
  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : -65],
  );

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <motion.div
        className="hero-monument"
        style={{ y: titleY }}
        aria-hidden="true"
      >
        <span>SOFTWARE</span>
        <span>ENGINEER</span>
      </motion.div>

      <div className="hero-inner container-shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p className="hero-kicker">
            <span /> Welcome to my portfolio
          </p>
          <p className="hero-name">{portfolio.name}</p>
          <h1 aria-label={title}>
            {titleWords.map((word, wordIndex) => (
              <span key={word} className="hero-title-line">
                {word.split("").map((character, index) => (
                  <motion.span
                    key={`${word}-${index}`}
                    aria-hidden="true"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.33 + (wordOffsets[wordIndex] + index) * 0.018,
                      duration: 0.4,
                    }}
                  >
                    {character}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
          <p className="hero-description">{portfolio.bio}</p>
          <div className="hero-actions">
            <a href={portfolio.cv} className="button button-primary" download>
              <Download size={17} /> Download CV
            </a>
            <a
              href={portfolio.socials[0].href}
              className="icon-button"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={19} />
            </a>
            <a
              href={portfolio.socials[1].href}
              className="icon-button"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Network size={19} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/osss.png"
            alt="Portrait éditorial d'Omar Seck"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 48vw"
          />
          <div className="portrait-fade" />
        </motion.div>

        <motion.aside
          className="hero-metrics"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          aria-label="Career highlights"
        >
          <div className="metric-card metric-main">
            <span>Experience</span>
            <strong>
              {portfolio.yearsExperience}
              <sup>+</sup>
            </strong>
            <p>
              Years turning difficult problems into focused digital products.
            </p>
          </div>
          <div className="metric-row">
            <div className="metric-card">
              <strong>
                {portfolio.projectsCompleted}
                <sup>+</sup>
              </strong>
              <span>Products shipped</span>
            </div>
            <div className="metric-card">
              <strong>
                15<sup>+</sup>
              </strong>
              <span>Core technologies</span>
            </div>
          </div>
          <a href="#projects" className="hero-project-link">
            Explore selected work <ArrowUpRight size={17} />
          </a>
        </motion.aside>
      </div>

      <a
        href="#about"
        className="scroll-cue"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={16} /> <span>Scroll to explore</span>
      </a>
    </section>
  );
}
