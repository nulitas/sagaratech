import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { LiaHatCowboySolid } from "react-icons/lia";
import logo from "/logo.png";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-[#1c1c1c] text-white p-5">
      <img src={logo} alt="logo" />
      <nav>
        <span className="mt-8 flex items-center p-2 text-gray-300 rounded">
          Menu
        </span>
        <ul>
          <li className="mb-3">
            <Link
              to="/"
              className="flex items-center p-2 text-gray-300 hover:bg-[#a51535] rounded"
            >
              <RxDashboard />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/students"
              className="flex items-center p-2 text-gray-300 hover:bg-[#a51535] rounded"
            >
              <LiaHatCowboySolid />
              <span className="ml-3">Students</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
