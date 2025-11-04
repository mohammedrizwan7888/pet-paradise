import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (pet) => {
    if (!favorites.find(fav => fav.id === pet.id)) {
      setFavorites([...favorites, pet]);
      return true;
    }
    return false;
  };

  const removeFromFavorites = (petId) => {
    setFavorites(favorites.filter(fav => fav.id !== petId));
  };

  const isFavorite = (petId) => {
    return favorites.some(fav => fav.id === petId);
  };

  const toggleFavorite = (pet) => {
    if (isFavorite(pet.id)) {
      removeFromFavorites(pet.id);
      return false;
    } else {
      addToFavorites(pet);
      return true;
    }
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
    clearFavorites
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};


