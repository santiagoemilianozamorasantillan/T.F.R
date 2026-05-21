import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tramitesDetailData } from '@/data/tramitesData'; // Usando el alias @ de tu proyecto

function GuideDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pasos');

  // Buscar el trámite en tu base de datos
  const tramite = tramitesDetailData[id];

  // Si el trámite no existe
  if (!tramite) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2 className="text-2xl font-bold mb-2">Trámite no encontrado</h2>
        <p className="text-muted-foreground mb-4">
          Los detalles para este trámite aún no están disponibles.
        </p>
        <button 
          onClick={() => navigate(-1)}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg"
        >
          Volver atrás
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Botón de Regresar */}
      <button
        onClick={() => navigate(-1)}
        className="text-muted-foreground hover:text-foreground mb-6 block"
      >
        ← Volver a la categoría
      </button>

      {/* Cabecera del Trámite */}
      <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
          {tramite.title}
        </h1>
        <p className="text-muted-foreground text-base mb-6">
          {tramite.description}
        </p>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
          <div className="bg-muted px-3 py-1.5 rounded-full text-sm font-medium">
            ⏱️ Tiempo estimado: <strong>{tramite.time}</strong>
          </div>
          <div className="bg-muted px-3 py-1.5 rounded-full text-sm font-medium">
            📊 Dificultad: <strong>{tramite.difficulty}</strong>
          </div>
        </div>
      </div>

      {/* Selector de Pestañas */}
      <div className="flex border-b border-border mb-6">
        <button
          onClick={() => setActiveTab('pasos')}
          className={`px-6 py-3 border-b-2 font-semibold text-sm md:text-base transition-colors ${
            activeTab === 'pasos'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          📋 Pasos a seguir ({tramite.pasos?.length || 0})
        </button>
        <button
          onClick={() => setActiveTab('requisitos')}
          className={`px-6 py-3 border-b-2 font-semibold text-sm md:text-base transition-colors ${
            activeTab === 'requisitos'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          ✅ Requisitos necesarios ({tramite.requisitos?.length || 0})
        </button>
      </div>

      {/* Contenido de las Pestañas */}
      <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm min-h-[200px]">
        {activeTab === 'pasos' ? (
          <div className="relative border-l-2 border-muted pl-6 space-y-6 ml-3">
            {tramite.pasos?.map((paso, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[35px] top-0 bg-primary text-primary-foreground font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {index + 1}
                </span>
                <p className="text-foreground text-base font-medium pt-0.5">
                  {paso}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <ul className="space-y-3">
            {tramite.requisitos?.map((requisito, index) => (
              <li key={index} className="flex items-start gap-3 bg-muted/40 p-3 rounded-xl">
                <span className="text-emerald-500">✔</span>
                <span className="text-foreground text-base">
                  {requisito}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default GuideDetailPage;