import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Filter = () => {
  const categories = ['All', 'smartphones','skincare','groceries' ,'Laptops', 'Fragrances','home-decoration'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <label htmlFor="category" className="mr-2">
        Filter by Category:
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="p-2 border rounded-md"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <Link
        to={`/products/${selectedCategory.toLowerCase()}`}
        className="ml-2 px-4 py-2 bg-black text-white rounded-md"
      >
        Apply Filter
      </Link>
    </div>
  );
};

export default Filter;
