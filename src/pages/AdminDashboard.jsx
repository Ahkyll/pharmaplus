import React from 'react';
import { Link } from 'react-router';
import { FaUsers, FaClipboardList, FaCogs, FaBoxOpen, FaExchangeAlt, FaUserTie } from 'react-icons/fa';

function AdminDashboard() {
  const quickAccessItems = [
    {
      icon: <FaUsers size={40} className="text-blue-500 mb-2" />,
      title: "Manage Employee",
      link: "/manage-employees",
    },
    {
      icon: <FaClipboardList size={40} className="text-green-500 mb-2" />,
      title: "View Sales",
      link: "/manage-sales",
    },
    {
      icon: <FaCogs size={40} className="text-purple-500 mb-2" />,
      title: "Suppliers",
      link: "/manage-suppliers",
    },
    {
      icon: <FaBoxOpen size={40} className="text-orange-500 mb-2" />,
      title: "Products",
      link: "/manage-products",
    },
    {
      icon: <FaExchangeAlt size={40} className="text-teal-500 mb-2" />,
      title: "Transactions",
      link: "/manage-transactions",
    },
    {
      icon: <FaUserTie size={40} className="text-teal-500 mb-2" />,
      title: "Profile",
      link: "/admin-profile",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100r">
      <div className="p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-center">
          Welcome Zoren Admin
        </h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {quickAccessItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center flex flex-col items-center"
            >
              {item.icon}
              <h3 className="font-semibold text-lg sm:text-xl mb-2">{item.title}</h3>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
