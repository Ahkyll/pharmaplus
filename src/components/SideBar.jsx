import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import {
  HomeIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
  ClipboardDocumentListIcon,
  PowerIcon,
  ReceiptPercentIcon,
  UserGroupIcon,
  UsersIcon,
  CogIcon
} from '@heroicons/react/24/outline';

function Sidebar({ menuOpen, toggleMenu, role, isAdminDashboard }) {
  const sidebarRef = useRef(null); // Reference for sidebar
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle when a menu item is clicked
  const handleMenuItemClick = (path) => {
    if (path) {
      navigate(path); // Navigate to the provided path if available
    }
    toggleMenu(); // Close the sidebar after clicking the item
  };

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleMenu(); // Close sidebar if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Cleanup event listener
    };
  }, [toggleMenu]);

  const renderAdminMenu = () => (
    <>
      <div className="flex flex-col items-center space-y-4 bg-white p-4">
        <img
          src="/images/logo.png" // Replace with actual profile picture URL
          alt="Profile"
          className="rounded-full w-40 h-40"
        />
        <h2 className="text-2xl font-bold">Zoren Admin</h2>
      </div>

      <div className="p-6">
        <ul className="text-white text-lg font-semibold">
          <MenuItem icon={<HomeIcon />} label="Home" onClick={() => handleMenuItemClick('/admin-dashboard')} />
          <hr />
          <MenuItem icon={<UsersIcon />} label="Manage Employees" onClick={() => handleMenuItemClick('/manage-employees')} />
          <hr />
          <MenuItem icon={<UserGroupIcon />} label="Manage Suppliers" onClick={() => handleMenuItemClick('/manage-suppliers')} />
          <hr />
          <MenuItem icon={<ArchiveBoxIcon />} label="Manage Products" onClick={() => handleMenuItemClick('/manage-products')} />
          <hr />
          <MenuItem icon={<ReceiptPercentIcon />} label="Manage Transactions" onClick={() => handleMenuItemClick('/manage-transactions')} />
          <hr />
          <MenuItem icon={<CogIcon />} label="Manage Sales" onClick={() => handleMenuItemClick('/manage-sales')} />
          <hr />
        </ul>
      </div>
    </>
  );

  const MenuItem = ({ icon, label, onClick }) => (
    <li className="flex items-center py-2 pt-4" onClick={onClick}>
      {icon && <span className="w-6 h-6 mr-3">{icon}</span>}
      {label}
    </li>
  );
  
  const renderUserMenu = () => (
    <>
      <div className="flex flex-col items-center space-y-4 bg-white p-4">
        <img
          src="/images/azuki.png" // Replace with actual profile picture URL
          alt="Profile"
          className="rounded-full w-40 h-40"
        />
        <h2 className="text-2xl font-bold">Zoren OS</h2>
      </div>
  
      <div className="p-8">
        <ul className="text-white text-lg font-semibold">
          <MenuItem icon={<HomeIcon />} label="Home" onClick={() => handleMenuItemClick('/employee-dashboard')} />
          <hr />
          <MenuItem icon={<ArchiveBoxIcon />} label="Products" onClick={() => handleMenuItemClick('/products')} />
          <hr />
          <MenuItem icon={<ClipboardDocumentListIcon />} label="Orders" onClick={() => handleMenuItemClick('/orders')} />
          <hr />
          <MenuItem icon={<ReceiptPercentIcon />} label="Transactions" onClick={() => handleMenuItemClick('/transactions')} />
          <hr />
          <MenuItem icon={<CurrencyDollarIcon />} label="Sales" onClick={() => handleMenuItemClick('/sales')} />
        </ul>
      </div>
    </>
  );
  

  return (
    menuOpen && (
      <div
        className="fixed left-0 top-0 w-64 bg-[#5B6EB7] h-screen shadow-lg z-20 text-black overflow-y-auto"
        ref={sidebarRef}
      >
        {isAdminDashboard ? renderAdminMenu() : renderUserMenu()}
        {/* Common Logout Menu */}
        <div className="p-8">
          <ul className="text-white text-lg font-semibold">
            <MenuItem icon={<PowerIcon />} label="Logout" onClick={() => handleMenuItemClick('/')} />
          </ul>
        </div>
      </div>
    )
  );
}

export default Sidebar;
