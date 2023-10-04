import React from "react";

interface TabsContentProps {
  activeTab: string;
  children: React.ReactNode;
}

const TabsContent: React.FC<TabsContentProps> = ({ activeTab, children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { activeTab });
        }
        return null;
      })}
    </div>
  );
};

export default TabsContent;
