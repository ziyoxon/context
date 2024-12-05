import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <h2 className="text-6xl font-extrabold text-red-500 animate-pulse">
        <span className="relative inline-block">
          <span className="absolute inset-0 animate-ping bg-red-500 rounded-lg opacity-75"></span>
          NotFound
        </span>
      </h2>
    </div>
  );
};

export default NotFound;
