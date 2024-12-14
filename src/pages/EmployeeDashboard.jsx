import React from 'react';
import { useNavigate } from 'react-router';
import Calendar from '../components/Calendar';
import { FaUserTie, FaCalendarCheck } from 'react-icons/fa';

function EmployeeDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <section className="justify-center item gap-1 pt-8 grid grid-cols-3 lg:grid-cols-3 m-2">
        <NavButton label="Products" onClick={() => navigate('/products')} />
        <NavButton label="Sales" onClick={() => navigate('/sales')} />
        <NavButton label="Order" onClick={() => navigate('/orders')} />
      </section>


      <main className="flex-grow p-6 space-y-6">

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 pt-4">


          <div>
            <Calendar />
          </div>


          <div className="space-y-4">
            <Card
              title="Profile"
              description="View and manage details."
              icon={<FaUserTie size={32} className="text-blue-500" />}
              onClick={() => navigate('/employee/information')}
            />
            <Card
              title="Attendance"
              description="Track my attendance."
              icon={<FaCalendarCheck size={32} className="text-green-500" />}
              onClick={() => navigate('/employee/attendance')}
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
