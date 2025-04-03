"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesLists = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Image with husky */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Image
                  src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Mujer con perro"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Gato"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Perro"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Services list */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-light mb-6 text-gray-800">
              <span className="block text-[#8cb9a3] font-medium">Nuestros Servicios</span>
            </h2>
            <p className="text-gray-600 mb-6">
              En Hakuna Matata Clínica Veterinaria, ofrecemos una amplia gama de servicios para mantener a tu mascota saludable y feliz. Nuestro enfoque integrativo combina medicina veterinaria tradicional con terapias complementarias.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-800">
                  Servicios Principales
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#8cb9a3] rounded-full mr-2"></span>Cuidado preventivo</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#8cb9a3] rounded-full mr-2"></span>Vacunas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#8cb9a3] rounded-full mr-2"></span>Cuidado dental</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#8cb9a3] rounded-full mr-2"></span>Cirugía</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#8cb9a3] rounded-full mr-2"></span>Peluquería</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#8cb9a3] rounded-full mr-2"></span>Hospedaje</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-800">
                  Terapias Complementarias
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#8cb9a3] rounded-full mr-2"></span>Quiropráctica</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#8cb9a3] rounded-full mr-2"></span>Acupuntura</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#8cb9a3] rounded-full mr-2"></span>Terapia láser</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#8cb9a3] rounded-full mr-2"></span>Medicina herbal</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#8cb9a3] rounded-full mr-2"></span>Fisioterapia</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/servicios"
                className="inline-block px-5 py-2 rounded-full bg-[#8cb9a3] text-white hover:bg-[#7aa08a] transition duration-300"
              >
                Ver Todos los Servicios
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLists;
