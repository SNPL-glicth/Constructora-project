import React from 'react';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
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
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getStatusBadge = (status: Project['status']) => {
    const statusConfig = {
      planning: { label: 'En Planificación', color: 'bg-yellow-100 text-yellow-800' },
      construction: { label: 'En Construcción', color: 'bg-blue-100 text-blue-800' },
      completed: { label: 'Completado', color: 'bg-green-100 text-green-800' }
    };

    const config = statusConfig[status];
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={`https://images.unsplash.com/photo-${project.id === '1' ? '1545324418-cc1a3fa10b02' : project.id === '2' ? '1560448204-e02f11c3a698' : '1441986300917-64674bd600d8'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          {getStatusBadge(project.status)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-neutral-almost-black mb-2 group-hover:text-primary transition-colors duration-300">
          {project.name}
        </h3>
        
        <div className="flex items-center text-neutral-medium-gray mb-3">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{project.location}</span>
        </div>

        <p className="text-neutral-medium-gray mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Project Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div className="flex items-center text-neutral-medium-gray">
            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
            <span>{project.area.toLocaleString()} m²</span>
          </div>
          <div className="flex items-center text-neutral-medium-gray">
            <Users className="h-4 w-4 mr-2" />
            <span>{project.units} unidades</span>
          </div>
          {project.deliveryDate && (
            <div className="flex items-center text-neutral-medium-gray col-span-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Entrega: {new Date(project.deliveryDate).toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long' 
              })}</span>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-neutral-almost-black mb-2">Características:</h4>
          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
              >
                {feature}
              </span>
            ))}
            {project.features.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
                +{project.features.length - 3} más
              </span>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
          Ver Detalles
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const ProjectsCarouselSimple: React.FC = () => {
  return (
    <section id="proyectos" className="py-20 bg-neutral-light-gray">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-almost-black mb-4">
            Nuestros <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-xl text-neutral-medium-gray max-w-3xl mx-auto">
            Descubre nuestros desarrollos inmobiliarios de vanguardia que están transformando el paisaje urbano
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarouselSimple;