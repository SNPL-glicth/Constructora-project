import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { HERO_SLIDES } from '../../constants';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
        aria-label="Slide anterior"
      >
        <ChevronLeftIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
        aria-label="Siguiente slide"
      >
        <ChevronRightIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Content */}
      <div className="relative z-20 container-custom text-center text-white">
        <div className="max-w-5xl mx-auto">

          {/* Animated Title */}
          <h1 
            key={`title-${currentSlide}`}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in"
          >
            {HERO_SLIDES[currentSlide].title}
          </h1>

          {/* Animated Subtitle */}
          <p 
            key={`subtitle-${currentSlide}`}
            className="font-detail text-lg md:text-xl lg:text-2xl mb-10 text-gray-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay"
          >
            {HERO_SLIDES[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div 
            key={`buttons-${currentSlide}`}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2"
          >
            <button
              onClick={() => handleCtaClick(HERO_SLIDES[currentSlide].ctaButtons.primary.href)}
              className="group bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-bold font-heading text-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 flex items-center gap-3"
            >
              {HERO_SLIDES[currentSlide].ctaButtons.primary.text}
              <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button
              onClick={() => handleCtaClick(HERO_SLIDES[currentSlide].ctaButtons.secondary.href)}
              className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-2xl font-bold font-heading text-xl transition-all duration-300 backdrop-blur-sm"
            >
              {HERO_SLIDES[currentSlide].ctaButtons.secondary.text}
            </button>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-30">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / HERO_SLIDES.length) * 100}%` }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-30 text-white/80 text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full">
        {currentSlide + 1} / {HERO_SLIDES.length}
      </div>
    </section>
  );
};

export default HeroCarousel;