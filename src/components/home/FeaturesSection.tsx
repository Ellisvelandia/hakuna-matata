"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fear Free */}
          <div className="relative p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop"
                alt="Perro relajado"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-light mb-4 text-gray-800">
                <span className="block text-[#8cb9a3] font-medium">Atención Sin Miedo</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Reconocemos la importancia de visitas veterinarias menos estresantes. Cada aspecto de nuestra clínica está diseñado para reducir la ansiedad y hacer que la experiencia sea positiva para tu mascota.
              </p>
              <Link
                href="/sin-miedo"
                className="inline-block px-5 py-2 rounded-full bg-[#8cb9a3] text-white hover:bg-[#7aa08a] transition duration-300"
              >
                Más Información
              </Link>
            </div>
          </div>

          {/* Cat Friendly */}
          <div className="relative p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1000&auto=format&fit=crop"
                alt="Gato relajado"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-light mb-4 text-gray-800">
                <span className="block text-[#8cb9a3] font-medium">Amigable con Gatos</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Somos una Práctica Amigable con Gatos certificada, lo que significa que todo nuestro personal está especialmente capacitado para atender las necesidades únicas de nuestros pacientes felinos en un ambiente tranquilo y seguro.
              </p>
              <Link
                href="/amigable-con-gatos"
                className="inline-block px-5 py-2 rounded-full bg-[#8cb9a3] text-white hover:bg-[#7aa08a] transition duration-300"
              >
                Más Información
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
