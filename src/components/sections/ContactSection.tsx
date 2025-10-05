import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';

// Tipo ContactForm definido localmente
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  projectInterest?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectInterest: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        projectInterest: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-20 bg-white scroll-anchor">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-almost-black mb-4">
              ¡Mensaje Enviado!
            </h2>
            <p className="text-xl text-neutral-medium-gray mb-8">
              Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Enviar Otro Mensaje
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-20 bg-white scroll-anchor">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div>
            <div className="mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Hablemos de tu <span className="text-primary">Proyecto</span>
              </h2>
              <p className="font-detail text-xl text-gray-500">
                Estamos aquí para hacer realidad tus ideas. Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-almost-black mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-almost-black mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Phone and Project Interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-almost-black mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label htmlFor="projectInterest" className="block text-sm font-semibold text-neutral-almost-black mb-2">
                    Proyecto de Interés
                  </label>
                  <select
                    id="projectInterest"
                    name="projectInterest"
                    value={formData.projectInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  >
                    <option value="">Seleccionar proyecto</option>
                    <option value="torre-nexus">Torre Nexus</option>
                    <option value="green-valley">Residencial Green Valley</option>
                    <option value="centro-comercial">Centro Comercial Plaza</option>
                    <option value="otro">Otro proyecto</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-almost-black mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-vertical"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary-dark text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-neutral-light-gray rounded-2xl p-8 lg:p-12 h-full">
              <h3 className="text-2xl font-bold text-neutral-almost-black mb-8">
                Información de Contacto
              </h3>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-almost-black mb-2">Oficina Principal</h4>
                    <p className="text-neutral-medium-gray">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-almost-black mb-2">Teléfono</h4>
                    <a 
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-neutral-medium-gray hover:text-primary transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-almost-black mb-2">Email</h4>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-neutral-medium-gray hover:text-primary transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-almost-black mb-2">Horario de Atención</h4>
                    <div className="text-neutral-medium-gray space-y-1">
                      <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                      <p>Sábado: 9:00 AM - 2:00 PM</p>
                      <p>Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 p-6 bg-white rounded-xl shadow-soft">
                <h4 className="font-semibold text-neutral-almost-black mb-2">
                  ¿Prefieres una llamada?
                </h4>
                <p className="text-neutral-medium-gray text-sm mb-4">
                  Nuestro equipo está listo para atenderte personalmente y responder todas tus preguntas.
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="btn-secondary text-sm"
                >
                  Llamar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;