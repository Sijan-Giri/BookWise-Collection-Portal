import React, { useEffect } from 'react';
import Navbar from '../global/Navbar';
import Card from '../global/Card';
import Footer from '../global/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../store/bookSlice';

function Home() {

  const dispatch = useDispatch();
  const {data:datas} = useSelector((state) => state.book)

  useEffect(() => {
    dispatch(getBooks())
  },[])

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

    {/* Flex container to display cards horizontally */}
    <div className="container mx-auto px-4 py-10 flex flex-wrap gap-8 ">
      {datas?.length > 0 && datas?.map((data) => (
        <Card data={data}/>
      ))}
    </div>
  </div>

  <Footer />
</>


  );
}

export default Home;
