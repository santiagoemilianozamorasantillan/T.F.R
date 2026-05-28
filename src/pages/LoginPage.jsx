import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, Link } from 'react-router-dom';
import { FileText, Mail, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { toast } from 'sonner';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, signup } = useAuth();
  const [mostrarModal, setMostrarModal] = useState(false);

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validación Básica
    if (!email.includes('@')) {
      setError('Formato de correo electrónico inválido.');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setLoading(true);

    try {
      if (isLoginMode) {
        await login(email, password);
        toast.success('Sesión iniciada correctamente');
        navigate('/guide'); // Solo redirecciona si es inicio de sesión
      } else {
        await signup(email, password);
        toast.success('Cuenta creada exitosamente');
        setMostrarModal(true); // Muestra el modal en lugar de redireccionar
      }
    } catch (err) {
      console.error('Auth error:', err);
      if (isLoginMode) {
        setError('Credenciales incorrectas. Por favor, verifica tu email y contraseña.');
      } else {
        setError('No se pudo crear la cuenta. Es posible que el correo ya esté en uso.');
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setError('');
    setPassword('');
  };

  return (
    <>
      <Helmet>
        <title>{isLoginMode ? 'Iniciar Sesión' : 'Registrarse'} - Tramita Fácil y Rápido</title>
      </Helmet>

      <div className="min-h-[calc(100vh-80px-136px)] bg-gray-50 dark:bg-neutral-900 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-md w-full">
          <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-lg border border-gray-100 dark:border-neutral-700 p-8 sm:p-10 transition-colors duration-300">

            <div className="text-center mb-10">
              <div className="mx-auto w-16 h-16 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                <FileText className="w-8 h-8 text-[#0052CC] dark:text-blue-400" />
              </div>
              <h1 className="text-3xl font-extrabold text-[#1a1a1a] dark:text-white tracking-tight transition-colors">
                {isLoginMode ? 'Iniciar Sesión' : 'Crear Cuenta'}
              </h1>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 rounded-xl flex items-start gap-3 transition-colors">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700 dark:text-red-400 font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:bg-white dark:focus:bg-neutral-800 focus:ring-2 focus:ring-[#0052CC] dark:focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:bg-white dark:focus:bg-neutral-800 focus:ring-2 focus:ring-[#0052CC] dark:focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="Mínimo 6 caracteres"
                  />
                </div>
              </div>

              <div className="flex justify-end mb-4">
                <Link
                  to="/recuperar-contrasena"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#1a1a1a] dark:bg-white text-white dark:text-black rounded-xl text-base font-bold hover:bg-black dark:hover:bg-gray-200 transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
              >
                {loading
                  ? 'Procesando...'
                  : (isLoginMode ? 'Ingresar' : 'Registrarse')}
              </button>
            </form>

            <div className="mt-8 text-center">
              <button
                onClick={toggleMode}
                className="text-sm font-semibold text-[#0052CC] dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                {isLoginMode
                  ? '¿No tienes cuenta? Regístrate'
                  : '¿Ya tienes cuenta? Inicia sesión'}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* MODAL DE CONFIRMACIÓN DE CORREO */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 dark:bg-opacity-80 flex items-center justify-center z-50 p-4 transition-all duration-300">
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-transparent dark:border-neutral-700 transition-colors duration-300">
            <div className="text-5xl mb-4">📧</div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white transition-colors">¡Casi listo!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-5 text-left text-sm leading-relaxed transition-colors">
              Hemos enviado un enlace a tu correo. Para poder entrar y ver las guías de los trámites, <strong>debes confirmar tu cuenta</strong> haciendo clic en ese correo (revisa tu carpeta de spam por si acaso).
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-500/10 border-l-4 border-yellow-400 dark:border-yellow-500 p-4 text-sm text-left mb-6 text-yellow-800 dark:text-yellow-200/90 rounded-r-lg transition-colors">
              <strong>Nota importante:</strong> Al hacer clic en el enlace del correo, es posible que la página te muestre un mensaje de "error" o pantalla en blanco. No te preocupes, si llegas a esa pantalla significa que <strong>tu cuenta ya fue confirmada con éxito</strong> y puedes regresar aquí.
            </div>
            <button
              onClick={() => {
                setMostrarModal(false);
                setIsLoginMode(true); // Lo regresa al modo de iniciar sesión
                setEmail('');
                setPassword('');
              }}
              className="w-full bg-[#0052CC] dark:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-800 dark:hover:bg-blue-700 transition duration-300"
            >
              Entendido, ir a Iniciar Sesión
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;