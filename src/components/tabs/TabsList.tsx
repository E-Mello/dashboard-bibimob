import React from "react";

interface TabsListProps {
  activeTab: string;
  handleTabClick: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

const TabsList: React.FC<TabsListProps> = ({
  activeTab,
  handleTabClick,
  className,
  children,
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { activeTab, handleTabClick });
        }
        return null;
      })}
    </div>
  );
};

export default TabsList;
