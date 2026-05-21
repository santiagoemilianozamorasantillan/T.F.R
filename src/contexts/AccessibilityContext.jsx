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

    // Save to localStorage
    localStorage.setItem('tramita_a11y', JSON.stringify(settings));

    // Apply to document
    const root = document.documentElement;
    
    // Text Size
    root.classList.remove('text-size-100', 'text-size-120', 'text-size-140', 'text-size-160');
    root.classList.add(`text-size-${settings.textSize}`);

    // High Contrast
    if (settings.highContrast) root.classList.add('high-contrast');
    else root.classList.remove('high-contrast');

    // Theme
    root.classList.remove('dark');
    if (settings.theme === 'dark' || (settings.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    }

    // Reduced Animations
    if (settings.reducedAnimations) root.classList.add('reduced-motion');
    else root.classList.remove('reduced-motion');

    // Dyslexia Font
    if (settings.dyslexiaFont) root.classList.add('dyslexia-font');
    else root.classList.remove('dyslexia-font');

    // Increased Spacing
    if (settings.increasedSpacing) root.classList.add('spacing-increased');
    else root.classList.remove('spacing-increased');

  }, [settings, isLoaded]);

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