import React from 'react';
import { ExternalLink, Building, DollarSign, Cpu, Palette } from 'lucide-react';
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
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  const getCategoryIcon = (category: Partner['category']) => {
    const iconProps = { className: "h-6 w-6" };
    
    switch (category) {
      case 'constructor':
        return <Building {...iconProps} />;
      case 'financiero':
        return <DollarSign {...iconProps} />;
      case 'tecnologico':
        return <Cpu {...iconProps} />;
      case 'diseño':
        return <Palette {...iconProps} />;
      default:
        return <Building {...iconProps} />;
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
      constructor: 'bg-blue-100 text-blue-700',
      financiero: 'bg-green-100 text-green-700',
      tecnologico: 'bg-purple-100 text-purple-700',
      diseño: 'bg-pink-100 text-pink-700'
    };
    return colors[category];
  };

  return (
    <div className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
      {/* Category Badge */}
      <div className="flex justify-between items-start mb-6">
        <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium ${getCategoryColor(partner.category)}`}>
          {getCategoryIcon(partner.category)}
          <span>{getCategoryLabel(partner.category)}</span>
        </div>
        
        {partner.website && (
          <button
            onClick={() => window.open(partner.website, '_blank')}
            className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label={`Visitar sitio web de ${partner.name}`}
          >
            <ExternalLink className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Logo Placeholder */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 mb-6 flex items-center justify-center h-32 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500">
        <div className="text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
          {partner.name.split(' ').map(word => word[0]).join('')}
        </div>
      </div>

      {/* Partner Name */}
      <h3 className="text-xl font-bold text-neutral-almost-black mb-2 group-hover:text-primary transition-colors duration-300">
        {partner.name}
      </h3>

      {/* Description based on category */}
      <p className="text-neutral-medium-gray text-sm leading-relaxed">
        {partner.category === 'constructor' && 'Especialista en construcción y desarrollo de proyectos inmobiliarios.'}
        {partner.category === 'financiero' && 'Soluciones financieras e inversión para proyectos inmobiliarios.'}
        {partner.category === 'tecnologico' && 'Innovación tecnológica para la construcción inteligente.'}
        {partner.category === 'diseño' && 'Diseño arquitectónico y planificación urbana de vanguardia.'}
      </p>
    </div>
  );
};

const PartnersSection: React.FC = () => {
  // Simplificar la lógica para evitar problemas con TypeScript
  const partnersByCategory = {
    constructor: STRATEGIC_PARTNERS.filter(p => p.category === 'constructor'),
    financiero: STRATEGIC_PARTNERS.filter(p => p.category === 'financiero'),
    tecnologico: STRATEGIC_PARTNERS.filter(p => p.category === 'tecnologico'),
    diseño: STRATEGIC_PARTNERS.filter(p => p.category === 'diseño')
  };

  return (
    <section id="aliados" className="py-20 bg-neutral-light-gray">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-almost-black mb-4">
            Nuestros <span className="text-primary">Aliados</span> Estratégicos
          </h2>
          <p className="text-xl text-neutral-medium-gray max-w-3xl mx-auto mb-8">
            Colaboramos con las mejores empresas del sector para ofrecer soluciones integrales y de calidad excepcional
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {Object.keys(partnersByCategory).length}
              </div>
              <div className="text-sm text-neutral-medium-gray">Categorías</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {STRATEGIC_PARTNERS.length}+
              </div>
              <div className="text-sm text-neutral-medium-gray">Aliados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-neutral-medium-gray">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-neutral-medium-gray">Proyectos juntos</div>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STRATEGIC_PARTNERS.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-almost-black mb-4">
              ¿Por qué confían en nosotros?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-neutral-almost-black mb-2">
                Experiencia Comprobada
              </h4>
              <p className="text-neutral-medium-gray text-sm">
                Más de 15 años desarrollando proyectos inmobiliarios exitosos
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold text-neutral-almost-black mb-2">
                Rentabilidad Garantizada
              </h4>
              <p className="text-neutral-medium-gray text-sm">
                Retorno de inversión superior al promedio del mercado
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-neutral-almost-black mb-2">
                Tecnología Avanzada
              </h4>
              <p className="text-neutral-medium-gray text-sm">
                Utilizamos las últimas tecnologías en construcción sostenible
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-neutral-almost-black mb-4">
            ¿Quieres ser nuestro próximo aliado?
          </h3>
          <p className="text-neutral-medium-gray mb-8 max-w-2xl mx-auto">
            Únete a nuestro ecosistema de partners y descubre las oportunidades de crecimiento conjunto en el sector inmobiliario
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contacto');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Convertirme en Aliado
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;