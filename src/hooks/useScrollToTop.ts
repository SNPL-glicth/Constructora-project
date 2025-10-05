import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook que automáticamente hace scroll al top cuando cambia la ruta
 * Útil para páginas nuevas que deben empezar desde arriba
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll suave al top cuando cambia la ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
};

/**
 * Hook que hace scroll inmediato al top (sin animación)
 * Útil para navegación rápida entre páginas
 */
export const useScrollToTopInstant = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll inmediato al top cuando cambia la ruta
    window.scrollTo(0, 0);
  }, [pathname]);
};