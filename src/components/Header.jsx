import React, { useState, useEffect } from 'react';
import { FaBell, FaBars } from 'react-icons/fa';
import Sidebar from './SideBar';
function Header({ title, role }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [isAdminDashboard, setIsAdminDashboard] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleNotif = () => {
    setNotifOpen(!notifOpen);
  };


  useEffect(() => {
    if (window.location.pathname === "/admin-dashboard") {
      setIsAdminDashboard(true);
    } else {
      setIsAdminDashboard(false);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#5B6EB7] text-white py-4 px-6 shadow flex items-center justify-between z-50">
      {title !== "/admin-dashboard" && (
        <div className="flex items-center space-x-3 cursor-pointer" onClick={toggleMenu}>
          <FaBars className="text-2xl text-white" />
        </div>
      )}


      <div className="flex items-center space-x-6">
        <h1 className="text-2xl font-semibold">{title}</h1>

        <div className="relative cursor-pointer" onClick={toggleNotif}>
          <FaBell className="text-2xl" />
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            3
          </span>

          {notifOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-3 z-10">
              <h3 className="font-semibold text-lg mb-2">Notifications</h3>
              <ul>
                <li className="py-1 border-b text-sm">One medicine is out of stock.</li>
                <li className="py-1 border-b text-sm">Transaction 001 is saved</li>
              </ul>


              <button
                onClick={() => {
                  console.log("Marked all as read");
                }}
                className="mt-4 w-full py-2 bg-[#5B6EB7] text-white rounded-md text-sm"
              >
                Mark All as Read
              </button>
            </div>
          )}
        </div>
      </div>


      <Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} role={role} isAdminDashboard={isAdminDashboard} />
    </header>
  );
}

export default Header;
