import type { LucideIcon } from "lucide-react";

export interface ContentBlock {
  type: "text" | "code" | "heading" | "list";
  value: string;
  language?: string;
  items?: string[];
}

export interface Section {
  title: string;
  content: ContentBlock[];
}

export interface TopicItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  sections: Section[];
}

export interface Topic {
  id: string;
  category: string;
  items: TopicItem[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  requirement: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
}

export interface UserProgress {
  readTopics: Set<string>;
  totalReadTime: number;
  achievements: Set<string>;
}
