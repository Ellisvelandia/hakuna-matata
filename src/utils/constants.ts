/**
 * Application-wide constants
 */

// Contact Information
export const CONTACT_INFO = {
  phone: '+573113603168',
  phoneDisplay: '+57 311 3603168',
  address: {
    street: 'Cl. 29 #7-18',
    city: 'Girardot',
    state: 'Cundinamarca',
    country: 'Colombia',
    coordinates: {
      lat: 4.302597962105834,
      lng: -74.80052720378369,
    },
  },
  email: 'info@hakunamatatavet.com',
  hours: 'Abierto las 24 horas',
  social: {
    instagram: 'https://www.instagram.com/hakuna_matata_veterinaria',
    whatsapp: 'https://wa.me/573113603168',
    facebook: 'https://www.facebook.com/hakunamatatavet',
  },
};

// Navigation Links
export const NAV_LINKS = {
  main: [
    { name: 'ACERCA', path: '/acerca' },
    { name: 'SERVICIOS', path: '/servicios' },
    { name: 'RECURSOS', path: '/recursos' },
    { name: 'CONTACTO', path: '/contacto' },
  ],
  about: [
    { name: 'Nuestro Equipo', path: '/nuestro-equipo' },
    { name: 'Amigable con Gatos', path: '/amigable-con-gatos' },
    { name: 'Sin Miedo', path: '/sin-miedo' },
    { name: 'Galería de Fotos', path: '/galeria-fotos' },
  ],
  services: [
    { name: 'Bienestar', path: '/bienestar' },
    { name: 'Vacunas', path: '/vacunas' },
    { name: 'Cuidado Dental', path: '/cuidado-dental' },
    { name: 'Cirugía', path: '/cirugia' },
    { name: 'Esterilización', path: '/esterilizacion' },
    { name: 'Terapia Láser', path: '/terapia-laser' },
    { name: 'Acupuntura', path: '/acupuntura' },
    { name: 'Quiropráctica', path: '/quiropractica' },
    { name: 'Peluquería', path: '/peluqueria' },
  ],
  resources: [
    { name: 'Solicitud de Cita', path: '/solicitud-cita' },
    { name: 'Formulario de Información', path: '/formulario-informacion' },
    { name: 'Enviar Registros', path: '/enviar-registros' },
    { name: 'Admin Hospital', path: '/admin-hospital' },
    { name: 'Recarga de Receta', path: '/recarga-receta' },
    { name: 'Comprar Online', path: '/comprar-online' },
    { name: 'Registros de Mascota', path: '/registros-mascota' },
    { name: 'Empleo', path: '/empleo' },
    { name: 'Preparaciones para Desastres', path: '/preparaciones-desastres' },
  ],
};

// Theme Colors
export const COLORS = {
  primary: '#ff9800',
  primaryDark: '#e68a00',
  secondary: '#ffebcd',
  text: {
    dark: '#333333',
    medium: '#666666',
    light: '#999999',
  },
  background: {
    light: '#ffffff',
    offWhite: '#f9f9f9',
    gray: '#f1f1f1',
  },
};

// Image Placeholders
export const PLACEHOLDER_IMAGES = {
  logo: '/images/hakuna.webp',
  hero: 'https://images.unsplash.com/photo-1581888227599-779811939961',
  pet: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e',
  clinic: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7',
  team: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
  cat: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
  dog: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b',
};
