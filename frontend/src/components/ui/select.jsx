import React from "react";

const Select = ({ className = "", children, ...props }) => {
  return (
    <select
      className={`px-2 py-1 border border-gray-300 rounded focus:ring focus:ring-blue-300 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};

const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

export { Select, SelectItem };
