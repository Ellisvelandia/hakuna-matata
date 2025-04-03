"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/paw-icon.png"
              alt="Hakuna Matata Logo"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>
          <h2 className="text-3xl mb-6 text-gray-800">
            <span className="block font-light">Quiénes Somos</span>
            <span className="block text-xl text-gray-600 mt-2">Una Experiencia Veterinaria Diferente</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            En Hakuna Matata Clínica Veterinaria, entendemos que tu mascota es parte de tu familia. Nuestro enfoque combina medicina veterinaria avanzada con un ambiente tranquilo y acogedor. Nos dedicamos a proporcionar atención médica excepcional mientras creamos una experiencia positiva tanto para las mascotas como para sus dueños. Nuestro equipo de profesionales apasionados trabaja con un objetivo común: mantener a tu mascota saludable y feliz durante toda su vida.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop"
                  alt="Equipo veterinario"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="font-medium text-gray-800">Equipo Profesional</h3>
                <p className="text-sm text-gray-600">Veterinarios con amplia experiencia</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop"
                  alt="Instalaciones modernas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="font-medium text-gray-800">Instalaciones Modernas</h3>
                <p className="text-sm text-gray-600">Tecnología de vanguardia</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=1000&auto=format&fit=crop"
                  alt="Atención personalizada"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="font-medium text-gray-800">Atención Personalizada</h3>
                <p className="text-sm text-gray-600">Cuidado adaptado a cada mascota</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
