export interface FooterSection {
  title: string;
  content: string | string[];
  icons?: {
    type: "phone" | "email" | "social";
    value: string;
    icon?: string; 
  }[];
}