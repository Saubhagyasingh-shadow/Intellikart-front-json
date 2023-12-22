import React, { useState, useEffect } from 'react';
import { IoMdAdd } from 'react-icons/io';
import Card from './Card';
import { Link, useParams } from 'react-router-dom';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import Hero from './Hero.jsx';
import dataObjects from '../assets/file.json';

const Mobiles = () => {
  const { category } = useParams(); 
  console.log({category})
         // Get the category from URL params
  const itemsPerPage = 8; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState([]);

  // Filter dataObjects based on the specified category
  useEffect(() => {
    if (category && category.toLowerCase() !== 'all') {
      const filteredData = dataObjects.filter(
        (data) => data.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredItems(filteredData);
    } else {
      setFilteredItems(dataObjects);
    }
  }, [category]);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <Hero />
      <div className='max-w-[1640px] flex flex-col justify-evenly items-center gap-5 mx-20'>
        <div className='max-w-[1640px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center'>
          {currentItems.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
        <div className='flex justify-center mt-5'>
          <button onClick={prevPage} disabled={currentPage === 1}>
            <GoTriangleLeft />Previous
          </button>
          <span className='font-bold'>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            <GoTriangleRight />Next Page
          </button>
        </div>
      </div>
    </>
  );
};

export default Mobiles;
