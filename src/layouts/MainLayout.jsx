import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Outlet is where routed components will render */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
