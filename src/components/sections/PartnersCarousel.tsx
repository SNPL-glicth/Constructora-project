import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ArrowTopRightOnSquareIcon, BuildingOfficeIcon, CurrencyDollarIcon, CpuChipIcon, PaintBrushIcon } from '@heroicons/react/24/solid';
import { STRATEGIC_PARTNERS } from '../../constants';

// Tipo Partner definido localmente
interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  category: 'constructor' | 'financiero' | 'tecnologico' | 'diseño';
}

interface PartnerCardProps {
  partner: Partner;
  isActive: boolean;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner, isActive }) => {
  const getCategoryIcon = (category: Partner['category']) => {
    const iconProps = { className: "h-8 w-8" };
    
    switch (category) {
      case 'constructor':
        return <BuildingOfficeIcon {...iconProps} />;
      case 'financiero':
        return <CurrencyDollarIcon {...iconProps} />;
      case 'tecnologico':
        return <CpuChipIcon {...iconProps} />;
      case 'diseño':
        return <PaintBrushIcon {...iconProps} />;
      default:
        return <BuildingOfficeIcon {...iconProps} />;
    }
  };

  const getCategoryLabel = (category: Partner['category']) => {
    const labels = {
      constructor: 'Construcción',
      financiero: 'Financiero',
      tecnologico: 'Tecnología',
      diseño: 'Diseño'
    };
    return labels[category];
  };

  const getCategoryColor = (category: Partner['category']) => {
    const colors = {
      constructor: 'from-blue-500 to-blue-600',
      financiero: 'from-green-500 to-green-600',
      tecnologico: 'from-purple-500 to-purple-600',
      diseño: 'from-pink-500 to-pink-600'
    };
    return colors[category];
  };

  return (
    <div className={`bg-white rounded-3xl p-8 shadow-soft border border-gray-100 transition-all duration-500 transform ${
      isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
    } hover:shadow-2xl hover:-translate-y-2 group`}>
      
      {/* Category Badge */}
      <div className="flex justify-between items-start mb-8">
        <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-2xl text-white bg-gradient-to-r ${getCategoryColor(partner.category)} shadow-lg`}>
          {getCategoryIcon(partner.category)}
          <span className="font-semibold">{getCategoryLabel(partner.category)}</span>
        </div>
        
        {partner.website && (
          <button
            onClick={() => window.open(partner.website, '_blank')}
            className="p-3 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md hover:shadow-lg transform hover:scale-110"
            aria-label={`Visitar sitio web de ${partner.name}`}
          >
            <ArrowTopRightOnSquareIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Logo Placeholder */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl p-12 mb-8 flex items-center justify-center h-40 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 border-2 border-gray-100 group-hover:border-primary/20">
        <div className="text-5xl font-bold text-gray-400 group-hover:text-primary transition-all duration-300 transform group-hover:scale-110">
          {partner.name.split(' ').map(word => word[0]).join('')}
        </div>
      </div>

      {/* Partner Name */}
      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
        {partner.name}
      </h3>

      {/* Description based on category */}
      <p className="text-gray-700 leading-relaxed">
        {partner.category === 'constructor' && 'Especialista en construcción y desarrollo de proyectos inmobiliarios de gran envergadura.'}
        {partner.category === 'financiero' && 'Soluciones financieras integrales e inversión estratégica para proyectos inmobiliarios.'}
        {partner.category === 'tecnologico' && 'Innovación tecnológica de vanguardia para la construcción inteligente y sostenible.'}
        {partner.category === 'diseño' && 'Diseño arquitectónico excepcional y planificación urbana de clase mundial.'}
      </p>

      {/* Partnership indicator */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-3 text-sm text-primary font-medium">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span>Aliado estratégico activo</span>
        </div>
      </div>
    </div>
  );
};

const PartnersCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Calculamos cuántas tarjetas mostrar por slide
  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(STRATEGIC_PARTNERS.length / cardsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Agregar categorías únicas para stats
  const uniqueCategories = [...new Set(STRATEGIC_PARTNERS.map(p => p.category))];

  return (
    <section 
      id="aliados" 
      className="py-20 bg-gradient-to-br from-white via-neutral-light-gray to-white"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-primary">Aliados</span> Estratégicos
          </h2>
          <p className="font-detail text-xl text-gray-500 max-w-4xl mx-auto mb-12 leading-relaxed">
            Colaboramos con las empresas líderes del sector para ofrecer soluciones integrales y de calidad excepcional en cada proyecto
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {uniqueCategories.length}
              </div>
              <div className="text-neutral-medium-gray">Categorías</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {STRATEGIC_PARTNERS.length}+
              </div>
              <div className="text-neutral-medium-gray">Aliados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-neutral-medium-gray">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-neutral-medium-gray">Proyectos juntos</div>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {STRATEGIC_PARTNERS
                      .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                      .map((partner) => (
                        <PartnerCard 
                          key={partner.id} 
                          partner={partner} 
                          isActive={slideIndex === currentSlide}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-neutral-almost-black hover:bg-white hover:border-primary transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
            aria-label="Aliados anteriores"
          >
            <ChevronLeftIcon className="h-6 w-6 group-hover:scale-110 group-hover:text-primary transition-all" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-neutral-almost-black hover:bg-white hover:border-primary transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
            aria-label="Siguientes aliados"
          >
            <ChevronRightIcon className="h-6 w-6 group-hover:scale-110 group-hover:text-primary transition-all" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary scale-125 shadow-md'
                    : 'bg-gray-300 hover:bg-primary/50'
                }`}
                aria-label={`Ir al grupo ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 w-full max-w-xs mx-auto h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 rounded-full"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-12 shadow-soft max-w-4xl mx-auto">
            <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              ¿Quieres ser nuestro próximo aliado estratégico?
            </h3>
            <p className="font-detail text-gray-700 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Únete a nuestro ecosistema de partners y descubre las oportunidades de crecimiento conjunto en el sector inmobiliario
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Convertirme en Aliado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;