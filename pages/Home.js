import React, { useState } from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div>
      <Hero />
      <ProductGrid 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
    </div>
  );
};

export default Home;







