import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  // "flex items-center justify-center" add kiya hai taki vertically center ho jaye
  <div className="hero min-h-[calc(100vh-64px)] bg-base-200 flex items-center justify-center">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-black tracking-tight">
          Ready to <span className="text-primary">Chat?</span>
        </h1>
        <p className="py-6 opacity-70 text-lg">
          Join ChatWave today. Simple, fast, and colorful messaging for everyone.
        </p>
        <div className="flex gap-3 justify-center">
          <Link to="/register" className="btn btn-primary btn-wide shadow-lg">Start Now</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;