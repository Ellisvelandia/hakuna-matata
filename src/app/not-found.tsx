import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-50">
      <div className="text-center max-w-md">
        <div className="mb-8 relative w-40 h-40 mx-auto">
          <Image
            src="/images/hakuna.webp"
            alt="Hakuna Matata Clínica Veterinaria"
            fill
            priority
            className="object-contain"
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ¡Página no encontrada!
        </h1>

        <div className="mb-8 relative h-[200px]">
          <Image
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
            alt="Gato confundido"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="rounded-lg object-cover"
          />
        </div>

        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
            text-base font-medium rounded-md text-white bg-[#ff9800] 
            hover:bg-[#e68a00] transition-colors duration-300
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff9800]"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}

