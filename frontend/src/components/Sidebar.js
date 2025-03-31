import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5 fixed">
      <h2 className="text-xl font-bold mb-6">Trade Trek</h2>
      <ul className="space-y-4">
        <li><Link to="/Dashboard" className="hover:text-gray-300">🏠 Dashboard</Link></li>
        <li><Link to="/Resources" className="hover:text-gray-300">📦 Resources</Link></li>
        <li><Link to="/TradeHistory" className="hover:text-gray-300">📜 Trade History</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
