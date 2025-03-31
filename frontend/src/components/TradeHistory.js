import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react"; 

const TradeHistory = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [trades] = useState([
    { resource: "Solar Panels", qty: 5, price: 1200, country: "USA", date: "2025-03-30" },
    { resource: "Wheat", qty: 20, price: 30, country: "Germany", date: "2025-03-29" },
  ]);


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

        <h1 className="text-3xl font-bold mb-6">Trade History</h1>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <table className="w-full border-collapse border border-gray-700">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border border-gray-700">Date</th>
                <th className="p-3 border border-gray-700">Resource</th>
                <th className="p-3 border border-gray-700">Quantity</th>
                <th className="p-3 border border-gray-700">Price</th>
                <th className="p-3 border border-gray-700">Country</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade, index) => (
                <tr key={index} className="bg-gray-700 even:bg-gray-600 hover:bg-gray-500">
                  <td className="p-3 border border-gray-700">{trade.date}</td>
                  <td className="p-3 border border-gray-700">{trade.resource}</td>
                  <td className="p-3 border border-gray-700">{trade.qty}</td>
                  <td className="p-3 border border-gray-700">${trade.price}</td>
                  <td className="p-3 border border-gray-700">{trade.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TradeHistory;
