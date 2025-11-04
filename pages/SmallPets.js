import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import './SmallPets.css';

const SmallPets = () => {
  const [selectedCategory, setSelectedCategory] = useState('small');

  return (
    <div className="small-pets-page">
      <div className="container">
        <div className="page-header">
          <h1>Small Pets</h1>
          <p>Adorable small companions perfect for any home</p>
        </div>
        <ProductGrid 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />
      </div>
    </div>
  );
};

export default SmallPets;




