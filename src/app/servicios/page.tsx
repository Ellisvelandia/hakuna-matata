import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import ServiceCard from '@/components/services/ServiceCard';

export default function ServicesPage() {
  // Services data - updated to include only core services
  const services = [
    {
      title: "Bienestar",
      description: "Exámenes preventivos, vacunaciones y planes de salud personalizados para mantener a su mascota en óptimas condiciones.",
      imageSrc: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/bienestar"
    },
    {
      title: "Vacunas",
      description: "Programas de vacunación adaptados a las necesidades específicas de su mascota según su edad, estilo de vida y factores de riesgo.",
      imageSrc: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/vacunas"
    },
    {
      title: "Cuidado Dental",
      description: "Servicios completos de odontología veterinaria, desde limpiezas preventivas hasta tratamientos avanzados.",
      imageSrc: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/cuidado-dental"
    },
    {
      title: "Cirugía",
      description: "Procedimientos quirúrgicos realizados con los más altos estándares de seguridad y cuidado por nuestros veterinarios experimentados.",
      imageSrc: "https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/cirugia"
    },
    {
      title: "Esterilización",
      description: "Servicios de esterilización y castración seguros y efectivos, con protocolos de recuperación optimizados.",
      imageSrc: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/esterilizacion"
    }
  ];

  return (
    <PageLayout 
      title="Nuestros Servicios" 
      backgroundImage="https://images.unsplash.com/photo-1488015795646-7e22a773d72a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    >
      <div className="max-w-4xl mx-auto my-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#8cb9a3]">Cuidado Veterinario Integral</h2>
        <p className="text-gray-700">
          En Hakuna Matata Clínica Veterinaria, ofrecemos una amplia gama de servicios diseñados para mantener a su mascota saludable y feliz en todas las etapas de su vida. 
          Nuestro equipo de profesionales altamente capacitados utiliza las técnicas más avanzadas y equipos de última generación para proporcionar la mejor atención posible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            linkUrl={service.linkUrl}
          />
        ))}
      </div>
    </PageLayout>
  );
}


