import type {
  CvVersion,
  Experience,
  Project,
  Service,
  SkillGroup,
  SocialLink,
} from "@/types/portfolio";

export const portfolio = {
  name: "Omar Seck",
  shortName: "OS",
  role: "Full-Stack Software Engineer",
  eyebrow: "Available for select projects · 2026",
  bio: "I build web & mobile platforms, APIs and application architecture — turning business needs into reliable, scalable products, from first idea to production.",
  location: "Dakar, Senegal",
  email: "omarseck.dev@gmail.com",
  phone: "+221 76 814 80 84",
  // Public Formspree endpoint (not a secret); NEXT_PUBLIC_CONTACT_FORM_ENDPOINT overrides it.
  contactFormEndpoint: "https://formspree.io/f/xdeajwjw",
  cv: [
    { code: "FR", label: "Français", language: "fr", href: "/cv/omar-seck-cv-fr.pdf" },
    { code: "EN", label: "English", language: "en", href: "/cv/omar-seck-cv-en.pdf" },
  ] satisfies CvVersion[],
  yearsExperience: 4,
  projectsCompleted: 4,
  education: {
    degree: "professional Bachelor's degree in Software Engineering",
    school: "Institut Supérieur d'Informatique (ISI), Dakar",
  },
  languages: [
    { name: "French", level: "C1" },
    { name: "English", level: "B2" },
  ],
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
  { label: "Contact", href: "#contact" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend & Mobile",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "React Native",
      "Expo",
      "Flutter",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend & API",
    skills: ["Node.js", "NestJS", "Express", "Java", "Spring Boot", "Quarkus", "Python", "PHP", "REST APIs"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "Supabase", "MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Linux",
      "Nginx",
      "PM2",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Ansible",
      "Jenkins",
      "GitLab CI",
      "GitHub Actions",
      "EAS",
      "AWS",
      "Git",
    ],
  },
  {
    title: "Testing & Observability",
    skills: ["JUnit", "Jest", "Vitest", "Cypress", "Selenium", "Prometheus", "Grafana", "Sentry"],
  },
];

export const services: Service[] = [
  {
    index: "01",
    title: "Web & Mobile Platforms",
    description:
      "Responsive web apps and React Native mobile apps built on reusable components, consistent UI and user journeys designed with accessibility in mind.",
  },
  {
    index: "02",
    title: "APIs & Application Architecture",
    description:
      "End-to-end features, REST APIs and a clean mobile/backend separation — with Node.js, NestJS or Spring Boot, solid data models and third-party integrations.",
  },
  {
    index: "03",
    title: "Delivery & Operations",
    description:
      "CI/CD pipelines, Linux/VPS deployments and observability with Prometheus, Grafana and Sentry — so products ship reliably and recover fast.",
  },
];

export const experiences: Experience[] = [
  {
    company: "Exigences Groupe",
    role: "Software & AI Engineer",
    period: "Jun 2026 — Oct 2026",
    description:
      "Designed and built ExiJob, a pan-African recruitment platform, from requirements analysis to production. Delivered the full-stack features, APIs and business logic behind candidates, recruiters, job offers and hiring workflows, integrated generative-AI / LLM features, and set up an observability stack (Prometheus, Grafana, ELK, Sentry) with SLO alerting that cut mean time to recovery from ~3.5 hours to under 25 minutes.",
    technologies: ["Angular", "TypeScript", "Python", "PostgreSQL", "OpenAI", "AWS", "Prometheus", "Grafana", "Sentry"],
  },
  {
    company: "Bokk Dem SARL",
    role: "Lead Mobile & Backend Developer",
    period: "Nov 2025 — Mar 2026",
    description:
      "Designed, built and shipped a mobility & delivery platform — Customer app, Driver app and backend API. React Native / Expo apps and NestJS services on PostgreSQL / Supabase with real-time data, Google Maps geolocation, FCM notifications, SMS OTP and payment integration; API deployed on a Linux VPS (Nginx, PM2) with GitHub Actions and EAS release pipelines.",
    technologies: ["React Native", "Expo", "NestJS", "PostgreSQL", "Supabase", "Firebase", "GitHub Actions", "EAS"],
  },
  {
    company: "Fathala-IT",
    role: "Software Engineer",
    period: "Jan 2025 — Sep 2025",
    description:
      "Built full-stack features for a B2B SaaS product with React, Vue.js, Java, Node.js and PostgreSQL, shipping 8 major features in the first month. Introduced sprint-health indicators and retrospective actions that improved on-time delivery by 30%, and optimized front/back data flows and service responsiveness.",
    technologies: ["React", "Vue.js", "Java", "Node.js", "PostgreSQL", "Scrum"],
  },
  {
    company: "Elite Dental Laboratory",
    role: "Full-Stack Developer",
    period: "May 2022 — Jan 2025",
    description:
      "Designed, built and maintained websites, logistics and e-commerce platforms, services and APIs tailored to client needs. Customized backend features alongside designers and front-end developers, handled performance optimization and production troubleshooting, and trained clients and team members on the company's platforms.",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "REST APIs"],
  },
];

