import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function TransactionPage() {
  const transactionsData = {
    '2024-12-01': [
      {
        transactionId: 'T001',
        products: [
          { productName: 'RiteMED Ascorbic Acid 500mg (Vitamin C)', quantitySold: 12, price: 225.50, totalSales: 2706 },
          { productName: 'Strepsils Dry Cough Lozenge', quantitySold: 9, price: 100, totalSales: 900 },
        ],
        totalSales: 2706 + 900,
        totalQuantity: 12 + 9,
      },
      {
        transactionId: 'T002',
        products: [
          { productName: 'RiteMED Ascorbic Acid 500mg (Vitamin C)', quantitySold: 8, price: 225.50, totalSales: 1804 },
          { productName: 'Strepsils Dry Cough Lozenge', quantitySold: 6, price: 100, totalSales: 600 },
        ],
        totalSales: 1804 + 600,
        totalQuantity: 8 + 6,
      },
    ],
    '2024-12-14': [
      {
        transactionId: 'T003',
        products: [
          { productName: 'Strepsils Dry Cough Lozenge', quantitySold: 5, price: 100, totalSales: 500 },
          { productName: 'Dermatrix Ultra Gel 15g', quantitySold: 1, price: 415, totalSales: 415 },
          { productName: 'Dulcolax Tablet 5mg', quantitySold: 1, price: 101, totalSales: 101 },
        ],
        totalSales: 500 + 415 + 101,
        totalQuantity: 5 + 1 + 1,
      },
    ],

  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const formattedDate = selectedDate.toLocaleDateString('en-CA');


  const transactions = transactionsData[formattedDate] || [];


  const calculateTotalSales = () => {
    return transactions.reduce((sum, transaction) => sum + transaction.totalSales, 0);
  };

  const calculateTotalQuantity = () => {
    return transactions.reduce((sum, transaction) => sum + transaction.totalQuantity, 0);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 pt-2">Transactions</h1>

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
