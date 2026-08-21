export interface Project {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  type?: string;
  companyName?: string;
  companyLogoImg?: string;
  websiteLink?: string;
  category?: string[];
  techStack?: string[];
  startDate?: Date | string;
  descriptionDetails?: {
    paragraphs: string[];
    bullets: string[];
  };
  pagesInfoArr?: Array<{
    title: string;
    description: string;
    imgArr?: string[];
  }>;
  githubLink?: string;
}