export const projects: Project[] = [
  {
    slug: "bokk-dem",
    name: "Bokk Dem",
    category: "Mobility & Delivery Platform",
    description:
      "MVP bringing together a Customer app, a Driver app and a backend API for urban mobility and deliveries.",
    longDescription:
      "Bokk Dem is a mobility and delivery platform built as an MVP with three products: a Customer app, a Driver app and a backend API. It covers mapping and real-time geolocation with Google Maps, push notifications with Firebase Cloud Messaging, SMS OTP verification and a payment journey. The apps are built with React Native / Expo, the API with NestJS on PostgreSQL / Supabase, deployed on a Linux VPS behind Nginx and PM2, with mobile releases automated through GitHub Actions and EAS. The Driver app is live on Google Play.",
    technologies: ["React Native", "Expo", "NestJS", "PostgreSQL", "Supabase", "Firebase / FCM", "Google Maps", "GitHub Actions", "EAS"],
    accent: "#1F8A5B",
    year: "2026",
    liveUrl: "https://play.google.com/store/apps/details?id=com.bokkdem.driver",
    liveLabel: "View on Google Play",
  },
  {
    slug: "exijob",
    name: "ExiJob",
    category: "Pan-African Job Board",
    description:
      "Recruitment platform with job search and offer management, designed for the African job market.",
    longDescription:
      "ExiJob is a pan-African recruitment platform connecting candidates and recruiters. I designed and developed it from requirements analysis to production: job search and offer management, candidate and recruiter spaces, applications and hiring workflows, plus generative-AI / LLM features that improve the user experience and automate business tasks. An observability stack (Prometheus, Grafana, ELK, Sentry) with SLO alerting brought mean time to recovery from ~3.5 hours to under 25 minutes.",
    technologies: ["Angular", "TypeScript", "Python", "PostgreSQL", "OpenAI", "AWS", "Prometheus", "Grafana", "Sentry"],
    accent: "#2D4AC9",
    year: "2026",
    image: "/images/exijob.webp",
    liveUrl: "https://exijob.com",
  },
  {
    slug: "yobbal",
    name: "Yobbal",
    category: "Parcel Tracking Platform",
    description:
      "Full-stack logistics platform to send, receive and track parcels, with an administration area.",
    longDescription:
      "Yobbal is a digital logistics solution for local delivery operations. The platform handles shipment creation and tracking, parcel statuses (Pending, In Transit, Delivered), a customer consultation journey and an administration area, all powered by a REST API. It is built with React / Next.js on the web, React Native on mobile, and Node.js / Express and PHP services on MySQL, deployed on Vercel.",
    technologies: ["React", "Next.js", "React Native", "Node.js", "Express", "PHP", "MySQL", "Vercel"],
    accent: "#B8791B",
    year: "2025",
    image: "/images/yobbal-1.webp",
    liveUrl: "https://www.yobbal.sn/",
  },
  {
    slug: "elite-dental",
    name: "Elite Dental",
    category: "Website & Optimization",
    description:
      "Professional website for a dental laboratory, with a custom theme and a structured product and service catalog.",
    longDescription:
      "A fully customized WordPress theme with a structured product and service catalog for a dental laboratory. The project covers responsive UX/UI, SEO, security hardening and performance work focused on Core Web Vitals — giving the company a fast, professional platform to showcase its products and services.",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "Figma"],
    accent: "#B11226",
    year: "2023",
    image: "/images/elite-dental.webp",
    liveUrl: "https://elitedental.fr/",
  },
];
