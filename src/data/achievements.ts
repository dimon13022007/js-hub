import type { Achievement } from "../types";
import {
  Trophy,
  BookOpen,
  Zap,
  Star,
  Target,
  Award,
  Rocket,
  Code,
} from "lucide-react";

export const achievements: Omit<
  Achievement,
  "unlocked" | "progress" | "maxProgress"
>[] = [
  {
    id: "first_steps",
    title: "Первые шаги",
    description: "Прочитайте первую тему",
    icon: BookOpen,
    requirement: "read_1",
  },
  {
    id: "js_master",
    title: "Мастер JavaScript",
    description: "Изучите основы JavaScript",
    icon: Code,
    requirement: "read_js_basics",
  },
  {
    id: "react_beginner",
    title: "React новичок",
    description: "Прочитайте все темы по React",
    icon: Zap,
    requirement: "read_react",
  },
  {
    id: "knowledge_seeker",
    title: "Искатель знаний",
    description: "Прочитайте 5 тем",
    icon: Star,
    requirement: "read_5",
  },
  {
    id: "dedicated_learner",
    title: "Преданный ученик",
    description: "Прочитайте 10 тем",
    icon: Target,
    requirement: "read_10",
  },
  {
    id: "completionist",
    title: "Завершитель",
    description: "Прочитайте все темы",
    icon: Trophy,
    requirement: "read_all",
  },
  {
    id: "async_master",
    title: "Мастер асинхронности",
    description: "Изучите Promises и async/await",
    icon: Rocket,
    requirement: "read_js_basics",
  },
  {
    id: "react_expert",
    title: "React эксперт",
    description: "Освойте все хуки React",
    icon: Award,
    requirement: "read_react",
  },
];
