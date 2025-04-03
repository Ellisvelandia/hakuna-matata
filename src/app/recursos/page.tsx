import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';

export default function ResourcesPage() {
  // Updated resource categories
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
        { name: "Formulario de Información", link: "/formulario-informacion" }
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
    }
  ];

  return (
    <PageLayout title="Recursos">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Recursos para el Cuidado de su Mascota</h2>
        <p className="text-gray-700">
          En Hakuna Matata Clínica Veterinaria, nos comprometemos a proporcionar no solo atención médica excepcional, sino también recursos útiles para ayudarle a cuidar mejor de su mascota. 
          Explore nuestras herramientas en línea y formularios diseñados para facilitar el cuidado de su compañero peludo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {resourceCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link href={item.link} className="text-[#ff9800] hover:text-[#e68a00] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

