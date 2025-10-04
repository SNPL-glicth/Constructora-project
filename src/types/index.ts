// Tipos principales del proyecto Nexus Coin

export interface Project {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  gallery?: string[];
  status: 'planning' | 'construction' | 'completed';
  area: number;
  units: number;
  deliveryDate?: string;
  features: string[];
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  category: 'constructor' | 'financiero' | 'tecnologico' | 'diseño';
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  projectInterest?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaButtons: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'youtube';
  url: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  socialLinks: SocialLink[];
}