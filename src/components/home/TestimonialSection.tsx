"use client";

import React from "react";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Image */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <Image
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop"
                alt="Gato feliz"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right side - Testimonial */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-light text-center md:text-left mb-6 text-gray-800">
              <span className="block text-[#8cb9a3] font-medium">Gratitud</span>
            </h2>
            <blockquote className="text-lg text-gray-600 mb-6 italic">
              "Todo el personal de Hakuna Matata Clínica Veterinaria es increíble. El personal nos trata como familia; sabemos que nuestras mascotas siempre están en manos amorosas. Recomiendo esta clínica a todos los dueños de mascotas que buscan atención excepcional."
            </blockquote>
            <p className="text-gray-500 font-medium">— María López, dueña de Milo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
