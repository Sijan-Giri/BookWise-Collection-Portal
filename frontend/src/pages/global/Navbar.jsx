import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold flex items-center space-x-2 hover:text-indigo-400 transition duration-300">
          <span className="text-indigo-500 text-3xl">📚</span>
          <span>BookManager</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-300 hover:text-indigo-500 transition duration-300 font-semibold">Home</Link>
          <Link to="/add/book" className="text-gray-300 hover:text-indigo-500 transition duration-300 font-semibold">Add Book</Link>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none text-2xl transition duration-300"
        >
          {isMobileMenuOpen ? '✖️' : '☰'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <Link to="/" className="block py-3 px-4 text-gray-300 hover:bg-gray-700 transition duration-300 font-semibold">Home</Link>
          <Link to="/add/book" className="block py-3 px-4 text-gray-300 hover:bg-gray-700 transition duration-300 font-semibold">Add Book</Link>
          <Link to="/books" className="block py-3 px-4 text-gray-300 hover:bg-gray-700 transition duration-300 font-semibold">Books</Link>
          <Link to="/contact" className="block py-3 px-4 text-gray-300 hover:bg-gray-700 transition duration-300 font-semibold">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
