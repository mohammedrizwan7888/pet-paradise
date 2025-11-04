import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './MyFavorites.css';

const MyFavorites = () => {
  const { favorites, clearFavorites, removeFromFavorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <div className="my-favorites-page">
      <div className="container">
        <div className="favorites-header">
          <div>
            <h1>My Favorites</h1>
            <p>Your saved pets for later</p>
          </div>
          {favorites.length > 0 && (
            <button 
              className="btn btn-secondary"
              onClick={clearFavorites}
            >
              <i className="fas fa-trash"></i>
              Clear All
            </button>
          )}
        </div>

        {favorites.length === 0 ? (
          <div className="empty-favorites">
            <i className="fas fa-heart"></i>
            <h2>No Favorites Yet</h2>
            <p>Start adding pets to your favorites to see them here!</p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/pets')}
            >
              Browse Pets
            </button>
          </div>
        ) : (
          <>
            <div className="favorites-stats">
              <p>You have <strong>{favorites.length}</strong> {favorites.length === 1 ? 'pet' : 'pets'} in your favorites</p>
            </div>
            <div className="favorites-grid">
              {favorites.map((pet) => (
                <div key={pet.id} className="favorite-item">
                  <ProductCard pet={pet} />
                  <button
                    className="remove-favorite-btn"
                    onClick={() => removeFromFavorites(pet.id)}
                    title="Remove from favorites"
                  >
                    <i className="fas fa-heart-broken"></i>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyFavorites;
