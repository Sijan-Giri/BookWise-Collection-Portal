import React from 'react';
import Navbar from '../global/Navbar';
import Card from '../global/Card';
import Footer from '../global/Footer';

function HeroSection() {
  return (
    <>
    <Navbar />
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to BookWise Collection Portal</h1>
        <p className="text-lg md:text-xl mb-6">
          Manage, organize, and explore your personal library with ease.
        </p>
        <a href="#explore" className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full">
          Explore Now
        </a>
      </div>

      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card
            imageUrl="https://via.placeholder.com/150" 
            title="Track Reading Progress"
            description="Keep track of books you have read and want to read. Set goals and monitor your progress."
          />      
          
      </div>
    </div>
    <Footer />
    </>
  );
}

export default HeroSection;
