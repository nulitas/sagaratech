import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import avatar from "/avatar.png";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex justify-end items-center mb-6 bg-white p-5 shadow">
      <div className="relative flex">
        <button
          onClick={toggleDropdown}
          className="flex items-center focus:outline-none"
        >
          <div className="flex flex-col items-end mr-2 text-gray-700">
            <span className="font-semibold">Thomas Anree</span>
            <span className="text-sm text-gray-500">Admin</span>
          </div>
          <img
            src={avatar}
            alt="Admin Avatar"
            className="w-10 h-10 ml-2 rounded-full"
          />
          <HiChevronDown className="w-5 h-5 text-gray-600" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
