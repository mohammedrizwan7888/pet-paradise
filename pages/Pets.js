import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import './Pets.css';

const Pets = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="pets-page">
      <div className="container">
        <div className="page-header">
          <h1>Our Pets</h1>
          <p>Find your perfect companion from our carefully selected pets</p>
        </div>
        <ProductGrid 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />
      </div>
    </div>
  );
};

export default Pets;







