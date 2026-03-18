export interface NavLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  icon: string;
  title: string;
  tags: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  stack: string;
  points: string[];
  photos: { label: string; src?: string }[];
}

export interface Project {
  type: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
}

export interface Certificate {
  icon: string;
  name: string;
  issuer: string;
}

export interface Review {
  initials: string;
  text: string;
  name: string;
  role: string;
}
