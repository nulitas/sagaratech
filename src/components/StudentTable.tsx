import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";

interface Student {
  name: string;
  email: string;
  phone: string;
  instance: string;
  createdAt: string;
  avatar: string;
}

const StudentTable: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Student;
    direction: "ascending" | "descending";
  } | null>(null);

  useEffect(() => {
    fetch("/students.json")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  const sortedStudents = [...students].sort((a, b) => {
    if (sortConfig !== null) {
      const key = sortConfig.key;
      const order = sortConfig.direction === "ascending" ? 1 : -1;
      if (a[key] < b[key]) return -1 * order;
      if (a[key] > b[key]) return 1 * order;
      return 0;
    }
    return 0;
  });

  const filteredStudents = sortedStudents.filter((student) =>
    Object.values(student).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const requestSort = (key: keyof Student) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th
            className="text-left py-3 px-4 font-medium text-gray-500"
            onClick={() => requestSort("name")}
          >
            <div className="flex items-center">
              <p className="mr-2">Full Name</p>
              <BiSortAlt2 />
            </div>
          </th>
          <th
            className="text-left py-3 px-4 font-medium text-gray-500"
            onClick={() => requestSort("email")}
          >
            <div className="flex items-center">
              <p className="mr-2">Email Address</p>
              <BiSortAlt2 />
            </div>
          </th>
          <th
            className="text-left py-3 px-4 font-medium text-gray-500"
            onClick={() => requestSort("phone")}
          >
            <div className="flex items-center">
              <p className="mr-2">Phone Number</p>
              <BiSortAlt2 />
            </div>
          </th>
          <th
            className="text-left py-3 px-4 font-medium text-gray-500"
            onClick={() => requestSort("instance")}
          >
            <div className="flex items-center">
              <p className="mr-2">Instance</p>
              <BiSortAlt2 />
            </div>
          </th>
          <th
            className="text-left py-3 px-4 font-medium text-gray-500"
            onClick={() => requestSort("createdAt")}
          >
            <div className="flex items-center">
              <p className="mr-2">Created At</p>
              <BiSortAlt2 />
            </div>
          </th>
          <th className="py-3 px-4 font-medium text-gray-500">Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredStudents.map((student, index) => (
          <tr key={index} className="border-t">
            <td className="py-3 px-4">
              <div className="flex items-center">
                <img
                  src={student.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span>{student.name}</span>
              </div>
            </td>
            <td className="py-3 px-4">{student.email}</td>
            <td className="py-3 px-4">{student.phone}</td>
            <td className="py-3 px-4">{student.instance}</td>
            <td className="py-3 px-4">{student.createdAt}</td>
            <td className="py-3 px-4">
              <div className="flex space-x-2">
                <button className="text-[#a51535]">
                  <AiOutlineDelete />
                </button>
                <button className="text-blue-600">
                  <AiOutlineEdit />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
