import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'leadership';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
}