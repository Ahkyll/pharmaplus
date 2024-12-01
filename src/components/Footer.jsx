import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-[#0a051f] text-white py-8 font-mono">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 mb-6 md:mb- p-20">
          <p className="text-2xl">
            Don’t Hesitate to subscribe to the latest news about NFT markets.
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://www.facebook.com/"
              className="bg-purple-700 p-4 rounded-full hover:bg-purple-500"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-xl"></i> 
            </a>  
            <a
              href="https://www.linkedin.com/"
              className="bg-purple-700 p-4 rounded-full hover:bg-purple-500"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-xl"></i> 
            </a>
            <a
              href="https://www.instagram.com/"
              className="bg-purple-700 p-4 rounded-full hover:bg-purple-500"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i> 
            </a>
            <a
              href="https://x.com/__x?mx=2"
              className="bg-purple-700 p-4 rounded-full hover:bg-purple-500"
              aria-label="X"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-20">
          <h3 className="text-2xl font-semibold">Subscribe to our Newsletter!</h3>
          <p className="text-lg my-2">
            Don’t Hesitate to subscribe to stay updated.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-4 text-gray-900 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-purple-700 hover:bg-purple-500 text-white font-semibold rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">
          &copy; Copy Right project | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
