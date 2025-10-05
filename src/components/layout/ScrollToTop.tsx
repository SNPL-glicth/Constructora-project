import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que maneja automáticamente el scroll al top 
 * cuando se cambia de ruta en la aplicación
 * Excepción: no hace scroll al top cuando se navega a anclas específicas
 */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Solo hacer scroll al top cuando:
    // 1. No hay hash
    // 2. Se cambia a una ruta diferente (no solo el hash)
    if (!hash) {
      const timer = setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 50);
      
      return () => clearTimeout(timer);
    }
    // Si hay hash, no hacer nada - HashHandler se encargará
  }, [pathname, hash]);

  return null; // Este componente no renderiza nada
};

export default ScrollToTop;