import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ fullname: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4500/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Account ban gaya! Ab login karein.");
        navigate("/login");
      } else {
        alert(data.message || "Registration fail ho gaya");
      }
    } catch (error) {
      alert("Backend server se connection nahi ho pa raha!");
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