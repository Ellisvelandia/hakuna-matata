import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function NutritionGuidePage() {
  return (
    <PageLayout title="Guía de Nutrición">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Guía de Nutrición para Mascotas</h2>
        
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Alimentación Básica</h3>
            <p className="text-gray-700 mb-4">
              Una nutrición adecuada es fundamental para la salud de tu mascota. 
              Aprende sobre los requerimientos nutricionales básicos según la edad y tamaño.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Dietas Especiales</h3>
            <p className="text-gray-700 mb-4">
              Algunas mascotas requieren dietas especiales debido a condiciones médicas específicas.
              Consulta con nuestro equipo veterinario para recomendaciones personalizadas.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}