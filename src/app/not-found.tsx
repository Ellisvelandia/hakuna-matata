import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-50">
      <div className="text-center max-w-md">
        <div className="mb-8 relative w-40 h-40 mx-auto">
          <Image
            src="/hakuna-matata-logo.png"
            alt="Hakuna Matata Clínica Veterinaria"
            fill
            className="object-contain"
          />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">¡Página no encontrada!</h1>
        
        <div className="mb-8">
          <Image
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Gato confundido"
            width={300}
            height={200}
            className="rounded-lg mx-auto"
          />
        </div>
        
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que está buscando no existe o ha sido movida.
          Nuestros amigos felinos han estado jugando con los cables.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/" 
            className="block bg-[#ff9800] text-white py-3 px-6 rounded-md font-medium hover:bg-[#e68a00] transition-colors"
          >
            Volver a la página principal
          </Link>
          
          <Link 
            href="/contacto" 
            className="block bg-white border border-[#ff9800] text-[#ff9800] py-3 px-6 rounded-md font-medium hover:bg-gray-50 transition-colors mt-4"
          >
            Contactar con nosotros
          </Link>
        </div>
      </div>
      
      <div className="mt-12 text-center text-gray-500">
        <p>¿Necesita ayuda? Llámenos al <a href="tel:+573113603168" className="text-[#ff9800] hover:underline">+57 311 3603168</a></p>
      </div>
    </div>
  );
}
