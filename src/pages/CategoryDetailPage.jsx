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
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-md w-full text-center">
          <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4">
            ⚠️
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Categoría no encontrada</h2>
          <p className="text-gray-500 text-sm mb-6">
            El ID recibido en la URL es: <span className="font-mono bg-red-50 text-red-600 px-1.5 py-0.5 rounded font-semibold">{categoryId}</span>
          </p>
          <button 
            onClick={() => navigate('/')} 
            className="w-full bg-[#1a1a1a] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-black transition-colors"
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
    <div className="min-h-screen bg-gray-50">
      {/* Banner Superior */}
      <div className="bg-[#0052CC] text-white py-12 px-6 md:px-12 relative">
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
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">
          Trámites disponibles
        </h2>
        
        <div className="flex flex-col gap-4">
          {category.tramites && category.tramites.length > 0 ? (
            category.tramites.map((tramite) => {
              const favorited = isFavorite(tramite.id);

              return (
                <div 
                  key={tramite.id} 
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{tramite.title}</h3>
                      
                      <button
                        onClick={() => handleFavoriteClick(tramite)}
                        className="p-1.5 rounded-full hover:bg-gray-100 transition-colors group"
                        title="Guardar en favoritos"
                      >
                        <Heart 
                          className={`w-5 h-5 transition-all duration-200 active:scale-95 ${
                            favorited 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-gray-400 group-hover:text-red-400 fill-transparent'
                          }`} 
                        />
                      </button>
                    </div>

                    {/* Mostramos la descripción del trámite (si no viene, ponemos una por defecto) */}
                    <p className="text-gray-500 text-sm mb-4 max-w-2xl">
                      {tramite.description || "Consulta los requisitos y el procedimiento paso a paso de este trámite oficial."}
                    </p>
                    
                    <div className="flex gap-2 text-xs font-semibold">
                      <span className="flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-md text-gray-600">
                        <Clock className="w-3.5 h-3.5" /> {tramite.time}
                      </span>
                      <span className={`px-2.5 py-1 rounded-md ${
                        tramite.difficulty === 'Fácil' ? 'bg-green-50 text-green-700' :
                        tramite.difficulty === 'Medio' ? 'bg-amber-50 text-amber-700' : 
                        'bg-red-50 text-red-700'
                      }`}>
                        {tramite.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  {/* ¡BOTÓN CORREGIDO! Ahora sí navega al detalle del trámite */}
                  <button 
                    onClick={() => navigate(`/tramite/${tramite.id}`)}
                    className="bg-[#1a1a1a] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-black transition-colors text-center whitespace-nowrap active:scale-[0.99] transition-transform sm:self-center"
                  >
                    Iniciar Trámite
                  </button>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 text-sm italic">No hay trámites cargados en esta categoría aún.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;