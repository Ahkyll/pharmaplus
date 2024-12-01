import React from 'react';

function HomePage() {
  return (
    <section className="bg-[url('../images/2.png')] bg-cover bg-center h-[100vh] bg-no-repeat flex justify-center items-center font-mono">
      <div className="text-center px-6">
        <h2 className="text-8xl text-white font-extrabold">
          Welcome to the Future of Digital Art
        </h2>
        <p className="text-gray-300 mt-4 text-xl">
          Explore, collect, and invest in unique NFT art pieces from top creators.
        </p>
      </div>
    </section>
  );
}

export default HomePage;
