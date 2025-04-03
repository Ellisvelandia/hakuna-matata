import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function DentalCarePage() {
  return (
    <PageLayout title="Cuidado Dental">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Servicios de Cuidado Dental</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            En Hakuna Matata Clínica Veterinaria, entendemos que la salud dental es 
            fundamental para el bienestar general de su mascota. Ofrecemos servicios 
            dentales completos para prevenir y tratar problemas bucales.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#ff9800]">
              Nuestros Servicios Dentales Incluyen:
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Limpiezas dentales profesionales
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Extracciones dentales
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Radiografías dentales
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Tratamientos de enfermedades periodontales
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4">¿Por qué es importante el cuidado dental?</h3>
          <p className="text-gray-600 mb-4">
            La salud dental deficiente puede llevar a problemas graves, incluyendo 
            enfermedades cardíacas, renales y hepáticas. La prevención y el tratamiento 
            temprano son esenciales para la salud general de su mascota.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}