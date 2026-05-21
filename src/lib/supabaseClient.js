import { createClient } from '@supabase/supabase-js';

// 1. Tu URL base limpia
const supabaseUrl = 'https://bhoyrkkwifvgtmzyfosb.supabase.co';

// 2. Borra el texto de abajo y presiona Ctrl + V para pegar la clave completa que acabas de copiar
const supabaseAnonKey = 'sb_publishable_V-RCpuB4Ofwb0yeCfinsHA_HOBzteMK';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);