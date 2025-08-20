import React from 'react';
import { Link } from 'react-router-dom';
import ThemeBtn from './ThemeBtn.jsx'; // ThemeBtn import karo

function Navbar() {
  return (
    <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Brand */}
      <div className="text-xl font-bold">Watch Store</div>

      {/* Links */}
      <nav className="flex gap-6 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>

        {/* Theme Button */}
        <div className="ml-4 text-white">
          <ThemeBtn />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
