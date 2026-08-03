export type SocialLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Service = {
  title: string;
  description: string;
  index: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  accent: string;
  year: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};
