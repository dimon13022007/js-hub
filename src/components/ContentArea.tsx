import { useEffect } from "react";
import type { TopicItem } from "../types";
import { Menu } from "lucide-react";
import CodeBlock from "./CodeBlock";
import { useAchievements } from "../context/AchievementsContext";

interface ContentAreaProps {
  item: TopicItem;
  onToggleSidebar: () => void;
}

const ContentArea = ({ item, onToggleSidebar }: ContentAreaProps) => {
  const { markTopicAsRead } = useAchievements();

  useEffect(() => {
    const timer = setTimeout(() => {
      markTopicAsRead(item.id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [item.id, markTopicAsRead]);
  return (
    <main className="relative flex-1 bg-black">
      <button
        type="button"
        className="fixed left-4 top-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-700 bg-black/80 text-neutral-100 shadow-sm backdrop-blur md:hidden"
        onClick={onToggleSidebar}
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="mx-auto flex h-full max-w-4xl flex-col px-5 pb-10 pt-16 md:px-10 md:pt-10 lg:pt-12">
        <header className="mb-10 border-b border-neutral-800 pb-8">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-black">
              <item.icon className="h-5 w-5 text-neutral-300" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {item.title}
            </h1>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            {item.description}
          </p>
        </header>

        <div className="flex flex-1 flex-col gap-10">
          {item.sections.map((section, index) => (
            <section
              key={index}
              className="border-l border-neutral-800 pl-4 sm:pl-6"
            >
              <h2 className="mb-4 text-lg font-semibold tracking-tight text-neutral-100 sm:text-xl">
                {section.title}
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-neutral-200 sm:text-[15px]">
                {section.content.map((block, blockIndex) => (
                  <div key={blockIndex}>
                    {block.type === "text" && <p>{block.value}</p>}
                    {block.type === "code" && (
                      <CodeBlock
                        code={block.value}
                        language={block.language || "javascript"}
                      />
                    )}
                    {block.type === "heading" && (
                      <h3 className="mt-6 text-base font-semibold uppercase tracking-[0.18em] text-neutral-400">
                        {block.value}
                      </h3>
                    )}
                    {block.type === "list" && (
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-200">
                        {block.items?.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ContentArea;
