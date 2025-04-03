import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full relative">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/573113603168"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
        </svg>
      </a>

      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[500px] relative">
          <Image
            src="https://ext.same-assets.com/965708439/3487011211.jpeg"
            alt="Hakuna Matata Clínica Veterinaria Hero"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="container mx-auto h-full flex flex-col justify-center items-start relative z-10 px-4">
            <div className="max-w-lg bg-white/90 p-6 rounded-lg">
              <h1 className="text-3xl md:text-4xl mb-2">
                Cuidado de calidad para tu mascota sin estrés
              </h1>
              <p className="text-6xl font-light script-font mb-6 text-[#ff9800]">Hakuna Matata</p>
              <Link href="/solicitud-cita" className="btn-primary bg-[#ff9800] hover:bg-[#e08700]">
                Solicitar una Cita
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="mb-6 flex justify-center">
              <Image
                src="/hakuna-matata-logo.png"
                alt="Hakuna Matata Logo"
                width={120}
                height={120}
                className="mx-auto"
              />
            </div>
            <h2 className="text-3xl mb-6 text-[#ff9800]">
              Hakuna Matata Clínica Veterinaria
              <br />
              <span className="text-xl">Una experiencia sin preocupaciones para tu mascota</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Como dueño de una mascota, sabes que las visitas al veterinario son esenciales para el bienestar continuo de tu mascota. Sin embargo, a veces te preguntas si el miedo y la ansiedad de tu mascota realmente valen la pena por todos los esfuerzos de las visitas veterinarias. En Hakuna Matata Clínica Veterinaria, no tienes que elegir entre la atención veterinaria y la salud mental de tu mascota porque nos dedicamos a una medicina veterinaria integrativa de alta calidad con un fuerte enfoque en un enfoque sin preocupaciones.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-[#ffebcd] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-center mb-8 script-font text-[#ff9800]">
              Testimonios...
            </h2>
            <blockquote className="text-center text-lg italic text-gray-700 mb-6">
              Todo el personal de Hakuna Matata Clínica Veterinaria es increíble: desde los representantes de recepción hasta los técnicos veterinarios y los médicos. El personal nos trata como familia; sabemos que nuestras mascotas siempre están en manos amorosas.
            </blockquote>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-12 text-[#ff9800]">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Wellness */}
            <div className="service-card text-center">
              <Link href="/bienestar" className="block hover:opacity-90">
                <div className="relative w-full h-48 mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/965708439/2075309251.jpeg"
                    alt="Bienestar"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#ff9800]">Paquetes de Bienestar</h3>
                <p className="text-gray-700">
                  La medicina preventiva es una parte importante de nuestra filosofía de práctica. ¡Mantén a tu mascota saludable por menos con nuestros paquetes de bienestar!
                </p>
              </Link>
            </div>

            {/* Dental Care */}
            <div className="service-card text-center">
              <Link href="/cuidado-dental" className="block hover:opacity-90">
                <div className="relative w-full h-48 mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/965708439/608452770.jpeg"
                    alt="Cuidado Dental"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#ff9800]">Cuidado Dental</h3>
                <p className="text-gray-700">
                  La salud oral es uno de los aspectos más importantes del cuidado preventivo de tu mascota. Proporcionamos exámenes dentales integrales, limpiezas y más.
                </p>
              </Link>
            </div>

            {/* Chiropractic */}
            <div className="service-card text-center">
              <Link href="/quiropractica" className="block hover:opacity-90">
                <div className="relative w-full h-48 mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/965708439/340170703.jpeg"
                    alt="Quiropráctica"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#ff9800]">Quiropráctica</h3>
                <p className="text-gray-700">
                  La manipulación espinal veterinaria o cuidado quiropráctico es una terapia efectiva para el dolor articular, lesiones, condiciones neurológicas y más.
                </p>
              </Link>
            </div>

            {/* Acupuncture */}
            <div className="service-card text-center">
              <Link href="/acupuntura" className="block hover:opacity-90">
                <div className="relative w-full h-48 mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/965708439/3505022569.jpeg"
                    alt="Acupuntura"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#ff9800]">Acupuntura</h3>
                <p className="text-gray-700">
                  Con una historia de 5,000 años, la acupuntura se utiliza ampliamente como complemento al tratamiento médico occidental para una amplia gama de condiciones.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-[#ffebcd] py-12 text-center">
        <div className="container mx-auto px-4">
          <Image
            src="/hakuna-matata-logo.png"
            alt="Hakuna Matata Logo"
            width={150}
            height={150}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl mb-4 text-[#ff9800]">Hakuna Matata</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            "Hakuna Matata" significa "sin preocupaciones" en Swahili, y ese es exactamente nuestro enfoque para la atención veterinaria. Nuestro objetivo es proporcionar una experiencia sin estrés tanto para las mascotas como para sus dueños.
          </p>
        </div>
      </div>

      {/* Two Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Sin Miedo */}
            <div className="bg-[#ffebcd] p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#ff9800] rounded-full flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4M12,18C8.69,18 6,15.31 6,12C6,8.69 8.69,6 12,6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M12,10C10.9,10 10,10.9 10,12C10,13.1 10.9,14 12,14C13.1,14 14,13.1 14,12C14,10.9 13.1,10 12,10Z" />
                  </svg>
                </div>
                <h3 className="text-2xl text-[#ff9800]">
                  Dedicación a<br />Visitas Veterinarias Sin Miedo
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                En Hakuna Matata, reconocemos la importancia de visitas veterinarias menos estresantes. Cada aspecto de nuestra clínica veterinaria juega un papel en hacer que la visita de tu mascota sea menos estresante, desde la forma en que interactuamos con ellos hasta los colores con los que pintamos nuestras paredes.
              </p>
              <Link href="/sin-miedo" className="btn-primary bg-[#ff9800] hover:bg-[#e08700]">
                Más Información
              </Link>
            </div>

            {/* Amigable con Gatos */}
            <div className="bg-[#ffebcd] p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#ff9800] rounded-full flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z" />
                  </svg>
                </div>
                <h3 className="text-2xl text-[#ff9800]">
                  Cumpliendo con<br />El Estándar de Oro en Cuidado Felino
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                Además de nuestro enfoque sin miedo, también somos una Práctica Amigable con Gatos, lo que significa que todo nuestro personal recibió educación continua en medicina y cuidado felino, y tomamos medidas adicionales para acomodar a cada uno de nuestros invitados felinos.
              </p>
              <Link href="/amigable-con-gatos" className="btn-primary bg-[#ff9800] hover:bg-[#e08700]">
                Más Información
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Lists */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="relative w-full h-80 mb-8">
                <Image
                  src="https://ext.same-assets.com/965708439/92357849.jpeg"
                  alt="Perro Husky"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl mb-6 text-[#ff9800]">
                Un Enfoque Integrativo a la Medicina Veterinaria
              </h2>
              <p className="text-gray-700 mb-6">
                En Hakuna Matata Clínica Veterinaria, practicamos un enfoque integrativo para la salud y el bienestar de tu mascota. Si bien proporcionamos todos los servicios tradicionales que tu mascota podría necesitar, nuestros veterinarios también practican cuidado quiropráctico veterinario, acupuntura, terapia láser y medicina herbaria.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#ff9800]">
                    Servicios tradicionales
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    <li><Link href="/bienestar" className="hover:text-[#ff9800]">Cuidado preventivo</Link></li>
                    <li><Link href="/vacunas" className="hover:text-[#ff9800]">Vacunas</Link></li>
                    <li><Link href="/cuidado-dental" className="hover:text-[#ff9800]">Cuidado dental</Link></li>
                    <li><Link href="/esterilizacion" className="hover:text-[#ff9800]">Esterilización</Link></li>
                    <li><Link href="/cirugia" className="hover:text-[#ff9800]">Cirugía (incluyendo ortopédica)</Link></li>
                    <li><Link href="/bienestar" className="hover:text-[#ff9800]">Manejo de alergias</Link></li>
                    <li><Link href="/hospedaje" className="hover:text-[#ff9800]">Hospedaje</Link></li>
                    <li><Link href="/peluqueria" className="hover:text-[#ff9800]">Peluquería</Link></li>
                    <li><Link href="/visitas-domicilio" className="hover:text-[#ff9800]">Visitas a domicilio</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#ff9800]">
                    Servicios integrativos
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    <li><Link href="/quiropractica" className="hover:text-[#ff9800]">Quiropráctica</Link></li>
                    <li><Link href="/acupuntura" className="hover:text-[#ff9800]">Acupuntura</Link></li>
                    <li><Link href="/terapia-laser" className="hover:text-[#ff9800]">Terapia láser</Link></li>
                    <li><Link href="/medicina-herbal" className="hover:text-[#ff9800]">Medicina herbal</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#ffebcd] py-16 text-center">
        <div className="container mx-auto px-4">
          <Image
            src="/hakuna-matata-logo.png"
            alt="Hakuna Matata Logo"
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
          <h2 className="text-3xl mb-6 text-[#ff9800]">Visítanos</h2>
          <Link href="/solicitud-cita" className="btn-primary bg-[#ff9800] hover:bg-[#e08700]">
            Solicitar una cita
          </Link>
        </div>
      </div>
    </div>
  );
}
