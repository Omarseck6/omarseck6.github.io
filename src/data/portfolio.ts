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
  projectsCompleted: 4,
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
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Laravel", "PHP", ".NET", "C#"],
  },
  {
    title: "Database",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Prisma",
      "Supabase",
      "Firebase",
    ],
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
    description:
      "Robust software systems engineered around real business constraints, clean architecture and durable code.",
  },
  {
    index: "02",
    title: "Modern Web Applications",
    description:
      "Fast, accessible web experiences with a distinct visual language and obsessive attention to interaction.",
  },
  {
    index: "03",
    title: "API Development",
    description:
      "Secure, observable APIs and integrations designed to scale without making the product harder to evolve.",
  },
];

export const experiences: Experience[] = [
  {
    company: "Nexa Digital Studio",
    role: "Lead Full-Stack Engineer",
    period: "2023 — Present",
    description:
      "Leading product engineering across design systems, critical web platforms and distributed services while mentoring a multidisciplinary team.",
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "AWS"],
  },
  {
    company: "Atlas Product Lab",
    role: "Senior Software Engineer",
    period: "2020 — 2023",
    description:
      "Shipped high-traffic B2B products, introduced frontend performance budgets and rebuilt the shared application platform.",
    technologies: ["React", "Node.js", "GraphQL", "Docker", "Figma"],
  },
  {
    company: "Kër Technologies",
    role: "Full-Stack Developer",
    period: "2018 — 2020",
    description:
      "Built customer-facing platforms and internal operations tools for fast-growing teams across West Africa.",
    technologies: ["Angular", "Laravel", "MySQL", "Firebase"],
  },
];

export const projects: Project[] = [
  {
    slug: "elite-dental",
    name: "Elite Dental",
    category: "Custom WordPress Website",
    description:
      "Professional website developed for a dental laboratory specialized in selling dental products and equipment.",
    longDescription:
      "Fully customized WordPress theme with structured product catalog implementation. The project includes UX/UI optimization with responsive design, SEO, security and performance plugin integration, and Core Web Vitals optimization to strengthen the company's digital presence and provide a professional platform for showcasing dental products.",
    technologies: ["WordPress", "PHP", "MySQL", "Figma"],
    accent: "#B11226",
    year: "2023",
    image: "/images/elite-dental.png",
    liveUrl: "https://elitedental.fr/",
  },
  {
    slug: "baatukaay",
    name: "Baatukaay",
    category: "Multilingual Online Dictionary",
    description:
      "Full-stack web and mobile dictionary application designed to promote and digitize African languages.",
    longDescription:
      "Baatukaay is a complete FR–EN–Wolof dictionary platform with instant word search and dynamic results. The project features a RESTful API for translations, a scalable backend architecture, a cross-platform mobile application and a responsive web interface — built to create a scalable and accessible digital dictionary platform for language preservation.",
    technologies: [
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "PHP",
      "TypeScript",
      "MySQL",
      "Git",
      "Vercel",
    ],
    accent: "#0D5C46",
    year: "2024",
    image: "/images/baatukaay.png",
    liveUrl: "https://www.baatukaay.com/",
  },
  {
    slug: "yobbal",
    name: "Yobbal",
    category: "Parcel Delivery & Tracking Platform",
    description:
      "Full-stack logistics platform enabling users to send, receive and track parcels efficiently.",
    longDescription:
      "Yobbal is a modern digital logistics solution for local delivery operations. The platform handles parcel creation and shipment management, real-time tracking, a customer interface with admin dashboard, and complete order status management (Pending, In Transit, Delivered) powered by a RESTful API integration.",
    technologies: [
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "PHP",
      "JavaScript",
      "MySQL",
      "Git",
      "Vercel",
    ],
    accent: "#B8791B",
    year: "2025",
    image: "/images/yobbal-1.png",
    liveUrl: "https://www.yobbal.sn/",
  },
  {
    slug: "exijob",
    name: "ExiJob",
    category: "Job Board Platform",
    description:
      "An online recruitment platform (job board) that connects job seekers with recruiters.",
    longDescription:
      "ExiJob is a web-based recruitment platform developed using Angular 21 with TypeScript, Tailwind CSS 4, and Angular Material. Structured as a frontend monorepo with a small integrated Express backend for file uploads, it enables job postings, applications, messaging, coaching, testing, and payroll management. Goal: to efficiently connect candidates and recruiters.",
    technologies: [
      "Angular",
      "TypeScript",
      "Tailwind",
      "Angular Material",
      "RxJS",
      "Express",
      "Multer",
      "Vitest",
      "Docker",
      "Figma",
    ],
    accent: "#2D4AC9",
    year: "2026",
    image: "/images/exijob.png",
    liveUrl: "http://15.188.50.138/",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Omar has the rare ability to simplify a complex product without simplifying the ambition behind it.",
    name: "Aïssatou Ndiaye",
    role: "Product Director · Naya",
    initials: "AN",
  },
  {
    quote:
      "Every decision had intent — architecture, interaction and performance all moved in the same direction.",
    name: "Marc Dubois",
    role: "Founder · Orbis",
    initials: "MD",
  },
  {
    quote:
      "He elevated both the product and the team. The resulting system is faster, clearer and genuinely built to last.",
    name: "Fatou Ba",
    role: "VP Engineering · Atlas",
    initials: "FB",
  },
];
