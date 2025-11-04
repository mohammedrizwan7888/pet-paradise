import React from 'react';
import ProductCard from './ProductCard';
import { pets, categories } from '../data/pets';
import './ProductGrid.css';

const ProductGrid = ({ selectedCategory, onCategoryChange }) => {
  const filteredPets = selectedCategory === 'all' 
    ? pets 
    : pets.filter(pet => pet.category === selectedCategory);

  return (
    <section className="product-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Adorable Pets</h2>
          <p className="section-description">
            Find your perfect companion from our carefully selected pets
          </p>
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredPets.length > 0 ? (
            filteredPets.map(pet => (
              <ProductCard key={pet.id} pet={pet} />
            ))
          ) : (
            <div className="no-pets">
              <i className="fas fa-search"></i>
              <h3>No pets found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>

        <div className="section-footer">
          <p className="pets-count">
            Showing {filteredPets.length} of {pets.length} pets
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
