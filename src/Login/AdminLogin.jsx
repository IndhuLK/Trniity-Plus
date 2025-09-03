import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Dummy login check
  const handleLogin = (e) => {
    e.preventDefault();

    if (userId === "admin" && password === "trinity") {
      alert("Login successful ✅");
      navigate("/dashboard"); // redirect to blog page
    } else {
      alert("❌ Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-6">
      <div
        className="w-full max-w-md bg-gradient-to-r from-green-900 to-green-600
        rounded-2xl shadow-lg p-8 text-white"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* User ID */}
          <div>
            <label className="block mb-1 font-medium text-white">User ID</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter user id"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-white">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-50"
              placeholder="Enter password"
              required
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-white px-6 py-2 rounded-lg font-bold shadow-md text-center 
              cursor-pointer"
            >
              <span className="bg-gradient-to-r from-green-900 to-green-400
               bg-clip-text text-transparent">
                Login
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
