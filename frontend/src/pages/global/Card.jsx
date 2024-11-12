import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({data}) => {

  return (
    <div
  key={data?._id}
  className="w-96 bg-gray-900 rounded-lg shadow-lg p-6 text-center hover:bg-indigo-500 transition-all"
>
  <img src={data?.bookImageUrl} alt="Book Cover" className="w-full h-48 object-cover rounded-md mb-4" />
  <h2 className="text-2xl font-semibold mb-2">{data?.bookName}</h2>
  <p className="text-gray-300 mb-2">Author: {data?.authorName}</p>
  <p className="text-gray-300 mb-2">Price: ${data?.bookPrice}</p>
  <p className="text-gray-300 mb-2">ISBN: {data?.isbnNumber}</p>
  <p className="text-gray-300 mb-4">Published At: {new Date(data?.publishedAt).toLocaleDateString()}</p>
  <p className="text-gray-300 mb-4">{data?.description}</p>
  <Link to={`/bookdetail/${data?._id}`} className="text-indigo-400 hover:underline">
    Read more
  </Link>
</div>


  );
}

export default Card;
