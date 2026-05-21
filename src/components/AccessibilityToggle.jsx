import React, { useState, useRef, useEffect } from 'react';
import { Settings2, Type, Moon, Sun } from 'lucide-react';
import { useAccessibility } from '@/contexts/AccessibilityContext.jsx';

const AccessibilityToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { settings, updateTextSize, updateTheme } = useAccessibility();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    updateTheme(settings.theme === 'dark' ? 'light' : 'dark');
  };

  const cycleTextSize = () => {
    const sizes = [100, 120, 140, 160];
    const currentIndex = sizes.indexOf(settings.textSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    updateTextSize(sizes[nextIndex]);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center"
        aria-label="Opciones de accesibilidad rápida"
        title="Accesibilidad rápida"
      >
        <Settings2 className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-sm font-bold text-gray-900">Accesibilidad Rápida</p>
          </div>
          
          <button
            onClick={cycleTextSize}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <Type className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Tamaño de texto</span>
            </div>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">
              {settings.textSize}%
            </span>
          </button>

          <button
            onClick={toggleTheme}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              {settings.theme === 'dark' ? (
                <Moon className="w-4 h-4 text-gray-500" />
              ) : (
                <Sun className="w-4 h-4 text-gray-500" />
              )}
              <span className="text-sm font-medium text-gray-700">Tema</span>
            </div>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md capitalize">
              {settings.theme}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityToggle;