import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useActiveNavigation = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    if (location.pathname === '/') {
      // Solo observar secciones cuando estamos en home
      let observers: IntersectionObserver[] = [];
      let currentActive = '';
      
      const observeElements = () => {
        const sections = ['inicio', 'proyectos', 'aliados', 'contacto'];
        
        sections.forEach((sectionId) => {
          const element = document.querySelector(`#${sectionId}`);
          if (element) {
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    // Usar el primer elemento visible como activo
                    if (!currentActive || entry.intersectionRatio > 0.3) {
                      currentActive = sectionId;
                      setActiveSection(sectionId);
                    }
                  }
                });
              },
              {
                threshold: [0.1, 0.3, 0.5],
                rootMargin: '-80px 0px -50% 0px' // Offset para el navbar fijo
              }
            );
            observer.observe(element);
            observers.push(observer);
          }
        });
      };

      // Esperar un poco para que el DOM se cargue completamente
      const timeout = setTimeout(() => {
        observeElements();
        
        // Detectar sección inicial basada en el scroll actual
        const sections = ['inicio', 'proyectos', 'aliados', 'contacto'];
        for (const sectionId of sections) {
          const element = document.querySelector(`#${sectionId}`);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }, 100);

      return () => {
        clearTimeout(timeout);
        observers.forEach(observer => observer.disconnect());
        observers = [];
      };
    } else {
      // Limpiar el estado activo cuando no estamos en home
      setActiveSection('');
    }
  }, [location.pathname]);

  const isActive = (href: string): boolean => {
    // Para rutas normales
    if (href.startsWith('/') && !href.startsWith('/#')) {
      return location.pathname === href;
    }

    // Para anclas
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      return location.pathname === '/' && activeSection === sectionId;
    }

    return false;
  };

  return { isActive, activeSection };
};