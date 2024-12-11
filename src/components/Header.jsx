import React, { useState, useEffect } from 'react';
import { FaBell, FaBars } from 'react-icons/fa'; // For notification and sidebar menu icons
import Sidebar from './SideBar'; // Import the Sidebar component

function Header({ title, role }) {
  const [menuOpen, setMenuOpen] = useState(false); // Controls sidebar menu visibility
  const [notifOpen, setNotifOpen] = useState(false); // Controls notification dropdown visibility
  const [isAdminDashboard, setIsAdminDashboard] = useState(false); // Track if the current page is admin dashboard

  // Toggle sidebar menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle notification dropdown
  const toggleNotif = () => {
    setNotifOpen(!notifOpen);
  };

  // Check if the current page is the admin dashboard
  useEffect(() => {
    if (window.location.pathname === "/admin-dashboard") {
      setIsAdminDashboard(true);
    } else {
      setIsAdminDashboard(false);
    }
  }, []);

  return (
    <header className="bg-[#5B6EB7] text-white py-4 px-6 shadow flex items-center justify-between">
      {/* Left Section: Sidebar Menu Button (conditionally rendered based on role and title) */}
      {title !== "/admin-dashboard" && (
        <div className="flex items-center space-x-3 cursor-pointer" onClick={toggleMenu}>
          <FaBars className="text-2xl text-white" /> {/* Sidebar toggle icon */}
        </div>
      )}

      {/* Right Section: Title */}
      <div className="flex items-center space-x-6">
        <h1 className="text-2xl font-semibold">{title}</h1>

        {/* Notification Icon with Dropdown */}
        <div className="relative cursor-pointer" onClick={toggleNotif}>
          <FaBell className="text-2xl" />
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            3
          </span>

          {/* Notification Dropdown Menu */}
          {notifOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-3 z-10">
              <h3 className="font-semibold text-lg mb-2">Notifications</h3>
              <ul>
                <li className="py-1 border-b text-sm">One medicine is out of stock.</li>
                <li className="py-1 border-b text-sm">Transaction 001 is saved</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Component */}
      <Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} role={role} isAdminDashboard={isAdminDashboard} />
    </header>
  );
}

export default Header;
