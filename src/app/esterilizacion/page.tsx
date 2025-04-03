import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function SterilizationPage() {
  return (
    <PageLayout title="Esterilización">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Servicios de Esterilización</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            La esterilización es uno de los procedimientos más importantes para la 
            salud y el bienestar de su mascota. En Hakuna Matata Clínica Veterinaria, 
            realizamos estos procedimientos con el máximo cuidado y profesionalismo.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#ff9800]">
              Beneficios de la Esterilización:
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Prevención de enfermedades reproductivas
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Control de la población de mascotas
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Mejora del comportamiento
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff9800] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Reducción de riesgos de cáncer
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Nuestro Proceso</h3>
          <p className="text-gray-600 mb-4">
            Realizamos una evaluación completa antes del procedimiento, utilizamos 
            técnicas quirúrgicas modernas y proporcionamos instrucciones detalladas 
            para el cuidado post-operatorio, asegurando una recuperación rápida y segura.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}