import React, { useState } from "react";

import TabsContent from "@/components/tabs/TabsContent";
import TabsList from "@/components/tabs/TabsList";

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ defaultValue, className, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

  const renderTabs = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.type === TabsList) {
          return React.cloneElement(child, { activeTab, handleTabClick } as React.HTMLAttributes<HTMLElement>);
        } else if (child.type === TabsContent) {
          return React.cloneElement(child, { activeTab } as React.HTMLAttributes<HTMLElement>);
        }
      }
      return null;
    });
  };

  return <div className={className}>{renderTabs()}</div>;
};

export default Tabs;
