import React, { useState } from "react";
import { HiChevronDown, HiCalendar } from "react-icons/hi";
import { format } from "date-fns";

const DateCard: React.FC = () => {
  const startDate = new Date("2023-12-29");
  const endDate = new Date("2024-01-04");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [frequency, setFrequency] = useState("Daily");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectFrequency = (freq: string) => {
    setFrequency(freq);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="relative flex items-center border border-gray-300 rounded-lg px-2 py-1 bg-white">
        <HiCalendar className="text-gray-500 w-5 h-5 mr-2" />
        <span className="text-gray-700">
          {format(startDate, "MMM d, yyyy")} - {format(endDate, "MMM d, yyyy")}
        </span>
      </div>
      <div className="w-64 text-right">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full focus:outline-none border border-gray-300 rounded-lg p-2 bg-white"
          >
            <span>{frequency}</span>
            <HiChevronDown className="w-5 h-5 text-gray-600" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-full bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {["Daily", "Weekly", "Monthly"].map((freq) => (
                  <a
                    key={freq}
                    href="#"
                    onClick={() => selectFrequency(freq)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {freq}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateCard;
