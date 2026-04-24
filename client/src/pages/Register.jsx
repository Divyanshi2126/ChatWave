import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../config/api"; 

const Register = () => {
  const [formData, setFormData] = useState({ fullname: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/register", formData);
      
      alert("Account ban gaya! Ab login karein. 🎉");
      navigate("/login");
    } catch (error) {
      // Backend error message handle karna
      alert(error.response?.data?.message || "Registration fail ho gaya.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-300">
        <form className="card-body" onSubmit={handleRegister}>
          <h2 className="text-2xl font-bold text-center mb-6 text-primary">Sign Up</h2>
          <input
            type="text" placeholder="Full Name" className="input input-bordered w-full mb-2"
            onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
            required
          />
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
          <button type="submit" className="btn btn-primary w-full">Register</button>
          <p className="text-center text-sm mt-4">
            Already have an account? <Link to="/login" className="text-primary font-bold">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;