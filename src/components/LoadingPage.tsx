import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-[#230c49]">
      <div className="w-20 h-20 rounded-full animate-pulse bg-gradient-to-r from-blue-500 to-purple-500" />
      <p className="mt-4 text-gray-200 font-bold text-lg">Loading...</p>
    </div>
  );
};

export default LoadingPage;
