import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext(null);

const defaultSettings = {
  textSize: 100,
  highContrast: false,
  theme: 'light', // 'light', 'dark', 'auto'
  reducedAnimations: false,
  dyslexiaFont: false,
  increasedSpacing: false,
  // --- NUEVAS OPCIONES ---
  blueLightFilter: false,
  colorSaturation: 100, // Puede ser 50 (Baja), 100 (Normal), 150 (Alta)
  uppercaseText: false,
  preventAccidentalClicks: false,
  showGlossary: true // Lo dejamos activado por defecto por ser muy útil
};

export const AccessibilityProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadSettings = () => {
    try {
      const saved = localStorage.getItem('tramita_a11y');
      if (saved) {
        setSettings({ ...defaultSettings, ...JSON.parse(saved) });
      }
    } catch (e) {
      console.error('Error loading accessibility settings', e);
    }
    setIsLoaded(true);
  };

  useEffect(() => {
    loadSettings();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    // Guardar en localStorage
    localStorage.setItem('tramita_a11y', JSON.stringify(settings));

    // Aplicar al documento
    const root = document.documentElement;
    const body = document.body;
    
    // --- 1. Tamaño de Texto ---
    root.classList.remove('text-size-100', 'text-size-120', 'text-size-140', 'text-size-160');
    root.classList.add(`text-size-${settings.textSize}`);

    // --- 2. Alto Contraste ---
    if (settings.highContrast) root.classList.add('high-contrast');
    else root.classList.remove('high-contrast');

    // --- 3. Tema Global (Solución implementada) ---
    const isDarkTheme = 
      settings.theme === 'dark' || 
      (settings.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDarkTheme) {
      root.classList.add('dark');
      if (body) body.style.backgroundColor = '#121212'; 
    } else {
      root.classList.remove('dark');
      if (body) body.style.backgroundColor = ''; 
    }

    // --- 4. Reducir Animaciones ---
    if (settings.reducedAnimations) root.classList.add('reduced-motion');
    else root.classList.remove('reduced-motion');

    // --- 5. Tipografía Dislexia ---
    if (settings.dyslexiaFont) root.classList.add('dyslexia-font');
    else root.classList.remove('dyslexia-font');

    // --- 6. Espaciado Aumentado ---
    if (settings.increasedSpacing) root.classList.add('spacing-increased');
    else root.classList.remove('spacing-increased');

    // ==========================================
    // --- NUEVAS FUNCIONES VISUALES (PASO 1) ---
    // ==========================================

    // 7. Filtro de Luz Azul
    if (settings.blueLightFilter) root.classList.add('blue-light-filter');
    else root.classList.remove('blue-light-filter');

    // 8. Saturación de Color
    root.classList.remove('saturation-50', 'saturation-150');
    if (settings.colorSaturation === 50) root.classList.add('saturation-50');
    if (settings.colorSaturation === 150) root.classList.add('saturation-150');

    // 9. Forzar Mayúsculas
    if (settings.uppercaseText) root.classList.add('force-uppercase');
    else root.classList.remove('force-uppercase');

  }, [settings, isLoaded]);

  // Funciones originales
  const updateTextSize = (size) => setSettings(s => ({ ...s, textSize: size }));
  const updateHighContrast = (val) => setSettings(s => ({ ...s, highContrast: val }));
  const updateTheme = (val) => setSettings(s => ({ ...s, theme: val }));
  const updateReducedAnimations = (val) => setSettings(s => ({ ...s, reducedAnimations: val }));
  const updateDyslexiaFont = (val) => setSettings(s => ({ ...s, dyslexiaFont: val }));
  const updateIncreasedSpacing = (val) => setSettings(s => ({ ...s, increasedSpacing: val }));
  
  // Nuevas funciones actualizadoras
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
    // Exportamos las nuevas
    updateBlueLightFilter,
    updateColorSaturation,
    updateUppercaseText,
    updatePreventAccidentalClicks,
    updateShowGlossary,
    resetToDefaults,
    loadSettings
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