import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from '@/contexts/AuthContext.jsx';
import { AccessibilityProvider, useAccessibility } from '@/contexts/AccessibilityContext.jsx';
import { FavoritesProvider } from '@/contexts/FavoritesContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HomePage from '@/pages/HomePage.jsx';
import GuidePage from '@/pages/GuidePage.jsx';
import HistoryPage from '@/pages/HistoryPage.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import FavoritesPage from '@/pages/FavoritesPage.jsx';
import AccessibilitySettingsPage from '@/pages/AccessibilitySettingsPage.jsx';
import ProtectedRoute from '@/components/ProtectedRoute.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import CategoryDetailPage from '@/pages/CategoryDetailPage.jsx';
import GuideDetailPage from '@/pages/GuideDetailPage.jsx'; 

// Este componente aplica las clases directamente al <body> del HTML
const AccessibilityApplier = ({ children }) => {
  const { settings } = useAccessibility();

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // 1. Limpiar clases anteriores
    root.classList.remove('dark');
    body.className = ''; 

    // 2. Aplicar Tema Oscuro a <html>
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (settings.theme === 'dark' || (settings.theme === 'auto' && prefersDark)) {
      root.classList.add('dark');
      if (settings.blueLightFilter) body.classList.add('blue-light-filter');
    body.classList.remove('saturation-50', 'saturation-150');
    if (settings.colorSaturation !== 100) body.classList.add(`saturation-${settings.colorSaturation}`);
    if (settings.uppercaseText) body.classList.add('force-uppercase');
    }

    // 3. Aplicar clases de Accesibilidad al <body>
    body.classList.add(`text-size-${settings.textSize}`);
    if (settings.highContrast) body.classList.add('high-contrast');
    if (settings.reducedAnimations) body.classList.add('reduced-motion');
    if (settings.dyslexiaFont) body.classList.add('dyslexia-font');
    if (settings.increasedSpacing) body.classList.add('spacing-increased');

  }, [settings]);

  return <>{children}</>;
};

function App() {
  return (
    <AccessibilityProvider>
      <FavoritesProvider>
        <AuthProvider>
          <AccessibilityApplier>
            <ScrollToTop />
            {/* Quitamos bg-background forzado para que el tema oscuro pueda actuar libremente */}
            <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 dark:bg-neutral-900 dark:text-white">
              <Toaster position="top-right" richColors />
              <Header />
              
              <main className="flex-grow">
                <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                  <Route path="/guide" element={<ProtectedRoute><GuidePage /></ProtectedRoute>} />
                  <Route path="/recuperar-contrasena" element={<ForgotPasswordPage />} />
                  <Route path="/tramite/:id" element={<ProtectedRoute><GuideDetailPage /></ProtectedRoute>} />
                  <Route path="/favoritos" element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />
                  <Route path="/accesibilidad" element={<ProtectedRoute><AccessibilitySettingsPage /></ProtectedRoute>} />
                  <Route path="/categoria/:categoryId" element={<ProtectedRoute><CategoryDetailPage /></ProtectedRoute>} />
                  <Route path="/history" element={<ProtectedRoute><HistoryPage /></ProtectedRoute>} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </AccessibilityApplier>
        </AuthProvider>
      </FavoritesProvider>
    </AccessibilityProvider>
  );
}

export default App;