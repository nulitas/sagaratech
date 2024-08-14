import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { HiChevronDown } from "react-icons/hi";

const DateCard: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
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
    <div className="flex justify-between">
      <div className="w-64">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="border border-gray-300 rounded p-2 w-full bg-white"
        />
      </div>
      <div className="w-64 text-right">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full focus:outline-none border border-gray-300 rounded p-2 bg-white"
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
