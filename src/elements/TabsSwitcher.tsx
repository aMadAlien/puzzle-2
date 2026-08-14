import type { ReactNode } from "react";

export interface Tab {
  id: string;
  content: ReactNode;
}

interface TabsSwitcherProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export default function TabsSwitcher({
  tabs,
  activeTab,
  onChange,
}: TabsSwitcherProps) {
  const activeIndex = tabs.findIndex(tab => tab.id === activeTab);

  return (
    <div
      className="tabs-switcher"
      style={{
        "--tabs-count": tabs.length,
        "--active-index": activeIndex,
      } as React.CSSProperties}
    >
      <span className="tabs-switcher-indicator" />

      {tabs.map(tab => (
        <button
          key={tab.id}
          type="button"
          className={`tabs-switcher-tab ${
            tab.id === activeTab ? "active" : ""
          }`}
          onClick={() => onChange(tab.id)}
        >
          {tab.content}
        </button>
      ))}
    </div>
  );
}