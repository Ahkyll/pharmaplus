import React, { useState } from 'react';

function ManageTransactions() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '2024-12-01',
      employee: 'Zoren OS',
      amount: '₱3,606.00',
      products: [
        { name: 'RiteMED Ascorbic Acid 500mg (Vitamin C)', quantity: 12, price: '₱225.50' },
        { name: 'Strepsils Dry Cough Lozenge', quantity: 9, price: '₱100.00' }
      ],
      items: 21,
    },
    {
      id: 2,
      date: '2024-12-01',
      employee: 'Zoren OS',
      amount: '₱2,404',
      products: [
        { name: 'RiteMED Ascorbic Acid 500mg (Vitamin C)', quantity: 8, price: '₱225.50' },
        { name: 'Strepsils Dry Cough Lozenge', quantity: 6, price: '₱100.00' }
      ],
      items: 14,
    },
    {
      id: 3,
      date: '2024-12-14',
      employee: 'Zoren OS',
      amount: '₱1,016',
      products: [
        { name: 'Strepsils Dry Cough Lozenge', quantity: 5, price: '₱100.00' },
        { name: 'Dermatrix Ultra Gel 15g', quantity: 1, price: '₱415.00' },
        { name: 'Dulcolax', quantity: 1, price: '₱101.00' }
      ],
      items: 7,
    },
  ]);

  const [editTransaction, setEditTransaction] = useState(null);
  const [filterDate, setFilterDate] = useState('');

  const handleDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const handleEdit = (id) => {
    const transactionToEdit = transactions.find((transaction) => transaction.id === id);
    setEditTransaction({ ...transactionToEdit });
  };

  const handleChange = (e, index, field) => {
    const updatedTransaction = { ...editTransaction };
    if (field === 'products') {
      updatedTransaction.products[index][e.target.name] = e.target.value;
    } else {
      updatedTransaction[e.target.name] = e.target.value;
    }
    setEditTransaction(updatedTransaction);
  };

  const handleSave = () => {
    setTransactions(transactions.map((transaction) =>
      transaction.id === editTransaction.id ? editTransaction : transaction
    ));
    setEditTransaction(null);
  };

  const filteredTransactions = filterDate
    ? transactions.filter((transaction) => transaction.date === filterDate)
    : transactions;

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-6 pt-2">Manage Transactions</h1>

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

      <div className="bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#5B6EB7] text-white">
                <th className="px-2 py-2 sm:px-4 sm:py-2 border text-xs sm:text-sm">Transaction ID</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 border text-xs sm:text-sm">Date</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 border text-xs sm:text-sm">Employee</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 border text-xs sm:text-sm">Amount</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 border text-xs sm:text-sm">Items Sold</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 border text-xs sm:text-sm">Products Sold</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 border text-xs sm:text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="text-center text-sm sm:text-base">
                  <td className="px-2 py-2 sm:px-4 sm:py-2 border">{transaction.id}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2 border">{transaction.date}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2 border">{transaction.employee}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2 border">{transaction.amount}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2 border">{transaction.items}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2 border">
                    {transaction.products.map((product, index) => (
                      <div key={index} className="text-xs sm:text-sm">
                        {product.name} (Qty: {product.quantity}, {product.price} each)
                      </div>
                    ))}
                  </td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2 border">
                    <button
                      onClick={() => handleEdit(transaction.id)}
                      className="px-4 py-2 bg-green-500 text-white rounded mr-2 text-xs sm:text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(transaction.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded text-xs sm:text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editTransaction && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 pt-14">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 sm:w-1/2 md:w-1/3 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Edit Transaction</h2>
            <div className="mb-4">
              <label className="block mb-2">Date</label>
              <input
                type="text"
                name="date"
                value={editTransaction.date}
                onChange={(e) => handleChange(e, null, 'date')}
                className="w-full px-4 py-2 border text-sm sm:text-base"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Employee</label>
              <input
                type="text"
                name="employee"
                value={editTransaction.employee}
                onChange={(e) => handleChange(e, null, 'employee')}
                className="w-full px-4 py-2 border text-sm sm:text-base"
              />
            </div>
            {editTransaction.products.map((product, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">Product {index + 1}</h3>
                <label className="block mb-2">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={(e) => handleChange(e, index, 'products')}
                  className="w-full px-4 py-2 border text-sm sm:text-base"
                />
                <label className="block mb-2">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={product.quantity}
                  onChange={(e) => handleChange(e, index, 'products')}
                  className="w-full px-4 py-2 border text-sm sm:text-base"
                />
                <label className="block mb-2">Price</label>
                <input
                  type="text"
                  name="price"
                  value={product.price}
                  onChange={(e) => handleChange(e, index, 'products')}
                  className="w-full px-4 py-2 border text-sm sm:text-base"
                />
              </div>
            ))}
            <div className=" mt-6">
              <button
                onClick={handleSave}
                className="w-full py-2 bg-[#5B6EB7] text-white rounded"
              >
                Update Transaction
              </button>
              <button
                onClick={() => setEditTransaction(null)}
                className="w-full py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mt-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageTransactions;
