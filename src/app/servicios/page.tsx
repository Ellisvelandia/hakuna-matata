import React from 'react';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import ServiceCard from '@/components/services/ServiceCard';

export default function ServicesPage() {
  // Services data
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
    },
    {
      title: "Terapia Láser",
      description: "Tratamientos con láser terapéutico para aliviar el dolor, reducir la inflamación y acelerar la curación de diversas condiciones.",
      imageSrc: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/terapia-laser"
    },
    {
      title: "Acupuntura",
      description: "Técnicas de acupuntura veterinaria para el manejo del dolor y el tratamiento complementario de diversas condiciones.",
      imageSrc: "https://images.unsplash.com/photo-1512675828443-4f454c42253a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/acupuntura"
    },
    {
      title: "Quiropráctica",
      description: "Ajustes quiroprácticos para mejorar la movilidad, reducir el dolor y optimizar la función del sistema nervioso de su mascota.",
      imageSrc: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/quiropractica"
    },
    {
      title: "Peluquería",
      description: "Servicios profesionales de peluquería y estética para mantener a su mascota limpia, cómoda y con un aspecto inmejorable.",
      imageSrc: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/peluqueria"
    }
  ];

  return (
    <PageLayout 
      title="Nuestros Servicios" 
      backgroundImage="https://images.unsplash.com/photo-1488015795646-7e22a773d72a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    >
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Cuidado Veterinario Integral</h2>
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

      <div className="mt-16 bg-[#ffebcd] rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4">Atención de Emergencia 24/7</h3>
        <p className="text-gray-700 mb-6">
          Estamos disponibles las 24 horas del día, los 7 días de la semana para atender emergencias veterinarias. 
          Nuestro equipo está preparado para actuar rápidamente en situaciones críticas para salvar la vida de su mascota.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:+573113603168" 
            className="inline-block bg-[#ff9800] text-white py-3 px-6 rounded-md font-medium hover:bg-[#e68a00] transition-colors"
          >
            Llamar Ahora
          </a>
          <Link 
            href="/contacto" 
            className="inline-block bg-white border border-[#ff9800] text-[#ff9800] py-3 px-6 rounded-md font-medium hover:bg-gray-50 transition-colors"
          >
            Más Información
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
