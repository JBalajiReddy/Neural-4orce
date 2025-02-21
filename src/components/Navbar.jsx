import React from "react";
import { Link } from "react-router-dom";
import { Infinity } from "lucide-react";

const Navbar = () => {
  const scrollToHowItWorks = () => {
    const section = document.getElementById("how-it-works");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Infinity className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-semibold">Infinity Threads</span>
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
