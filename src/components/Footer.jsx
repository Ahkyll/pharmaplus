import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-[#5B6EB7] text-white py-4 text-center">
      <p>&copy; {currentYear} BSIT 3-A. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
