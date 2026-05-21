import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tramita_favoritos');
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error loading favorites', e);
    }
  }, []);

  const saveFavorites = (newFavorites) => {
    setFavorites(newFavorites);
    localStorage.setItem('tramita_favoritos', JSON.stringify(newFavorites));
  };

  const addFavorite = (id) => {
    if (!favorites.includes(id)) {
      saveFavorites([...favorites, id]);
    }
  };

  const removeFavorite = (id) => {
    saveFavorites(favorites.filter(favId => favId !== id));
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  const isFavorite = (id) => favorites.includes(id);
  
  const getFavorites = () => favorites;
  
  const clearFavorites = () => saveFavorites([]);

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    getFavorites,
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
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
};