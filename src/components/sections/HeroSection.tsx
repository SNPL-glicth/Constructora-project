import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import { HERO_CONTENT } from '../../constants';

const HeroSection: React.FC = () => {
  const handleCtaClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-90vh flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="p-4 rounded-full bg-primary/20 backdrop-blur-sm">
              <Building2 className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {HERO_CONTENT.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {HERO_CONTENT.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleCtaClick(HERO_CONTENT.ctaButtons.primary.href)}
              className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              {HERO_CONTENT.ctaButtons.primary.text}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => handleCtaClick(HERO_CONTENT.ctaButtons.secondary.href)}
              className="group bg-transparent hover:bg-white/10 text-white border-2 border-white hover:border-secondary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              {HERO_CONTENT.ctaButtons.secondary.text}
            </button>
          </div>

        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-primary rounded-full animate-pulse opacity-60 animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-80 animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default HeroSection;