export interface Experience {
  id?: string;
  title: string;
  company: string;
  location: string;
  startDate: Date | string;
  endDate: Date | string | "Present";
  description: string[];
  skills?: string[];
  logo?: string;
  companyUrl?: string;
  position?: string;
  achievements?: string[];
}
