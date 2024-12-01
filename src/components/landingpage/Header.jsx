import React, { useState, useEffect } from "react";

function Header() {
  const [scrollingUp, setScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`text-white drop-shadow-lg py-4 text-lg fixed top-0 left-0 w-full z-50 bg-transparent font-extrabold font-mono transition-transform ${
        scrollingUp ? "transform translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <nav>
          <ul className="flex space-x-9">
            <li><a href="#home" className="hover:text-[#c64de4]">Home</a></li>
            <li><a href="#collection" className="hover:text-[#c64de4]">Collection</a></li>
            <li><a href="#creators" className="hover:text-[#c64de4]">Creators</a></li>
            <li><a href="#contact" className="hover:text-[#c64de4]">Contact</a></li>
          </ul>
        </nav>

        <h1 className="text-5xl font-extrabold text-[#c64de4] font-sans">NFTs</h1>
      </div>
    </header>
  );
}

export default Header;
