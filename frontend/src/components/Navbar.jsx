import React from "react";
import { Link } from "react-router-dom";
import { Infinity } from "lucide-react";
import Logo from '../assets/Logo.png'; // Add this line

const Navbar = () => {
  const scrollToHowItWorks = () => {
    const section = document.getElementById("how-it-works");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-sm h-[114px] w-[1440px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Infinity Threads Logo" className="h-15 w-15 pt-2" />

          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600">
              Home
            </Link>
            <Link to="/try-on" className="text-gray-700 hover:text-purple-600">
              Try On
            </Link>
            <button
              onClick={scrollToHowItWorks}
              className="text-gray-700 hover:text-purple-600"
            >
              How it works
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
