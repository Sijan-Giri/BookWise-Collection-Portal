import React, { useEffect, useState } from 'react'
import Footer from '../global/Footer'
import Navbar from '../global/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { editBook, getSingleBook, STATUSES } from '../../store/bookSlice'
import { useNavigate, useParams } from 'react-router-dom'

const EditBook = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {status,singleBook} = useSelector((state) => state.book);
  const {id} = useParams();

  const [data,setData] = useState({
    bookName : "",
    bookPrice: "",
    isbnNumber: "",
    authorName: "",
    publishedAt: "",
    bookImage : ""
  })

  const handleChange = (e) => {
    const {name , value} = e.target;
    setData({
      ...data,
      [name] : name == "bookImage" ? e.target.files[0] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook(data,id))
    if(status == STATUSES.SUCCESS) {
      navigate(`/bookDetail/${id}`)
    }
  }

  useEffect(() => {
    if(singleBook) {
      setData(singleBook)
    }
  },[singleBook])

  return (
    <>
    <Navbar />
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg mt-10 mb-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Edit Book</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="bookName" className="block text-lg font-medium">Book Name</label>
          <input
          onChange={handleChange}
            type="text"
            id="bookName"
            name="bookName"
            value={data?.bookName}
            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="bookPrice" className="block text-lg font-medium">Book Price</label>
          <input
          onChange={handleChange}
            type="number"
            id="bookPrice"
            name="bookPrice"
            value={data?.bookPrice}
            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="isbnNumber" className="block text-lg font-medium">ISBN Number</label>
          <input
          onChange={handleChange}
            type="text"
            id="isbnNumber"
            name="isbnNumber"
            value={data?.isbnNumber}
            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="authorName" className="block text-lg font-medium">Author Name</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            value={data?.authorName}
            onChange={handleChange}
            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="publishedAt" className="block text-lg font-medium">Published At</label>
          <input
          onChange={handleChange}
            type="date"
            id="publishedAt"
            name="publishedAt"
            value={data?.publishedAt}
            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
        <label htmlFor="bookImage" className="block text-lg font-medium">Book Image</label>
        <input
          onChange={handleChange}
          type="file"
          id="bookImageUrl"
          name="bookImage"
          className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Edit Book
          </button>
        </div>
      </form>
    </div>
    <Footer />
    </>
  )
}

export default EditBook