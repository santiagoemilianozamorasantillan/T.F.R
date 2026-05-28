import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Clock, FileText, Calendar, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient'; 
import { useAuth } from '@/contexts/AuthContext.jsx';
import { toast } from 'sonner';

const HistoryPage = () => {
  const { user: currentUser } = useAuth();
  const [tramites, setTramites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistorial = async () => {
    try {
      const { data, error } = await supabase
        .from('historial_tramites')
        .select(`
          id,
          tramite_id,
          estado,
          fecha_creacion,
          tramites (
            titulo,
            categoria,
            descripcion
          )
        `)
        .eq('user_id', currentUser?.id)
        .order('fecha_creacion', { ascending: false });

      if (error) throw error;
      setTramites(data || []);
    } catch (error) {
      console.error('Error al cargar el historial:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchHistorial();
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  // Función para Actualizar el estado en Supabase
  const handleStatusChange = async (historialId, nuevoEstado) => {
    try {
      // 1. Actualizamos en Supabase
      const { error } = await supabase
        .from('historial_tramites')
        .update({ estado: nuevoEstado })
        .eq('id', historialId);

      if (error) throw error;

      // 2. Actualizamos la pantalla al instante sin tener que recargar
      setTramites(tramites.map(t => 
        t.id === historialId ? { ...t, estado: nuevoEstado } : t
      ));
      
      toast.success('Estado actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar:', error.message);
      toast.error('No se pudo actualizar el estado');
    }
  };

  const getStatusConfig = (status) => {
    const estadoNormalizado = status?.toLowerCase();
    switch (estadoNormalizado) {
      case 'completado':
        return { label: 'Completado', classes: 'bg-green-100 dark:bg-green-500/10 text-green-800 dark:text-green-400 border-green-200 dark:border-green-500/20' };
      case 'rechazado':
        return { label: 'Rechazado', classes: 'bg-red-100 dark:bg-red-500/10 text-red-800 dark:text-red-400 border-red-200 dark:border-red-500/20' };
      case 'pendiente':
      default:
        return { label: 'Pendiente', classes: 'bg-amber-100 dark:bg-amber-500/10 text-amber-800 dark:text-amber-400 border-amber-200 dark:border-amber-500/20' };
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Fecha desconocida';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <Helmet>
        <title>Mi Historial - Tramita Fácil y Rápido</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-12 lg:py-16 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 flex items-center gap-4">
            <div className="w-14 h-14 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 flex items-center justify-center flex-shrink-0 transition-colors">
              <Clock className="w-7 h-7 text-[#0052CC] dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-[#1a1a1a] dark:text-white tracking-tight transition-colors">
                Mi Historial de Trámites
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1 font-medium transition-colors">
                Lleva el control personal de tus gestiones. Cambia el estado cuando termines un trámite.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-gray-200 dark:border-neutral-700 p-16 text-center transition-colors">
              <div className="w-10 h-10 border-4 border-blue-200 dark:border-blue-900 border-t-[#0052CC] dark:border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-500 dark:text-gray-400 font-medium transition-colors">Cargando historial...</p>
            </div>
          ) : tramites.length === 0 ? (
            <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-sm border border-gray-100 dark:border-neutral-700 p-16 text-center transition-colors">
              <div className="max-w-md mx-auto flex flex-col items-center">
                <Clock className="w-24 h-24 text-gray-300 dark:text-gray-600 mb-6 transition-colors" strokeWidth={1.5} />
                <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-3 transition-colors">
                  No tienes trámites recientes
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed transition-colors">
                  Aún no has guardado ninguna gestión en tu historial.
                </p>
                <Link
                  to="/"
                  className="inline-flex px-8 py-3.5 bg-[#1a1a1a] dark:bg-white text-white dark:text-black rounded-xl font-bold hover:bg-black dark:hover:bg-gray-200 transition-all duration-200 active:scale-[0.98] shadow-md shadow-gray-900/10 dark:shadow-none"
                >
                  Explorar trámites
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-sm border border-gray-100 dark:border-neutral-700 overflow-hidden transition-colors">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-neutral-900/50 border-b border-gray-100 dark:border-neutral-700 transition-colors">
                      <th className="px-6 py-5 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Trámite</th>
                      <th className="px-6 py-5 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Categoría</th>
                      <th className="px-6 py-5 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fecha</th>
                      <th className="px-6 py-5 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-neutral-700">
                    {tramites.map((historialItem) => {
                      const status = getStatusConfig(historialItem.estado);
                      const tramiteInfo = historialItem.tramites || {};
                      
                      return (
                        <tr key={historialItem.id} className="hover:bg-gray-50/50 dark:hover:bg-neutral-700/50 transition-colors">
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0 transition-colors">
                                <FileText className="w-5 h-5 text-[#0052CC] dark:text-blue-400" />
                              </div>
                              <div className="flex flex-col justify-center">
                                <p className="font-bold text-[#1a1a1a] dark:text-white transition-colors">
                                  {tramiteInfo.titulo || 'Trámite no especificado'}
                                </p>
                                {tramiteInfo.descripcion && (
                                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-[200px] transition-colors mb-0.5">
                                    {tramiteInfo.descripcion}
                                  </p>
                                )}
                                
                                {/* ALERTA DINÁMICA: Solo aparece si el estado es rechazado */}
                                {historialItem.estado === 'rechazado' && (
                                  <Link 
                                    to={`/tramite/${historialItem.tramite_id}`} 
                                    className="inline-flex items-center mt-1 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors group"
                                  >
                                    <AlertCircle className="w-3.5 h-3.5 mr-1 group-hover:scale-110 transition-transform" />
                                    Revisar requisitos para reintentar
                                  </Link>
                                )}

                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-neutral-700 px-3 py-1 rounded-full transition-colors">
                              {tramiteInfo.categoria || 'General'}
                            </span>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors">
                              <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                              {formatDate(historialItem.fecha_creacion)}
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <select 
                              value={historialItem.estado || 'pendiente'}
                              onChange={(e) => handleStatusChange(historialItem.id, e.target.value)}
                              className={`cursor-pointer appearance-none outline-none font-bold text-xs px-3 py-1.5 rounded-full border transition-all ${status.classes}`}
                            >
                              <option value="pendiente" className="bg-white text-gray-900">Pendiente</option>
                              <option value="completado" className="bg-white text-gray-900">Completado</option>
                              <option value="rechazado" className="bg-white text-gray-900">Rechazado</option>
                            </select>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HistoryPage;