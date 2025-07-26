import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center w-full overflow-x-hidden relative">
      {/* Gradient-Hintergrund wie auf den anderen Seiten */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-slate-900 via-black via-slate-800 via-slate-900 to-black -z-10"></div>
      
      <div className="text-center text-white relative z-10">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-white/90 mb-4">Oops! Seite nicht gefunden</p>
        <a href="/" className="text-blue-400 hover:text-blue-300 underline">
          Zurück zur Startseite
        </a>
      </div>
    </div>
  );
};

export default NotFound;
