import React from 'react'
import Navbar from '../global/Navbar'
import Footer from '../global/Footer'

const AddBook = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg mt-10 mb-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Add New Book</h2>

      <form className="space-y-4">
        <div>
          <label htmlFor="bookName" className="block text-lg font-medium">Book Name</label>
          <input
            type="text"
            id="bookName"
            name="bookName"
            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="bookPrice" className="block text-lg font-medium">Book Price</label>
          <input
            type="number"
            id="bookPrice"
            name="bookPrice"
            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="isbnNumber" className="block text-lg font-medium">ISBN Number</label>
          <input
            type="text"
            id="isbnNumber"
            name="isbnNumber"
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
            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="publishedAt" className="block text-lg font-medium">Published At</label>
          <input
            type="date"
            id="publishedAt"
            name="publishedAt"
            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="bookImageUrl" className="block text-lg font-medium">Book Image URL</label>
          <input
            type="url"
            id="bookImageUrl"
            name="bookImageUrl"
            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
    <Footer />
    </>
  )
}

export default AddBook