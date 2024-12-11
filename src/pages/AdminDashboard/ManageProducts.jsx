import React, { useState } from 'react';

function ManageProducts() {
  const [medicines, setMedicines] = useState([
    { 
      id: 1, 
      name: 'Paracetamol', 
      price: 10, 
      category: 'Painkiller', 
      manufacturer: 'PharmaX', 
      supplier: 'MediSupply', 
      expiration_date: '2025-12-31', 
      stock: 150, 
      image: '/images/logo.png' 
    },
    { 
      id: 2, 
      name: 'Ibuprofen', 
      price: 15, 
      category: 'Anti-inflammatory', 
      manufacturer: 'HealthCorp', 
      supplier: 'MedMart', 
      expiration_date: '2024-06-15', 
      stock: 80, 
      image: '/images/logo.png' 
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [newMedicine, setNewMedicine] = useState({
    name: '',
    price: '',
    category: '',
    manufacturer: '',
    supplier: '',
    expiration_date: '',
    stock: '',
    image: '',
  });

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openEditModal = (medicine) => {
    setSelectedMedicine(medicine);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => setIsEditModalOpen(false);

  const handleInputChange = (e, isEdit = false) => {
    const { name, value } = e.target;
    if (isEdit) {
      setSelectedMedicine({ ...selectedMedicine, [name]: value });
    } else {
      setNewMedicine({ ...newMedicine, [name]: value });
    }
  };

  const handleAddMedicine = () => {
    const nextId = medicines.length + 1;
    setMedicines([...medicines, { id: nextId, ...newMedicine }]);
    setNewMedicine({
      name: '',
      price: '',
      category: '',
      manufacturer: '',
      supplier: '',
      expiration_date: '',
      stock: '',
      image: '',
    });
    closeAddModal();
  };

  const handleUpdateMedicine = () => {
    const updatedMedicines = medicines.map((medicine) =>
      medicine.id === selectedMedicine.id ? selectedMedicine : medicine
    );
    setMedicines(updatedMedicines);
    closeEditModal();
  };

  const handleDeleteMedicine = (id) => {
    const filteredMedicines = medicines.filter((medicine) => medicine.id !== id);
    setMedicines(filteredMedicines);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-6">Manage Products</h1>
      <button
        onClick={openAddModal}
        className="mb-4 px-4 py-2 bg-[#5B6EB7] text-white rounded hover:bg-blue-600"
      >
        Add Products
      </button>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className='bg-[#5B6EB7] text-white'>
              <th className="border-b p-4">ID</th>
              <th className="border-b p-4">Name</th>
              <th className="border-b p-4">Price (₱)</th>
              <th className="border-b p-4">Category</th>
              <th className="border-b p-4">Manufacturer</th>
              <th className="border-b p-4">Supplier</th>
              <th className="border-b p-4">Expiration Date</th>
              <th className="border-b p-4">Stock</th>
              <th className="border-b p-4">Image</th>
              <th className="border-b p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine) => (
              <tr key={medicine.id} className="hover:bg-gray-100">
                <td className="border-b p-4">{medicine.id}</td>
                <td className="border-b p-4">{medicine.name}</td>
                <td className="border-b p-4">₱{medicine.price}</td>
                <td className="border-b p-4">{medicine.category}</td>
                <td className="border-b p-4">{medicine.manufacturer}</td>
                <td className="border-b p-4">{medicine.supplier}</td>
                <td className="border-b p-4">{medicine.expiration_date}</td>
                <td className="border-b p-4">{medicine.stock}</td>
                <td className="border-b p-4">
                  <img src={medicine.image} alt={medicine.name} className="w-20 h-20 object-cover" />
                </td>
                <td className="border-b p-4">
                  <button
                    onClick={() => openEditModal(medicine)}
                    className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteMedicine(medicine.id)}
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80">
            <h2 className="text-xl font-semibold mb-4">Add Medicine</h2>
            <form className="space-y-4">
              <div>
                <label className="block">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newMedicine.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Price (₱)</label>
                <input
                  type="number"
                  name="price"
                  value={newMedicine.price}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Category</label>
                <input
                  type="text"
                  name="category"
                  value={newMedicine.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Manufacturer</label>
                <input
                  type="text"
                  name="manufacturer"
                  value={newMedicine.manufacturer}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  value={newMedicine.supplier}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Expiration Date</label>
                <input
                  type="date"
                  name="expiration_date"
                  value={newMedicine.expiration_date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={newMedicine.stock}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={newMedicine.image}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <button
                type="button"
                onClick={handleAddMedicine}
                className="w-full py-2 bg-[#5B6EB7] text-white rounded hover:bg-blue-600"
              >
                Add Medicine
              </button>
              <button
                type="button"
                onClick={closeAddModal}
                className="w-full py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mt-4"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {isEditModalOpen && selectedMedicine && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80">
            <h2 className="text-xl font-semibold mb-4">Edit Medicine</h2>
            <form className="space-y-4">
              <div>
                <label className="block">Name</label>
                <input
                  type="text"
                  name="name"
                  value={selectedMedicine.name}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Price (₱)</label>
                <input
                  type="number"
                  name="price"
                  value={selectedMedicine.price}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Category</label>
                <input
                  type="text"
                  name="category"
                  value={selectedMedicine.category}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Manufacturer</label>
                <input
                  type="text"
                  name="manufacturer"
                  value={selectedMedicine.manufacturer}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  value={selectedMedicine.supplier}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Expiration Date</label>
                <input
                  type="date"
                  name="expiration_date"
                  value={selectedMedicine.expiration_date}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={selectedMedicine.stock}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={selectedMedicine.image}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <button
                type="button"
                onClick={handleUpdateMedicine}
                className="w-full py-2 bg-[#5B6EB7] text-white rounded"
              >
                Update Medicine
              </button>
              <button
                type="button"
                onClick={closeEditModal}
                className="w-full py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mt-4"
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

export default ManageProducts;
