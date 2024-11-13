import React, { useEffect } from 'react';
import Navbar from '../global/Navbar';
import Footer from '../global/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, getSingleBook, STATUSES } from '../../store/bookSlice';

const SingleBook = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams()
  const {singleBook:book , status} = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getSingleBook(id));
  },[])

  const handleDelete = () => {
    dispatch(deleteBook(id))
    if(status == STATUSES.SUCCESS) {
      navigate("/")
    }
  }

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg mt-10 mb-10">
        <img 
          src={book?.bookImageUrl} 
          alt="Book Cover" 
          className="w-full h-64 object-cover rounded-md mb-6" 
        />
        <h1 className="text-4xl font-bold mb-4">{book?.bookName}</h1>
        <p className="text-lg font-medium mb-2">Author: {book?.authorName}</p>
        <p className="text-lg mb-2">ISBN: {book?.isbnNumber}</p>
        <p className="text-lg mb-2">Price: ${book?.bookPrice}</p>
        <p className="text-lg mb-4">Published At: {new Date(book?.publishedAt).toLocaleDateString()}</p>
        <div className="flex space-x-4">
          <Link to={`/edit/book/${id}`}><button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded text-white font-semibold transition duration-300">
            Edit Book
          </button></Link>
          <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-white font-semibold transition duration-300" onClick={handleDelete}>
            Delete Book
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleBook;
