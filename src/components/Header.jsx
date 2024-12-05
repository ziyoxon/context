import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-20 header bg-slate-100 shadow-lg">
      <nav className="container flex gap-10 h-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-lg shadow-lg">
        <NavLink
          className={({ isActive }) =>
            `text-2xl font-semibold text-white transition-transform duration-300 ${
              isActive
                ? "underline decoration-white scale-110"
                : "hover:scale-105"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-2xl font-semibold text-white transition-transform duration-300 ${
              isActive
                ? "underline decoration-white scale-110"
                : "hover:scale-105"
            }`
          }
          to="/login"
        >
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
