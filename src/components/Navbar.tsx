import React from "react";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-6">
          <img src="../../public/logo.svg" alt="Sagara Tech" className="h-8" />
          <a href="#" className="text-gray-700 hover:text-gray-900">
            IT Certification
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Careers
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            FAQ
          </a>
        </div>

        <div>
          <Link
            to="/dashboard"
            className="bg-[#a51535] text-white px-8 py-2 rounded-md hover:bg-[#a51535]"
          >
            {" "}
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
