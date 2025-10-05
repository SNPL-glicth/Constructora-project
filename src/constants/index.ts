// Tipos definidos localmente para evitar problemas de importación
interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

interface HeroSection {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaButtons: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

interface SocialLink {
  platform: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'youtube';
  url: string;
  icon: string;
}

interface CompanyInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  socialLinks: SocialLink[];
}

interface Project {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  gallery?: string[];
  status: 'planning' | 'construction' | 'completed';
  area: number;
  units: number;
  deliveryDate?: string;
  features: string[];
  price?: {
    cop: string;
    usd: string;
    label: string;
  };
  projectType?: 'VIS' | 'Premium' | 'Comercial';
  testimonial?: {
    client: string;
    rating: number;
    comment: string;
    avatar?: string;
  };
  beforeAfter?: {
    before: string;
    after: string;
  };
  videoUrl?: string;
  completedDate?: string;
  progress?: number;
}

interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  category: 'constructor' | 'financiero' | 'tecnologico' | 'diseño';
}

// Navegación principal
export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio', href: '/' },
  { id: 'servicios', label: 'Servicios', href: '/servicios' },
  { id: 'proyectos', label: 'Proyectos', href: '/proyectos' },
  { id: 'aliados', label: 'Aliados', href: '/#aliados' },
  { id: 'contacto', label: 'Contacto', href: '/#contacto' },
];

// Información de la empresa
export const COMPANY_INFO: CompanyInfo = {
  name: 'Nexus Coin',
  description: 'Constructora líder en desarrollo inmobiliario con enfoque en innovación y sostenibilidad.',
  address: 'Calle Principal #123, Ciudad, País',
  phone: '+1 234 567 8900',
  email: 'contacto@nexuscoin.com',
  socialLinks: [
    { platform: 'facebook', url: 'https://facebook.com/nexuscoin', icon: 'Facebook' },
    { platform: 'instagram', url: 'https://instagram.com/nexuscoin', icon: 'Instagram' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/nexuscoin', icon: 'Linkedin' },
    { platform: 'twitter', url: 'https://twitter.com/nexuscoin', icon: 'Twitter' },
  ],
};

// Contenido para el carrusel del Hero
export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Construyendo el Futuro con Innovación',
    subtitle: 'Desarrollos inmobiliarios de vanguardia que transforman espacios y crean oportunidades de inversión excepcionales.',
    backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    ctaButtons: {
      primary: { text: 'Ver Proyectos', href: '#proyectos' },
      secondary: { text: 'Convertirme en Aliado', href: '#contacto' }
    }
  },
  {
    id: 2,
    title: 'Inversiones Inteligentes en Bienes Raíces',
    subtitle: 'Oportunidades únicas de inversión con retornos garantizados y la seguridad que solo los mejores proyectos pueden ofrecer.',
    backgroundImage: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
    ctaButtons: {
      primary: { text: 'Calcular ROI', href: '#proyectos' },
      secondary: { text: 'Hablar con Experto', href: '#contacto' }
    }
  },
  {
    id: 3,
    title: 'Espacios que Inspiran Vida',
    subtitle: 'Diseños arquitectónicos únicos que combinan funcionalidad, estética y sostenibilidad para crear hogares excepcionales.',
    backgroundImage: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80',
    ctaButtons: {
      primary: { text: 'Ver Diseños', href: '#proyectos' },
      secondary: { text: 'Personalizar Proyecto', href: '#contacto' }
    }
  },
  {
    id: 4,
    title: 'Construimos tu Sueño de Hogar',
    subtitle: 'Más de 15 años de experiencia en el sector inmobiliario nos respaldan. Tu tranquilidad es nuestra prioridad.',
    backgroundImage: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    ctaButtons: {
      primary: { text: 'Conocer Proyectos', href: '#proyectos' },
      secondary: { text: 'Agendar Cita', href: '#contacto' }
    }
  },
  {
    id: 5,
    title: 'Avance de Obra en Tiempo Real',
    subtitle: 'Seguimiento detallado de tu inversión. Revisa el progreso de construcción mes a mes con total transparencia.',
    backgroundImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    ctaButtons: {
      primary: { text: 'Ver Avance', href: '#proyectos' },
      secondary: { text: 'Contactar Equipo', href: '#contacto' }
    }
  }
];

