import React from "react";

type SkeletonShape = "circular" | "rectangular";
type SkeletonDisplay = "flex" | "block" | "inline" | "inline-block";

interface LoadingSkeletonProps {
  effect: "pulse" | "wave" | "fade";
  className?: string;
  shape?: SkeletonShape;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  effect,
  className,
  shape = "rectangular",
}) => {
  let animationClass = "";

  switch (effect) {
    case "pulse":
      animationClass = "animate-pulse";
      break;
    case "wave":
      animationClass = "animate-wave";
      break;
    case "fade":
      animationClass = "animate-fade";
      break;
    default:
      animationClass = "";
      break;
  }

  const shapeClassName = shape === "circular" ? "rounded-full" : "rounded-lg";

  return (
    <div
      className={`bg-gradient-to-r from-zinc-800 via-gray-800 to-gray-800 shadow-lg ${animationClass} ${shapeClassName} ${className}`}
    >
      {/* Placeholder content */}
    </div>
  );
};

export default LoadingSkeleton;
