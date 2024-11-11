import React from 'react';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:bg-indigo-600">
      {/* Image Section */}
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}></div>

      {/* Content Section */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        
        {/* Read More Button */}
        <button className="mt-4 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-400 transition-colors duration-300">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Card;
