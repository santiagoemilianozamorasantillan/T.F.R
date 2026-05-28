import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

export default function ActualizarContrasenaPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Escuchamos si el usuario llegó desde el enlace de recuperación
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        toast.info('Ingresa tu nueva contraseña');
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (password !== confirmPassword) {
      return toast.error('Las contraseñas no coinciden.');
    }
    if (password.length < 6) {
      return toast.error('La contraseña debe tener al menos 6 caracteres.');
    }

    setLoading(true);

    try {
      // Función clave: actualiza la contraseña en Supabase
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) throw error;

      toast.success('¡Contraseña actualizada con éxito!');
      
      // Lo mandamos al inicio de sesión
      navigate('/login');
      
    } catch (error) {
      console.error('Error de Supabase:', error.message);
      toast.error('Tu enlace de recuperación caducó o es inválido. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Crear Nueva Contraseña - Tramita Fácil y Rápido</title>
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 p-4 transition-colors duration-300">
        <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 w-full max-w-md text-center transition-colors">
          <div className="mb-6 flex justify-center">
            <div className="bg-blue-50 dark:bg-blue-500/10 p-3 rounded-2xl border border-blue-100 dark:border-blue-500/20 transition-colors">
              <span className="text-2xl text-[#0052CC] dark:text-blue-400 font-extrabold tracking-tight">
                T.F.R
              </span>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-2 transition-colors">
            Crea tu nueva contraseña
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm leading-relaxed transition-colors">
            Asegúrate de usar una contraseña segura y que no olvides fácilmente.
          </p>

          <form onSubmit={handleSubmit} className="text-left">
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2 transition-colors">
                Nueva Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0052CC] dark:focus:ring-blue-500 text-gray-900 dark:text-white transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2 transition-colors">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0052CC] dark:focus:ring-blue-500 text-gray-900 dark:text-white transition-all"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1a1a1a] dark:bg-white text-white dark:text-black font-bold py-3.5 px-4 rounded-xl hover:bg-black dark:hover:bg-gray-200 transition-all duration-200 active:scale-[0.98] shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin"></div>
              ) : (
                'Guardar nueva contraseña'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}