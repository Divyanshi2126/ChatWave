import React, { useState, useEffect } from "react";
import API from "./api"; 
import { useNavigate } from "react-router-dom";

// YAHAN APNI REAL ID PASTE KAREIN (Google Cloud Console se le kar)
const GOOGLE_CLIENT_ID = "866073552635-a3jup1bj3aau1fq667on1a515vv6lc2a.apps.googleusercontent.com";

const GoogleAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  const handleCredentialResponse = async (response) => {
    setIsLoading(true);
    try {
      const payload = JSON.parse(atob(response.credential.split(".")[1]));

      const res = await API.post("/auth/google-login", {
        fullname: payload.name,
        email: payload.email,
        googleId: payload.sub,
        profilePic: payload.picture,
      });

      localStorage.setItem("chatWaveUser", JSON.stringify(res.data.user));
      alert("Google Login Successful! 🚀");
      navigate("/");
    } catch (err) {
      console.error("Login Error:", err);
      alert("Google Login Fail ho gaya");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleClick = () => {
    if (window.google) {
      // Force popup if one-tap doesn't show
      window.google.accounts.id.prompt(); 
    }
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleGoogleClick}
        disabled={isLoading}
        className="btn btn-outline w-full flex items-center gap-2 border-base-300 hover:bg-base-200"
      >
        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="G" />
        {isLoading ? "Loading..." : "Continue with Google"}
      </button>
    </div>
  );
};

export default GoogleAuth;  