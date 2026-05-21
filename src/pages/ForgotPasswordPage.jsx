import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { enviarCorreoRecuperacion } from '../lib/authService';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await enviarCorreoRecuperacion(email);
      setMensaje('Si el correo está registrado, recibirás un enlace para restablecer tu contraseña.');
    } catch (error) {
      // AQUÍ IMPRIMIRÁ EL ERROR EXACTO EN LA CONSOLA (F12)
      console.error("El error exacto de Supabase es:", error);
      setMensaje('Hubo un error al intentar enviar el correo. Intenta de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-blue-100 p-3 rounded-full">
            <span className="text-2xl text-blue-600 font-bold">T.F.R</span>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Recuperar Contraseña</h1>
        <p className="text-gray-600 mb-6 text-sm">
          Ingresa tu correo electrónico y te enviaremos instrucciones para crear una nueva contraseña.
        </p>

        <form onSubmit={handleSubmit} className="text-left">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Enviar enlace de recuperación
          </button>
        </form>

        {mensaje && (
          <div className="mt-4 p-3 bg-green-50 text-green-700 text-sm rounded-lg">
            {mensaje}
          </div>
        )}

        <div className="mt-6">
          <Link to="/login" className="text-sm text-blue-600 hover:underline">
            Volver a Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
}