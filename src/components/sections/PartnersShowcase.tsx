import React from 'react';
import { ArrowTopRightOnSquareIcon, BuildingOfficeIcon, CurrencyDollarIcon, CpuChipIcon, PaintBrushIcon } from '@heroicons/react/24/solid';
import { TrophyIcon, UsersIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline';
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
  index: number;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner, index }) => {
  const getCategoryConfig = (category: Partner['category']) => {
    const configs = {
      constructor: { 
        icon: BuildingOfficeIcon, 
        label: 'Construcción',
        gradient: 'from-blue-500 to-blue-600',
        bgGradient: 'from-blue-50 to-blue-100',
        description: 'Líderes en construcción e ingeniería de proyectos residenciales y comerciales.'
      },
      financiero: { 
        icon: CurrencyDollarIcon, 
        label: 'Financiero',
        gradient: 'from-green-500 to-green-600',
        bgGradient: 'from-green-50 to-green-100',
        description: 'Soluciones financieras especializadas en crédito hipotecario y inversión inmobiliaria.'
      },
      tecnologico: { 
        icon: CpuChipIcon, 
        label: 'Tecnología',
        gradient: 'from-purple-500 to-purple-600',
        bgGradient: 'from-purple-50 to-purple-100',
        description: 'Innovación tecnológica para hogares inteligentes y construcción automatizada.'
      },
      diseño: { 
        icon: PaintBrushIcon, 
        label: 'Diseño',
        gradient: 'from-pink-500 to-pink-600',
        bgGradient: 'from-pink-50 to-pink-100',
        description: 'Arquitectura de vanguardia y diseño de interiores de clase mundial.'
      }
    };
    return configs[category];
  };

  const categoryConfig = getCategoryConfig(partner.category);
  const CategoryIcon = categoryConfig.icon;

  return (
    <div 
      className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-primary/20 transform hover:-translate-y-2 animate-fade-in`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div className={`inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r ${categoryConfig.gradient} text-white shadow-lg`}>
          <CategoryIcon className="h-6 w-6" />
          <span className="font-heading font-bold">{categoryConfig.label}</span>
        </div>
        
        {partner.website && (
          <button
            onClick={() => window.open(partner.website, '_blank')}
            className="opacity-0 group-hover:opacity-100 p-3 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label={`Visitar ${partner.name}`}
          >
            <ArrowTopRightOnSquareIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Logo Area */}
      <div className={`relative mb-8 p-8 rounded-2xl bg-gradient-to-br ${categoryConfig.bgGradient} group-hover:scale-105 transition-transform duration-500`}>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
            <span className="text-3xl font-heading font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
              {partner.name.split(' ').map(word => word[0]).join('')}
            </span>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
          {partner.name}
        </h3>
        
        <p className="font-detail text-gray-600 leading-relaxed mb-6">
          {categoryConfig.description}
        </p>

        {/* Partnership Status */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span>Alianza Activa</span>
        </div>
      </div>
    </div>
  );
};

const PartnersShowcase: React.FC = () => {
  const stats = [
    { icon: UsersIcon, number: `${STRATEGIC_PARTNERS.length}+`, label: 'Aliados Estratégicos', color: 'text-primary' },
    { icon: TrophyIcon, number: '15+', label: 'Años de Experiencia', color: 'text-secondary' },
    { icon: ClockIcon, number: '200+', label: 'Proyectos Exitosos', color: 'text-primary' },
    { icon: ChartBarIcon, number: '98%', label: 'Satisfacción del Cliente', color: 'text-secondary' }
  ];

  return (
    <section id="aliados" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-primary">Aliados</span> Estratégicos
          </h2>
          <p className="font-detail text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Construimos el futuro junto a las mejores empresas del sector, creando una red de excelencia que garantiza calidad y confianza en cada proyecto
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 mb-4 group-hover:bg-primary/10 transition-colors">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className={`font-heading text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="font-detail text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {STRATEGIC_PARTNERS.map((partner, index) => (
            <PartnerCard key={partner.id} partner={partner} index={index} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué confían en nosotros?
            </h3>
            <p className="font-detail text-gray-600 max-w-2xl mx-auto">
              Más de una década construyendo relaciones sólidas con los mejores partners de la industria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <BuildingOfficeIcon className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-heading text-xl font-bold text-gray-900 mb-3">
                Experiencia Comprobada
              </h4>
              <p className="font-detail text-gray-600">
                Más de 15 años desarrollando proyectos inmobiliarios exitosos con los más altos estándares de calidad
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/10 mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <CurrencyDollarIcon className="h-10 w-10 text-secondary" />
              </div>
              <h4 className="font-heading text-xl font-bold text-gray-900 mb-3">
                Rentabilidad Garantizada
              </h4>
              <p className="font-detail text-gray-600">
                Ofrecemos retornos de inversión superiores al promedio del mercado con transparencia total
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <CpuChipIcon className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-heading text-xl font-bold text-gray-900 mb-3">
                Tecnología Avanzada
              </h4>
              <p className="font-detail text-gray-600">
                Implementamos las últimas tecnologías en construcción sostenible y hogares inteligentes
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary/5 via-white to-secondary/5 rounded-3xl p-12 border border-primary/10">
            <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              ¿Quieres formar parte de nuestro ecosistema?
            </h3>
            <p className="font-detail text-gray-600 mb-8 text-lg max-w-3xl mx-auto">
              Únete a nuestro selecto grupo de aliados estratégicos y descubre oportunidades exclusivas de crecimiento en el sector inmobiliario
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#contacto');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
              >
                Convertirme en Aliado
              </button>
              <button className="btn-secondary">
                Conocer Beneficios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersShowcase;