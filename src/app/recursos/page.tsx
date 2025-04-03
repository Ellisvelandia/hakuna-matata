import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Educación y Cuidados",
      icon: (
        <svg className="w-12 h-12 text-[#8cb9a3]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
      ),
      items: [
        { name: "Guía de Nutrición", link: "/guia-nutricion" },
        { name: "Tips de Entrenamiento", link: "/tips-entrenamiento" }
      ]
    },
    {
      title: "Servicios en Línea",
      icon: (
        <svg className="w-12 h-12 text-[#8cb9a3]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
        </svg>
      ),
      items: [
        { name: "Agendar Cita", link: "/agendar-cita" },
        { name: "Chat Veterinario", link: "/chat-vet" }
      ]
    }
  ];

  return (
    <PageLayout title="Recursos">
      <div className="max-w-4xl mx-auto my-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#8cb9a3]">Centro de Recursos</h2>
        <p className="text-gray-700">
          Todo lo que necesitas para el cuidado de tu mascota en un solo lugar. 
          Explora nuestras guías, herramientas y servicios diseñados para ti.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {resourceCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link href={item.link} className="text-[#8cb9a3] hover:text-[#7aa08a] transition-colors flex items-center">
                    <span className="mr-2">→</span>
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



