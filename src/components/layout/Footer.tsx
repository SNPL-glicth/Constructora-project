import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO, NAVIGATION_ITEMS } from '../../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getSocialIcon = (platform: string) => {
    const iconProps = { className: "h-5 w-5" };
    
    switch (platform.toLowerCase()) {
      case 'facebook':
        return <Facebook {...iconProps} />;
      case 'instagram':
        return <Instagram {...iconProps} />;
      case 'linkedin':
        return <Linkedin {...iconProps} />;
      case 'twitter':
        return <Twitter {...iconProps} />;
      default:
        return <Building2 {...iconProps} />;
    }
  };

  return (
    <footer className="bg-dark-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-secondary"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Information */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white">{COMPANY_INFO.name}</h3>
                  <p className="text-gray-300 text-sm">Construyendo el futuro</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                {COMPANY_INFO.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm">{COMPANY_INFO.address}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm hover:text-white transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm hover:text-white transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Navegación</h4>
              <ul className="space-y-3">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Servicios</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    Desarrollo Inmobiliario
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    Consultoría de Inversión
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    Gestión de Proyectos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    Financiación
                  </a>
                </li>
              </ul>

              {/* Social Media */}
              <div className="mt-8">
                <h5 className="text-sm font-semibold text-white mb-4">Síguenos</h5>
                <div className="flex gap-3">
                  {COMPANY_INFO.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      aria-label={`Síguenos en ${social.platform}`}
                    >
                      {getSocialIcon(social.platform)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-300 text-sm text-center md:text-left">
                © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.
              </div>
              
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Términos y Condiciones
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute top-6 right-6 w-12 h-12 bg-secondary hover:bg-secondary-dark text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Volver al inicio"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;