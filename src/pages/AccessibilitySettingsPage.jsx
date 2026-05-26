import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Settings, 
  Type, 
  Contrast, 
  Moon, 
  Play, 
  BookOpen, 
  Maximize,
  Eye,       // Icono para Filtro de luz azul y Saturación
  Heading,     // Icono para Mayúsculas
  MousePointerClick // Icono para Clics Accidentales
} from 'lucide-react';
import { useAccessibility } from '@/contexts/AccessibilityContext.jsx';
import { toast } from 'sonner';

const AccessibilitySettingsPage = () => {
  const { 
    settings, 
    updateTextSize, 
    updateHighContrast, 
    updateTheme, 
    updateReducedAnimations, 
    updateDyslexiaFont, 
    updateIncreasedSpacing,
    // --- IMPORTAMOS LAS NUEVAS FUNCIONES ---
    updateBlueLightFilter,
    updateColorSaturation,
    updateUppercaseText,
    updatePreventAccidentalClicks,
    updateShowGlossary,
    resetToDefaults 
  } = useAccessibility();

  const handleReset = () => {
    resetToDefaults();
    toast.success('Valores predeterminados restaurados');
  };

  return (
    <>
      <Helmet>
        <title>Accesibilidad - Tramita Fácil y Rápido</title>
      </Helmet>

      {/* Sincronizado dinámicamente con las clases globales */}
      <div className="min-h-screen bg-gray-50 dark:bg-[#121212] py-12 lg:py-16 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 flex items-center justify-center mx-auto mb-6">
              <Settings className="w-8 h-8 text-[#0052CC]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
              Configuración de Accesibilidad
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
              Personaliza tu experiencia según tus necesidades
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-sm border border-gray-100 dark:border-neutral-700 overflow-hidden">
            <div className="p-6 md:p-10 space-y-12">
              
              {/* 1. Tamaño de Texto */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Type className="w-6 h-6 text-[#0052CC]" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tamaño de Texto</h2>
                </div>
                <div className="pl-9">
                  <div className="flex items-center justify-between mb-4 text-gray-500 dark:text-gray-400">
                    <span className="text-sm font-medium">100%</span>
                    <span className="text-sm font-medium">160%</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="160" 
                    step="20"
                    value={settings.textSize}
                    onChange={(e) => updateTextSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="mt-6 p-4 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-100 dark:border-neutral-700">
                    <p className="text-gray-700 dark:text-gray-300" style={{ fontSize: `${settings.textSize}%` }}>
                      Este es un ejemplo de texto al {settings.textSize}%.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100 dark:border-neutral-700" />

              {/* 2. Alto Contraste */}
              <section>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Contrast className="w-6 h-6 text-[#0052CC] mt-1" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Alto Contraste</h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Aumenta el contraste de los colores para mejorar la legibilidad.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-2">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={settings.highContrast}
                      onChange={(e) => updateHighContrast(e.target.checked)}
                    />
                    <div className="w-14 h-7 bg-gray-200 dark:bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#0052CC]"></div>
                  </label>
                </div>
              </section>

              <hr className="border-gray-100 dark:border-neutral-700" />

              {/* 3. Tema Visual */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Moon className="w-6 h-6 text-[#0052CC] mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Tema Visual</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Elige entre modo claro, oscuro o automático.</p>
                  </div>
                </div>
                <div className="pl-9 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {['light', 'dark', 'auto'].map((t) => (
                    <label key={t} className={`flex items-center justify-center px-4 py-3 border rounded-xl cursor-pointer transition-all ${settings.theme === t ? 'border-[#0052CC] bg-blue-50 dark:bg-blue-950/30 text-[#0052CC]' : 'border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-700/50 text-gray-700 dark:text-gray-300'}`}>
                      <input 
                        type="radio" 
                        name="theme" 
                        value={t}
                        checked={settings.theme === t}
                        onChange={(e) => updateTheme(e.target.value)}
                        className="sr-only"
                      />
                      <span className="font-semibold capitalize">{t === 'light' ? 'Claro' : t === 'dark' ? 'Oscuro' : 'Automático'}</span>
                    </label>
                  ))}
                </div>
              </section>

              <hr className="border-gray-100 dark:border-neutral-700" />

              {/* 4. Filtro de Luz Azul (NUEVO) */}
              <section>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Eye className="w-6 h-6 text-[#0052CC] mt-1" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Filtro de Luz Azul</h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Aplica un tono cálido para reducir el cansancio y fatiga visual.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-2">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={settings.blueLightFilter}
                      onChange={(e) => updateBlueLightFilter(e.target.checked)}
                    />
                    <div className="w-14 h-7 bg-gray-200 dark:bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#0052CC]"></div>
                  </label>
                </div>
              </section>

              <hr className="border-gray-100 dark:border-neutral-700" />

              {/* 5. Saturación de Color (NUEVO) */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Eye className="w-6 h-6 text-[#0052CC] mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Saturación de Color</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Modifica la intensidad cromática según tu sensibilidad visual.</p>
                  </div>
                </div>
                <div className="pl-9 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {[50, 100, 150].map((sat) => (
                    <label key={sat} className={`flex items-center justify-center px-4 py-3 border rounded-xl cursor-pointer transition-all ${settings.colorSaturation === sat ? 'border-[#0052CC] bg-blue-50 dark:bg-blue-950/30 text-[#0052CC]' : 'border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-700/50 text-gray-700 dark:text-gray-300'}`}>
                      <input 
                        type="radio" 
                        name="saturation" 
                        value={sat}
                        checked={settings.colorSaturation === sat}
                        onChange={() => updateColorSaturation(sat)}
                        className="sr-only"
                      />
                      <span className="font-semibold">
                        {sat === 50 ? 'Baja (50%)' : sat === 100 ? 'Normal (100%)' : 'Alta (150%)'}
                      </span>
                    </label>
                  ))}
                </div>
              </section>

              <hr className="border-gray-100 dark:border-neutral-700" />

              {/* 6. Conversión de Mayúsculas (NUEVO) */}
              <section>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Heading className="w-6 h-6 text-[#0052CC] mt-1" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Conversión a Mayúsculas</h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Transforma de manera global los textos legibles del sitio a letras mayúsculas.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-2">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={settings.uppercaseText}
                      onChange={(e) => updateUppercaseText(e.target.checked)}
                    />
                    <div className="w-14 h-7 bg-gray-200 dark:bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#0052CC]"></div>
                  </label>
                </div>
              </section>

              <hr className="border-gray-100 dark:border-neutral-700" />

              {/* 7. Bloqueo de Clics Accidentales (NUEVO) */}
              <section>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <MousePointerClick className="w-6 h-6 text-[#0052CC] mt-1" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Evitar Clics Accidentales</h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Añade protección contra pulsaciones múltiples repetitivas e involuntarias.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-2">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={settings.preventAccidentalClicks}
                      onChange={(e) => updatePreventAccidentalClicks(e.target.checked)}
                    />
                    <div className="w-14 h-7 bg-gray-200 dark:bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#0052CC]"></div>
                  </label>
                </div>
              </section>

              <hr className="border-gray-100 dark:border-neutral-700" />

              {/* 8. Glosario de Términos Flotante (NUEVO) */}
              <section>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-6 h-6 text-[#0052CC] mt-1" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Glosario de Términos Flotante</h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Muestra definiciones emergentes automáticamente al posicionarse sobre términos técnicos.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-2">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={settings.showGlossary}
                      onChange={(e) => updateShowGlossary(e.target.checked)}
                    />
                    <div className="w-14 h-7 bg-gray-200 dark:bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#0052CC]"></div>
                  </label>
                </div>
              </section>

              <hr className="border-gray-100 dark:border-neutral-700" />

              {/* 9. Reducir Animaciones */}
              <section>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Play className="w-6 h-6 text-[#0052CC] mt-1" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Reducir Animaciones</h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Desactiva las animaciones y transiciones en la interfaz.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-2">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={settings.reducedAnimations}
                      onChange={(e) => updateReducedAnimations(e.target.checked)}
                    />
                    <div className="w-14 h-7 bg-gray-200 dark:bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#0052CC]"></div>
                  </label>
                </div>
              </section>

              <hr className="border-gray-100 dark:border-neutral-700" />

              {/* 10. Fuente para Dislexia */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-[#0052CC] mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Fuente para Dislexia</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Utiliza una tipografía diseñada para facilitar la lectura.</p>
                  </div>
                </div>
                <div className="pl-9 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <label className={`flex items-center justify-center px-4 py-3 border rounded-xl cursor-pointer transition-all ${!settings.dyslexiaFont ? 'border-[#0052CC] bg-blue-50 dark:bg-blue-950/30 text-[#0052CC]' : 'border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-700/50 text-gray-700 dark:text-gray-300'}`}>
                    <input 
                      type="radio" 
                      name="dyslexia" 
                      checked={!settings.dyslexiaFont}
                      onChange={() => updateDyslexiaFont(false)}
                      className="sr-only"
                    />
                    <span className="font-semibold">Fuente Estándar</span>
                  </label>
                  <label className={`flex items-center justify-center px-4 py-3 border rounded-xl cursor-pointer transition-all ${settings.dyslexiaFont ? 'border-[#0052CC] bg-blue-50 dark:bg-blue-950/30 text-[#0052CC]' : 'border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-700/50 text-gray-700 dark:text-gray-300'}`}>
                    <input 
                      type="radio" 
                      name="dyslexia" 
                      checked={settings.dyslexiaFont}
                      onChange={() => updateDyslexiaFont(true)}
                      className="sr-only"
                    />
                    <span className="font-semibold" style={{ fontFamily: 'OpenDyslexic, sans-serif' }}>OpenDyslexic</span>
                  </label>
                </div>
              </section>

              <hr className="border-gray-100 dark:border-neutral-700" />

              {/* 11. Aumentar Espaciado */}
              <section>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Maximize className="w-6 h-6 text-[#0052CC] mt-1" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Aumentar Espaciado</h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Incrementa el espacio entre letras y líneas de texto.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-2">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={settings.increasedSpacing}
                      onChange={(e) => updateIncreasedSpacing(e.target.checked)}
                    />
                    <div className="w-14 h-7 bg-gray-200 dark:bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#0052CC]"></div>
                  </label>
                </div>
              </section>

            </div>
            
            {/* Acciones */}
            <div className="bg-gray-50 dark:bg-neutral-900 p-6 md:p-8 border-t border-gray-100 dark:border-neutral-700 flex flex-col sm:flex-row gap-4 justify-end">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-neutral-700 transition-all duration-200 active:scale-[0.98]"
              >
                Restaurar Valores Predeterminados
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AccessibilitySettingsPage;