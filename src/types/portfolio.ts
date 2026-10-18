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
  /** Screenshot in `public/`; projects without one get a branded placeholder visual. */
  image?: string;
  liveUrl?: string;
  /** Label of the live link, e.g. for an app store page instead of a website. */
  liveLabel?: string;
  githubUrl?: string;
};

export type CvVersion = {
  code: string;
  label: string;
  language: string;
  href: string;
};
