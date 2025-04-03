import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function SurgeryPage() {
  return (
    <PageLayout title="Cirugía">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Servicios de Cirugía</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Nuestro equipo quirúrgico altamente capacitado utiliza las técnicas más 
            avanzadas y equipos de última generación para garantizar la seguridad y 
            el bienestar de su mascota durante cualquier procedimiento quirúrgico.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#ff9800]">
              Tipos de Cirugías que Realizamos:
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Cirugías de tejidos blandos
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Cirugías ortopédicas
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Cirugías de emergencia
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Cirugías mínimamente invasivas
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Nuestro Compromiso con la Seguridad</h3>
          <p className="text-gray-600 mb-4">
            Cada procedimiento quirúrgico incluye monitoreo completo de signos vitales, 
            protocolos de anestesia personalizados y un plan detallado de recuperación 
            post-operatoria para garantizar los mejores resultados posibles.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}