import React from 'react';
import Header from './components/landingpage/Header'
import Hero from './components/landingpage/Hero';
import Earn from './components/landingpage/Earn';
import ArtistSpotlight from './components/landingpage/ArtistSpotlight';
import Footer from './components/landingpage/Footer';
import Creators from './components/landingpage/Creators';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Earn />
      <ArtistSpotlight />
      <Creators />
      <Footer />
    </div>
  );
}

export default App;
