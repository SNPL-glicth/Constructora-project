/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta personalizada para Nexus Coin
        primary: {
          DEFAULT: '#1A73E8', // Azul corporativo moderno
          dark: '#0057B7',     // Azul más sobrio
          light: '#4285F4',    // Azul claro para hover
        },
        secondary: {
          DEFAULT: '#D4AF37', // Oro metálico suave
          light: '#E6C659',   // Oro más claro
          dark: '#B8941F',    // Oro más oscuro
        },
        neutral: {
          'almost-black': '#1F1F1F', // Texto principal
          'medium-gray': '#555555',  // Texto secundario
          'light-gray': '#F8F8F8',   // Fondo suave
        },
        dark: {
          'navy': '#0D1B2A',     // Footer oscuro
          'charcoal': '#111827', // Footer alternativo
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'], // Texto general
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],    // Títulos
        detail: ['Lato', 'Inter', 'system-ui', 'sans-serif'],        // Detalles/subtítulos
      },
      height: {
        '90vh': '90vh',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}