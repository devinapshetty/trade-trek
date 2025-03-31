import React from "react";

const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`px-2 py-1 border border-gray-300 rounded focus:ring focus:ring-blue-300 ${className}`}
      {...props}
    />
  );
};

export { Input };
