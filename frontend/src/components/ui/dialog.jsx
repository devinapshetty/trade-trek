import React from "react";

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg">
        {children}
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const DialogContent = ({ children }) => <div className="p-4">{children}</div>;
const DialogHeader = ({ children }) => <div className="font-bold">{children}</div>;
const DialogTitle = ({ children }) => <h2 className="text-xl">{children}</h2>;

export { Dialog, DialogContent, DialogHeader, DialogTitle };
