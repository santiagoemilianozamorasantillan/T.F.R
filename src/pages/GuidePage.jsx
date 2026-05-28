import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, FileSignature, Settings, CheckCircle2, Heart, Clock } from 'lucide-react';

const GuidePage = () => {
  const steps = [
    {
      number: '1',
      title: 'Busca tu trámite',
      description: 'Explora nuestro catálogo o utiliza el buscador para encontrar exactamente la gestión que necesitas realizar, ya sea para documentos, licencias o servicios.',
      icon: Search
    },
    {
      number: '2',
      title: 'Guarda tus favoritos',
      description: '¿Encontraste un trámite que haces seguido? Haz clic en el ícono del corazón (❤️) en cualquier tarjeta para guardarlo en tu lista y acceder a él rápidamente en el futuro.',
      icon: Heart
    },
    {
      number: '3',
      title: 'Ajusta la accesibilidad',
      description: 'Ve al botón de "Accesibilidad" en el menú superior. Desde ahí puedes encender el modo oscuro, hacer la letra más grande, o activar filtros especiales para leer más cómodamente.',
      icon: Settings
    },
    {
      number: '4',
      title: 'Sigue el paso a paso',
      description: 'Entra al trámite y sigue nuestra guía detallada. Te explicamos los requisitos, te damos tips clave y te ponemos los enlaces oficiales directos para que no pierdas tiempo.',
      icon: FileSignature
    },
    {
      number: '5',
      title: 'Gestiona tu historial',
      description: 'Usa la plataforma como tu agenda inteligente. Al iniciar un trámite se guardará como "Pendiente". Cuando lo finalices en la vida real cámbialo a "Completado", o a "Rechazado" si te faltaron documentos para recordarte volver a intentarlo.',
      icon: Clock
    }
  ];

  return (
    <>
      <Helmet>
        <title>Guía de uso - Tramita Fácil y Rápido</title>
      </Helmet>

      <div className="bg-white dark:bg-neutral-900 transition-colors duration-300">
        {/* Header Section */}
        <section className="py-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] dark:text-white tracking-tight mb-6 transition-colors"
          >
            ¡Bienvenido a Tramita Fácil y Rápido!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 dark:text-gray-400 font-medium transition-colors"
          >
            Tu guía paso a paso para realizar gestiones en línea de forma sencilla.
          </motion.p>
        </section>

        {/* Steps Section */}
        <section className="py-16 bg-gray-50 dark:bg-neutral-800 transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1a1a1a] dark:text-white text-center mb-16 tracking-tight transition-colors">
              ¿Cómo funciona nuestra plataforma?
            </h2>

            <div className="space-y-12 md:space-y-24">
              {steps.map((step, index) => {
                const isEven = index % 2 !== 0;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    key={step.number} 
                    className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
                  >
                    <div className="w-full md:w-1/2 flex justify-center">
                      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-50 dark:bg-blue-500/10 border-[8px] border-white dark:border-neutral-900 shadow-xl flex items-center justify-center relative transition-colors duration-300">
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-neutral-700 rounded-full shadow-md flex items-center justify-center font-bold text-xl text-[#0052CC] dark:text-blue-400 transition-colors duration-300">
                          {step.number}
                        </div>
                        <step.icon className="w-20 h-20 text-[#0052CC] dark:text-blue-400 transition-colors" />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                      <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-[#0052CC] dark:text-blue-400 font-bold text-sm rounded-full mb-4 tracking-wide uppercase transition-colors">
                        PASO {step.number}
                      </div>
                      <h3 className="text-3xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom Section CTA */}
        <section className="py-24 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-6 transition-colors">
              <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400 transition-colors" />
            </div>
            <h2 className="text-4xl font-bold text-[#1a1a1a] dark:text-white mb-2 tracking-tight transition-colors">¡Listo!</h2>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4 transition-colors">
              Ya estás preparado para comenzar
            </h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-xl transition-colors">
              Ahora que conoces todas nuestras herramientas de accesibilidad y sabes cómo usar tu agenda inteligente, es momento de hacer tu primer trámite.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1a1a1a] dark:bg-white text-white dark:text-black rounded-xl text-lg font-bold hover:bg-black dark:hover:bg-gray-200 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-gray-900/20 dark:shadow-none"
            >
              Ver Trámites Disponibles
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default GuidePage;