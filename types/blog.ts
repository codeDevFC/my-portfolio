export interface Blog {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  coverImage?: string;
  readingTime?: number;
  featured?: boolean;
  contentHtml?: string;
}
