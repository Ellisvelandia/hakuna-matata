"use client";

import React from "react";
import Image from "next/image";

const LogoSection = () => {
  return (
    <div className="bg-gray-50 py-16 text-center">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-64 md:h-80 mb-8">
          <Image
            src="/images/dog-cat-sleeping.jpg"
            alt="Perro y gato durmiendo juntos"
            fill
            className="object-cover object-center rounded-lg shadow-lg"
          />
        </div>
        <h2 className="text-3xl font-light mb-4 text-gray-800">
          <span className="block text-[#8cb9a3] font-medium">Hakuna Matata</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-600">
          "Hakuna Matata" significa "sin preocupaciones" en Swahili, y ese es exactamente nuestro enfoque para la atención veterinaria. Nuestro objetivo es proporcionar una experiencia sin estrés tanto para las mascotas como para sus dueños.
        </p>
      </div>
    </div>
  );
};

export default LogoSection;
