import React, { useState } from 'react';

function EmployeeProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Profile Page Header */}
      <h1 className="text-2xl font-semibold mb-6">Employee Profile</h1>

      {/* Profile Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 relative">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <div className="flex-col gap-4 flex justify-center items-center">
          <img
            src="/images/logo.png" // Replace with an actual image URL
            alt="Profile"
            className="w-40 h-40 rounded-full border mb-4"
          />
          <div className="w-full">
            <p className="text-gray-700 mb-2">Name: Zoren Admin</p>
            <p className="text-gray-700 mb-2">Role: Manager</p>
            <p className="text-gray-700 mb-2">Email: zorenadmin@gmail.com</p>
            <p className="text-gray-700 mb-2">Phone: +1234567890</p>
          </div>
          {/* Single Edit Button */}
          <button
            onClick={toggleModal}
            className="absolute top-4 right-0 px-4 py-2 text-black rounded"
          >
            <i className="fas fa-edit mr-2 text-xl"></i>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  defaultValue="Zoren Admin"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Role</label>
                <input
                  type="text"
                  defaultValue="Manager"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  defaultValue="zorenadmin@gmail.com"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  defaultValue="+1234567890"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#5B6EB7] text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeProfilePage;
