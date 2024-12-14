import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function SalesPage() {
  const salesDataByDate = {
    '2024-12-01': [
      { productName: 'RiteMED Ascorbic Acid 500mg (Vitamin C)', quantitySold: 20, price: 225.50, totalSales: 4510 },
      { productName: 'Strepsils Dry Cough Lozenge', quantitySold: 15, price: 100, totalSales: 1500 },
    ],
    '2024-12-14': [
      { productName: 'Strepsils Dry Cough Lozenge', quantitySold: 5, price: 100, totalSales: 500 },
      { productName: 'Dermatrix Ultra Gel 15g', quantitySold: 1, price: 415, totalSales: 415 },
      { productName: 'Dulcolax Tablet 5mg', quantitySold: 1, price: 101, totalSales: 101 },
    ],
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [salesData, setSalesData] = useState([]);

  // Fetch sales data for the selected date
  useEffect(() => {
    const dateKey = selectedDate.toLocaleDateString('en-CA'); // Formats date as YYYY-MM-DD
    setSalesData(salesDataByDate[dateKey] || []);
  }, [selectedDate]);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 pt-2">Sales Data</h1>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar Section */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Select a Date</h2>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            className="w-full"
          />
        </div>

        {/* Sales Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Sales Details</h2>
          <table className="min-w-full table-auto">
            <thead className="bg-[#5B6EB7] text-white">
              <tr>
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Quantity Sold</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {salesData.length > 0 ? (
                salesData.map((sale, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{sale.productName}</td>
                    <td className="py-2 px-4">{sale.quantitySold}</td>
                    <td className="py-2 px-4">₱{sale.price}</td>
                    <td className="py-2 px-4">₱{sale.totalSales}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-4 px-4 text-center">
                    No sales data for the selected date.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Section */}
      <section className="mt-6 bg-[#5B6EB7] rounded-full">
        <h2 className="text-2xl font-semibold flex justify-center items-center">Total Sales</h2>
        <p className="text-xl font-semibold text-white flex justify-center items-center">
        ₱ {salesData.reduce((total, sale) => total + sale.totalSales, 0)}
        </p>
      </section>
    </div>
  );
}

export default SalesPage;
