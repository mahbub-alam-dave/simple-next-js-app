// components/Loader.jsx
import React from "react";

const Loader = ({ size = 40, color = "text-blue-600" }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2 ${color}`}
        style={{
          height: size,
          width: size,
          borderTopColor: "currentColor",
          borderBottomColor: "currentColor",
        }}
      ></div>
    </div>
  );
};

export default Loader;
