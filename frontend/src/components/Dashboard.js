import React, { useState } from "react";
import { Menu } from "lucide-react"; 
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [bankBalance] = useState(50000);
  const resources = [
    { name: "Solar Panels", qty: 10, price: 1000 },
    { name: "Wheat", qty: 50, price: 25 },
  ];
  const subgoals = [
    { name: "Buy 10 Solar Panels", completed: 8 },
    { name: "Sell 20 Wheat", completed: 10 },
  ];

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform w-64 z-50`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-grow p-8 transition-all ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-3 bg-blue-600 text-white rounded-lg focus:outline-none mb-4"
        >
          <Menu size={24} />
        </button>

        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {/* Bank Balance Card */}
        <div className="mb-6 p-4 bg-gray-700 shadow-md rounded-lg w-1/3">
          <h2 className="text-lg font-semibold">Bank Balance</h2>
          <p className="text-xl font-bold text-green-600">${bankBalance.toLocaleString()}</p>
        </div>

        {/* Resources Table */}
        <div className="bg-gray-700 shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-3">Resources</h2>
          <table className="w-full border-collapse border border-gray-700 rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-700 p-3">Resource</th>
                <th className="border border-gray-700 p-3">Quantity</th>
                <th className="border border-gray-700 p-3">Standard PPU</th>
                <th className="border border-gray-700 p-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((resource, index) => (
                <tr key={index} className="bg-gray-800 even:bg-gray-700 hover:bg-gray-600">
                  <td className="border border-gray-700 p-3">{resource.name}</td>
                  <td className="border border-gray-700 p-3">{resource.qty}</td>
                  <td className="border border-gray-700 p-3">${resource.price}</td>
                  <td className="border border-gray-700 p-3 font-semibold">
                    ${resource.qty * resource.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Subgoals Table */}
        <div className="bg-gray-700 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">Subgoals</h2>
          <table className="w-full border-collapse border border-gray-700">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-700 p-3">Subgoal</th>
                <th className="border border-gray-700 p-3">Completed</th>
              </tr>
            </thead>
            <tbody>
              {subgoals.map((goal, index) => (
                <tr key={index} className="bg-gray-800 even:bg-gray-700 hover:bg-gray-600">
                  <td className="border border-gray-700 p-3">{goal.name}</td>
                  <td className="border border-gray-700 p-3">{goal.completed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
