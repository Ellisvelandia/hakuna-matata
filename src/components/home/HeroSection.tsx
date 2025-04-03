"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left side - Text content */}
        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-gray-800">
            <span className="block">Cuidado Excepcional para</span>
            <span className="block font-semibold text-[#8cb9a3] mt-2">Bienestar</span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg">
            Proporcionamos atención veterinaria compasiva y de alta calidad para mantener a tu mascota saludable y feliz durante toda su vida.
          </p>
          <Link
            href="/solicitud-cita"
            className="inline-block px-6 py-3 rounded-full bg-[#8cb9a3] text-white hover:bg-[#7aa08a] transition duration-300"
          >
            Solicitar una Cita
          </Link>
        </div>

        {/* Right side - Circular image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1587559070757-f72a388edbba?q=80&w=1000&auto=format&fit=crop"
              alt="Perro saludable"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

