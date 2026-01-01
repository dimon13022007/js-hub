import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Achievement, UserProgress } from "../types";
import { achievements } from "../data/achievements";
import { topics } from "../data/topics";

interface AchievementsContextType {
  progress: UserProgress;
  achievementsList: Achievement[];
  markTopicAsRead: (topicId: string) => void;
  unlockAchievement: (achievementId: string) => void;
  getProgressPercentage: () => number;
}

const AchievementsContext = createContext<AchievementsContextType | undefined>(
  undefined
);

const STORAGE_KEY = "js-hub-progress";

export const AchievementsProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          readTopics: new Set(parsed.readTopics || []),
          totalReadTime: parsed.totalReadTime || 0,
          achievements: new Set(parsed.achievements || []),
        };
      } catch {}
    }
    return {
      readTopics: new Set(),
      totalReadTime: 0,
      achievements: new Set(),
    };
  });

  const [achievementsList, setAchievementsList] = useState<Achievement[]>(
    () => {
      return achievements.map((ach) => ({
        ...ach,
        unlocked: progress.achievements.has(ach.id),
        progress: calculateProgress(ach, progress),
        maxProgress: getMaxProgress(ach),
      }));
    }
  );

  useEffect(() => {
    const toSave = {
      readTopics: Array.from(progress.readTopics),
      totalReadTime: progress.totalReadTime,
      achievements: Array.from(progress.achievements),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));

    setAchievementsList(
      achievements.map((ach) => ({
        ...ach,
        unlocked: progress.achievements.has(ach.id),
        progress: calculateProgress(ach, progress),
        maxProgress: getMaxProgress(ach),
      }))
    );
  }, [progress]);

  const markTopicAsRead = (topicId: string) => {
    setProgress((prev) => {
      const newProgress = {
        ...prev,
        readTopics: new Set(prev.readTopics).add(topicId),
      };
      checkAchievements(newProgress);
      return newProgress;
    });
  };

  const unlockAchievement = (achievementId: string) => {
    setProgress((prev) => ({
      ...prev,
      achievements: new Set(prev.achievements).add(achievementId),
    }));
  };

  const checkAchievements = (currentProgress: UserProgress) => {
    achievements.forEach((ach) => {
      if (!currentProgress.achievements.has(ach.id)) {
        const progress = calculateProgress(ach, currentProgress);
        const maxProgress = getMaxProgress(ach);
        if (progress >= maxProgress) {
          unlockAchievement(ach.id);
        }
      }
    });
  };

  const getProgressPercentage = () => {
    const totalTopics = topics.flatMap((t) => t.items).length;
    return totalTopics > 0
      ? Math.round((progress.readTopics.size / totalTopics) * 100)
      : 0;
  };

  return (
    <AchievementsContext.Provider
      value={{
        progress,
        achievementsList,
        markTopicAsRead,
        unlockAchievement,
        getProgressPercentage,
      }}
    >
      {children}
    </AchievementsContext.Provider>
  );
};

export const useAchievements = () => {
  const context = useContext(AchievementsContext);
  if (!context) {
    throw new Error("useAchievements must be used within AchievementsProvider");
  }
  return context;
};

function calculateProgress(
  achievement: Omit<Achievement, "unlocked" | "progress" | "maxProgress">,
  progress: UserProgress
): number {
  switch (achievement.requirement) {
    case "read_1":
      return progress.readTopics.size >= 1 ? 1 : 0;
    case "read_5":
      return Math.min(progress.readTopics.size, 5);
    case "read_10":
      return Math.min(progress.readTopics.size, 10);
    case "read_all":
      const totalTopics = topics.flatMap((t) => t.items).length;
      return Math.min(progress.readTopics.size, totalTopics);
    case "read_js_basics":
      return progress.readTopics.has("js-basics") ? 1 : 0;
    case "read_react":
      const reactTopics =
        topics.find((t) => t.id === "react-basics")?.items.map((i) => i.id) ||
        [];
      return reactTopics.filter((id) => progress.readTopics.has(id)).length;
    default:
      return 0;
  }
}

function getMaxProgress(
  achievement: Omit<Achievement, "unlocked" | "progress" | "maxProgress">
): number {
  switch (achievement.requirement) {
    case "read_1":
      return 1;
    case "read_5":
      return 5;
    case "read_10":
      return 10;
    case "read_all":
      return topics.flatMap((t) => t.items).length;
    case "read_js_basics":
      return 1;
    case "read_react":
      return topics.find((t) => t.id === "react-basics")?.items.length || 0;
    default:
      return 1;
  }
}
