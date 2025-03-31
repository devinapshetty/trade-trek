import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [countryId, setCountryId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        countryId,
        password,
      });

      if (res.data.success) {
        setMessage(`Welcome, ${res.data.username}!`);
        navigate("/dashboard");
      } else {
        alert("Invalid credentials!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setMessage("Server Error, Try Again");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-900 via-blue-900 to-black">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-96 border border-gray-200/30">
        <h2 className="text-3xl font-bold text-center text-white drop-shadow-md">Login</h2>
        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm">Country ID</label>
            <input
              type="text"
              value={countryId}
              onChange={(e) => setCountryId(e.target.value)}
              className="w-full p-2 bg-transparent border border-gray-400/50 text-white rounded mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter Country ID"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-transparent border border-gray-400/50 text-white rounded mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md mt-4 font-semibold text-lg tracking-wide shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:scale-105"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-center text-yellow-400">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
