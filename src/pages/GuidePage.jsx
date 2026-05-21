import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, FileSignature, Send, CheckCircle2 } from 'lucide-react';

const GuidePage = () => {
  const steps = [
    {
      number: '1',
      title: 'Busca tu trámite',
      description: 'Explora nuestro catálogo o utiliza el buscador para encontrar exactamente la gestión que necesitas realizar, ya sea para documentos, licencias o servicios.',
      icon: Search
    },
    
  ];

  return (
    <>
      <Helmet>
        <title>Guía de uso - Tramita Fácil y Rápido</title>
      </Helmet>

      <div className="bg-white">
        {/* Header Section */}
        <section className="py-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] tracking-tight mb-6"
          >
            Bienvenido a Tramita Fácil y Rápido!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-medium"
          >
            Tu guía paso a paso para realizar gestiones en línea de forma sencilla.
          </motion.p>
        </section>

        {/* Steps Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1a1a1a] text-center mb-16 tracking-tight">
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
                      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-50 border-[8px] border-white shadow-xl flex items-center justify-center relative">
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center font-bold text-xl text-[#0052CC]">
                          {step.number}
                        </div>
                        <step.icon className="w-20 h-20 text-[#0052CC]" />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                      <div className="inline-block px-3 py-1 bg-blue-100 text-[#0052CC] font-bold text-sm rounded-full mb-4 tracking-wide uppercase">
                        PASO {step.number}
                      </div>
                      <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-500 leading-relaxed">
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
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-2 tracking-tight">¡Listo!</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4"></h3>
            <p className="text-lg text-gray-500 mb-10 max-w-xl">
             
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1a1a1a] text-white rounded-xl text-lg font-bold hover:bg-black transition-all duration-200 active:scale-[0.98] shadow-lg shadow-gray-900/20"
            >
              Ver tramites
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default GuidePage;