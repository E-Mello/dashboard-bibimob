import { Dispatch, SetStateAction } from "react";

type Tab = {
  title: string;
  value: string;
  content: React.ReactNode;
};

interface TabsProps {
  tabs: Tab[];
  value: string;
  open: boolean;
  openChange: (value: string) => void;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  open,
  openChange,
  activeTab,
  setActiveTab,
  className,
}) => {
  const handleTabClick = (tabValue: string) => {
    if (value !== tabValue) {
      setActiveTab(tabValue);
      openChange(tabValue);
    }
  };

  const activeTabContent = tabs.find((tab) => tab.value === activeTab)?.content;

  return (
    <div className={`tabs ${className ? className : ""}`}>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`${
              activeTab === tab.value
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            } flex-1 inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm focus:outline-none`}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {open && activeTabContent && (
        <div className="mt-4">{activeTabContent}</div>
      )}
    </div>
  );
};

export default Tabs;
