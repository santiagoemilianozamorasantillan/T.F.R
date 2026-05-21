import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from '@/contexts/AuthContext.jsx';
import { AccessibilityProvider } from '@/contexts/AccessibilityContext.jsx';
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

function App() {
  return (
    <AccessibilityProvider>
      <FavoritesProvider>
        <AuthProvider>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-background text-foreground font-sans transition-colors duration-300">
            <Toaster position="top-right" richColors />
            <Header />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/login" element={<LoginPage />} />

                <Route 
                  path="/" 
                  element={
                    <ProtectedRoute>
                      <HomePage />
                    </ProtectedRoute>
                  } 
                />
                
                <Route 
                  path="/guide" 
                  element={
                    <ProtectedRoute>
                      <GuidePage />
                    </ProtectedRoute>
                  } 
                />

                <Route path="/recuperar-contrasena" element={<ForgotPasswordPage />} />

                <Route 
                  path="/tramite/:id" 
                  element={
                    <ProtectedRoute>
                      <GuideDetailPage />
                    </ProtectedRoute>
                  } 
                />
                
                <Route 
                  path="/favoritos" 
                  element={
                    <ProtectedRoute>
                      <FavoritesPage />
                    </ProtectedRoute>
                  } 
                />
                
                <Route 
                  path="/accesibilidad" 
                  element={
                    <ProtectedRoute>
                      <AccessibilitySettingsPage />
                    </ProtectedRoute>
                  } 
                />
                
                <Route 
                  path="/categoria/:categoryId" 
                  element={
                    <ProtectedRoute>
                      <CategoryDetailPage />
                    </ProtectedRoute>
                  } 
                />
                
                <Route 
                  path="/history" 
                  element={
                    <ProtectedRoute>
                      <HistoryPage />
                    </ProtectedRoute>
                  } 
                />

                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </AuthProvider>
      </FavoritesProvider>
    </AccessibilityProvider>
  );
}

export default App;