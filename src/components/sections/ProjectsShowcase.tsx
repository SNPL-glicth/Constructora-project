import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, EyeIcon } from '@heroicons/react/24/solid';
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
  const getStatusConfig = (status: Project['status']) => {
    const configs = {
      planning: { 
        label: 'LANZAMIENTO', 
        color: 'bg-yellow-500',
        textColor: 'text-yellow-700'
      },
      construction: { 
        label: 'CONSTRUCCIÓN 100% (EN OPERACIÓN)', 
        color: 'bg-green-500',
        textColor: 'text-green-700'
      },
      completed: { 
        label: 'BODEGAS 2DA ETAPA', 
        color: 'bg-blue-500',
        textColor: 'text-blue-700'
      }
    };
    return configs[status];
  };

  const statusConfig = getStatusConfig(project.status);


  return (
    <div 
      className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 animate-fade-in"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
          <img 
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Status Badge */}
          <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg ${statusConfig.color}`}>
            {statusConfig.label}
          </div>

          {/* Location Icon */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center shadow-lg">
            <MapPinIcon className="h-6 w-6 text-white" />
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="lg:w-3/5 p-8 flex flex-col justify-between">
          <div>
            {/* Project Header */}
            <div className="mb-6">
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {project.name}
              </h3>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPinIcon className="h-5 w-5 text-primary" />
                <span className="font-detail text-lg">{project.location}</span>
              </div>
              <p className="font-detail text-gray-600 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Price Section */}
            {project.price && (
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-detail text-gray-500">{project.price.label}</span>
                  <span className="font-heading text-4xl font-bold text-primary">
                    {project.price.cop}
                  </span>
                </div>
                <div className="text-gray-500 font-detail">
                  Precio de referencia <span className="font-semibold text-secondary">{project.price.usd}</span>
                </div>
              </div>
            )}

            {/* Additional Info */}
            <div className="mb-6">
              <div className="text-gray-600 font-detail text-lg">
                {project.projectType === 'VIS' && `Apartamentos desde ${project.area} m²`}
                {project.projectType === 'Premium' && `Apartamentos premium desde ${project.area} m²`}
                {project.projectType === 'Comercial' && `Locales comerciales desde ${project.area} m²`}
              </div>
              {project.features.length > 0 && (
                <div className="text-gray-500 font-detail mt-2">
                  {project.features.slice(0, 3).join(' • ')}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
              <PhoneIcon className="h-5 w-5" />
              <span>Contactar</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
              <EyeIcon className="h-5 w-5" />
              <span>Ver proyecto</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsShowcase: React.FC = () => {
  const [filter, setFilter] = useState<'all' | Project['projectType']>('all');

  const filteredProjects = filter === 'all' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(project => project.projectType === filter);

  const filterButtons = [
    { key: 'all' as const, label: 'Todos los Proyectos' },
    { key: 'VIS' as const, label: 'VIS' },
    { key: 'Premium' as const, label: 'Premium' },
    { key: 'Comercial' as const, label: 'Comercial' }
  ];

  return (
    <section id="proyectos" className="py-24 bg-gray-50">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-primary">Proyectos</span>
          </h2>
          <p className="font-detail text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Descubre oportunidades únicas de inversión con los mejores retornos y la calidad que nos caracteriza
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filterButtons.map((button) => (
            <button
              key={button.key}
              onClick={() => setFilter(button.key)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                filter === button.key
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary border border-gray-200'
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-white to-blue-600 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="font-heading text-3xl font-bold mb-4 text-blue-800">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="font-detail text-xl mb-8 text-blue-700 max-w-2xl mx-auto">
            Tenemos más proyectos en desarrollo. Contáctanos para conocer oportunidades exclusivas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.querySelector('#contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contactar Ahora
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Ver Más Proyectos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;