import React from "react";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="relative flex items-center justify-between h-screen bg-gray-900">
      {/* Background Spline 3D Model */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/qS-XYfCOL3sEaxiG/scene.splinecode" />
      </div>

      {/* Login Button - Aligned to Left */}
      <div className="relative z-10 pl-8">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-transparent text-gray-200 border border-gray-200 hover:bg-gray-200 hover:text-gray-900 font-bold rounded transition duration-300"
        >
          Login
        </button>
      </div>

      {/* Register Button - Aligned to Right */}
      <div className="relative z-10 pr-8">
        <button
          onClick={() => navigate("/signup")}
          className="px-6 py-3 bg-transparent text-gray-200 border border-gray-200 hover:bg-gray-200 hover:text-gray-900 font-bold rounded transition duration-300"
        >
          Signup
        </button>
      </div>
    </main>
  );
}