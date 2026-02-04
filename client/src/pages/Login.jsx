import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4500/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login Successful! 🎉");
        // User data ko browser mein save karein
        localStorage.setItem("chatWaveUser", JSON.stringify(data.user));
        navigate("/"); // Home page par bhejein
      } else {
        alert(data.message || "Email ya Password galat hai!");
      }
    } catch (error) {
      alert("Server check karein, connect nahi ho raha.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-300">
        <form className="card-body" onSubmit={handleLogin}>
          <h2 className="text-2xl font-bold text-center mb-6 text-primary">Login</h2>
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
          <p className="text-center text-sm mt-4">
            Don't have an account? <Link to="/register" className="text-primary font-bold">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;