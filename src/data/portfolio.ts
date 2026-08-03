import type {
  Experience,
  Project,
  Service,
  SkillGroup,
  SocialLink,
  Testimonial,
} from "@/types/portfolio";

export const portfolio = {
  name: "Omar Seck",
  shortName: "OS",
  role: "Full-Stack Engineer",
  eyebrow: "Available for select projects · 2026",
  bio: "I design and engineer digital products where rigorous systems meet refined interfaces — from first idea to production.",
  location: "Dakar, Senegal",
  email: "omarseck.dev@gmail.com",
  phone: "+221 76 814 80 84",
  cv: "/omar-seck-cv.pdf",
  yearsExperience: 4,
  projectsCompleted: 6,
  socials: [
    { label: "GitHub", href: "https://github.com/Omarseck6" },
    { label: "LinkedIn", href: "https://linkedin.com/in/omarseck" },
  ] satisfies SocialLink[],
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Angular"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Laravel", "PHP", ".NET", "C#"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Supabase", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "Git", "GitHub", "AWS", "Vercel"],
  },
  { title: "Design", skills: ["Figma"] },
];

export const services: Service[] = [
  {
    index: "01",
    title: "Software Development",
    description: "Robust software systems engineered around real business constraints, clean architecture and durable code.",
  },
  {
    index: "02",
    title: "Modern Web Applications",
    description: "Fast, accessible web experiences with a distinct visual language and obsessive attention to interaction.",
  },
  {
    index: "03",
    title: "API Development",
    description: "Secure, observable APIs and integrations designed to scale without making the product harder to evolve.",
  },
];

export const experiences: Experience[] = [
  {
    company: "Nexa Digital Studio",
    role: "Lead Full-Stack Engineer",
    period: "2023 — Present",
    description: "Leading product engineering across design systems, critical web platforms and distributed services while mentoring a multidisciplinary team.",
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "AWS"],
  },
  {
    company: "Atlas Product Lab",
    role: "Senior Software Engineer",
    period: "2020 — 2023",
    description: "Shipped high-traffic B2B products, introduced frontend performance budgets and rebuilt the shared application platform.",
    technologies: ["React", "Node.js", "GraphQL", "Docker", "Figma"],
  },
  {
    company: "Kër Technologies",
    role: "Full-Stack Developer",
    period: "2018 — 2020",
    description: "Built customer-facing platforms and internal operations tools for fast-growing teams across West Africa.",
    technologies: ["Angular", "Laravel", "MySQL", "Firebase"],
  },
];

export const projects: Project[] = [
  {
    slug: "orbis-finance",
    name: "Orbis Finance",
    category: "Fintech platform",
    description: "A real-time financial command center turning complex portfolios into clear, actionable signals.",
    longDescription: "Orbis unifies performance, risk and reporting inside a focused workspace. The experience was designed from the information architecture upward to keep sophisticated workflows calm, fast and legible.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "D3.js"],
    accent: "#B11226",
    year: "2026",
  },
  {
    slug: "naya-commerce",
    name: "Naya Commerce",
    category: "Commerce ecosystem",
    description: "A modular storefront and operations suite for an ambitious contemporary lifestyle brand.",
    longDescription: "Naya combines editorial commerce, localized checkout and a composable operations layer. A reusable design system keeps every touchpoint consistent without flattening the brand.",
    technologies: ["React", "NestJS", "Supabase", "Stripe"],
    accent: "#7A1B25",
    year: "2025",
  },
  {
    slug: "pulse-health",
    name: "Pulse Health",
    category: "Digital health",
    description: "An accessible care coordination product made for clarity in high-pressure clinical moments.",
    longDescription: "Pulse gives clinical teams a precise view of patient journeys, communication and follow-ups. Accessibility, resilience and understandable states guided every interaction.",
    technologies: ["Next.js", "C#", ".NET", "Azure"],
    accent: "#4A1218",
    year: "2025",
  },
  {
    slug: "vertex-cloud",
    name: "Vertex Cloud",
    category: "Developer tooling",
    description: "A deployment experience that makes infrastructure status feel immediate and understandable.",
    longDescription: "Vertex surfaces releases, environments and incidents in one real-time interface. Motion and hierarchy make complex system states readable without adding visual noise.",
    technologies: ["TypeScript", "Node.js", "Docker", "AWS"],
    accent: "#97182A",
    year: "2024",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Omar has the rare ability to simplify a complex product without simplifying the ambition behind it.",
    name: "Aïssatou Ndiaye",
    role: "Product Director · Naya",
    initials: "AN",
  },
  {
    quote: "Every decision had intent — architecture, interaction and performance all moved in the same direction.",
    name: "Marc Dubois",
    role: "Founder · Orbis",
    initials: "MD",
  },
  {
    quote: "He elevated both the product and the team. The resulting system is faster, clearer and genuinely built to last.",
    name: "Fatou Ba",
    role: "VP Engineering · Atlas",
    initials: "FB",
  },
];
