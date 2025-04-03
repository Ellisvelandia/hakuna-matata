"use client";

import Image from "next/image";
import Link from "next/link";

type FeatureCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

function FeatureCard({ title, description, imageSrc, imageAlt }: FeatureCardProps) {
  return (
    <article className="group rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={false}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
        />
      </div>
      <div className="p-6 bg-gray-50">
        <h3 className="font-medium text-gray-800 text-xl mb-2">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}

const features = [
  {
    title: "Equipo Profesional",
    description: "Contamos con veterinarios certificados y en constante actualización para brindar el mejor cuidado a tu mascota.",
    imageSrc: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Equipo veterinario profesional examinando a un perro"
  },
  {
    title: "Instalaciones Modernas",
    description: "Tecnología de vanguardia en un ambiente diseñado para la comodidad y seguridad de las mascotas.",
    imageSrc: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Interior moderno de la clínica veterinaria con equipamiento especializado"
  },
  {
    title: "Atención Personalizada",
    description: "Cada mascota es única, por eso desarrollamos planes de tratamiento adaptados a sus necesidades específicas.",
    imageSrc: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Veterinario interactuando cariñosamente con un gato durante una consulta"
  }
] as const;

export default function AboutSection() {
  return (
    <section 
      className="relative bg-white py-16 sm:py-24 overflow-hidden" 
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            id="about-heading" 
            className="text-4xl font-semibold mb-6 text-gray-800"
          >
            <span className="block">Quiénes Somos</span>
            <span className="block text-2xl text-gray-600 mt-3 font-normal">
              Una Experiencia Veterinaria Diferente
            </span>
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            En Hakuna Matata Clínica Veterinaria, entendemos que tu mascota es
            parte de tu familia. Nuestro enfoque combina medicina veterinaria
            avanzada con un ambiente tranquilo y acogedor. Nos dedicamos a
            proporcionar atención médica excepcional mientras creamos una
            experiencia positiva tanto para las mascotas como para sus dueños.
          </p>

          <Link 
            href="/acerca"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full 
              bg-[#8cb9a3] text-white hover:bg-[#7aa08a] transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8cb9a3]"
          >
            Conoce Más Sobre Nosotros
            <svg 
              className="ml-2 -mr-1 w-4 h-4" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8cb9a3]/5 rounded-full" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#8cb9a3]/5 rounded-full" />
    </section>
  );
}

