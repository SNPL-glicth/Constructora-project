import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeModernIcon, 
  BuildingOffice2Icon, 
  WrenchScrewdriverIcon, 
  UserGroupIcon, 
  ClipboardDocumentListIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon
} from '@heroicons/react/24/solid';
import { COMPANY_INFO } from '../constants';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  color: string;
  bgGradient: string;
  projects: string;
  duration: string;
}

const services: Service[] = [
  {
    id: 'residencial',
    title: 'Construcción Residencial',
    description: 'Desarrollamos proyectos habitacionales de alta calidad, desde apartamentos VIS hasta residencias premium, con acabados excepcionales y diseños innovadores.',
    icon: HomeModernIcon,
    features: [
      'Apartamentos VIS y No VIS',
      'Casas unifamiliares',
      'Conjuntos residenciales',
      'Urbanizaciones completas',
      'Diseño arquitectónico personalizado'
    ],
    color: 'text-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
    projects: '150+ proyectos',
    duration: '12-24 meses'
  },
  {
    id: 'comercial',
    title: 'Construcción Comercial',
    description: 'Construimos espacios comerciales modernos y funcionales, centros empresariales, oficinas y locales comerciales con tecnología de punta.',
    icon: BuildingOffice2Icon,
    features: [
      'Oficinas corporativas',
      'Centros comerciales',
      'Locales comerciales',
      'Edificios empresariales',
      'Espacios de coworking'
    ],
    color: 'text-green-600',
    bgGradient: 'from-green-50 to-green-100',
    projects: '85+ proyectos',
    duration: '8-18 meses'
  },
  {
    id: 'remodelaciones',
    title: 'Remodelaciones',
    description: 'Transformamos espacios existentes con renovaciones integrales o parciales, modernizando y optimizando cada ambiente según tus necesidades.',
    icon: WrenchScrewdriverIcon,
    features: [
      'Remodelación integral',
      'Renovación de cocinas',
      'Modernización de baños',
      'Ampliaciones',
      'Restauración de fachadas'
    ],
    color: 'text-orange-600',
    bgGradient: 'from-orange-50 to-orange-100',
    projects: '200+ proyectos',
    duration: '2-6 meses'
  },
  {
    id: 'asesoria',
    title: 'Asesoría Inmobiliaria',
    description: 'Te acompañamos en todo el proceso de inversión inmobiliaria, desde la evaluación de oportunidades hasta la gestión completa de tu proyecto.',
    icon: UserGroupIcon,
    features: [
      'Evaluación de inversiones',
      'Estudios de factibilidad',
      'Gestión de permisos',
      'Asesoría legal',
      'Análisis de mercado'
    ],
    color: 'text-purple-600',
    bgGradient: 'from-purple-50 to-purple-100',
    projects: '300+ asesorías',
    duration: '1-3 meses'
  },
  {
    id: 'administracion',
    title: 'Administración de Proyectos',
    description: 'Gestionamos integralmente tus proyectos de construcción, garantizando calidad, tiempos de entrega y presupuestos optimizados.',
    icon: ClipboardDocumentListIcon,
    features: [
      'Gestión de cronogramas',
      'Control de calidad',
      'Supervisión técnica',
      'Manejo de proveedores',
      'Reportes de avance'
    ],
    color: 'text-indigo-600',
    bgGradient: 'from-indigo-50 to-indigo-100',
    projects: '120+ proyectos',
    duration: 'Durante todo el proyecto'
  }
];

const ServicesPage: React.FC = () => {
  const handleContactService = (serviceTitle: string) => {
    // En una implementación real, esto podría abrir un formulario específico
    // o enviar a WhatsApp con el servicio preseleccionado
    console.log(`Contactar para: ${serviceTitle}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Nuestros <span className="text-blue-200">Servicios</span>
            </h1>
            <p className="font-detail text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Ofrecemos soluciones integrales en construcción e inmobiliaria, 
              respaldados por más de 15 años de experiencia y excelencia
            </p>
            
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center text-blue-200 text-sm">
              <Link to="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <ArrowRightIcon className="h-4 w-4 mx-2" />
              <span className="text-white">Servicios</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Header */}
                <div className={`p-8 bg-gradient-to-r ${service.bgGradient}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-semibold ${service.color} mb-1`}>
                        {service.projects}
                      </div>
                      <div className="text-xs text-gray-600">
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="font-detail text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="p-8">
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-4">
                    ¿Qué incluye este servicio?
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircleIcon className={`h-5 w-5 ${service.color} flex-shrink-0`} />
                        <span className="font-detail text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleContactService(service.title)}
                    className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2`}
                  >
                    <PhoneIcon className="h-5 w-5" />
                    <span>Cotizar {service.title}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir <span className="text-blue-600">Nexus Coin</span>?
            </h2>
            <p className="font-detail text-xl text-gray-500 max-w-3xl mx-auto">
              Somos líderes en construcción e inmobiliaria con un compromiso inquebrantable con la calidad y la satisfacción del cliente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-100 mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <CheckCircleIcon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                15+ Años de Experiencia
              </h3>
              <p className="font-detail text-gray-600">
                Respaldamos cada proyecto con más de una década de experiencia exitosa en el sector
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-green-100 mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <BuildingOffice2Icon className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                800+ Proyectos Exitosos
              </h3>
              <p className="font-detail text-gray-600">
                Hemos completado cientos de proyectos con los más altos estándares de calidad
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-orange-100 mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <UserGroupIcon className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                98% Satisfacción del Cliente
              </h3>
              <p className="font-detail text-gray-600">
                Nuestra prioridad es superar las expectativas de cada cliente en cada proyecto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para empezar tu proyecto?
            </h2>
            <p className="font-detail text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos hacer realidad tu visión
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/#contacto"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Contactar Ahora</span>
              </Link>
              
              <Link
                to="/#proyectos"
                className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                <BuildingOffice2Icon className="h-5 w-5" />
                <span>Ver Proyectos</span>
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-blue-400/30">
              <p className="font-detail text-blue-200 mb-4">
                O llámanos directamente
              </p>
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="font-heading text-2xl font-bold text-white hover:text-blue-200 transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;