import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon, CalendarIcon, UsersIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { FEATURED_PROJECTS } from '../../constants';

// Tipo Project definido localmente
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
}

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive }) => {
  const getStatusBadge = (status: Project['status']) => {
    const statusConfig = {
      planning: { label: 'LANZAMIENTO', color: 'bg-green-500 text-white' },
      construction: { label: 'EN CONSTRUCCIÓN', color: 'bg-blue-500 text-white' },
      completed: { label: 'EN VENTA', color: 'bg-primary text-white' }
    };

    const config = statusConfig[status];
    return (
      <div className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold ${config.color} shadow-md`}>
        {config.label}
      </div>
    );
  };
  
  const getProjectTypeBadge = (type?: string) => {
    if (!type) return null;
    
    const typeConfig = {
      VIS: { label: 'VIS', color: 'bg-green-600 text-white' },
      Premium: { label: 'PREMIUM', color: 'bg-secondary text-white' },
      Comercial: { label: 'COMERCIAL', color: 'bg-gray-600 text-white' }
    };
    
    const config = typeConfig[type as keyof typeof typeConfig];
    return config ? (
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${config.color}`}>
        {config.label}
      </div>
    ) : null;
  };

  return (
    <div className={`bg-white rounded-3xl shadow-soft overflow-hidden group transition-all duration-500 transform ${
      isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
    } hover:shadow-2xl hover:-translate-y-3`}>
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={`https://images.unsplash.com/photo-${project.id === '1' ? '1545324418-cc1a3fa10b02' : project.id === '2' ? '1560448204-e02f11c3a698' : '1441986300917-64674bd600d8'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {getStatusBadge(project.status)}
          {getProjectTypeBadge(project.projectType)}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
          {project.name}
        </h3>
        
        <div className="flex items-center text-gray-500 mb-4">
          <MapPinIcon className="h-5 w-5 mr-2 text-primary" />
          <span className="font-detail">{project.location}</span>
        </div>

        <p className="text-gray-700 mb-6 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Precio */}
        {project.price && (
          <div className="mb-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
            <div className="text-sm text-neutral-medium-gray mb-1">{project.price.label}</div>
            <div className="text-2xl font-bold text-primary mb-1">{project.price.cop}</div>
            <div className="text-sm text-neutral-medium-gray">{project.price.usd}</div>
            <div className="text-xs text-primary mt-2 font-medium">Precio de referencia</div>
          </div>
        )}

        {/* Project Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-sm">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            <span className="text-neutral-medium-gray">{project.area.toLocaleString()} m²</span>
          </div>
          <div className="flex items-center text-sm">
            <UsersIcon className="h-4 w-4 mr-2 text-primary" />
            <span className="text-neutral-medium-gray">{project.units} unidades</span>
          </div>
          {project.deliveryDate && (
            <div className="flex items-center text-sm col-span-2">
              <CalendarIcon className="h-4 w-4 mr-2 text-primary" />
              <span className="text-neutral-medium-gray">
                Entrega: {new Date(project.deliveryDate).toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long' 
                })}
              </span>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-neutral-almost-black mb-3">Amenidades destacadas:</h4>
          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, 4).map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
              >
                {feature}
              </span>
            ))}
            {project.features.length > 4 && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-secondary/10 text-secondary border border-secondary/20">
                +{project.features.length - 4} más
              </span>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <button className="btn-primary w-full flex items-center justify-center gap-3">
          Conoce más
          <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const ProjectsCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURED_PROJECTS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % FEATURED_PROJECTS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      id="proyectos" 
      className="py-20 bg-gradient-to-br from-neutral-light-gray via-white to-neutral-light-gray"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-primary">Proyectos</span>
          </h2>
          <p className="font-detail text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestros desarrollos inmobiliarios de vanguardia que están transformando el paisaje urbano con innovación y sostenibilidad
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {FEATURED_PROJECTS.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <ProjectCard 
                    project={project} 
                    isActive={index === currentSlide}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-neutral-almost-black hover:bg-white hover:border-primary transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
            aria-label="Proyecto anterior"
          >
            <ChevronLeftIcon className="h-6 w-6 group-hover:scale-110 group-hover:text-primary transition-all" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-neutral-almost-black hover:bg-white hover:border-primary transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
            aria-label="Siguiente proyecto"
          >
            <ChevronRightIcon className="h-6 w-6 group-hover:scale-110 group-hover:text-primary transition-all" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {FEATURED_PROJECTS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary scale-125 shadow-md'
                    : 'bg-gray-300 hover:bg-primary/50'
                }`}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 w-full max-w-xs mx-auto h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 rounded-full"
              style={{ width: `${((currentSlide + 1) / FEATURED_PROJECTS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <div className="text-neutral-medium-gray">Proyectos Activos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">320+</div>
            <div className="text-neutral-medium-gray">Unidades</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">75,000+</div>
            <div className="text-neutral-medium-gray">m² Construidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-neutral-medium-gray">Satisfacción</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;