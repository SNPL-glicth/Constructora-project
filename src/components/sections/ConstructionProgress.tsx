import React from 'react';
import { CalendarIcon, CameraIcon } from '@heroicons/react/24/solid';

const ConstructionProgress: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        
        {/* Main Progress Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row h-auto lg:h-96">
            
            {/* Image Section */}
            <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Avance de construcción"
                className="w-full h-full object-cover"
              />
              
              {/* Date Badge */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span className="font-semibold text-sm">Septiembre 2025</span>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                75% Completado
              </div>
            </div>

            {/* Content Section - Blue Panel */}
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-12 flex flex-col justify-center">
              <div>
                <h2 className="font-heading text-4xl font-bold mb-6">
                  Avance de obra
                </h2>
                
                <div className="w-16 h-1 bg-white/40 mb-8"></div>
                
                <p className="font-detail text-xl leading-relaxed mb-10 text-blue-100">
                  Tu proyecto ya se encuentra en etapa de construcción. Revisa mes a mes el 
                  progreso de avance de obra de tu vivienda.
                </p>
                
                <button className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CameraIcon className="h-5 w-5" />
                  <span>Ver avance de obra</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Progress Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">85%</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
              Estructura Completada
            </h3>
            <p className="font-detail text-gray-600">
              Cimientos, columnas y vigas principales terminadas
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">60%</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
              Instalaciones
            </h3>
            <p className="font-detail text-gray-600">
              Sistemas eléctricos, hidráulicos y de gas
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">40%</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
              Acabados
            </h3>
            <p className="font-detail text-gray-600">
              Pintura, pisos y detalles finales en proceso
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="font-heading text-3xl font-bold text-center text-gray-900 mb-16">
            Cronograma de Avance
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">
                    Inicio de Construcción
                  </h4>
                  <p className="font-detail text-gray-600">
                    Excavación y cimientos completados
                  </p>
                </div>
                <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1 pl-8">
                  <span className="font-semibold text-blue-600">Enero 2025</span>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <span className="font-semibold text-blue-600">Mayo 2025</span>
                </div>
                <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1 pl-8">
                  <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">
                    Estructura Principal
                  </h4>
                  <p className="font-detail text-gray-600">
                    Columnas, vigas y losas terminadas
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 3 - Current */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h4 className="font-heading text-xl font-bold text-blue-600 mb-2">
                    Instalaciones y Mampostería
                  </h4>
                  <p className="font-detail text-blue-600 font-semibold">
                    En progreso - 75% completado
                  </p>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>
                <div className="flex-1 pl-8">
                  <span className="font-semibold text-blue-600">Septiembre 2025</span>
                </div>
              </div>
              
              {/* Timeline Item 4 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <span className="font-semibold text-gray-400">Diciembre 2025</span>
                </div>
                <div className="w-6 h-6 bg-gray-300 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1 pl-8">
                  <h4 className="font-heading text-xl font-bold text-gray-400 mb-2">
                    Acabados Finales
                  </h4>
                  <p className="font-detail text-gray-400">
                    Pintura, pisos y detalles de terminación
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 5 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h4 className="font-heading text-xl font-bold text-gray-400 mb-2">
                    Entrega Final
                  </h4>
                  <p className="font-detail text-gray-400">
                    Inspección final y entrega de llaves
                  </p>
                </div>
                <div className="w-6 h-6 bg-gray-300 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1 pl-8">
                  <span className="font-semibold text-gray-400">Marzo 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionProgress;