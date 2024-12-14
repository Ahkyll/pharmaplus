import React, { useState } from 'react';

function ManageSuppliers() {
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'MedMart', location: 'Address 1', contact: 'sup1@example.com', supplied: '500 stocks', price: '10000' },
    { id: 2, name: 'MediSupply', location: 'Address 2', contact: 'sup2@example.com', supplied: '500 stocks', price: '20000' },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [newSupplier, setNewSupplier] = useState({
    name: '',
    location: '',
    contact: '',
    price: '',
  });

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openEditModal = (supplier) => {
    setSelectedSupplier(supplier);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => setIsEditModalOpen(false);

  const handleInputChange = (e, isEdit = false) => {
    const { name, value } = e.target;
    if (isEdit) {
      setSelectedSupplier({ ...selectedSupplier, [name]: value });
    } else {
      setNewSupplier({ ...newSupplier, [name]: value });
    }
  };

  const handleAddSupplier = () => {
    const nextId = suppliers.length + 1;
    setSuppliers([...suppliers, { id: nextId, ...newSupplier }]);
    setNewSupplier({ name: '', location: '', contact: '', price: '' });
    setNewSupplier({ name: '', location: '', contact: '', supplied: '', price: '' });
    setNewSupplier({ name: '', location: '', contact: '', price: '' });
    closeAddModal();
  };

  const handleUpdateSupplier = () => {
    const updatedSuppliers = suppliers.map((supplier) =>
      supplier.id === selectedSupplier.id ? selectedSupplier : supplier
    );
    setSuppliers(updatedSuppliers);
    closeEditModal();
  };

  const handleDeleteSupplier = (id) => {
    setSuppliers(suppliers.filter((supplier) => supplier.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 pt-2">Manage Suppliers</h1>

      <button
        onClick={openAddModal}
        className="mb-4 px-4 py-2 bg-[#5B6EB7] text-white rounded hover:bg-blue-600"
      >
        Add Supplier
      </button>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className='bg-[#5B6EB7] text-white'>
            <tr>
              <th className="border-b p-4">ID</th>
              <th className="border-b p-4">Name</th>
              <th className="border-b p-4">Location</th>
              <th className="border-b p-4">Contact</th>
              <th className="border-b p-4">Supplied</th>
              <th className="border-b p-4">Price (₱)</th>
              <th className="border-b p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="hover:bg-gray-100">
                <td className="border-b p-4">{supplier.id}</td>
                <td className="border-b p-4">{supplier.name}</td>
                <td className="border-b p-4">{supplier.location}</td>
                <td className="border-b p-4">{supplier.contact}</td>
                <td className="border-b p-4">{supplier.supplied}</td>
                <td className="border-b p-4">₱{supplier.price}</td>
                <td className="border-b p-4 ">
                  <button
                    onClick={() => openEditModal(supplier)}
                    className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteSupplier(supplier.id)}
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

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center pt-14">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 sm:w-1/2 md:w-1/3 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Add Supplier</h2>
            <form className="space-y-4">
              <div>
                <label className="block">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newSupplier.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Location</label>
                <input
                  type="text"
                  name="location"
                  value={newSupplier.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Contact</label>
                <input
                  type="email"
                  name="contact"
                  value={newSupplier.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Supplied</label>
                <input
                  type="text"
                  name="supplied"
                  value={newSupplier.supplied}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Price (₱)</label>
                <input
                  type="number"
                  name="price"
                  value={newSupplier.price}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <button
                type="button"
                onClick={handleAddSupplier}
                className="w-full py-2 bg-[#5B6EB7] text-white rounded hover:bg-blue-600"
              >
                Add Supplier
              </button>
              <button
                type="button"
                onClick={closeAddModal}
                className="w-full py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mt-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}


      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center pt-14">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 sm:w-1/2 md:w-1/3 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Edit Supplier</h2>
            <form className="space-y-4">
              <div>
                <label className="block">Name</label>
                <input
                  type="text"
                  name="name"
                  value={selectedSupplier.name}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Location</label>
                <input
                  type="text"
                  name="location"
                  value={selectedSupplier.location}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Contact</label>
                <input
                  type="email"
                  name="contact"
                  value={selectedSupplier.contact}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Supplied</label>
                <input
                  type="text"
                  name="supplied"
                  value={selectedSupplier.supplied}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Price (₱)</label>
                <input
                  type="number"
                  name="price"
                  value={selectedSupplier.price}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>

              <button
                type="button"
                onClick={handleUpdateSupplier}
                className="w-full py-2 bg-[#5B6EB7] text-white rounded"
              >
                Update Supplier
              </button>
              <button
                type="button"
                onClick={closeEditModal}
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

export default ManageSuppliers;
