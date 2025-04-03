"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesGrid = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12 font-light text-gray-800">
          <span className="block">Nuestros</span>
          <span className="block text-[#8cb9a3] font-medium">Servicios</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Wellness */}
          <div className="service-card text-center">
            <Link href="/bienestar" className="block hover:opacity-90 group">
              <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden mx-auto transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1000&auto=format&fit=crop"
                  alt="Bienestar"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">Bienestar</h3>
              <p className="text-gray-600 text-sm">
                Planes preventivos personalizados para mantener a tu mascota saludable en cada etapa de su vida.
              </p>
            </Link>
          </div>

          {/* Dental Care */}
          <div className="service-card text-center">
            <Link href="/cuidado-dental" className="block hover:opacity-90 group">
              <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden mx-auto transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1535554975110-9133cf938160?q=80&w=1000&auto=format&fit=crop"
                  alt="Cuidado Dental"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">Cuidado Dental</h3>
              <p className="text-gray-600 text-sm">
                Servicios dentales completos para prevenir enfermedades y mantener la salud oral de tu mascota.
              </p>
            </Link>
          </div>

          {/* Surgery */}
          <div className="service-card text-center">
            <Link href="/cirugia" className="block hover:opacity-90 group">
              <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden mx-auto transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1000&auto=format&fit=crop"
                  alt="Cirugía"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">Cirugía</h3>
              <p className="text-gray-600 text-sm">
                Procedimientos quirúrgicos avanzados realizados con el más alto estándar de cuidado y seguridad.
              </p>
            </Link>
          </div>

          {/* Grooming */}
          <div className="service-card text-center">
            <Link href="/peluqueria" className="block hover:opacity-90 group">
              <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden mx-auto transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format&fit=crop"
                  alt="Peluquería"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">Peluquería</h3>
              <p className="text-gray-600 text-sm">
                Servicios de baño y peluquería profesional para mantener a tu mascota limpia, cómoda y saludable.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
