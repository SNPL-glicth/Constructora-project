import React from 'react';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import HeroCarousel from './components/sections/HeroCarousel';
import ProjectsShowcase from './components/sections/ProjectsShowcase';
import PartnersShowcase from './components/sections/PartnersShowcase';
import ConstructionProgress from './components/sections/ConstructionProgress';
import ContactSection from './components/sections/ContactSection';

// UI Components
import FloatingChatbot from './components/ui/FloatingChatbot';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Carousel */}
        <HeroCarousel />
        
        {/* Projects Grid */}
      <ProjectsShowcase />
        
        {/* Partners Showcase */}
      <PartnersShowcase />
        
        {/* Construction Progress */}
        <ConstructionProgress />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Chatbot */}
      <FloatingChatbot />
    </div>
  );
}

export default App;
