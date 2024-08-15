import React, { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
import { Modal } from "react-responsive-modal";

interface Student {
  name: string;
  email: string;
  phone: string;
  instance: string;
  createdAt: string;
  avatar: string;
  password: string;
}

const StudentTable: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Student;
    direction: "ascending" | "descending";
  } | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  useEffect(() => {
    fetch("/students.json")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  const handleOpenModal = (student: Student) => {
    setSelectedStudent(student);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedStudent(null);
  };

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
    <>
      <div className="overflow-x-auto">
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
                  <div className="flex space-x-2 justify-center">
                    <button className="text-[#a51535]">
                      <AiOutlineDelete />
                    </button>
                    <button
                      className="text-[#f8af4e]"
                      onClick={() => handleOpenModal(student)}
                    >
                      <AiOutlineEdit />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedStudent && (
        <Modal open={openModal} onClose={handleCloseModal} center>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Edit Student</h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={selectedStudent.name}
                  className="border border-gray-300 rounded-md p-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={selectedStudent.email}
                  className="border border-gray-300 rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={selectedStudent.phone}
                  className="border border-gray-300 rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Instance"
                  value={selectedStudent.instance}
                  className="border border-gray-300 rounded-md p-2"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={selectedStudent.password}
                  className="border border-gray-300 rounded-md p-2"
                />
                <input
                  type="password"
                  placeholder="Re-type Password"
                  value={selectedStudent.password}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2">Add Image</label>
                <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
                  <p className="text-gray-400 mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-gray-400">
                    SVG, PNG, JPG or GIF (max, 800 X 800px)
                  </p>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  className="bg-[#a51535] text-white px-6 py-2 rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default StudentTable;
