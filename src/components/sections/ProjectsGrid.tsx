import React, { useState } from 'react';
import { MapPinIcon, CalendarIcon, UsersIcon, ArrowRightIcon, BuildingOfficeIcon, TagIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
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
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getStatusConfig = (status: Project['status']) => {
    const configs = {
      planning: { 
        label: 'PRÓXIMAMENTE', 
        color: 'bg-amber-500', 
        textColor: 'text-amber-700',
        bgColor: 'bg-amber-50',
        icon: BuildingOfficeIcon
      },
      construction: { 
        label: 'EN CONSTRUCCIÓN', 
        color: 'bg-blue-500', 
        textColor: 'text-blue-700',
        bgColor: 'bg-blue-50',
        icon: BuildingOfficeIcon
      },
      completed: { 
        label: 'DISPONIBLE', 
        color: 'bg-emerald-500', 
        textColor: 'text-emerald-700',
        bgColor: 'bg-emerald-50',
        icon: CheckCircleIcon
      }
    };
    return configs[status];
  };

  const statusConfig = getStatusConfig(project.status);
  const StatusIcon = statusConfig.icon;

  return (
    <div 
      className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-3 animate-fade-in`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        <img
          src={`https://images.unsplash.com/photo-${project.id === '1' ? '1545324418-cc1a3fa10b02' : project.id === '2' ? '1560448204-e02f11c3a698' : '1441986300917-64674bd600d8'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
          alt={project.name}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Status Badge */}
        <div className="absolute top-6 left-6">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-white font-bold text-sm shadow-lg ${statusConfig.color}`}>
            <StatusIcon className="h-4 w-4" />
            {statusConfig.label}
          </div>
        </div>

        {/* Project Type Badge */}
        {project.projectType && (
          <div className="absolute top-6 right-6">
            <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold border border-gray-200">
              {project.projectType}
            </div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Title & Location */}
        <div className="mb-6">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>
          
          <div className="flex items-center text-gray-500 mb-4">
            <MapPinIcon className="h-5 w-5 mr-2 text-primary" />
            <span className="font-detail font-medium">{project.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Price Section */}
        {project.price && (
          <div className="mb-6 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
            <div className="flex items-center justify-between mb-2">
              <span className="font-detail text-sm text-gray-600">{project.price.label}</span>
              <TagIcon className="h-4 w-4 text-primary" />
            </div>
            <div className="font-heading text-3xl font-bold text-primary mb-1">
              {project.price.cop}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">{project.price.usd}</span>
              <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded-full">
                Precio referencia
              </span>
            </div>
          </div>
        )}

        {/* Project Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <div>
              <div className="font-bold text-gray-900">{project.area.toLocaleString()}</div>
              <div className="text-xs text-gray-500 font-detail">m² Construidos</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
              <UsersIcon className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <div className="font-bold text-gray-900">{project.units}</div>
              <div className="text-xs text-gray-500 font-detail">Unidades</div>
            </div>
          </div>
        </div>

        {/* Delivery Date */}
        {project.deliveryDate && (
          <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-xl">
            <CalendarIcon className="h-5 w-5 text-primary" />
            <span className="font-detail text-gray-700">
              Entrega: {new Date(project.deliveryDate).toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long' 
              })}
            </span>
          </div>
        )}

        {/* Features */}
        <div className="mb-8">
          <h4 className="font-heading text-sm font-bold text-gray-900 mb-3">Amenidades Premium</h4>
          <div className="grid grid-cols-2 gap-2">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                <span className="text-sm text-gray-700 font-detail">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 px-6 rounded-2xl font-heading font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 group">
          Conoce más detalles
          <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const ProjectsGrid: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'VIS' | 'Premium' | 'Comercial'>('all');

  const filteredProjects = FEATURED_PROJECTS.filter(project => 
    filter === 'all' || project.projectType === filter
  );

  const filters = [
    { key: 'all' as const, label: 'Todos los Proyectos', count: FEATURED_PROJECTS.length },
    { key: 'VIS' as const, label: 'Vivienda VIS', count: FEATURED_PROJECTS.filter(p => p.projectType === 'VIS').length },
    { key: 'Premium' as const, label: 'Premium', count: FEATURED_PROJECTS.filter(p => p.projectType === 'Premium').length },
    { key: 'Comercial' as const, label: 'Comercial', count: FEATURED_PROJECTS.filter(p => p.projectType === 'Comercial').length },
  ];

  return (
    <section id="proyectos" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-primary">Proyectos</span>
          </h2>
          <p className="font-detail text-xl text-gray-500 leading-relaxed mb-8">
            Cada proyecto es una obra maestra de arquitectura moderna, diseñada con los más altos estándares de calidad y sostenibilidad
          </p>
          
          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-primary mb-2">
                {FEATURED_PROJECTS.reduce((acc, p) => acc + p.units, 0)}+
              </div>
              <div className="font-detail text-gray-500">Unidades Entregadas</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-primary mb-2">
                {FEATURED_PROJECTS.reduce((acc, p) => acc + p.area, 0).toLocaleString()}+
              </div>
              <div className="font-detail text-gray-500">m² Construidos</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-primary mb-2">15+</div>
              <div className="font-detail text-gray-500">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-primary mb-2">98%</div>
              <div className="font-detail text-gray-500">Satisfacción Cliente</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-8 py-3 rounded-2xl font-heading font-semibold transition-all duration-300 border-2 ${
                filter === filterOption.key
                  ? 'bg-primary text-white border-primary shadow-lg transform -translate-y-1'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {filterOption.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                filter === filterOption.key
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {filterOption.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para encontrar tu hogar ideal?
            </h3>
            <p className="font-detail text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte a encontrar la propiedad perfecta que se adapte a tus necesidades y presupuesto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Agendar Cita Personalizada
              </button>
              <button className="btn-secondary">
                Descargar Catálogo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;