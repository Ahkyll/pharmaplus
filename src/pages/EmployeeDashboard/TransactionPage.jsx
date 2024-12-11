import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import styles for the calendar

function TransactionPage() {
  // Sample transactions for multiple dates with unique transaction IDs
  const transactionsData = {
    '2024-12-01': [
      {
        transactionId: 'T001',
        products: [
          { productName: 'RiteMED Ascorbic Acid 500mg (Vitamin C)', quantitySold: 12, price: 225.50, totalSales: 2706 },
          { productName: 'Strepsils Dry Cough Lozenge', quantitySold: 9, price: 100, totalSales: 900 },
        ],
        totalSales: 2706 + 900, // Total sales for this transaction
        totalQuantity: 12 + 9, // Total quantity sold for this transaction
      },
      {
        transactionId: 'T002',
        products: [
          { productName: 'RiteMED Ascorbic Acid 500mg (Vitamin C)', quantitySold: 8, price: 225.50, totalSales: 1804 },
          { productName: 'Strepsils Dry Cough Lozenge', quantitySold: 6, price: 100, totalSales: 600 },
        ],
        totalSales: 1804 + 600, // Total sales for this transaction
        totalQuantity: 8 + 6, // Total quantity sold for this transaction
      },
    ],
    '2024-12-02': [
      {
        transactionId: 'T003',
        products: [
          { productName: 'Strepsils Dry Cough Lozenge', quantitySold: 10, price: 100, totalSales: 1000 },
          { productName: 'Dermatrix Ultra Gel 15g', quantitySold: 3, price: 415, totalSales: 1245 },
          { productName: 'Dulcolax Tablet 5mg', quantitySold: 1, price: 101, totalSales: 101 },
        ],
        totalSales: 1000 + 1245 + 101, // Total sales for this transaction
        totalQuantity: 10 + 3 + 1, // Total quantity sold for this transaction
      },
    ],
    // Add more data as needed
  };

  const [selectedDate, setSelectedDate] = useState(new Date()); // State for selected date
  const formattedDate = selectedDate.toLocaleDateString('en-CA'); // Format date to YYYY-MM-DD

  // Get the transactions for the selected date
  const transactions = transactionsData[formattedDate] || [];

  // Calculate total sales and total quantity for the selected day
  const calculateTotalSales = () => {
    return transactions.reduce((sum, transaction) => sum + transaction.totalSales, 0);
  };

  const calculateTotalQuantity = () => {
    return transactions.reduce((sum, transaction) => sum + transaction.totalQuantity, 0);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Transactions</h1>

      {/* Calendar for selecting date */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Select Date</h2>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="rounded-lg shadow"
        />
      </div>

      {/* Transactions for Selected Date */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Transactions for {formattedDate}
        </h2>
        {transactions.length > 0 ? (
          <ul className="space-y-4">
            {transactions.map((transaction, index) => (
              <li key={index} className="border-b pb-4">
                <h3 className="text-lg font-semibold">Transaction ID: {transaction.transactionId}</h3>
                <ul className="space-y-2 mt-2">
                  {transaction.products.map((product, productIndex) => (
                    <li key={productIndex} className="flex justify-between items-center">
                      <div>
                        <p className="text-sm">{product.productName}</p>
                        <p className="text-xs text-gray-500">
                          Quantity Sold: {product.quantitySold} @ ₱{product.price} each
                        </p>
                      </div>
                      <p className="font-semibold text-blue-500">₱{product.totalSales}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex justify-between text-lg">
                  <span className="font-semibold">Total Sales:</span>
                  <span className="font-semibold text-green-500">₱{transaction.totalSales}</span>
                </div>
                <div className="flex justify-between text-lg mt-2">
                  <span className="font-semibold">Total Quantity Sold:</span>
                  <span className="font-semibold text-blue-500">{transaction.totalQuantity}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No transactions available for this date.</p>
        )}
      </div>

      {/* Total Sales and Quantity Summary */}
      {transactions.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="flex justify-between text-lg">
            <span>Total Sales for {formattedDate}:</span>
            <span className="font-semibold text-green-500">₱{calculateTotalSales()}</span>
          </div>
          <div className="flex justify-between text-lg mt-2">
            <span>Total Quantity Sold for {formattedDate}:</span>
            <span className="font-semibold text-blue-500">{calculateTotalQuantity()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default TransactionPage;