// Configuración de la sección Hero (mantenemos para compatibilidad)
export const HERO_CONTENT: HeroSection = {
  title: 'Construyendo el Futuro con Innovación',
  subtitle: 'Desarrollos inmobiliarios de vanguardia que transforman espacios y crean oportunidades de inversión excepcionales.',
  backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  ctaButtons: {
    primary: {
      text: 'Ver Proyectos',
      href: '#proyectos'
    },
    secondary: {
      text: 'Convertirme en Aliado',
      href: '#contacto'
    }
  }
};

// Proyectos destacados (inspirado en OIKOS)
export const FEATURED_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'NEXUS Balmora',
    location: 'Zona Rosa, Bogotá',
    description: 'Apartamentos VIS para familias modernas en el exclusivo sector norte de la capital.',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'construction',
    area: 15000,
    units: 120,
    deliveryDate: '2025-06-30',
    features: ['Gimnasio', 'Salón de Juegos', 'Minimarket', 'BBQ'],
    price: {
      cop: '$ 385.650.900',
      usd: 'USD 99.583',
      label: 'Desde'
    },
    projectType: 'VIS',
    gallery: [
      'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    progress: 75,
    testimonial: {
      client: 'María González',
      rating: 5,
      comment: 'Excelente calidad de construcción y acabados. El equipo fue muy profesional durante todo el proceso.',
    }
  },
  {
    id: '2',
    name: 'NEXUS Ciudad Jardín Sur',
    location: 'Ciudad Jardín, Bogotá',
    description: 'Tu vivienda VIS al sur de la capital con espacios verdes y amenidades exclusivas.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'planning',
    area: 25000,
    units: 80,
    deliveryDate: '2026-03-15',
    features: ['Área de Juegos', 'Coworking', 'Gimnasio', 'Jardín Comunitario'],
    price: {
      cop: '$ 329.485.200',
      usd: 'USD 85.097',
      label: 'Desde'
    },
    projectType: 'VIS',
    gallery: [
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    progress: 25
  },
  {
    id: '3',
    name: 'NEXUS Costa Azul',
    location: 'Villa Campestre, Barranquilla',
    description: 'Tu próximo apartamento estará en el paraíso, el exclusivo sector costero.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'completed',
    area: 35000,
    units: 200,
    deliveryDate: '2024-12-15',
    features: ['Club de Playa', 'Piscina', 'BBQ', 'Zona de Mascotas'],
    price: {
      cop: '$ 485.920.350',
      usd: 'USD 125.530',
      label: 'Desde'
    },
    projectType: 'Premium',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    completedDate: '2024-12-15',
    testimonial: {
      client: 'Carlos Mendoza',
      rating: 5,
      comment: 'Superó todas nuestras expectativas. La vista al mar es espectacular y los acabados de primera calidad.',
    },
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      after: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: '4',
    name: 'NEXUS Chapinero Heights',
    location: 'Chapinero, Bogotá',
    description: 'Exclusivos apartamentos premium con vista panorámica de la ciudad y acabados de lujo.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'planning',
    area: 28000,
    units: 150,
    deliveryDate: '2026-08-20',
    features: ['Spa', 'Helipuerto', 'Wine Bar', 'Concierge'],
    price: {
      cop: '$ 650.890.400',
      usd: 'USD 168.254',
      label: 'Desde'
    },
    projectType: 'Premium'
  },
  {
    id: '5',
    name: 'NEXUS Business Plaza',
    location: 'Zona Financiera, Medellín',
    description: 'Centro empresarial moderno con oficinas inteligentes y espacios de coworking premium.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'construction',
    area: 45000,
    units: 200,
    deliveryDate: '2025-12-15',
    features: ['Smart Offices', 'Auditorio', 'Terraza', 'Parking Inteligente'],
    price: {
      cop: '$ 420.750.800',
      usd: 'USD 108.773',
      label: 'Desde'
    },
    projectType: 'Comercial'
  }
];

// Aliados estratégicos (datos de ejemplo)
export const STRATEGIC_PARTNERS: Partner[] = [
  {
    id: '1',
    name: 'Banco Construcción',
    logo: '',
    website: 'https://bancoconstruccion.com',
    category: 'financiero'
  },
  {
    id: '2',
    name: 'Arquitectos Modernos',
    logo: '',
    website: 'https://arquitectosmodernos.com',
    category: 'diseño'
  },
  {
    id: '3',
    name: 'TechBuild Solutions',
    logo: '',
    website: 'https://techbuild.com',
    category: 'tecnologico'
  },
  {
    id: '4',
    name: 'Constructora Elite',
    logo: '',
    website: 'https://constructoraelite.com',
    category: 'constructor'
  }
];

// Configuración de animaciones
export const ANIMATION_CONFIG = {
  fadeIn: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideIn: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};