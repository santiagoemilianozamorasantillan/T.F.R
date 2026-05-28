import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext(null);

const defaultSettings = {
  textSize: 100,
  highContrast: false,
  theme: 'light', // 'light', 'dark', 'auto'
  reducedAnimations: false,
  dyslexiaFont: false,
  increasedSpacing: false,
  // --- Nuevas opciones ---
  blueLightFilter: false,
  colorSaturation: 100,
  uppercaseText: false,
  preventAccidentalClicks: false,
  showGlossary: false,
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

  // ¡AQUÍ ESTÁ LA MAGIA CORREGIDA Y UNIFICADA!
  // Esto fuerza a la página a cambiar físicamente sus clases al instante
  useEffect(() => {
    // 1. Guardar en memoria siempre que cambie
    localStorage.setItem('tramita_a11y', JSON.stringify(settings));
    
    const root = document.documentElement; // Etiqueta <html>
    const body = document.body;            // Etiqueta <body>

    // 2. Limpiar clases anteriores para no amontonarlas
    root.classList.remove(
      'dark', 'text-size-100', 'text-size-120', 'text-size-140', 'text-size-160',
      'high-contrast', 'reduced-motion', 'dyslexia-font', 'spacing-increased'
    );
    body.className = ''; // Limpiamos el body de los filtros extra

    // 3. Aplicar Tema Oscuro (Verificando preferencia del sistema si es 'auto')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (settings.theme === 'dark' || (settings.theme === 'auto' && prefersDark)) {
      root.classList.add('dark');
    }

    // 4. Inyectar tamaños y opciones principales (en HTML root)
    root.classList.add(`text-size-${settings.textSize}`);
    if (settings.highContrast) root.classList.add('high-contrast');
    if (settings.reducedAnimations) root.classList.add('reduced-motion');
    if (settings.dyslexiaFont) root.classList.add('dyslexia-font');
    if (settings.increasedSpacing) root.classList.add('spacing-increased');

    // 5. Inyectar filtros visuales nuevos (en Body)
    if (settings.blueLightFilter) body.classList.add('blue-light-filter');
    if (settings.colorSaturation !== 100) body.classList.add(`saturation-${settings.colorSaturation}`);
    if (settings.uppercaseText) body.classList.add('force-uppercase');

  }, [settings]);

  // Funciones de actualización
  const updateTextSize = (size) => setSettings(s => ({ ...s, textSize: size }));
  const updateHighContrast = (val) => setSettings(s => ({ ...s, highContrast: val }));
  const updateTheme = (val) => setSettings(s => ({ ...s, theme: val }));
  const updateReducedAnimations = (val) => setSettings(s => ({ ...s, reducedAnimations: val }));
  const updateDyslexiaFont = (val) => setSettings(s => ({ ...s, dyslexiaFont: val }));
  const updateIncreasedSpacing = (val) => setSettings(s => ({ ...s, increasedSpacing: val }));
  const updateBlueLightFilter = (val) => setSettings(s => ({ ...s, blueLightFilter: val }));
  const updateColorSaturation = (val) => setSettings(s => ({ ...s, colorSaturation: val }));
  const updateUppercaseText = (val) => setSettings(s => ({ ...s, uppercaseText: val }));
  const updatePreventAccidentalClicks = (val) => setSettings(s => ({ ...s, preventAccidentalClicks: val }));
  const updateShowGlossary = (val) => setSettings(s => ({ ...s, showGlossary: val }));

  const resetToDefaults = () => setSettings(defaultSettings);

  const value = {
    settings,
    updateTextSize,
    updateHighContrast,
    updateTheme,
    updateReducedAnimations,
    updateDyslexiaFont,
    updateIncreasedSpacing,
    updateBlueLightFilter,
    updateColorSaturation,
    updateUppercaseText,
    updatePreventAccidentalClicks,
    updateShowGlossary,
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