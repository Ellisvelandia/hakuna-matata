"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';

export default function PhotoGalleryPage() {
  // Gallery categories
  const categories = [
    "Todas", "Instalaciones", "Equipo", "Pacientes Felices", "Eventos"
  ];

  // Gallery images with metadata
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Veterinario examinando a un perro",
      category: "Equipo",
      caption: "Dr. Mendoza realizando un chequeo de rutina"
    },
    {
      src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Sala de espera de la clínica",
      category: "Instalaciones",
      caption: "Nuestra acogedora sala de espera"
    },
    {
      src: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Perro feliz después de su visita",
      category: "Pacientes Felices",
      caption: "Max después de su chequeo anual"
    },
    {
      src: "https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Equipo quirúrgico moderno",
      category: "Instalaciones",
      caption: "Nuestro quirófano de última generación"
    },
    {
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Veterinaria con gato",
      category: "Equipo",
      caption: "Dra. Rodríguez con uno de nuestros pacientes felinos"
    },
    {
      src: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Perro y gato juntos",
      category: "Pacientes Felices",
      caption: "Luna y Simba, amigos inseparables"
    },
    {
      src: "https://images.unsplash.com/photo-1527153818091-1a9638521e2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Jornada de adopción",
      category: "Eventos",
      caption: "Nuestra jornada anual de adopción"
    },
    {
      src: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Equipo veterinario completo",
      category: "Equipo",
      caption: "Nuestro dedicado equipo de profesionales"
    },
    {
      src: "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Perro en consulta",
      category: "Pacientes Felices",
      caption: "Rocky disfrutando de su visita"
    },
    {
      src: "https://images.unsplash.com/photo-1488015795646-7e22a773d72a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Sala de tratamiento",
      category: "Instalaciones",
      caption: "Área de tratamiento para pacientes hospitalizados"
    },
    {
      src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Campaña de vacunación",
      category: "Eventos",
      caption: "Campaña de vacunación gratuita 2023"
    },
    {
      src: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Gato en revisión",
      category: "Pacientes Felices",
      caption: "Mia durante su chequeo dental"
    }
  ];

  // State for active category filter
  const [activeCategory, setActiveCategory] = useState("Todas");

  // Filter images based on active category
  const filteredImages = activeCategory === "Todas" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // State for modal
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);

  return (
    <PageLayout title="Galería de Fotos">
      <div className="max-w-6xl mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 m-1 rounded-full ${
                activeCategory === category
                  ? "bg-[#8cb9a3] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2">
                <p className="text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron imágenes en esta categoría.</p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div className="relative h-[60vh]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{selectedImage.category}</h3>
                  <p className="text-gray-700">{selectedImage.caption}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

