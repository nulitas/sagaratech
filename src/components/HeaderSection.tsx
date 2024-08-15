import React from "react";
import { HiFilter } from "react-icons/hi";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../CustomModalStyles.css";

interface HeaderSectionProps {
  onSearch: (term: string) => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [openFilterModal, setOpenFilterModal] = React.useState(false);
  const [openAddUserModal, setOpenAddUserModal] = React.useState(false);
  const [filterButtonPosition, setFilterButtonPosition] = React.useState({
    top: 0,
    left: 0,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleOpenFilterModal = (event: React.MouseEvent) => {
    const button = event.currentTarget.getBoundingClientRect();
    setFilterButtonPosition({
      top: button.bottom + window.scrollY,
      left: button.left + window.scrollX,
    });
    setOpenFilterModal(true);
  };

  const handleCloseFilterModal = () => setOpenFilterModal(false);
  const handleOpenAddUserModal = () => setOpenAddUserModal(true);
  const handleCloseAddUserModal = () => setOpenAddUserModal(false);

  const handleAddFilter = () => {
    console.log("Filter added!");
    handleCloseFilterModal();
  };

  const handleAddUser = () => {
    console.log("User added!");
    handleCloseAddUserModal();
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button
            className="flex items-center bg-white text-black px-4 py-2 rounded-md"
            onClick={handleOpenFilterModal}
          >
            <HiFilter className="mr-2" /> Filters
          </button>
          <button
            className="flex items-center bg-[#a51535] text-white px-4 py-2 rounded-md"
            onClick={handleOpenAddUserModal}
          >
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

      <Modal
        open={openFilterModal}
        onClose={handleCloseFilterModal}
        styles={{
          modal: {
            position: "absolute",
            top: `${filterButtonPosition.top}px`,
            left: `${filterButtonPosition.left}px`,
            margin: 0,
            padding: "1rem",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            width: "250px",
          },
          overlay: {
            background: "transparent",
          },
        }}
        center={false}
        showCloseIcon={false}
      >
        <div>
          <select className="border border-gray-300 rounded-md p-2 w-full mb-2">
            <option>Instance</option>
            <option>Name</option>
            <option>Email</option>
          </select>
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 w-full mb-2"
            value="is"
            disabled
          />
          <input
            type="text"
            placeholder="Enter condition"
            className="border border-gray-300 rounded-md p-2 w-full mb-4"
          />
          <button
            className="bg-[#a51535] text-white px-4 py-2 rounded-md w-full"
            onClick={handleAddFilter}
          >
            Add Filter
          </button>
        </div>
      </Modal>

      <Modal open={openAddUserModal} onClose={handleCloseAddUserModal} center>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
          <form onSubmit={handleAddUser}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-md p-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Instance"
                className="border border-gray-300 rounded-md p-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-md p-2"
              />
              <input
                type="password"
                placeholder="Re-type Password"
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
                type="submit"
                className="bg-[#a51535] text-white px-6 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default HeaderSection;
