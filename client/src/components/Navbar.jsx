import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("");

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    localStorage.setItem("chatKaroTheme", selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("chatKaroTheme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    setTheme(currentTheme);
  }, []);

  return (
    <div className="navbar bg-base-100 border-b border-base-200 px-4 md:px-10 h-16 sticky top-0 z-50 shadow-sm">
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-primary"
        >
          Chat<span className="opacity-70">Wave</span>
        </Link>
      </div>

      <div className="flex-1 hidden md:flex justify-center gap-2">
        <Link to="/" className="btn btn-ghost btn-sm normal-case font-medium">
          Home
        </Link>
        <Link
          to="/about"
          className="btn btn-ghost btn-sm normal-case font-medium"
        >
          About
        </Link>
      </div>

      <div className="flex-1 flex justify-end items-center gap-4">
        <div className="flex items-center gap-2">
          <Link to="/login" className="btn btn-ghost btn-sm normal-case">
            Login
          </Link>
          <Link
            to="/register"
            className="btn btn-primary btn-sm normal-case px-6 shadow-md"
          >
            Register
          </Link>
        </div>

        <div className="divider divider-horizontal mx-0 h-8 opacity-20"></div>

        <select
          className="select select-bordered select-sm focus:outline-none focus:border-primary font-medium"
          onChange={handleThemeChange}
          value={theme}
        >
          <option value="">Theme</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="claude">Claude</option>
          <option value="spotify">Spotify</option>
          <option value="vscode">VSCode</option>
          <option value="black">Black</option>
          <option value="corporate">Corporate</option>
          <option value="ghibli">Ghibli</option>
          <option value="gourmet">Gourmet</option>
          <option value="luxury">Luxury</option>
          <option value="mintlify">Mintlify</option>
          <option value="pastel">Pastel</option>
          <option value="perplexity">Perplexity</option>
          <option value="shadcn">Shadcn</option>
          <option value="slack">Slack</option>
          <option value="soft">Soft</option>
          <option value="valorant">Valorant</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
