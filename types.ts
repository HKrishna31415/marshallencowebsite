import { LucideIcon } from 'lucide-react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatProps {
  count: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
