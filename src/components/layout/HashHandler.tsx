import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que maneja la navegación hacia secciones específicas
 * cuando se usa hash routing (/#seccion)
 */
const HashHandler: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Solo procesar si estamos en home y hay un hash
    if (location.pathname === '/' && location.hash) {
      // Remover el # inicial del hash
      const sectionId = location.hash.substring(1);
      
      // Buscar el elemento de destino
      const targetElement = document.getElementById(sectionId);
      
      if (targetElement) {
        // Pequeño delay para asegurar que el DOM esté listo
        const timer = setTimeout(() => {
          // Calcular offset para el navbar fijo
          const navbarHeight = 80; // Altura del navbar
          const additionalOffset = 20; // Margen adicional
          const totalOffset = navbarHeight + additionalOffset;
          
          // Obtener la posición del elemento
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - totalOffset;
          
          // Hacer scroll suave
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }, 100);
        
        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname, location.hash]);

  return null; // Este componente no renderiza nada
};

export default HashHandler;