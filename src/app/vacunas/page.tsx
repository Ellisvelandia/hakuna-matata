import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function VaccinationPage() {
  return (
    <PageLayout title="Vacunas">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Servicios de Vacunación</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Proteger a su mascota con un programa de vacunación adecuado es esencial para su salud 
            a largo plazo. En Hakuna Matata Clínica Veterinaria, desarrollamos planes de vacunación 
            personalizados según la edad, el estilo de vida y los factores de riesgo de cada mascota.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#ff9800]">
              Nuestros Servicios de Vacunación Incluyen:
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Vacunas esenciales para perros y gatos
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Vacunas no esenciales según factores de riesgo
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Certificados de vacunación
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Recordatorios de vacunación
              </li>
            </ul>
          </div>

          <div className="bg-[#ffebcd] rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">¿Necesita actualizar las vacunas de su mascota?</h3>
            <p className="mb-4">
              Contáctenos hoy mismo para programar una cita de vacunación.
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