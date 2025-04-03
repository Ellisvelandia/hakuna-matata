import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="relative w-32 h-32 mb-8">
        <Image
          src="/hakuna-matata-logo.png"
          alt="Hakuna Matata Clínica Veterinaria"
          fill
          className="object-contain animate-pulse"
        />
      </div>
      
      <div className="flex items-center justify-center">
        <div className="w-4 h-4 bg-[#ff9800] rounded-full mr-1 animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-4 h-4 bg-[#ff9800] rounded-full mr-1 animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-4 h-4 bg-[#ff9800] rounded-full mr-1 animate-bounce" style={{ animationDelay: '300ms' }}></div>
        <div className="w-4 h-4 bg-[#ff9800] rounded-full animate-bounce" style={{ animationDelay: '450ms' }}></div>
      </div>
      
      <p className="mt-4 text-gray-600 text-lg">Cargando...</p>
    </div>
  );
}
