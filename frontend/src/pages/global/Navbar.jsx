import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/"><a className="text-white text-2xl font-semibold flex items-center">
          <span className="text-indigo-500">📚</span> BookManager
        </a></Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/"><a className="text-gray-300 hover:text-indigo-500 transition">Home</a></Link>
          <Link to="/add/book"><a className="text-gray-300 hover:text-indigo-500 transition">Add Book</a></Link>
          <a className="text-gray-300 hover:text-indigo-500 transition">Categories</a>
          <a className="text-gray-300 hover:text-indigo-500 transition">Contact</a>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          {isMobileMenuOpen ? '✖️' : '☰'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">Home</a>
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">Books</a>
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">Categories</a>
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
