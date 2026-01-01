import { useState } from "react";
import { useAchievements } from "../context/AchievementsContext";
import { Trophy, X, CheckCircle } from "lucide-react";

const AchievementsPanel = () => {
  const { achievementsList, getProgressPercentage } = useAchievements();
  const [isOpen, setIsOpen] = useState(false);

  const unlockedCount = achievementsList.filter((a) => a.unlocked).length;
  const totalCount = achievementsList.length;
  const progress = getProgressPercentage();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700 bg-black/90 text-neutral-300 shadow-lg backdrop-blur transition hover:border-neutral-500 hover:text-white"
        title="Достижения"
      >
        <Trophy className="h-6 w-6" />
        {unlockedCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">
            {unlockedCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-2xl rounded-lg border border-neutral-800 bg-neutral-950 p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-neutral-300" />
                <h2 className="text-xl font-semibold text-neutral-100">
                  Достижения
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded border border-neutral-700 p-1.5 text-neutral-400 transition hover:border-neutral-500 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-6 rounded-lg border border-neutral-800 bg-black p-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-neutral-400">Общий прогресс</span>
                <span className="font-semibold text-neutral-200">
                  {progress}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-neutral-900">
                <div
                  className="h-full bg-white transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-3 text-xs text-neutral-500">
                Разблокировано: {unlockedCount} / {totalCount}
              </div>
            </div>

            <div className="max-h-[60vh] space-y-3 overflow-y-auto pr-2">
              {achievementsList.map((achievement) => {
                const Icon = achievement.icon;
                const progressPercent =
                  achievement.maxProgress > 0
                    ? (achievement.progress / achievement.maxProgress) * 100
                    : 0;

                return (
                  <div
                    key={achievement.id}
                    className={`rounded-lg border p-4 transition ${
                      achievement.unlocked
                        ? "border-neutral-600 bg-neutral-900/50"
                        : "border-neutral-800 bg-black"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border ${
                          achievement.unlocked
                            ? "border-neutral-600 bg-white text-black"
                            : "border-neutral-800 bg-neutral-900 text-neutral-500"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3
                            className={`font-semibold ${
                              achievement.unlocked
                                ? "text-neutral-100"
                                : "text-neutral-400"
                            }`}
                          >
                            {achievement.title}
                          </h3>
                          {achievement.unlocked && (
                            <CheckCircle className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <p className="mb-2 text-sm text-neutral-500">
                          {achievement.description}
                        </p>
                        {!achievement.unlocked &&
                          achievement.maxProgress > 1 && (
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-neutral-600">
                                  Прогресс
                                </span>
                                <span className="text-neutral-400">
                                  {achievement.progress} /{" "}
                                  {achievement.maxProgress}
                                </span>
                              </div>
                              <div className="h-1.5 overflow-hidden rounded-full bg-neutral-900">
                                <div
                                  className="h-full bg-neutral-700 transition-all duration-300"
                                  style={{ width: `${progressPercent}%` }}
                                />
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AchievementsPanel;
