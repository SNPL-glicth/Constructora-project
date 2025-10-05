import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import HashHandler from './components/layout/HashHandler';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <Router>
      {/* Componente para scroll automático al cambiar de ruta */}
      <ScrollToTop />
      
      {/* Componente para manejar navegación con hash */}
      <HashHandler />
      
      <div className="min-h-screen bg-white">
        {/* Fixed Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
