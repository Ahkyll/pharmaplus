import React from 'react';
import { Routes, Route } from 'react-router';
import LoginLayout from '../layouts/LoginLayout';
import MainLayout from '../layouts/MainLayout';
import LoginPage from '../pages/LoginPage';
import AdminDashboard from '../pages/AdminDashboard';
import EmployeeDashboard from '../pages/EmployeeDashboard';
import SalesPage from '../pages/EmployeeDashboard/SalesPage';
import OrderPage from '../pages/EmployeeDashboard/OrderPage';
import ManageEmployees from '../pages/AdminDashboard/ManageEmployees';
import ManageSuppliers from '../pages/AdminDashboard/ManageSuppliers';
import ManageProducts from '../pages/AdminDashboard/ManageProducts';
import ManageTransactions from '../pages/AdminDashboard/ManageTransactions';
import ManageSales from '../pages/AdminDashboard/ManageSales';
import ProductsPage from '../pages/EmployeeDashboard/ProductsPage';
import TransactionPage from '../pages/EmployeeDashboard/TransactionPage';
import ProfilePage from '../pages/EmployeeDashboard/ProfilePage'
import AttendancePage from '../pages/EmployeeDashboard/AttendancePage';
import AdminProfile from '../pages/AdminDashboard/AdminProfile';

function Router() {
  return (
    <Routes>
      
      {/* Login layout route */}
      <Route element={<LoginLayout />}>
        <Route path="/" element={<LoginPage />} />
      </Route>

      {/* Main layout for admin and employee routes */}
      <Route element={<MainLayout />}>

        {/* Employee routes */}
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/transactions" element={<TransactionPage />} />
        <Route path="/employee/information" element={<ProfilePage />} />
        <Route path="/employee/attendance" element={<AttendancePage />} />

        {/* Admin routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/manage-employees" element={<ManageEmployees />} />
        <Route path="/manage-sales" element={<ManageSales />} />
        <Route path="/manage-suppliers" element={<ManageSuppliers />} />
        <Route path="/manage-products" element={<ManageProducts />} />
        <Route path="/manage-transactions" element={<ManageTransactions />} />
        <Route path="/admin-profile" element={<AdminProfile />} />


      </Route>
    </Routes>
  );
}

export default Router;
