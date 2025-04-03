import React from 'react';
import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';

export default function FearFreePage() {
  return (
    <PageLayout 
      title="Atención Sin Miedo" 
      backgroundImage="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Text Content */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Nuestro Enfoque Sin Miedo</h2>
          <p className="mb-4 text-gray-700">
            En Hakuna Matata Clínica Veterinaria, nos comprometemos a proporcionar una experiencia veterinaria que minimice el miedo, la ansiedad y el estrés para todas las mascotas. Nuestro enfoque "Sin Miedo" está diseñado para hacer que las visitas al veterinario sean más agradables tanto para las mascotas como para sus dueños.
          </p>
          <p className="mb-8 text-gray-700">
            Nuestro equipo ha recibido capacitación especializada en técnicas de manejo sin miedo, y hemos adaptado nuestras instalaciones y procedimientos para crear un ambiente más tranquilo y acogedor para todos nuestros pacientes.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-[#ff9800]">¿Qué significa "Sin Miedo"?</h3>
          <p className="mb-8 text-gray-700">
            La atención "Sin Miedo" es un enfoque que reconoce que el miedo y la ansiedad contribuyen negativamente a la salud y al bienestar de las mascotas. Al reducir o eliminar estos factores estresantes, podemos proporcionar una mejor atención médica y crear experiencias más positivas que benefician la salud a largo plazo de su mascota.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-[#ff9800]">Nuestras Técnicas Sin Miedo</h3>
          <ul className="list-disc pl-5 mb-8 text-gray-700 space-y-3">
            <li><span className="font-semibold">Manejo suave:</span> Utilizamos técnicas de sujeción mínimas y respetuosas.</li>
            <li><span className="font-semibold">Ambiente tranquilo:</span> Controlamos los niveles de ruido y proporcionamos música relajante.</li>
            <li><span className="font-semibold">Feromonas calmantes:</span> Utilizamos difusores de feromonas para perros y gatos.</li>
            <li><span className="font-semibold">Superficies antideslizantes:</span> Para que las mascotas se sientan seguras durante los exámenes.</li>
            <li><span className="font-semibold">Golosinas y distracciones:</span> Usamos premios y técnicas de distracción durante los procedimientos.</li>
            <li><span className="font-semibold">Medicación preventiva:</span> Cuando es necesario, utilizamos medicamentos para reducir la ansiedad.</li>
          </ul>
        </div>

        {/* Right Column - Images and Additional Info */}
        <div>
          <div className="rounded-lg overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Mascota relajada en consulta veterinaria"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-[#ffebcd] rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Beneficios de la Atención Sin Miedo</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Menos estrés para su mascota durante las visitas</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Exámenes más completos y precisos</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Detección temprana de problemas de salud</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Experiencias positivas que facilitan futuras visitas</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Menos estrés para usted como dueño de mascota</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Veterinario con perro"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Cómo preparar a su mascota para una visita sin miedo</h3>
            <ol className="list-decimal pl-5 mb-4 text-gray-700 space-y-2">
              <li>Acostumbre a su mascota al transportín o correa con anticipación.</li>
              <li>Practique tocar las patas, orejas y boca de su mascota en casa.</li>
              <li>Considere visitas de "práctica" solo para socializar y recibir golosinas.</li>
              <li>Mantenga la calma usted mismo - las mascotas perciben nuestra ansiedad.</li>
              <li>Hable con nosotros sobre cualquier preocupación específica antes de la visita.</li>
            </ol>
            <a 
              href="/contacto" 
              className="inline-block bg-[#ff9800] text-white py-2 px-4 rounded-md font-medium hover:bg-[#e68a00] transition-colors"
            >
              Programe una Visita Sin Miedo
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
