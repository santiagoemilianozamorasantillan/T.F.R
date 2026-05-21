import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext.jsx';

const CategoryCard = ({ id, title, description, icon: Icon, index }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer group"
    >
      <button
        onClick={handleFavoriteClick}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-50 transition-colors z-10"
        aria-label={favorited ? "Quitar de favoritos" : "Añadir a favoritos"}
      >
        <Star 
          className={`w-5 h-5 transition-colors ${
            favorited ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
          }`} 
        />
      </button>

      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#0052CC] transition-colors duration-300">
        <Icon className="w-6 h-6 text-[#0052CC] group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 leading-snug pr-8">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed mt-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default CategoryCard;