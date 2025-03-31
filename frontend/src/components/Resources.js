import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; 
import { Button } from "./ui/button";  
import { Input } from "./ui/input";  
import { Select, SelectItem } from "./ui/select";  
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Menu } from "lucide-react"; 

const Resources = () => {
  const [resources] = useState([
    { name: "Solar Panels", qty: 10, price: 1000 },
    { name: "Wheat", qty: 50, price: 25 },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [sellQty, setSellQty] = useState(0);
  const [negotiatedPrice, setNegotiatedPrice] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const countries = ["USA", "Germany", "India", "Japan", "Canada"];


  const openSellModal = (resource) => {
    setSelectedResource(resource);
    setSellQty(0);
    setNegotiatedPrice(resource.price);
    setIsModalOpen(true);
  };

  const handleSell = () => {
    if (sellQty > selectedResource.qty) {
      alert(`Only ${selectedResource.qty} available!`);
      return;
    }
    alert(`Sold ${sellQty} ${selectedResource.name} to ${selectedCountry} at $${negotiatedPrice} per unit!`);
    setIsModalOpen(false);
  };

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

        <h1 className="text-3xl font-bold mb-6">Resources</h1>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <table className="w-full border-collapse border border-gray-700">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border border-gray-700">Resource</th>
                <th className="p-3 border border-gray-700">Quantity</th>
                <th className="p-3 border border-gray-700">Standard PPU</th>
                <th className="p-3 border border-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((resource, index) => (
                <tr key={index} className="bg-gray-700 even:bg-gray-600 hover:bg-gray-500">
                  <td className="p-3 border border-gray-700">{resource.name}</td>
                  <td className="p-3 border border-gray-700">{resource.qty}</td>
                  <td className="p-3 border border-gray-700">${resource.price}</td>
                  <td className="p-3 border border-gray-700">
                    <Button onClick={() => openSellModal(resource)}>Sell</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sell Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sell {selectedResource?.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                type="number"
                value={sellQty}
                onChange={(e) => setSellQty(Number(e.target.value))}
                placeholder="Enter quantity to sell"
              />
              <Input
                type="number"
                value={negotiatedPrice}
                onChange={(e) => setNegotiatedPrice(Number(e.target.value))}
                placeholder="Enter negotiated price per unit"
              />
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                {countries.map((country, index) => (
                  <SelectItem key={index} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </Select>
              <Button onClick={handleSell}>Confirm Sale</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Resources;
