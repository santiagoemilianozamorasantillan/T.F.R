import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Clock, FileText, Calendar } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';

const HistoryPage = () => {
  const { currentUser } = useAuth();
  const [permits, setPermits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPermits = async () => {
      try {
        const records = await pb.collection('permits').getList(1, 50, {
          filter: `userId = "${currentUser?.id}"`,
          sort: '-created',
          $autoCancel: false
        });
        setPermits(records.items || []);
      } catch (error) {
        console.error('Error fetching permits:', error);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser) {
      fetchPermits();
    }
  }, [currentUser]);

  const getStatusConfig = (status) => {
    switch (status) {
      case 'completed':
        return { label: 'Completado', classes: 'bg-green-100 text-green-800 border-green-200' };
      case 'rejected':
        return { label: 'Rechazado', classes: 'bg-red-100 text-red-800 border-red-200' };
      case 'pending':
      default:
        return { label: 'Pendiente', classes: 'bg-amber-100 text-amber-800 border-amber-200' };
    }
  };

  const formatDate = (dateString) => {
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

      <div className="min-h-screen bg-gray-50 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0">
              <Clock className="w-7 h-7 text-[#0052CC]" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-[#1a1a1a] tracking-tight">
                Mi Historial de Trámites
              </h1>
              <p className="text-gray-500 mt-1 font-medium">
                Revisa el estado y comprobantes de tus gestiones anteriores.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-16 text-center">
              <div className="w-10 h-10 border-4 border-blue-200 border-t-[#0052CC] rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-500 font-medium">Cargando historial...</p>
            </div>
          ) : permits.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-16 text-center">
              <div className="max-w-md mx-auto flex flex-col items-center">
                <Clock className="w-24 h-24 text-gray-300 mb-6" strokeWidth={1.5} />
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                  No tienes trámites recientes
                </h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Aún no has completado ninguna gestión en nuestra plataforma.
                </p>
                <Link
                  to="/"
                  className="inline-flex px-8 py-3.5 bg-[#1a1a1a] text-white rounded-xl font-bold hover:bg-black transition-all duration-200 active:scale-[0.98] shadow-md shadow-gray-900/10"
                >
                  Realizar un trámite
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Trámite</th>
                      <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Categoría</th>
                      <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Fecha</th>
                      <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {permits.map((permit) => {
                      const status = getStatusConfig(permit.status);
                      return (
                        <tr key={permit.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                <FileText className="w-5 h-5 text-[#0052CC]" />
                              </div>
                              <div>
                                <p className="font-bold text-[#1a1a1a]">{permit.documentType || 'Documento sin título'}</p>
                                {permit.description && (
                                  <p className="text-sm text-gray-500 truncate max-w-[200px]">{permit.description}</p>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                              {permit.category || 'General'}
                            </span>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              {formatDate(permit.created)}
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${status.classes}`}>
                              {status.label}
                            </span>
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