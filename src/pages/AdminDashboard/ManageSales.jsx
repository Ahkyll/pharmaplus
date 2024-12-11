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
    { item: 'Medicine A', quantity: 10, price: 500, date: '2024-12-10' },
    { item: 'Medicine B', quantity: 5, price: 700, date: '2024-12-10' },
    { item: 'Medicine C', quantity: 7, price: 400, date: '2024-12-10' },
    { item: 'Medicine A', quantity: 15, price: 500, date: '2024-11-10' },
    { item: 'Medicine B', quantity: 3, price: 700, date: '2024-11-10' },
    { item: 'Medicine C', quantity: 5, price: 400, date: '2024-11-15' },
  ]);

  const [timePeriod, setTimePeriod] = useState('monthly');
  const [newItem, setNewItem] = useState({ item: '', quantity: '', price: '', date: '' });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  // Function to handle adding a new sale item
  const addItem = () => {
    setItemsSold([...itemsSold, newItem]);
    setNewItem({ item: '', quantity: '', price: '', date: '' });
  };

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

  // Prepare sales data for the chart based on the selected time period
  const salesData = {
    monthly: {
      labels: ['Nov', 'Dec'],
      datasets: [
        {
          label: 'Total Sales (₱)',
          data: [28000, 24500], // Total sales for Nov and Dec
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Data',
      },
    },
  };

  // Display the items sold for the selected time period (monthly in this case)
  const getItemsForTimePeriod = () => {
    if (timePeriod === 'monthly') {
      return itemsSold.filter((item) => {
        const month = new Date(item.date).getMonth(); // Get the month from the date
        return month === 10 || month === 11; // Filter for November (10) and December (11)
      });
    }
    return itemsSold;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-6">Manage Sales</h1>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setTimePeriod('monthly')}
          className="px-4 py-2 bg-[#5B6EB7] text-white rounded"
        >
          Monthly
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
            {getItemsForTimePeriod().map((item, index) => (
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

      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <div className="overflow-x-auto">
          <Bar data={salesData.monthly} options={options} />
        </div>
      </div>
    </div>
  );
}

export default ManageSales;
