export interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  description: string;
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