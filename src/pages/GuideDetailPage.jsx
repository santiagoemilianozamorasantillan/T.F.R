import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tramitesDetailData } from '@/data/tramitesData'; 
import { ArrowLeft, CheckCircle2, FileText, HelpCircle, ExternalLink, BookmarkPlus } from 'lucide-react';
// IMPORTANTE: Asegúrate de que las rutas a Supabase y tu Contexto sean correctas
import { supabase } from '@/lib/supabaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { toast } from 'sonner';

const GuideDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user: currentUser } = useAuth();

  console.log("Usuario actual:", currentUser);
  
  const [activeTab, setActiveTab] = useState('pasos');
  const [isSaving, setIsSaving] = useState(false);

  const tramite = tramitesDetailData ? tramitesDetailData[id] : null;

  const handleGuardarHistorial = async () => {
    if (!currentUser) {
      toast.error('Debes iniciar sesión para guardar en tu historial');
      return;
    }

    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('historial_tramites')
        .insert([
          {
            user_id: currentUser.id, 
            tramite_id: id, 
            estado: 'pendiente'
          }
        ]);

      if (error) throw error;
      
      toast.success('¡Trámite iniciado y guardado en tu historial!');
    } catch (error) {
      console.error('Error guardando en historial:', error.message);
      toast.error('Hubo un error al guardar el trámite. Intenta de nuevo.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!tramite) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 p-6 transition-colors duration-300">
        <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl border border-gray-200 dark:border-neutral-700 shadow-sm max-w-md w-full text-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Trámite no encontrado</h2>
          <button onClick={() => navigate('/')} className="w-full bg-black dark:bg-white text-white dark:text-black py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Banner Superior */}
      <div className="bg-[#0052CC] dark:bg-[#003d99] text-white py-12 px-6 transition-colors duration-300">
        <div className="max-w-3xl mx-auto">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-semibold mb-4 text-blue-100 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Volver atrás
          </button>
          <h1 className="text-2xl font-extrabold mb-2 uppercase tracking-tight">{tramite.title}</h1>
          <p className="text-blue-100 text-sm max-w-2xl">{tramite.description}</p>
          
          {/* NUEVO: Botón para guardar en el historial */}
          <div className="mt-8">
            <button
              onClick={handleGuardarHistorial}
              disabled={isSaving}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <BookmarkPlus className="w-5 h-5" />
              {isSaving ? 'Guardando...' : 'Iniciar y guardar en mi historial'}
            </button>
          </div>
        </div>
      </div>

      {/* Contenedor de Pestañas */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-gray-100 dark:border-neutral-700 shadow-sm overflow-hidden transition-colors duration-300">
          
          {/* Encabezados de las 3 Pestañas */}
          <div className="flex border-b border-gray-100 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
            <button 
              onClick={() => setActiveTab('pasos')} 
              className={`flex-1 py-4 text-center text-sm font-bold border-b-2 flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'pasos' 
                  ? 'border-[#0052CC] dark:border-blue-400 text-[#0052CC] dark:text-blue-400 bg-white dark:bg-neutral-800' 
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800/50'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" /> Pasos
            </button>
            <button 
              onClick={() => setActiveTab('requisitos')} 
              className={`flex-1 py-4 text-center text-sm font-bold border-b-2 flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'requisitos' 
                  ? 'border-[#0052CC] dark:border-blue-400 text-[#0052CC] dark:text-blue-400 bg-white dark:bg-neutral-800' 
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800/50'
              }`}
            >
              <FileText className="w-4 h-4" /> Requisitos
            </button>
            <button 
              onClick={() => setActiveTab('comoObtener')} 
              className={`flex-1 py-4 text-center text-sm font-bold border-b-2 flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'comoObtener' 
                  ? 'border-[#0052CC] dark:border-blue-400 text-[#0052CC] dark:text-blue-400 bg-white dark:bg-neutral-800' 
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800/50'
              }`}
            >
              <HelpCircle className="w-4 h-4" /> ¿Cómo obtenerlos?
            </button>
          </div>

          {/* Contenido Dinámico */}
          <div className="p-6 md:p-8">
            {/* 1. Pasos */}
            {activeTab === 'pasos' && (
              <div className="flex flex-col gap-4">
                {tramite.pasos?.map((paso, i) => (
                  <div key={i} className="flex gap-3 items-start text-sm">
                    <span className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-[#0052CC] dark:text-blue-400 font-bold flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      {i + 1}
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">{paso}</p>
                  </div>
                ))}
              </div>
            )}

            {/* 2. Requisitos */}
            {activeTab === 'requisitos' && (
              <ul className="list-disc list-inside flex flex-col gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                {tramite.requisitos?.map((req, i) => (
                  <li key={i} className="leading-relaxed transition-colors">
                    <span className="text-gray-700 dark:text-gray-200 font-medium transition-colors">{req}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* 3. Pestaña: Cómo Obtener e hipervínculos */}
            {activeTab === 'comoObtener' && (
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  {tramite.comoObtener?.map((info, i) => (
                    <p key={i} className="text-sm bg-gray-50 dark:bg-neutral-900/50 p-3.5 rounded-xl border border-gray-100 dark:border-neutral-700/50 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                      💡 {info}
                    </p>
                  ))}
                </div>

                {tramite.links && tramite.links.length > 0 && (
                  <div className="mt-2">
                    <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Enlaces Oficiales</h4>
                    <div className="flex flex-col gap-2">
                      {tramite.links.map((link, i) => (
                        <a 
                          key={i} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-between p-3.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-[#0052CC] dark:text-blue-400 font-bold text-sm hover:bg-blue-100/70 dark:hover:bg-blue-500/20 transition-colors"
                        >
                          <span>{link.name}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default GuideDetailPage;