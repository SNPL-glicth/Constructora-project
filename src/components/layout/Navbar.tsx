import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS, COMPANY_INFO } from '../../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2); // Quitar '/#'
      
      // Si estamos en home, hacer scroll directo
      if (location.pathname === '/') {
        const element = document.querySelector(`#${sectionId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Si estamos en otra página, navegar a home y luego hacer scroll
        navigate('/');
        // Usar setTimeout para asegurar que la navegación se complete antes del scroll
        setTimeout(() => {
          const element = document.querySelector(`#${sectionId}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-soft' 
          : 'bg-white shadow-sm'
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-20">
        {/* Logo Card - Estilo OIKOS */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-r-3xl pl-6 pr-12 py-3 shadow-xl transform -skew-x-12 relative overflow-hidden">
            <div className="transform skew-x-12 flex items-center">
              <div>
                <h1 className="font-heading text-lg font-bold leading-tight">
                  {COMPANY_INFO.name}
                </h1>
                <p className="font-detail text-xs opacity-90 -mt-1">
                  CONSTRUCTORA
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-3 h-full bg-white/10"></div>
            <div className="absolute -right-1 top-2 w-2 h-2 bg-white/20 rounded-full"></div>
            <div className="absolute -right-1 bottom-2 w-1 h-1 bg-white/30 rounded-full"></div>
          </div>
          {/* Shadow effect */}
          <div className="absolute top-1 left-1 bg-blue-600/20 rounded-r-3xl pl-6 pr-12 py-3 transform -skew-x-12 -z-10 blur-sm"></div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAVIGATION_ITEMS.map((item) => {
            if (item.href.startsWith('/')) {
              // Rutas normales (como /servicios)
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            } else {
              // Anclas (como /#proyectos)
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              );
            }
          })}
          
          {/* Contact Button */}
          <button
            onClick={() => handleNavClick('/#contacto')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold font-heading transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contáctanos
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-neutral-almost-black" />
          ) : (
            <Menu className="h-6 w-6 text-neutral-almost-black" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t border-gray-100 px-4 py-6 space-y-4">
          {NAVIGATION_ITEMS.map((item) => {
            if (item.href.startsWith('/')) {
              // Rutas normales (como /servicios)
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 py-2 ${
                    location.pathname === item.href ? 'text-blue-600' : ''
                  }`}
                >
                  {item.label}
                </Link>
              );
            } else {
              // Anclas (como /#proyectos)
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="block text-left w-full text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 py-2"
                >
                  {item.label}
                </button>
              );
            }
          })}
          
          <button
            onClick={() => handleNavClick('/#contacto')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold font-heading transition-all duration-300 shadow-md hover:shadow-lg w-full mt-4"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;