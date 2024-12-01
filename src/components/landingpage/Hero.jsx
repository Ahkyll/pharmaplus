import { NavLink } from 'react-router';

function Hero() {
  return (
    <section id="home" className="bg-hero-pattern bg-cover bg-center h-[100vh] bg-no-repeat flex items-center font-mono">
      <div>
        <h2 className="text-8xl text-white font-bold pl-20 pt-10 font-mono">DISCOVER, SELL <br></br> AND COLLECT <br></br>UNIQUE NFT ART</h2>
        <p className="text-gray-300 mt-4 text-2xl pl-20">Explore, collect, and invest in exclusive digital artwork.</p>
        <NavLink
          to="/homepage"
          className="ml-20 mt-10 inline-block bg-[#0a051f] hover:bg-[#c64de4] text-white px-10 py-5 rounded font-semibold text-lg border border-white hover:shadow-black shadow-lg"
        >
          Explore Now
        </NavLink>
      </div>
    </section>
  );
};

export default Hero;
