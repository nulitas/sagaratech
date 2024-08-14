import React, { useState } from "react";
import Header from "../components/Header";
import StudentTable from "../components/StudentTable";
import Pagination from "../components/Pagination";
import HeaderSection from "../components/HeaderSection";

const Students: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <main className="flex-1">
        <Header />

        <div className="p-6">
          <HeaderSection onSearch={handleSearch} />
        </div>

        <div className="p-6 bg-white shadow rounded mb-6">
          <h2 className="text-lg font-semibold mb-4">Student List</h2>

          <StudentTable searchTerm={searchTerm} />
          <Pagination />
        </div>
      </main>
    </div>
  );
};

export default Students;
