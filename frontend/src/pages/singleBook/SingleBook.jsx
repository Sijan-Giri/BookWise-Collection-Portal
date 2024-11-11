import React from 'react';
import Navbar from '../global/Navbar';
import Footer from '../global/Footer';
import { Link } from 'react-router-dom';

const SingleBook = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg mt-10 mb-10">
        <img 
          src="https://via.placeholder.com/400" 
          alt="Book Cover" 
          className="w-full h-64 object-cover rounded-md mb-6" 
        />
        <h1 className="text-4xl font-bold mb-4">Atomic Habit</h1>
        <p className="text-lg font-medium mb-2">Author: Sijan Giri</p>
        <p className="text-lg mb-2">ISBN: 321321</p>
        <p className="text-lg mb-2">Price: $111</p>
        <p className="text-lg mb-4">Published At: {new Date().toLocaleDateString()}</p>
        <p className="text-gray-300 mb-6">This is the Atomic Habit book, a guide to building effective habits.</p>
        
        <div className="flex space-x-4">
          <Link to="/edit/book"><button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded text-white font-semibold transition duration-300">
            Edit Book
          </button></Link>
          <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-white font-semibold transition duration-300">
            Delete Book
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleBook;
