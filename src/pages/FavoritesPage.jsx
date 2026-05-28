import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '@/contexts/FavoritesContext.jsx';
import { categoriesData } from '@/data/tramitesData'; 
import { Clock, HeartOff, FileText } from 'lucide-react';
import { toast } from 'sonner';

const FavoritesPage = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate(); // ¡Agregado para que el botón funcione de verdad!

  // Función mágica que recolecta los trámites reales usando los IDs guardados
  const getFavoritedTramites = () => {
    if (!favorites || favorites.length === 0) return [];
    
    const allTramites = [];
    // Recorremos todas las categorías para juntar todos los trámites disponibles
    Object.values(categoriesData).forEach(category => {
      if (category.tramites) {
        allTramites.push(...category.tramites);
      }
    });

    // Filtramos para quedarnos únicamente con los que el usuario les dio corazón
    return allTramites.filter(tramite => favorites.includes(tramite.id));
  };

  const favoritedTramites = getFavoritedTramites();

  const handleRemove = (id, title) => {
    toggleFavorite(id);
    toast.info(`"${title}" eliminado de favoritos`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight transition-colors">Mis Trámites Favoritos ❤️</h1>
        
        {favoritedTramites.length === 0 ? (
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-16 text-center border border-gray-200 dark:border-neutral-700 shadow-sm flex flex-col items-center transition-all duration-300">
            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-full flex items-center justify-center mb-6 transition-colors">
              <FileText className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Aún no tienes favoritos</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md transition-colors">
              Ve a la sección de categorías y presiona el ícono del corazón en los trámites que quieras tener a la mano.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {favoritedTramites.map((tramite) => (
              <div 
                key={tramite.id} 
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-gray-100 dark:border-neutral-700 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 hover:shadow-md transition-all duration-200"
              >
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 transition-colors">{tramite.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 max-w-2xl transition-colors">{tramite.description}</p>
                  <div className="flex gap-2 text-xs font-semibold">
                    <span className="flex items-center gap-1 bg-gray-100 dark:bg-neutral-700 px-2.5 py-1 rounded-md text-gray-600 dark:text-gray-300 transition-colors">
                      <Clock className="w-3.5 h-3.5" /> {tramite.time}
                    </span>
                    <span className={`px-2.5 py-1 rounded-md transition-colors ${
                      tramite.difficulty === 'Fácil' ? 'bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400' :
                      tramite.difficulty === 'Medio' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400' : 
                      'bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400'
                    }`}>
                      {tramite.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-3 sm:self-center mt-4 sm:mt-0">
                  <button 
                    onClick={() => handleRemove(tramite.id, tramite.title)}
                    className="p-2.5 text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-500/10 rounded-xl hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors flex items-center justify-center"
                    title="Quitar de favoritos"
                  >
                    <HeartOff className="w-5 h-5" />
                  </button>
                  {/* ¡Botón arreglado! Ya navega a la guía */}
                  <button 
                    onClick={() => navigate(`/tramite/${tramite.id}`)}
                    className="bg-[#1a1a1a] dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-black dark:hover:bg-gray-200 transition-colors whitespace-nowrap active:scale-[0.99]"
                  >
                    Iniciar Trámite
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;