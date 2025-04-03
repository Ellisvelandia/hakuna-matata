import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';

export default function AboutPage() {
  return (
    <PageLayout title="Acerca de Nosotros">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Text Content */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Nuestra Historia</h2>
          <p className="mb-4 text-gray-700">
            Hakuna Matata Clínica Veterinaria nació en 2015 con la visión de ofrecer atención veterinaria de la más alta calidad en Girardot. Nuestro nombre, que significa "sin preocupaciones" en swahili, refleja nuestra filosofía de crear un ambiente tranquilo y acogedor tanto para las mascotas como para sus dueños.
          </p>
          <p className="mb-4 text-gray-700">
            Desde nuestros humildes comienzos, hemos crecido hasta convertirnos en una clínica de referencia en la región, manteniendo siempre nuestro compromiso con la excelencia médica y el trato compasivo.
          </p>
          <p className="mb-8 text-gray-700">
            Hoy, contamos con un equipo de profesionales altamente calificados y las instalaciones más modernas para garantizar que su mascota reciba el mejor cuidado posible, las 24 horas del día, los 7 días de la semana.
          </p>

          <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Nuestra Misión</h2>
          <p className="mb-8 text-gray-700">
            Proporcionar atención veterinaria excepcional con compasión y profesionalismo, mejorando la calidad de vida de las mascotas y fortaleciendo el vínculo entre ellas y sus familias.
          </p>

          <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Nuestros Valores</h2>
          <ul className="list-disc pl-5 mb-8 text-gray-700 space-y-2">
            <li><span className="font-semibold">Compasión:</span> Tratamos a cada mascota como si fuera nuestra.</li>
            <li><span className="font-semibold">Excelencia:</span> Nos comprometemos con los más altos estándares de atención médica.</li>
            <li><span className="font-semibold">Integridad:</span> Actuamos con honestidad y transparencia en todo momento.</li>
            <li><span className="font-semibold">Educación:</span> Creemos en empoderar a los dueños de mascotas con conocimiento.</li>
            <li><span className="font-semibold">Innovación:</span> Adoptamos las últimas tecnologías y técnicas veterinarias.</li>
          </ul>
        </div>

        {/* Right Column - Image and Quick Links */}
        <div>
          <div className="rounded-lg overflow-hidden my-8">
            <Image
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Interior moderno de la clínica veterinaria"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-[#ffebcd] rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Conozca Más Sobre Nosotros</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/nuestro-equipo" className="flex items-center text-[#ff9800] hover:underline">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link href="/amigable-con-gatos" className="flex items-center text-[#ff9800] hover:underline">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Amigable con Gatos
                </Link>
              </li>
              <li>
                <Link href="/sin-miedo" className="flex items-center text-[#ff9800] hover:underline">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Sin Miedo
                </Link>
              </li>
              <li>
                <Link href="/galeria-fotos" className="flex items-center text-[#ff9800] hover:underline">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  Galería de Fotos
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">¿Por qué elegirnos?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Atención veterinaria 24/7</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Equipo de veterinarios especialistas</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instalaciones modernas y equipamiento de última generación</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Enfoque en reducir el estrés y el miedo en las mascotas</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ff9800] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Atención personalizada para cada paciente</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
