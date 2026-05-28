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
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('tramita_a11y');
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    } catch (error) {
      console.error('Error loading accessibility settings', error);
      return defaultSettings;
    }
  });

  // ¡AQUÍ ESTÁ LA MAGIA QUE FALTABA!
  // Esto fuerza a la página a cambiar físicamente sus clases al instante
  useEffect(() => {
    // 1. Guardar en memoria
    localStorage.setItem('tramita_a11y', JSON.stringify(settings));
    
    const root = document.documentElement; // Etiqueta <html>
    const body = document.body;            // Etiqueta <body>

    // 2. Aplicar Tema Oscuro
    root.classList.remove('dark');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (settings.theme === 'dark' || (settings.theme === 'auto' && prefersDark)) {
      root.classList.add('dark');
    }

    // 3. Limpiar clases de accesibilidad anteriores para no amontonarlas
    body.className = ''; 

    // 4. Inyectar todos los filtros y tamaños
    body.classList.add(`text-size-${settings.textSize}`);
    if (settings.highContrast) body.classList.add('high-contrast');
    if (settings.reducedAnimations) body.classList.add('reduced-motion');
    if (settings.dyslexiaFont) body.classList.add('dyslexia-font');
    if (settings.increasedSpacing) body.classList.add('spacing-increased');
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