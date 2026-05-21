import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';

const ProtectedRoute = ({ children }) => {
  // CAMBIO AQUÍ: Ahora usamos 'user' y 'loading' (o 'initialLoading' si así se llama en tu AuthContext)
  const { user, loading } = useAuth();
  const location = useLocation();

  // Si Supabase está verificando si el usuario ya inició sesión, mostramos tu spinner
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground text-sm font-medium">Verificando sesión...</p>
        </div>
      </div>
    );
  }

  // CAMBIO AQUÍ: Si terminó de cargar y NO hay un usuario activo, mandamos a loguear
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si hay usuario, pasa directo a ver el Historial
  return children;
};

export default ProtectedRoute;