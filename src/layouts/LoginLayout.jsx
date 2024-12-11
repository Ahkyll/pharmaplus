import { Outlet } from 'react-router';
import LoginPage from '../pages/LoginPage';

function LoginLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginPage />
    </div>
  );
}

export default LoginLayout;
