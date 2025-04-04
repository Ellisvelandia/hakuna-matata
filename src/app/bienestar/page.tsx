import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function WellnessPage() {
  return (
    <PageLayout title="Bienestar">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Servicios de Bienestar</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            En Hakuna Matata Clínica Veterinaria, nuestro programa de bienestar está diseñado 
            para mantener a su mascota saludable y feliz a través de cuidados preventivos 
            y chequeos regulares.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#ff9800]">
              Nuestros Servicios de Bienestar Incluyen:
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Exámenes físicos completos
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Vacunaciones
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Control de parásitos
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Recomendaciones nutricionales
              </li>
            </ul>
          </div>

          <div className="bg-[#ffebcd] rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">¿Listo para programar una cita de bienestar?</h3>
            <p className="mb-4">
              Contáctenos hoy mismo para programar una consulta de bienestar para su mascota.
            </p>
            <div className="flex space-x-4">
              <a 
                href="/contacto" 
                className="inline-block bg-[#ff9800] text-white py-2 px-4 rounded-md hover:bg-[#e68a00] transition-colors"
              >
                Contactar
              </a>
              <a 
                href="tel:+573113603168" 
                className="inline-block bg-white border border-[#ff9800] text-[#ff9800] py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
              >
                Llamar
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

