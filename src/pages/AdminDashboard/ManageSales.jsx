import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ManageSales() {
  const [itemsSold, setItemsSold] = useState([
    { item: 'RiteMED Ascorbic Acid 500mg (Vitamin C)', quantity: 12, price: 225.5, date: '2024-12-01' },
    { item: 'Strepsils Dry Cough Lozenge', quantity: 9, price: 100, date: '2024-12-01' },
    { item: 'RiteMED Ascorbic Acid 500mg (Vitamin C)', quantity: 8, price: 225.5, date: '2024-12-01' },
    { item: 'Strepsils Dry Cough Lozenge', quantity: 6, price: 100, date: '2024-12-01' },
    { item: 'Strepsils Dry Cough Lozenge', quantity: 5, price: 100, date: '2024-12-14' },
    { item: 'Dermatrix Ultra Gel 15g', quantity: 1, price: 415, date: '2024-12-14' },
    { item: 'Dulcolax', quantity: 1, price: 101, date: '2024-12-14' },
  ]);

  const [filterDate, setFilterDate] = useState('');
  const [newItem, setNewItem] = useState({ item: '', quantity: '', price: '', date: '' });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);


  // Function to handle deleting an item
  const deleteItem = (index) => {
    setItemsSold(itemsSold.filter((_, i) => i !== index));
  };

  // Function to handle editing an item
  const editItem = (index) => {
    setSelectedItemIndex(index);
    setNewItem(itemsSold[index]); // Pre-fill the form with the item data
    setEditModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleUpdateItem = () => {
    const updatedItems = [...itemsSold];
    updatedItems[selectedItemIndex] = { ...newItem };
    setItemsSold(updatedItems);
    setEditModalOpen(false);
    setNewItem({ item: '', quantity: '', price: '', date: '' });
  };

  // Filter items based on the selected date
  const getItemsForSelectedDate = () => {
    if (filterDate) {
      return itemsSold.filter((item) => item.date === filterDate);
    }
    return itemsSold;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-6">Manage Sales</h1>

      <div className="mb-6 flex flex-col sm:flex-row gap-2">
        <label className="text-lg">Filter by Date:</label>
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="px-4 py-2 border rounded"
        />
        <button
          onClick={() => setFilterDate('')}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Clear Filter
        </button>
      </div>



      <div className="bg-white p-4 rounded-lg shadow-md mb-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Products Sold</h2>
        <table className="w-full table-auto text-sm sm:text-base">
          <thead>
            <tr className="bg-[#5B6EB7] text-white">
              <th className="border px-4 py-2">Products</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Price (₱)</th>
              <th className="border px-4 py-2">Total (₱)</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {getItemsForSelectedDate().map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.item}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">{item.date}</td>
                <td className="border px-4 py-2">{item.price}</td>
                <td className="border px-4 py-2">{item.quantity * item.price}</td>
                <td className="border px-4 py-2 flex flex-wrap gap-2">
                  <button
                    onClick={() => editItem(index)}
                    className="px-6 py-2 bg-green-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteItem(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80">
            <h2 className="text-xl font-semibold mb-4">Edit Sale Item</h2>
            <form className="space-y-4">
              <div>
                <label className="block">Item</label>
                <input
                  type="text"
                  name="item"
                  value={newItem.item}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={newItem.quantity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Price</label>
                <input
                  type="number"
                  name="price"
                  value={newItem.price}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newItem.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <button
                type="button"
                onClick={handleUpdateItem}
                className="w-full py-2 bg-[#5B6EB7] text-white rounded hover:bg-blue-600"
              >
                Update Item
              </button>
              <button
                type="button"
                onClick={() => setEditModalOpen(false)}
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

export default ManageSales;
