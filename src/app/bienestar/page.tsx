import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';

export default function WellnessPage() {
  return (
    <PageLayout 
      title="Bienestar" 
      backgroundImage="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Text Content */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Cuidado Preventivo para una Vida Saludable</h2>
          <p className="mb-4 text-gray-700">
            En Hakuna Matata Clínica Veterinaria, creemos firmemente que la prevención es la mejor medicina. Nuestros servicios de bienestar están diseñados para mantener a su mascota saludable y detectar cualquier problema potencial antes de que se convierta en algo serio.
          </p>
          <p className="mb-8 text-gray-700">
            Cada mascota es única, por lo que personalizamos nuestros planes de bienestar según la edad, raza, estilo de vida y necesidades específicas de su compañero peludo. Nuestro enfoque integral abarca todos los aspectos de la salud de su mascota.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-[#ff9800]">Nuestros Servicios de Bienestar Incluyen:</h3>
          <ul className="list-disc pl-5 mb-8 text-gray-700 space-y-3">
            <li><span className="font-semibold">Exámenes físicos completos:</span> Evaluación detallada de todos los sistemas corporales.</li>
            <li><span className="font-semibold">Vacunaciones:</span> Programas personalizados según el riesgo y estilo de vida.</li>
            <li><span className="font-semibold">Control de parásitos:</span> Prevención y tratamiento de parásitos internos y externos.</li>
            <li><span className="font-semibold">Análisis de laboratorio:</span> Pruebas de sangre, orina y heces para detectar problemas ocultos.</li>
            <li><span className="font-semibold">Evaluación nutricional:</span> Recomendaciones dietéticas adaptadas a cada etapa de vida.</li>
            <li><span className="font-semibold">Salud dental:</span> Evaluación y recomendaciones para el cuidado dental en casa.</li>
            <li><span className="font-semibold">Control de peso:</span> Programas para mantener un peso saludable.</li>
            <li><span className="font-semibold">Evaluación del comportamiento:</span> Identificación y manejo de problemas conductuales.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-[#ff9800]">¿Por qué son importantes los chequeos regulares?</h3>
          <p className="mb-8 text-gray-700">
            Las mascotas envejecen más rápido que los humanos y pueden desarrollar problemas de salud en un corto período. Los chequeos regulares permiten detectar y tratar problemas tempranamente, cuando son más fáciles y menos costosos de manejar. Además, las mascotas a menudo ocultan signos de enfermedad, y un examen profesional puede revelar problemas que podrían pasar desapercibidos.
          </p>
        </div>

        {/* Right Column - Images and Additional Info */}
        <div>
          <div className="rounded-lg overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Veterinario examinando a un perro"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-[#ffebcd] rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Planes de Bienestar</h3>
            <p className="mb-4 text-gray-700">
              Ofrecemos planes de bienestar que incluyen todos los servicios preventivos que su mascota necesita a un precio accesible. Nuestros planes están disponibles para mascotas de todas las edades:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Plan Cachorro/Gatito:</strong> Para mascotas de 0 a 1 año</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Plan Adulto:</strong> Para mascotas de 1 a 7 años</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Plan Senior:</strong> Para mascotas mayores de 7 años</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link 
                href="/contacto" 
                className="text-[#ff9800] font-medium hover:underline"
              >
                Contáctenos para más información sobre nuestros planes →
              </Link>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Perro feliz después de su visita"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Programe una Consulta de Bienestar</h3>
            <p className="text-gray-700 mb-4">
              Invierta en la salud a largo plazo de su mascota programando una consulta de bienestar hoy. Nuestro equipo está listo para desarrollar un plan personalizado que mantendrá a su compañero feliz y saludable por muchos años.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+573113603168" 
                className="inline-block bg-[#ff9800] text-white py-2 px-4 rounded-md font-medium hover:bg-[#e68a00] transition-colors text-center"
              >
                Llamar Ahora
              </a>
              <Link 
                href="/solicitud-cita" 
                className="inline-block bg-white border border-[#ff9800] text-[#ff9800] py-2 px-4 rounded-md font-medium hover:bg-gray-50 transition-colors text-center"
              >
                Solicitar Cita Online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
