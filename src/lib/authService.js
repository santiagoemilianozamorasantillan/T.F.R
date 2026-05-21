import { supabase } from './supabaseClient';

// Función para registrar un nuevo usuario
export const registrarUsuario = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

// Función para iniciar sesión
export const iniciarSesion = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

export const enviarCorreoRecuperacion = async (email) => {
  // Supabase necesita saber a dónde regresar al usuario después de hacer clic en el correo
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    // Cambia el puerto 5173 si su servidor local usa otro
    redirectTo: 'http://localhost:5173/actualizar-contrasena', 
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

// Función para cerrar sesión
export const cerrarSesion = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};