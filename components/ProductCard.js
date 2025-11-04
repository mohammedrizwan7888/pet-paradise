import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import './ProductCard.css';

const ProductCard = ({ pet }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleCardClick = () => {
    navigate(`/pets/${pet.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking Add to Cart
    addToCart(pet);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <div className="product-image">
        <img src={pet.image} alt={pet.name} />
        <div className="product-badge">
          <span className="badge-text">{pet.age}</span>
        </div>
        <button
          className={`favorite-btn ${isFavorite(pet.id) ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(pet);
          }}
          title={isFavorite(pet.id) ? 'Remove from favorites' : 'Add to favorites'}
        >
          <i className={`fas ${isFavorite(pet.id) ? 'fa-heart' : 'fa-heart'}`}></i>
        </button>
        <div className="view-details-overlay">
          <span>View Details</span>
        </div>
      </div>
      
      <div className="product-content">
        <div className="product-header">
          <h3 className="product-name">{pet.name}</h3>
          <div className="product-price">${pet.price}</div>
        </div>
        
        <div className="product-breed">{pet.breed}</div>
        
        <p className="product-description">{pet.description}</p>
        
        <div className="product-features">
          {pet.features.map((feature, index) => (
            <span key={index} className="feature-tag">
              <i className="fas fa-check"></i>
              {feature}
            </span>
          ))}
        </div>
        
        <div className="product-actions" onClick={(e) => e.stopPropagation()}>
          <button className="btn btn-primary btn-full" onClick={handleAddToCart}>
            <i className="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
          <button 
            className="btn btn-secondary btn-full"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/pets/${pet.id}`);
            }}
          >
            <i className="fas fa-eye"></i>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
