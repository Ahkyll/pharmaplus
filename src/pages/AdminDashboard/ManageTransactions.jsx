import React, { useState } from 'react';

function ManageTransactions() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '2024-12-07',
      employee: 'Zoren OS',
      amount: '₱150.00',
      products: [
        { name: 'Ascorbic Acid', quantity: 2, price: '₱50.00' },
        { name: 'Vitamin C', quantity: 1, price: '₱50.00' }
      ],
      items: 3,
    },
    {
      id: 2,
      date: '2024-12-07',
      employee: 'Zoren OS',
      amount: '₱220.00',
      products: [
        { name: 'Strepsils', quantity: 5, price: '₱44.00' }
      ],
      items: 5,
    },
    {
      id: 3,
      date: '2024-12-06',
      employee: 'Zoren OS',
      amount: '₱75.00',
      products: [
        { name: 'Biogesic', quantity: 2, price: '₱37.50' }
      ],
      items: 2,
    },
  ]);

  const [editTransaction, setEditTransaction] = useState(null);

  const handleDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const handleEdit = (id) => {
    const transactionToEdit = transactions.find((transaction) => transaction.id === id);
    setEditTransaction(transactionToEdit);
  };

  const handleChange = (e, index, field) => {
    const updatedTransaction = { ...editTransaction };
    if (field === 'products') {
      updatedTransaction.products[index][e.target.name] = e.target.value;
    } else {
      updatedTransaction[field] = e.target.value;
    }
    setEditTransaction(updatedTransaction);
  };

  const handleSave = () => {
    setTransactions(transactions.map((transaction) =>
      transaction.id === editTransaction.id ? editTransaction : transaction
    ));
    setEditTransaction(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <h1 className="text-2xl font-semibold mb-6">Manage Transactions</h1>
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
              {transactions.map((transaction) => (
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
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-4/5 sm:w-1/2">
            <h2 className="text-2xl mb-4">Edit Transaction</h2>
            <div className="mb-4">
              <label className="block mb-2">Date</label>
              <input
                type="text"
                value={editTransaction.date}
                onChange={(e) => handleChange(e, null, 'date')}
                className="w-full px-4 py-2 border text-sm sm:text-base"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Employee</label>
              <input
                type="text"
                value={editTransaction.employee}
                onChange={(e) => handleChange(e, null, 'employee')}
                className="w-full px-4 py-2 border text-sm sm:text-base"
              />
            </div>
            {editTransaction.products.map((product, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg">Product {index + 1}</h3>
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
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-500 text-white rounded mr-2 text-xs sm:text-sm"
              >
                Save
              </button>
              <button
                onClick={() => setEditTransaction(null)}
                className="px-6 py-2 bg-gray-500 text-white rounded text-xs sm:text-sm"
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
