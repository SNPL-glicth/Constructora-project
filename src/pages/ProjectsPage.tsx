import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon,
  PhoneIcon,
  EyeIcon,
  StarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { FEATURED_PROJECTS } from '../constants';

// Tipos locales
interface Project {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  gallery?: string[];
  status: 'planning' | 'construction' | 'completed';
  area: number;
  units: number;
  deliveryDate?: string;
  features: string[];
  price?: {
    cop: string;
    usd: string;
    label: string;
  };
  projectType?: 'VIS' | 'Premium' | 'Comercial';
  testimonial?: {
    client: string;
    rating: number;
    comment: string;
    avatar?: string;
  };
  beforeAfter?: {
    before: string;
    after: string;
  };
  videoUrl?: string;
  completedDate?: string;
  progress?: number;
}

const ProjectsPage: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<'all' | Project['status']>('all');
  const [selectedType, setSelectedType] = useState<'all' | Project['projectType']>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // Filtrar proyectos
  const filteredProjects = FEATURED_PROJECTS.filter(project => {
    const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;
    const typeMatch = selectedType === 'all' || project.projectType === selectedType;
    return statusMatch && typeMatch;
  });

  // Función para obtener configuración de estado
  const getStatusConfig = (status: Project['status']) => {
    const configs = {
      planning: { 
        label: 'PRÓXIMO LANZAMIENTO', 
        color: 'bg-yellow-500',
        textColor: 'text-yellow-700',
        bgColor: 'bg-yellow-50'
      },
      construction: { 
        label: 'EN CONSTRUCCIÓN', 
        color: 'bg-green-500',
        textColor: 'text-green-700',
        bgColor: 'bg-green-50'
      },
      completed: { 
        label: 'PROYECTO TERMINADO', 
        color: 'bg-blue-500',
        textColor: 'text-blue-700',
        bgColor: 'bg-blue-50'
      }
    };
    return configs[status];
  };

  // Función para cambiar imagen de galería
  const nextGalleryImage = () => {
    if (selectedProject?.gallery) {
      setCurrentGalleryIndex((prev) => 
        prev < selectedProject.gallery!.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevGalleryImage = () => {
    if (selectedProject?.gallery) {
      setCurrentGalleryIndex((prev) => 
        prev > 0 ? prev - 1 : selectedProject.gallery!.length - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Nuestros <span className="text-blue-200">Proyectos</span>
            </h1>
            <p className="font-detail text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Descubre nuestra trayectoria de excelencia a través de proyectos completados, 
              en construcción y próximos lanzamientos
            </p>
            
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center text-blue-200 text-sm">
              <Link to="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <ArrowRightIcon className="h-4 w-4 mx-2" />
              <span className="text-white">Proyectos</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            
            {/* Status Filters */}
            <div className="flex flex-wrap gap-3">
              <h3 className="font-heading text-lg font-bold text-gray-900 mr-4">Estado:</h3>
              {[
                { key: 'all' as const, label: 'Todos', count: FEATURED_PROJECTS.length },
                { key: 'completed' as const, label: 'Completados', count: FEATURED_PROJECTS.filter(p => p.status === 'completed').length },
                { key: 'construction' as const, label: 'En Construcción', count: FEATURED_PROJECTS.filter(p => p.status === 'construction').length },
                { key: 'planning' as const, label: 'Próximos', count: FEATURED_PROJECTS.filter(p => p.status === 'planning').length }
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedStatus(filter.key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedStatus === filter.key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>

            {/* Type Filters */}
            <div className="flex flex-wrap gap-3">
              <h3 className="font-heading text-lg font-bold text-gray-900 mr-4">Tipo:</h3>
              {[
                { key: 'all' as const, label: 'Todos' },
                { key: 'VIS' as const, label: 'VIS' },
                { key: 'Premium' as const, label: 'Premium' },
                { key: 'Comercial' as const, label: 'Comercial' }
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedType(filter.key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedType === filter.key
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => {
              const statusConfig = getStatusConfig(project.status);
              
              return (
                <div
                  key={project.id}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg ${statusConfig.color}`}>
                      {statusConfig.label}
                    </div>

                    {/* Progress Badge (solo para construcción) */}
                    {project.status === 'construction' && project.progress && (
                      <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full text-sm font-bold text-gray-700 shadow-lg">
                        {project.progress}% Completado
                      </div>
                    )}

                    {/* Location Icon */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-600/90 rounded-full flex items-center justify-center shadow-lg">
                      <MapPinIcon className="h-6 w-6 text-white" />
                    </div>

                    {/* Gallery/Video Indicator */}
                    {project.gallery && (
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-full text-sm font-semibold">
                        +{project.gallery.length} fotos
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    {/* Project Header */}
                    <div className="mb-6">
                      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <MapPinIcon className="h-5 w-5 text-blue-600" />
                        <span className="font-detail">{project.location}</span>
                      </div>
                      <p className="font-detail text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-heading text-lg font-bold text-gray-900">
                          {project.units}
                        </div>
                        <div className="text-sm text-gray-600">Unidades</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-heading text-lg font-bold text-gray-900">
                          {project.area.toLocaleString()} m²
                        </div>
                        <div className="text-sm text-gray-600">Área Total</div>
                      </div>
                    </div>

                    {/* Price */}
                    {project.price && (
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="font-detail text-gray-500">{project.price.label}</span>
                          <span className="font-heading text-2xl font-bold text-blue-600">
                            {project.price.cop}
                          </span>
                        </div>
                        <div className="text-gray-500 font-detail text-sm">
                          Precio de referencia <span className="font-semibold text-green-600">{project.price.usd}</span>
                        </div>
                      </div>
                    )}

                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 4).map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-semibold"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial (si existe) */}
                    {project.testimonial && (
                      <div className="bg-gray-50 p-4 rounded-xl mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon 
                              key={i} 
                              className={`h-4 w-4 ${i < project.testimonial!.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="font-semibold text-gray-900 ml-2">
                            {project.testimonial.client}
                          </span>
                        </div>
                        <p className="font-detail text-gray-600 text-sm italic">
                          "{project.testimonial.comment}"
                        </p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          setCurrentGalleryIndex(0);
                        }}
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl flex-1"
                      >
                        <EyeIcon className="h-5 w-5" />
                        <span>Ver Galería</span>
                      </button>
                      <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl flex-1">
                        <PhoneIcon className="h-5 w-5" />
                        <span>Contactar</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal de Galería */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header del Modal */}
            <div className="p-6 border-b flex items-center justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-900">
                  {selectedProject.name}
                </h3>
                <p className="font-detail text-gray-600">{selectedProject.location}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Galería */}
            {selectedProject.gallery && (
              <div className="relative">
                <img
                  src={selectedProject.gallery[currentGalleryIndex]}
                  alt={`${selectedProject.name} - Imagen ${currentGalleryIndex + 1}`}
                  className="w-full h-80 object-cover"
                />
                
                {/* Navegación de galería */}
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevGalleryImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
                    </button>
                    <button
                      onClick={nextGalleryImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronRightIcon className="h-6 w-6 text-gray-700" />
                    </button>
                    
                    {/* Indicadores */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentGalleryIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentGalleryIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Información detallada */}
            <div className="p-6">
              <p className="font-detail text-gray-700 text-lg leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Antes y Después */}
              {selectedProject.beforeAfter && (
                <div className="mb-6">
                  <h4 className="font-heading text-lg font-bold text-gray-900 mb-4">
                    Antes y Después
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Antes</p>
                      <img
                        src={selectedProject.beforeAfter.before}
                        alt="Antes"
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Después</p>
                      <img
                        src={selectedProject.beforeAfter.after}
                        alt="Después"
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Features completas */}
              <div className="mb-6">
                <h4 className="font-heading text-lg font-bold text-gray-900 mb-4">
                  Amenidades y Características
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      <span className="font-detail text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              ¿Te interesa alguno de nuestros proyectos?
            </h2>
            <p className="font-detail text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Agenda una cita con nuestros asesores para conocer más detalles, opciones de financiamiento y disponibilidad
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/#contacto"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Agendar Cita</span>
              </Link>
              
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                <EyeIcon className="h-5 w-5" />
                <span>Ver Servicios</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;