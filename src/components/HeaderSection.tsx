import React from "react";
import { HiFilter } from "react-icons/hi";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";

interface HeaderSectionProps {
  onSearch: (term: string) => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex space-x-4">
        <button className="flex items-center bg-white text-black px-4 py-2 rounded-md">
          <HiFilter className="mr-2" /> Filters
        </button>
        <button className="flex items-center bg-[#a51535] text-white px-4 py-2 rounded-md">
          <FiUserPlus className="mr-2" /> Add User
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md p-2 pl-8 w-64"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <AiOutlineSearch className="absolute left-2 top-2.5 text-gray-500" />
        </div>
        <button className="flex items-center bg-gray-100 text-gray-600 p-2 rounded-md">
          <AiOutlineSetting className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default HeaderSection;
