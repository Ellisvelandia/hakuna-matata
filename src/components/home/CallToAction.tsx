"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="relative py-16 text-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000&auto=format&fit=crop"
          alt="Fondo de mascotas"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <Image
          src="/images/hakuna.webp"
          alt="Hakuna Matata Logo"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />
        <h2 className="text-3xl mb-6 text-[#8cb9a3]">Visítanos</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">Estamos disponibles 24 horas para atender a tu mascota con el cuidado y la atención que merece. Agenda tu cita hoy mismo.</p>
        <Link 
          href="/cita" 
          className="inline-block px-6 py-3 rounded-full bg-[#8cb9a3] text-white hover:bg-[#7aa08a] transition-all duration-300"
        >
          Solicitar una cita
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
