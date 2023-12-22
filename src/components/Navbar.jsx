import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-gray-800 text-white w-full fixed top-0 z-50 h-16">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
            <span className="text-xl font-bold">INTELLIKART</span></Link>
          </div>
          
          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="/signin" className="hover:text-gray-300">SignIn</a>
            </li>
            <li>
              <a href="/signup" className="hover:text-gray-300">SignUp</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
