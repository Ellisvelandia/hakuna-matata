import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="relative w-32 h-32 mb-8">
        <Image
          src="/images/hakuna.webp"
          alt="Hakuna Matata Clínica Veterinaria"
          fill
          priority
          className="object-contain animate-pulse"
        />
      </div>
      
      <div className="flex flex-col items-center gap-4">
        <div className="h-2 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="h-2 w-32 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
}

