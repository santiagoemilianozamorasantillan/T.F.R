import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Menu, X, Check, Home, BookOpen, History, Star, Settings, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import AccessibilityToggle from '@/components/AccessibilityToggle.jsx';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth(); // Usamos 'user' directamente de Supabase

  const isActive = (path) => location.pathname === path;

  // 1. Enlaces públicos que CUALQUIERA puede ver sin iniciar sesión
  const publicLinks = [
    { path: '/', label: 'Inicio', icon: Home },
    { path: '/guide', label: 'Guía', icon: BookOpen },
    { path: '/favoritos', label: 'Favoritos', icon: Star },
    { path: '/accesibilidad', label: 'Accesibilidad', icon: Settings }
  ];

  // 2. Enlaces privados que SÓLO se verán si el usuario inició sesión
  const privateLinks = [
    { path: '/history', label: 'Mi Historial', icon: History }
  ];

  // Juntamos los enlaces dinámicamente: si hay usuario, añadimos los privados
  const navLinks = user ? [...publicLinks, ...privateLinks] : publicLinks;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LEFT SIDE: Logo & Subtitle */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col min-w-max">
              <span className="text-base md:text-lg font-bold text-[#1a1a1a] tracking-tight whitespace-nowrap">
                Tramita Fácil y Rápido
              </span>
              <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
                Gestiona tus trámites en línea
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4 mx-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-1 px-1.5 py-1 rounded-md text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-600 hover:text-[#1a1a1a] hover:bg-gray-50'
                }`}
              >
                {link.icon && <link.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4 flex-shrink-0" />}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE: Badge, A11y & Auth Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white rounded-full text-xs font-medium shadow-sm">
              <Check className="w-3.5 h-3.5" />
              <span>Seguro y Confiable</span>
            </div>

            <AccessibilityToggle />

            {user ? (
              <div className="flex items-center gap-3">
                {/* ICONO DE PERFIL DINÁMICO */}
                <div 
                  className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-sm border border-primary/20 uppercase"
                  title={user.email}
                >
                  {user.email ? user.email.charAt(0) : <User className="w-4 h-4" />}
                </div>

                <button
                  onClick={logout}
                  className="px-5 py-2.5 bg-gray-100 text-[#1a1a1a] rounded-lg text-sm font-semibold hover:bg-gray-200 transition-all duration-200 active:scale-[0.98]"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-5 py-2.5 bg-[#1a1a1a] text-white rounded-lg text-sm font-semibold hover:bg-black transition-all duration-200 shadow-sm active:scale-[0.98]"
              >
                Iniciar Sesión
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <AccessibilityToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  {link.icon && <link.icon className="w-5 h-5" />}
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 px-4 pt-4 border-t border-gray-100">
                {user ? (
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 bg-gray-100 text-[#1a1a1a] rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Cerrar Sesión
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex justify-center w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-xl text-sm font-semibold hover:bg-black transition-colors"
                  >
                    Iniciar Sesión
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;