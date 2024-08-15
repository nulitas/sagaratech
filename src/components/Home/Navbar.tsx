import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "/Logo.svg";
import { HiChevronDown } from "react-icons/hi";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="items-center space-x-6 hidden md:flex">
          <img src={NavLogo} alt="Sagara Tech" className="h-8" />
          <a href="#" className="text-[#9e9e9e] hover:text-gray-900">
            IT Certification
          </a>
          <a
            href="#"
            className="text-[#9e9e9e] hover:text-gray-900 flex items-center"
          >
            Careers
            <HiChevronDown />
          </a>
          <a href="#" className="text-[#9e9e9e] hover:text-gray-900">
            FAQ
          </a>
        </div>

        <div className="hidden md:block">
          <Link
            to="/dashboard"
            className="bg-[#a51535] text-white px-8 py-2 rounded-sm hover:bg-[#a51535] font-semibold"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
