import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // IMPORTANTE: Para conectar las pantallas
import { Search, FileText, Car, Zap, Briefcase, Heart, GraduationCap, Home, Building } from 'lucide-react';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // AJUSTE AQUÍ: Cambié los ID para que calcen exacto con tu archivo 'tramitesData.js'
  const categories = [
    {
      id: 'documentos-identidad', // Este se queda igual, ya funciona
      icon: FileText,
      title: 'Documentos de Identidad',
      description: 'Trámites relacionados con INE, pasaportes y certificados personales.'
    },
    {
      id: 'tramites-fiscales', // <-- CAMBIADO (Antes: impuestos-y-tributos)
      icon: Briefcase,
      title: 'Trámites Fiscales (SAT)',
      description: 'Gestiona tu situación fiscal, citas, contraseñas y declaraciones ante el SAT.'
    },
    {
      id: 'salud-seguridad-social', // <-- CAMBIADO (Antes: salud-y-bienestar)
      icon: Heart,
      title: 'Salud y Seguridad Social',
      description: 'Accede a servicios médicos, semanas cotizadas e incapacidades del IMSS.'
    },
    {
      id: 'vivienda-patrimonio', // <-- CAMBIADO (Antes: vivienda-y-urbanismo)
      icon: Home,
      title: 'Vivienda y Patrimonio',
      description: 'Regulariza tus escrituras o solicita tu crédito hipotecario Infonavit.'
    },
    {
      id: 'viajes-migracion', // <-- NUEVO / REEMPLAZADO (Para tus pases de abordar, visas, etc.)
      icon: Car, // Puedes dejar el de coche o cambiarlo por un ícono de avión/viajes si tienes
      title: 'Viajes y Migración',
      description: 'Requisitos de control internacional, visas y pases de abordar.'
    },
    {
      id: 'programas-sociales', // <-- CAMBIADO (Antes: trabajo-y-empleo)
      icon: Building,
      title: 'Programas Sociales y Becas',
      description: 'Inscríbete a los apoyos económicos, pensiones y becas del Gobierno.'
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Inicio - Tramita Fácil y Rápido</title>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#0052CC] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Busca y realiza tus trámites
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
          >
            Encuentra rápidamente la gestión que necesitas realizar
          </motion.p>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 rounded-2xl text-lg text-gray-900 bg-white placeholder:text-gray-400 shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400/30 transition-all border-none"
              placeholder="Busca trámite... (ej: INE, licencia, certificado)"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] tracking-tight">
              Categorías Principales
            </h2>
          </div>

          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {filteredCategories.map((category, index) => (
                // CAMBIO CLAVE: Envolvimos tu tarjeta en un Link interactivo
                <Link to={`/categoria/${category.id}`} key={category.id} className="block group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#0052CC] transition-colors duration-300">
                      <category.icon className="w-6 h-6 text-[#0052CC] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 leading-snug">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mt-auto">
                      {category.description}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">No se encontraron resultados</h3>
              <p className="text-gray-500 mt-1">Intenta con otros términos de búsqueda.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;