import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { TrashIcon } from '@heroicons/react/24/outline';

function OrderPage() {
  const [salesData, setSalesData] = useState([
    { productName: 'Strepsils Dry Cough Lozenge', quantitySold: 5, price: 100, totalSales: 500 },
    { productName: 'Dermatrix Ultra Gel 15g', quantitySold: 1, price: 415, totalSales: 415 },
    { productName: 'Dulcolax Tablet 5mg', quantitySold: 1, price: 101, totalSales: 101 },
  ]);

  const [discount, setDiscount] = useState(0);
  const [payment, setPayment] = useState("");
  const [change, setChange] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const calculateTotalSales = () => {
    return salesData.reduce((sum, item) => sum + item.totalSales, 0);
  };

  const applyDiscount = (totalSales) => {
    return totalSales - (totalSales * discount) / 100;
  };

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

  const deleteProduct = (index) => {
    setSalesData(prevData => prevData.filter((_, i) => i !== index));
  };

  const handleQuantityChange = (index, newQuantity) => {
    setSalesData(prevData => {
      const updatedData = [...prevData];
      updatedData[index].quantitySold = newQuantity;
      updatedData[index].totalSales = updatedData[index].quantitySold * updatedData[index].price;
      return updatedData;
    });
  };

  const handleDiscountSelection = (discountPercentage) => {
    setDiscount(discountPercentage);
  };

  const handleConfirmSales = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      navigate('/transactions');
    }, 2000);
  };

  return (
    <div className="min-h-screen p-6 sm:p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 pt-2">Sales Receipt for 2024-12-14</h1>

      {/* Sales Data */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Items Sold</h2>
        <ul className="space-y-4">
          {salesData.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="text-sm sm:text-base">{item.productName}</span>
              <span className="text-sm sm:text-base">
                {item.quantitySold} x ₱{item.price} = ₱{item.totalSales}
              </span>
              <input
                type="number"
                value={item.quantitySold}
                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                className="w-16 px-2 py-1 border border-gray-300 rounded-md text-sm ml-4"
              />
              <button
                onClick={() => deleteProduct(index)}
                className="text-red-500 text-sm ml-4"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Discount Section */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Discount</h2>
        <div className="space-x-4">
          <button
            onClick={() => handleDiscountSelection(10)}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-[#5B6EB7] text-white"
          >
            Senior Citizen / PWD (10%)
          </button>
          <button
            onClick={() => handleDiscountSelection(0)}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-[#5B6EB7] text-white"
          >
            No Discount
          </button>
        </div>
        <div className="mt-4">
          <span className="text-lg font-semibold">Discount: {discount}%</span>
        </div>
      </div>

      {/* Total and Payment Section */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Total & Payment</h2>
        <div className="flex justify-between mb-4 text-sm sm:text-base">
          <span>Total Sales</span>
          <span>₱{calculateTotalSales()}</span>
        </div>
        <div className="flex justify-between mb-4 text-sm sm:text-base">
          <span>Discounted Sales</span>
          <span>₱{applyDiscount(calculateTotalSales()).toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4 text-sm sm:text-base">
          <input
            type="number"
            value={payment}
            onChange={handlePaymentChange}
            className="px-4 py-2 border border-gray-300 rounded-md w-8/12 sm:w-40"
            placeholder="Enter Payment Amount"
          />
          <span className="text-lg font-semibold">Paid: ₱{payment}</span>
        </div>
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
          onClick={handleConfirmSales}
        >
          Confirm Sales
        </button>
      </div>

      {/* Confirmation Notification */}
      {showConfirmation && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md">
            Sales Confirmed!
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderPage;
