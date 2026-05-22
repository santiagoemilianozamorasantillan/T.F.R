import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext(null);

const defaultSettings = {
  textSize: 100,
  highContrast: false,
  theme: 'light', // 'light', 'dark', 'auto'
  reducedAnimations: false,
  dyslexiaFont: false,
  increasedSpacing: false
};

export const AccessibilityProvider = ({ children }) => {
  // Inicializamos el estado leyendo directamente del localStorage si existe
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('tramita_a11y');
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    } catch (error) {
      console.error('Error loading accessibility settings', error);
      return defaultSettings;
    }
  });

  useEffect(() => {
    // 1. Guardar siempre en localStorage cuando cambie 'settings'
    localStorage.setItem('tramita_a11y', JSON.stringify(settings));

    // 2. Aplicar clases al HTML root
    const root = document.documentElement;

    // --- Tema (Modo Oscuro) ---
    // Limpiamos primero
    root.classList.remove('dark');
    
    // Verificamos si es dark o si es auto y el sistema prefiere dark
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (settings.theme === 'dark' || (settings.theme === 'auto' && prefersDark)) {
      root.classList.add('dark');
    }

    // --- Tamaño de Texto ---
    root.classList.remove('text-size-100', 'text-size-120', 'text-size-140', 'text-size-160');
    root.classList.add(`text-size-${settings.textSize}`);

    // --- Alto Contraste ---
    if (settings.highContrast) root.classList.add('high-contrast');
    else root.classList.remove('high-contrast');

    // --- Animaciones Reducidas ---
    if (settings.reducedAnimations) root.classList.add('reduced-motion');
    else root.classList.remove('reduced-motion');

    // --- Fuente para Dislexia ---
    if (settings.dyslexiaFont) root.classList.add('dyslexia-font');
    else root.classList.remove('dyslexia-font');

    // --- Espaciado Aumentado ---
    if (settings.increasedSpacing) root.classList.add('spacing-increased');
    else root.classList.remove('spacing-increased');

  }, [settings]);

  // Funciones de actualización
  const updateTextSize = (size) => setSettings(s => ({ ...s, textSize: size }));
  const updateHighContrast = (val) => setSettings(s => ({ ...s, highContrast: val }));
  const updateTheme = (val) => setSettings(s => ({ ...s, theme: val }));
  const updateReducedAnimations = (val) => setSettings(s => ({ ...s, reducedAnimations: val }));
  const updateDyslexiaFont = (val) => setSettings(s => ({ ...s, dyslexiaFont: val }));
  const updateIncreasedSpacing = (val) => setSettings(s => ({ ...s, increasedSpacing: val }));
  
  const resetToDefaults = () => setSettings(defaultSettings);

  const value = {
    settings,
    updateTextSize,
    updateHighContrast,
    updateTheme,
    updateReducedAnimations,
    updateDyslexiaFont,
    updateIncreasedSpacing,
    resetToDefaults
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};
