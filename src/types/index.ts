export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  shortDesc: string;
  detailedDesc: string;
  tags: string[];
  deliverables: string[];
  techStack: string[];
  statLabel: string;
  statValue: string;
  iconName: string;
  startingPrice?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  client: string;
  industry: string;
  year: string;
  services: string[];
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  heroImage: string;
  previewColor: string;
  isFeatured?: boolean;
  demoUrl?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  deliverable: string;
  duration: string;
}

export interface WhyUsPillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  statLabel: string;
  statValue: string;
}

export interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  description: string;
}
