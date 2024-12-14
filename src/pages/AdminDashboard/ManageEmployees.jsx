import React, { useState } from 'react';

function ManageEmployees() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Zoren Admin', role: 'Manager', hired: '2024-01-01' },
    { id: 2, name: 'Zoren OS', role: 'Pharmacist', hired: '2024-08-05' },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    role: '',
    hired: '',
  });

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openEditModal = (employee) => {
    setSelectedEmployee(employee);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => setIsEditModalOpen(false);

  const handleInputChange = (e, isEdit = false) => {
    const { name, value } = e.target;
    if (isEdit) {
      setSelectedEmployee({ ...selectedEmployee, [name]: value });
    } else {
      setNewEmployee({ ...newEmployee, [name]: value });
    }
  };

  const handleAddEmployee = () => {
    const nextId = employees.length + 1;
    setEmployees([...employees, { id: nextId, ...newEmployee }]);
    setNewEmployee({ name: '', role: '', hired: '' });
    closeAddModal();
  };

  const handleUpdateEmployee = () => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === selectedEmployee.id ? selectedEmployee : emp
    );
    setEmployees(updatedEmployees);
    closeEditModal();
  };

  const handleDeleteEmployee = (id) => {
    const filteredEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(filteredEmployees);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-4 pt-2">Manage Employees</h1>

      <button
        onClick={openAddModal}
        className="my-2 px-4 py-2 bg-[#5B6EB7] text-white rounded hover:bg-blue-600"
      >
        Add Employee
      </button>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#5B6EB7] text-white">
            <tr>
              <th className="border-b p-4">ID</th>
              <th className="border-b p-4">Name</th>
              <th className="border-b p-4">Role</th>
              <th className="border-b p-4">Hired</th>
              <th className="border-b p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-100">
                <td className="border-b p-4">{employee.id}</td>
                <td className="border-b p-4">{employee.name}</td>
                <td className="border-b p-4">{employee.role}</td>
                <td className="border-b p-4">{employee.hired}</td>
                <td className="border-b p-4 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => openEditModal(employee)}
                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEmployee(employee.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {(isAddModalOpen || isEditModalOpen) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-auto">
          <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 sm:w-96">
            <h2 className="text-xl font-semibold mb-4">
              {isAddModalOpen ? 'Add Employee' : 'Edit Employee'}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block">Name</label>
                <input
                  type="text"
                  name="name"
                  value={isAddModalOpen ? newEmployee.name : selectedEmployee.name}
                  onChange={(e) => handleInputChange(e, !isAddModalOpen)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Role</label>
                <select
                  name="role"
                  value={isAddModalOpen ? newEmployee.role : selectedEmployee.role}
                  onChange={(e) => handleInputChange(e, !isAddModalOpen)}
                  className="w-full px-4 py-2 border rounded"
                >
                  <option value="">Select Role</option>
                  <option value="Pharmacist">Pharmacist</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>
              <div>
                <label className="block">Hired Date</label>
                <input
                  type="date"
                  name="hired"
                  value={isAddModalOpen ? newEmployee.hired : selectedEmployee.hired}
                  onChange={(e) => handleInputChange(e, !isAddModalOpen)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <button
                type="button"
                onClick={isAddModalOpen ? handleAddEmployee : handleUpdateEmployee}
                className="w-full py-2 bg-[#5B6EB7] text-white rounded hover:bg-blue-600"
              >
                {isAddModalOpen ? 'Add Employee' : 'Update Employee'}
              </button>
              <button
                type="button"
                onClick={isAddModalOpen ? closeAddModal : closeEditModal}
                className="w-full py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mt-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageEmployees;
