import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <header
      className="text-white drop-shadow-lg py-4 text-lg bg-gray-600" >
      <div className="container mx-auto flex justify-between items-center px-6">
        <nav>
          <ul className="flex space-x-9">
            <NavLink to="/homepage" className="hover:text-[#c64de4]">Home </NavLink>
            <NavLink to="/nfts" className="hover:text-[#c64de4]">Collection </NavLink>
            <NavLink to="/creators" className="hover:text-[#c64de4]">Creators </NavLink>
          </ul>
        </nav>

        <h1 className="text-5xl font-extrabold text-[#c64de4] font-sans">NFTs</h1>
      </div>
    </header>
  );
}

export default Header;
