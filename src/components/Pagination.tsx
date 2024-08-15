import React from "react";

const Pagination: React.FC = () => {
  const startPages = [3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="flex justify-between items-center p-4 bg-white border-t">
      <button className="bg-gray-100 text-gray-600 py-2 px-4 rounded-md">
        Previous
      </button>
      <div className="flex space-x-2">
        <button className="px-4 py-2 rounded-md  text-gray-600">...</button>
        {startPages.map((page, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-md ${
              page === 6 ? "bg-[#a51535] text-white" : " text-gray-600"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="px-4 py-2 rounded-md  text-gray-600">...</button>
      </div>
      <button className="bg-gray-100 text-gray-600 py-2 px-4 rounded-md">
        Next
      </button>
    </div>
  );
};

export default Pagination;
