import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import TeamMemberCard from '@/components/about/TeamMemberCard';

export default function OurTeamPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Dra. María Rodríguez",
      role: "Directora Médica",
      bio: "La Dra. Rodríguez cuenta con más de 15 años de experiencia en medicina veterinaria. Especializada en cirugía y medicina interna, lidera nuestro equipo con pasión y dedicación.",
      imageSrc: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Dr. Carlos Mendoza",
      role: "Veterinario Senior",
      bio: "Especialista en dermatología y alergias, el Dr. Mendoza se unió a nuestro equipo en 2018. Su enfoque compasivo y su experiencia lo convierten en un favorito entre nuestros pacientes.",
      imageSrc: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Dra. Ana Gómez",
      role: "Especialista en Animales Exóticos",
      bio: "La Dra. Gómez es nuestra experta en el cuidado de animales exóticos. Con formación especializada en reptiles, aves y pequeños mamíferos, garantiza que todas las mascotas reciban atención experta.",
      imageSrc: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Dr. Javier Pérez",
      role: "Cirujano Veterinario",
      bio: "Especializado en cirugía ortopédica y de tejidos blandos, el Dr. Pérez ha realizado miles de procedimientos exitosos. Su precisión y habilidad son incomparables.",
      imageSrc: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Laura Martínez",
      role: "Técnica Veterinaria Jefe",
      bio: "Con más de 10 años en la clínica, Laura supervisa a nuestro equipo técnico y garantiza que todos los procedimientos se realicen con el más alto nivel de cuidado y profesionalismo.",
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Miguel Sánchez",
      role: "Especialista en Comportamiento Animal",
      bio: "Miguel ayuda a las mascotas con problemas de comportamiento y a sus dueños a entender mejor a sus compañeros peludos. Su enfoque en el entrenamiento positivo ha transformado innumerables vidas.",
      imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <PageLayout 
      title="Nuestro Equipo" 
      backgroundImage="https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    >
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Conozca a Nuestros Profesionales</h2>
        <p className="text-gray-700">
          En Hakuna Matata Clínica Veterinaria, contamos con un equipo de profesionales altamente calificados y apasionados por el bienestar animal. 
          Cada miembro de nuestro equipo está comprometido con proporcionar el mejor cuidado posible para su mascota.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            bio={member.bio}
            imageSrc={member.imageSrc}
          />
        ))}
      </div>

      <div className="mt-16 bg-[#ffebcd] rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4">¿Quiere unirse a nuestro equipo?</h3>
        <p className="text-gray-700 mb-6">
          Siempre estamos buscando profesionales talentosos y apasionados para unirse a nuestra familia. 
          Si está interesado en oportunidades de carrera en Hakuna Matata Clínica Veterinaria, nos encantaría saber de usted.
        </p>
        <a 
          href="/empleo" 
          className="inline-block bg-[#ff9800] text-white py-3 px-6 rounded-md font-medium hover:bg-[#e68a00] transition-colors"
        >
          Ver Oportunidades de Empleo
        </a>
      </div>
    </PageLayout>
  );
}
