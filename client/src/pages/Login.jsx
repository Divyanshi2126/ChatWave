import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../config/api"; 
import GoogleAuth from "../config/GoogleAuth"; // Button component

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Manual Login Logic
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/login", formData);
      alert("Login Successful! 🎉");
      
      // Data save karna
      localStorage.setItem("chatWaveUser", JSON.stringify(response.data.user));
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Email ya Password galat hai!");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-6 text-primary">Login</h2>
          
          <form onSubmit={handleLogin}>
            <input
              type="email" placeholder="Email" className="input input-bordered w-full mb-2"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <input
              type="password" placeholder="Password" className="input input-bordered w-full mb-4"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button type="submit" className="btn btn-primary w-full">Login</button>
          </form>

          {/* Divider and Google Button */}
          <div className="divider text-xs text-base-content/50 uppercase">OR</div>
          
          {/* Ye wahi component hai jo humne banaya hai */}
          <GoogleAuth />

          <p className="text-center text-sm mt-4">
            Don't have an account? <Link to="/register" className="text-primary font-bold">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;