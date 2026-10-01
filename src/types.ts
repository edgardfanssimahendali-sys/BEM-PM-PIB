export interface Ministry {
  id: string;
  name: string;
  code: string;
  shortDesc: string;
  fullDesc: string;
  minister: string;
  ministerTitle?: string;
  secretary: string;
  secretaryTitle?: string;
  divisions?: string[];
  memberCount: number;
  members: Array<{ name: string; role: string }>;
  programs: string[];
  contactEmail: string;
  instagram: string;
}

export interface Program {
  id: string;
  title: string;
  category: 'Featured' | 'Internal' | 'External' | 'Academic' | 'Creativity';
  status: 'COMPLETED' | 'ONGOING' | 'UPCOMING';
  date: string;
  location: string;
  leadMinistry: string;
  desc: string;
  fullContent?: string;
  image: string;
  registrationOpen?: boolean;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  location: string;
  category: string;
  desc: string;
  organizer: string;
  image?: string;
  registrationUrl?: string;
}

export interface Aspiration {
  id: string;
  name: string;
  studentId: string;
  category: 'Academic' | 'Facilities' | 'Student Affairs' | 'Organization' | 'Campus' | 'Other';
  subject: string;
  message: string;
  status: 'SUBMITTED' | 'REVIEWED' | 'IN PROGRESS' | 'RESOLVED';
  createdAt: string;
  updatedAt: string;
  responsibleMinistry: string;
  timeline: Array<{
    status: 'SUBMITTED' | 'REVIEWED' | 'IN PROGRESS' | 'RESOLVED';
    date: string;
    description: string;
    note?: string;
  }>;
}

export interface Article {
  id: string;
  title: string;
  category: 'BEM News' | 'Announcement' | 'Events' | 'Student Life' | 'Achievement';
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  image: string;
  readTime: string;
  featured?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  award: string;
  recipient: string;
  major: string;
  year: string;
  category: 'Academic' | 'Business' | 'Creative' | 'Sports' | 'National' | 'International';
  description: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Events' | 'Programs' | 'Internal' | 'Collaboration' | 'Student Activities';
  date: string;
  image: string;
  caption: string;
}

export interface ResourceDocument {
  id: string;
  title: string;
  category: 'ORGANIZATION' | 'REPORTS' | 'STUDENT';
  subcategory: string;
  fileSize: string;
  format: 'PDF' | 'DOCX' | 'XLSX';
  date: string;
  description: string;
}
