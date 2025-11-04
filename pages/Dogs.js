import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import './Dogs.css';

const Dogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('dog');

  return (
    <div className="dogs-page">
      <div className="container">
        <div className="page-header">
          <h1>Dogs</h1>
          <p>Find your perfect canine companion from our carefully selected dogs</p>
        </div>
        <ProductGrid 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />
      </div>
    </div>
  );
};

export default Dogs;







