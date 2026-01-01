import type { Topic } from "../types";

interface SidebarProps {
  topics: Topic[];
  selectedTopic: string;
  onSelectTopic: (id: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({
  topics,
  selectedTopic,
  onSelectTopic,
  isOpen,
}: SidebarProps) => {
  return (
    <aside
      className={`fixed z-20 h-full w-72 border-r border-neutral-800 bg-neutral-950/95 px-4 pb-6 pt-5 shadow-xl backdrop-blur-md transition-transform duration-300 lg:static lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="mb-6 flex items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-black text-xs font-semibold tracking-tight">
            JS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
              JS Hub
            </span>
            <span className="text-[11px] font-medium text-neutral-500">
              JavaScript & React Story
            </span>
          </div>
        </div>
      </div>

      <nav className="mt-2 space-y-6 overflow-y-auto pr-2 text-sm">
        {topics.map((topic) => (
          <div key={topic.id}>
            <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              {topic.category}
            </div>
            <div className="space-y-1">
              {topic.items.map((item) => {
                const active = selectedTopic === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectTopic(item.id)}
                    className={`group flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[13px] transition ${
                      active
                        ? "bg-neutral-100 text-black"
                        : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded border ${
                        active
                          ? "border-black bg-black text-white"
                          : "border-neutral-700 bg-black text-neutral-300 group-hover:border-neutral-400"
                      }`}
                    >
                      <item.icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="truncate">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-neutral-950 to-transparent" />
    </aside>
  );
};

export default Sidebar;
