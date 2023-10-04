import React from "react";

interface TabsLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const TabsLabel: React.FC<TabsLabelProps> = ({
  value,
  children,
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={className}>
      {children}
    </div>
  );
};

export default TabsLabel;
