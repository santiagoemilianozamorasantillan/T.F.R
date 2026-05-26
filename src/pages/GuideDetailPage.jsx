import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tramitesDetailData } from '@/data/tramitesData'; 
import { ArrowLeft, CheckCircle2, FileText, HelpCircle, ExternalLink } from 'lucide-react';

const GuideDetailPage = () => {
  const { id } = useParams(); // Usamos 'id' porque así está en tu App.jsx
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pasos');

  // Buscamos los datos del trámite usando el id de la URL
  const tramite = tramitesDetailData ? tramitesDetailData[id] : null;

  if (!tramite) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-md w-full text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Trámite no encontrado</h2>
          <button onClick={() => navigate('/')} className="w-full bg-black text-white py-2.5 rounded-xl text-sm font-semibold">
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Banner Superior */}
      <div className="bg-[#0052CC] text-white py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-semibold mb-4 text-blue-100 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Volver atrás
          </button>
          <h1 className="text-2xl font-extrabold mb-2 uppercase tracking-tight">{tramite.title}</h1>
          <p className="text-blue-100 text-sm max-w-2xl">{tramite.description}</p>
        </div>
      </div>

      {/* Contenedor de Pestañas */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          
          {/* Encabezados de las 3 Pestañas */}
          <div className="flex border-b border-gray-100 bg-gray-50">
            <button 
              onClick={() => setActiveTab('pasos')} 
              className={`flex-1 py-4 text-center text-sm font-bold border-b-2 flex items-center justify-center gap-2 transition-colors ${activeTab === 'pasos' ? 'border-[#0052CC] text-[#0052CC] bg-white' : 'border-transparent text-gray-500'}`}
            >
              <CheckCircle2 className="w-4 h-4" /> Pasos
            </button>
            <button 
              onClick={() => setActiveTab('requisitos')} 
              className={`flex-1 py-4 text-center text-sm font-bold border-b-2 flex items-center justify-center gap-2 transition-colors ${activeTab === 'requisitos' ? 'border-[#0052CC] text-[#0052CC] bg-white' : 'border-transparent text-gray-500'}`}
            >
              <FileText className="w-4 h-4" /> Requisitos
            </button>
            <button 
              onClick={() => setActiveTab('comoObtener')} 
              className={`flex-1 py-4 text-center text-sm font-bold border-b-2 flex items-center justify-center gap-2 transition-colors ${activeTab === 'comoObtener' ? 'border-[#0052CC] text-[#0052CC] bg-white' : 'border-transparent text-gray-500'}`}
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
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0052CC] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-gray-600 leading-relaxed">{paso}</p>
                  </div>
                ))}
              </div>
            )}

            {/* 2. Requisitos */}
            {activeTab === 'requisitos' && (
              <ul className="list-disc list-inside flex flex-col gap-2.5 text-sm text-gray-600">
                {tramite.requisitos?.map((req, i) => (
                  <li key={i} className="leading-relaxed">
                    <span className="text-gray-700 font-medium">{req}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* 3. Nueva pestaña: Cómo Obtener e hipervínculos */}
            {activeTab === 'comoObtener' && (
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  {tramite.comoObtener?.map((info, i) => (
                    <p key={i} className="text-sm bg-gray-50 p-3.5 rounded-xl border border-gray-100 text-gray-600 leading-relaxed">
                      💡 {info}
                    </p>
                  ))}
                </div>

                {tramite.links && tramite.links.length > 0 && (
                  <div className="mt-2">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Enlaces Oficiales</h4>
                    <div className="flex flex-col gap-2">
                      {tramite.links.map((link, i) => (
                        <a 
                          key={i} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-between p-3.5 rounded-xl bg-blue-50 border border-blue-100 text-[#0052CC] font-bold text-sm hover:bg-blue-100/70 transition-colors"
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