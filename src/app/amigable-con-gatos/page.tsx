import React from 'react';
import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';

export default function CatFriendlyPage() {
  return (
    <PageLayout 
      title="Clínica Amigable con Gatos" 
      backgroundImage="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Text Content */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Comprometidos con el Bienestar Felino</h2>
          <p className="mb-4 text-gray-700">
            En Hakuna Matata Clínica Veterinaria, entendemos que los gatos tienen necesidades únicas y requieren un enfoque especial en su atención médica. Por eso, nos enorgullece ser una clínica certificada como "Amigable con Gatos".
          </p>
          <p className="mb-8 text-gray-700">
            Nuestro equipo ha recibido capacitación especializada para manejar a los pacientes felinos de manera que minimice su estrés y ansiedad durante las visitas veterinarias. Desde el diseño de nuestras instalaciones hasta nuestros protocolos de manejo, todo está pensado para hacer que la experiencia de su gato sea lo más tranquila posible.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-[#ff9800]">¿Qué nos hace diferentes?</h3>
          <ul className="list-disc pl-5 mb-8 text-gray-700 space-y-3">
            <li><span className="font-semibold">Sala de espera separada para gatos:</span> Reducimos el estrés al mantener a los gatos alejados de los perros.</li>
            <li><span className="font-semibold">Feromonas felinas:</span> Utilizamos difusores de feromonas para crear un ambiente más relajante.</li>
            <li><span className="font-semibold">Técnicas de manejo suave:</span> Nuestro personal está capacitado en técnicas específicas para gatos.</li>
            <li><span className="font-semibold">Consultorios diseñados para gatos:</span> Con superficies elevadas y escondites donde los gatos pueden sentirse seguros.</li>
            <li><span className="font-semibold">Hospitalización separada:</span> Áreas tranquilas y alejadas de pacientes caninos.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-[#ff9800]">Consejos para una visita sin estrés</h3>
          <ol className="list-decimal pl-5 mb-8 text-gray-700 space-y-3">
            <li>Acostumbre a su gato al transportín con anticipación, dejándolo abierto en casa.</li>
            <li>Coloque una toalla o prenda con olor familiar dentro del transportín.</li>
            <li>Cubra el transportín con una toalla durante el viaje para reducir la estimulación visual.</li>
            <li>Evite alimentar a su gato justo antes de la visita (a menos que tenga indicaciones médicas específicas).</li>
            <li>Llegue unos minutos antes para completar el papeleo sin prisa.</li>
          </ol>
        </div>

        {/* Right Column - Images and Additional Info */}
        <div>
          <div className="rounded-lg overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Gato relajado en consulta veterinaria"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-[#ffebcd] rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Servicios Especializados para Gatos</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Chequeos preventivos específicos para felinos</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Odontología felina</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Manejo de enfermedades específicas de gatos</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Asesoramiento nutricional para cada etapa de vida</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Consultas de comportamiento felino</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Veterinario examinando a un gato"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">¿Tiene preguntas sobre el cuidado de su gato?</h3>
            <p className="text-gray-700 mb-4">
              Nuestro equipo está aquí para ayudarle con cualquier duda sobre la salud y el bienestar de su felino. No dude en contactarnos para programar una consulta o simplemente para obtener más información.
            </p>
            <a 
              href="/contacto" 
              className="inline-block bg-[#ff9800] text-white py-2 px-4 rounded-md font-medium hover:bg-[#e68a00] transition-colors"
            >
              Contáctenos
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
