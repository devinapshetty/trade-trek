
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./components/Dashboard";
import Resources from "./components/Resources";
import TradeHistory from "./components/TradeHistory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/tradehistory" element={<TradeHistory />} />
      </Routes>
    </Router>
  );
}

export default App;


