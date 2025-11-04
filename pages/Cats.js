import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import './Cats.css';

const Cats = () => {
  const [selectedCategory, setSelectedCategory] = useState('cat');

  return (
    <div className="cats-page">
      <div className="container">
        <div className="page-header">
          <h1>Cats</h1>
          <p>Discover your perfect feline friend from our adorable cats</p>
        </div>
        <ProductGrid 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />
      </div>
    </div>
  );
};

export default Cats;







