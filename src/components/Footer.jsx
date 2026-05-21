import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-3">
          <p className="text-white text-sm font-medium">
            © 2026 Tramita Fácil y Rápido. Plataforma de gestión de trámites en línea.
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>Seguro</span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span>Rápido</span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span>Confiable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;