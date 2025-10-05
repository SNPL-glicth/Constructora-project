import React from 'react';

// Section Components
import HeroCarousel from '../components/sections/HeroCarousel';
import ProjectsShowcase from '../components/sections/ProjectsShowcase';
import PartnersShowcase from '../components/sections/PartnersShowcase';
import ConstructionProgress from '../components/sections/ConstructionProgress';
import ContactSection from '../components/sections/ContactSection';

// UI Components
import FloatingChatbot from '../components/ui/FloatingChatbot';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />
      
      {/* Projects Showcase */}
      <ProjectsShowcase />
      
      {/* Partners Showcase */}
      <PartnersShowcase />
      
      {/* Construction Progress */}
      <ConstructionProgress />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Floating Chatbot */}
      <FloatingChatbot />
    </>
  );
};

export default HomePage;