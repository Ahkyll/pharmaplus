import React from 'react';
import { Routes, Route } from 'react-router';
import MainLayout from '../layouts/MainLayout';  // Import the layout
import NFTsPage from '../pages/NFTsPage';       // NFTs page
import App from '../App';                       // Landing page component
import CreatorsPage from '../pages/CreatorsPage'; // Creators page    // Login page component
import HomePage from '../pages/HomePage';

function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<App />} /> {/* Landing page */}
        <Route path="/homepage" element={<HomePage />} /> {/* Landing page */}
        <Route path="/nfts" element={<NFTsPage />} /> {/* NFTs page */}
        <Route path="/creators" element={<CreatorsPage />} /> {/* Creators page */}
      </Route>
    </Routes>
  );
}

export default Router;
