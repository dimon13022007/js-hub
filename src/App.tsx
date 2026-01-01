import { useState } from "react";
import { AchievementsProvider } from "./context/AchievementsContext";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import AchievementsPanel from "./components/AchievementsPanel";
import { topics } from "./data/topics";

const App = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    topics[0].items[0].id
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const selectedItem =
    topics
      .flatMap((topic) => topic.items)
      .find((item) => item.id === selectedTopicId) || topics[0].items[0];

  return (
    <AchievementsProvider>
      <div className="flex h-screen bg-black text-neutral-100 font-sans">
        <Sidebar
          topics={topics}
          selectedTopic={selectedTopicId}
          onSelectTopic={setSelectedTopicId}
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <ContentArea
          item={selectedItem}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <AchievementsPanel />
      </div>
    </AchievementsProvider>
  );
};

export default App;
