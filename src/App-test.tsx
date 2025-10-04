
// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
// import ProjectsCarousel from './components/sections/ProjectsCarousel';
import PartnersSection from './components/sections/PartnersSection';
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
        {/* Hero Section */}
        <HeroSection />
        
        {/* Projects Carousel - Comentado temporalmente */}
        {/* <ProjectsCarousel /> */}
        
        {/* Partners Section */}
        <PartnersSection />
        
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