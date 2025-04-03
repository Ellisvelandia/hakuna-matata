import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';

export default function ResourcesPage() {
  // Resources categories with their items
  const resourceCategories = [
    {
      title: "Formularios y Solicitudes",
      icon: (
        <svg className="w-12 h-12 text-[#ff9800]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      items: [
        { name: "Solicitud de Cita", link: "/solicitud-cita" },
        { name: "Formulario de Información", link: "/formulario-informacion" },
        { name: "Enviar Registros", link: "/enviar-registros" }
      ]
    },
    {
      title: "Servicios en Línea",
      icon: (
        <svg className="w-12 h-12 text-[#ff9800]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M10 4a1 1 0 011 1v4.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V5a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      ),
      items: [
        { name: "Admin Hospital", link: "/admin-hospital" },
        { name: "Recarga de Receta", link: "/recarga-receta" },
        { name: "Comprar Online", link: "/comprar-online" }
      ]
    },
    {
      title: "Información para Propietarios",
      icon: (
        <svg className="w-12 h-12 text-[#ff9800]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      items: [
        { name: "Registros de Mascota", link: "/registros-mascota" },
        { name: "Preparaciones para Desastres", link: "/preparaciones-desastres" }
      ]
    },
    {
      title: "Oportunidades",
      icon: (
        <svg className="w-12 h-12 text-[#ff9800]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
      items: [
        { name: "Empleo", link: "/empleo" }
      ]
    }
  ];

  // Educational articles
  const educationalArticles = [
    {
      title: "Cuidados básicos para cachorros",
      excerpt: "Todo lo que necesita saber para cuidar adecuadamente de su nuevo cachorro...",
      imageSrc: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Signos de emergencia veterinaria",
      excerpt: "Aprenda a reconocer cuándo su mascota necesita atención médica urgente...",
      imageSrc: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Nutrición felina: mitos y realidades",
      excerpt: "Información basada en evidencia sobre la alimentación adecuada para gatos...",
      imageSrc: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    }
  ];

  return (
    <PageLayout title="Recursos">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Recursos para el Cuidado de su Mascota</h2>
        <p className="text-gray-700">
          En Hakuna Matata Clínica Veterinaria, nos comprometemos a proporcionar no solo atención médica excepcional, sino también recursos útiles para ayudarle a cuidar mejor de su mascota. 
          Explore nuestras herramientas en línea, formularios y artículos educativos diseñados para facilitar el cuidado de su compañero peludo.
        </p>
      </div>

      {/* Resource Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {resourceCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-2xl font-semibold ml-4">{category.title}</h3>
            </div>
            <ul className="space-y-3 pl-16">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link href={item.link} className="text-[#ff9800] hover:underline flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Educational Articles */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-[#ff9800]">Artículos Educativos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationalArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link href={article.link} className="text-[#ff9800] font-medium hover:underline">
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#ffebcd] rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Cómo puedo programar una cita?</h3>
              <p className="text-gray-700">
                Puede programar una cita llamando a nuestro número principal, utilizando nuestro formulario de solicitud de cita en línea, o enviándonos un mensaje a través de WhatsApp.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué debo traer a la primera visita de mi mascota?</h3>
              <p className="text-gray-700">
                Para la primera visita, por favor traiga cualquier registro médico previo, información sobre vacunas, y una lista de medicamentos o suplementos que su mascota esté tomando actualmente.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Ofrecen planes de pago o seguros para mascotas?</h3>
              <p className="text-gray-700">
                Sí, ofrecemos planes de bienestar que pueden dividirse en pagos mensuales. También aceptamos la mayoría de los seguros para mascotas y podemos ayudarle con el papeleo necesario.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué debo hacer en caso de una emergencia fuera del horario regular?</h3>
              <p className="text-gray-700">
                Estamos disponibles para emergencias las 24 horas del día, los 7 días de la semana. Simplemente llame a nuestro número principal y siga las instrucciones para emergencias.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link 
              href="/contacto" 
              className="inline-block bg-[#ff9800] text-white py-3 px-6 rounded-md font-medium hover:bg-[#e68a00] transition-colors"
            >
              ¿Tiene más preguntas? Contáctenos
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Suscríbase a Nuestro Boletín</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Reciba consejos sobre el cuidado de mascotas, noticias de la clínica y ofertas especiales directamente en su bandeja de entrada.
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Su correo electrónico" 
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
              required
            />
            <button 
              type="submit" 
              className="bg-[#ff9800] text-white px-6 py-2 rounded-md font-medium hover:bg-[#e68a00] transition-colors"
            >
              Suscribirse
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}
