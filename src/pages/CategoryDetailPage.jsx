import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categoriesData } from '@/data/tramitesData'; 
import { ArrowLeft, Clock, Heart } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext.jsx'; 
import { toast } from 'sonner';

const CategoryDetailPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const { toggleFavorite, isFavorite } = useFavorites(); 

  const category = categoriesData ? categoriesData[categoryId] : null;

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 p-6 transition-colors duration-300">
        <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl border border-gray-200 dark:border-neutral-700 shadow-sm max-w-md w-full text-center">
          <div className="w-12 h-12 bg-red-50 dark:bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4">
            
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Categoría no encontrada</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            El ID recibido en la URL es: <span className="font-mono bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded font-semibold">{categoryId}</span>
          </p>
          <button 
            onClick={() => navigate('/')} 
            className="w-full bg-[#1a1a1a] dark:bg-white text-white dark:text-black py-2.5 rounded-xl text-sm font-semibold hover:bg-black dark:hover:bg-gray-200 transition-colors"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  const handleFavoriteClick = (tramite) => {
    toggleFavorite(tramite.id);
    
    if (isFavorite(tramite.id)) {
      toast.info(`"${tramite.title}" eliminado de favoritos`);
    } else {
      toast.success(`"${tramite.title}" añadido a favoritos ❤️`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
      {/* Banner Superior */}
      <div className="bg-[#0052CC] dark:bg-[#003d99] text-white py-12 px-6 md:px-12 relative transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-sm font-semibold mb-4 text-blue-100 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Volver a categorías
          </button>
          <h1 className="text-3xl font-extrabold mb-2 tracking-tight">{category.title}</h1>
          <p className="text-blue-100 text-sm max-w-2xl">{category.description}</p>
        </div>
      </div>

      {/* Lista de Trámites */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-6">
          Trámites disponibles
        </h2>
        
        <div className="flex flex-col gap-4">
          {category.tramites && category.tramites.length > 0 ? (
            category.tramites.map((tramite) => {
              const favorited = isFavorite(tramite.id);

              return (
                <div 
                  key={tramite.id} 
                  className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-gray-100 dark:border-neutral-700 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white transition-colors">{tramite.title}</h3>
                      
                      <button
                        onClick={() => handleFavoriteClick(tramite)}
                        className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors group"
                        title="Guardar en favoritos"
                      >
                        <Heart 
                          className={`w-5 h-5 transition-all duration-200 active:scale-95 ${
                            favorited 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-gray-400 dark:text-gray-500 group-hover:text-red-400 dark:group-hover:text-red-400 fill-transparent'
                          }`} 
                        />
                      </button>
                    </div>

                    {/* Mostramos la descripción del trámite (si no viene, ponemos una por defecto) */}
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 max-w-2xl transition-colors">
                      {tramite.description || "Consulta los requisitos y el procedimiento paso a paso de este trámite oficial."}
                    </p>
                    
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
                  
                  {/* ¡BOTÓN CORREGIDO! Ahora sí navega al detalle del trámite */}
                  <button 
                    onClick={() => navigate(`/tramite/${tramite.id}`)}
                    className="bg-[#1a1a1a] dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-black dark:hover:bg-gray-200 transition-colors text-center whitespace-nowrap active:scale-[0.99] sm:self-center"
                  >
                    Iniciar Trámite
                  </button>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-sm italic transition-colors">No hay trámites cargados en esta categoría aún.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;