import React from "react";

const Pagination: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border-t">
      <button className="bg-gray-100 text-gray-600 py-2 px-4 rounded-md">
        Previous
      </button>
      <div className="flex space-x-2">
        {[...Array(10)].map((_, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-md ${
              i === 5 ? "bg-[#a51535] text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button className="bg-gray-100 text-gray-600 py-2 px-4 rounded-md">
        Next
      </button>
    </div>
  );
};

export default Pagination;
