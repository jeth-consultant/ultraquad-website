export interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  description: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;

}

export interface Service {
  title: string;
  description: string;
  // icon: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
}