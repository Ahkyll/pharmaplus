import React, { useState } from 'react';

function OrderPage() {
  // Sales data for 2024-12-02
  const salesData = [
    { productName: 'Strepsils Dry Cough Lozenge', quantitySold: 5, price: 100, totalSales: 500 },
    { productName: 'Dermatrix Ultra Gel 15g', quantitySold: 1, price: 415, totalSales: 415 },
    { productName: 'Dulcolax Tablet 5mg', quantitySold: 1, price: 101, totalSales: 101 },
  ];

  const [discount, setDiscount] = useState(0); // Discount (percentage)
  const [payment, setPayment] = useState(""); // Payment amount
  const [change, setChange] = useState(0); // Change to return

  // Calculate total sales for the day
  const calculateTotalSales = () => {
    return salesData.reduce((sum, item) => sum + item.totalSales, 0);
  };

  // Apply discount to the total sales
  const applyDiscount = (totalSales) => {
    return totalSales - (totalSales * discount) / 100;
  };

  // Handle payment and calculate change
  const handlePaymentChange = (e) => {
    const paymentAmount = parseFloat(e.target.value);
    setPayment(paymentAmount);

    const totalSales = applyDiscount(calculateTotalSales());
    if (paymentAmount >= totalSales) {
      setChange(paymentAmount - totalSales);
    } else {
      setChange(0);
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4 text-center">Sales Receipt for 2024-12-02</h1>

      {/* Sales Data */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Items Sold</h2>
        <ul className="space-y-4">
          {salesData.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span className="text-sm sm:text-base">{item.productName}</span>
              <span className="text-sm sm:text-base">
                {item.quantitySold} x ₱{item.price} = ₱{item.totalSales}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Discount Section */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Discount</h2>
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-40"
            placeholder="Discount (%)"
          />
          <span className="text-lg font-semibold mt-2 sm:mt-0">Discount: {discount}%</span>
        </div>
      </div>

      {/* Total and Payment Section */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Total & Payment</h2>

        {/* Total Sales */}
        <div className="flex justify-between mb-4 text-sm sm:text-base">
          <span>Total Sales</span>
          <span>₱{calculateTotalSales()}</span>
        </div>

        {/* Discounted Total Sales */}
        <div className="flex justify-between mb-4 text-sm sm:text-base">
          <span>Discounted Sales</span>
          <span>₱{applyDiscount(calculateTotalSales()).toFixed(2)}</span>
        </div>

        {/* Payment Input */}
        <div className="flex justify-between mb-4 text-sm sm:text-base">
          <input
            type="number"
            value={payment}
            onChange={handlePaymentChange}
            className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-40"
            placeholder="Enter Payment Amount"
          />
          <span className="text-lg font-semibold">Paid: ₱{payment}</span>
        </div>

        {/* Change */}
        <div className="flex justify-between text-sm sm:text-base">
          <span>Change</span>
          <span
            className={`text-lg font-semibold ${change < 0 ? 'text-red-500' : 'text-green-500'}`}
          >
            ₱{change < 0 ? 'Insufficient funds' : change.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="text-center">
        <button
          className="px-6 py-2 bg-[#5B6EB7] text-white rounded-lg"
          onClick={() => alert('Sales Confirmed!')}
        >
          Confirm Sales
        </button>
      </div>
    </div>
  );
}

export default OrderPage;
