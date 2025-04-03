import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function TrainingTipsPage() {
  return (
    <PageLayout title="Tips de Entrenamiento">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Tips de Entrenamiento</h2>
        
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Comandos Básicos</h3>
            <p className="text-gray-700 mb-4">
              Aprende los comandos esenciales para entrenar a tu mascota y 
              establecer una buena comunicación desde el principio.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Socialización</h3>
            <p className="text-gray-700 mb-4">
              La socialización temprana es clave para el desarrollo de tu mascota.
              Descubre cómo hacerlo de manera segura y efectiva.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}