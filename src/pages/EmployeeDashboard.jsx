import React from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate
import Calendar from '../components/Calendar'; // Create a reusable calendar component
import { FaUserTie, FaCalendarCheck, FaClipboardList } from 'react-icons/fa';

function EmployeeDashboard() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation Buttons */}
      <section className="justify-center item gap-1 pt-8 grid grid-cols-3 lg:grid-cols-3 m-2">
        <NavButton label="Products" onClick={() => navigate('/products')} />
        <NavButton label="Sales" onClick={() => navigate('/sales')} />
        <NavButton label="Order" onClick={() => navigate('/orders')} />
      </section>

      {/* Content */}
      <main className="flex-grow p-6 space-y-6">
        {/* Cards and Calendar in Responsive Layout */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 pt-4">

          {/* Calendar Section */}
          <div>
            <Calendar />
          </div>

          {/* Cards Section */}
          <div className="space-y-4">
            <Card
              title="Profile"
              description="View and manage details."
              icon={<FaUserTie size={32} className="text-blue-500" />}
              onClick={() => navigate('/employee/information')} // Navigate to Employee Information page
            />
            <Card
              title="Attendance"
              description="Track my attendance."
              icon={<FaCalendarCheck size={32} className="text-green-500" />}
              onClick={() => navigate('/employee/attendance')} // Navigate to Attendance page
            />
          </div>

        </section>
      </main>
    </div>
  );
}

function Card({ title, description, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-4 bg-white shadow-md rounded-lg flex items-center space-x-4 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div>{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function NavButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-[#5B6EB7] text-white rounded-md text-m font-bold text-center break-words whitespace-wrap hover:bg-[#3b4d8f] transition-colors"
    >
      {label}
    </button>
  );
}

export default EmployeeDashboard;
