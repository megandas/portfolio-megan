export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Agentic AI & LLMs' | 'Machine Learning' | 'Data Science' | 'Systems & Security';
  year: string;
  client: string;
  role: string;
  metrics: string[];
  description: string;
  challenge: string;
  solution: string;
  highlights: string[];
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  aiPromptContext?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
}

export interface NoteItem {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
  aspectRatio: string;
}

export interface ProfileData {
  name: string;
  title: string;
  headline: string;
  location: string;
  phone: string;
  email: string;
  avatar: string;
  bioParagraphs: string[];
  statusMessage: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  education: EducationItem[];
  certifications: CertificationItem[];
  metrics: {
    label: string;
    value: string;
    context: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  extracurriculars: string[];
}

export type AppId =
  | 'finder'
  | 'about'
  | 'projects'
  | 'aichat'
  | 'notes'
  | 'terminal'
  | 'photos'
  | 'music'
  | 'contact'
  | 'settings'
  | 'resume';

export interface WindowState {
  id: AppId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  activeTab?: string;
}

export interface WallpaperOption {
  id: string;
  name: string;
  type: 'image' | 'gradient';
  value: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  projectReference?: string;
}

export interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  frequency: number;
  waveformColor: string;
}
