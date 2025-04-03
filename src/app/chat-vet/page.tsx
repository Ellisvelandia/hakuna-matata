import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function VetChatPage() {
  return (
    <PageLayout title="Chat Veterinario">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Chat Veterinario</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <p className="text-gray-700 mb-4">
              Conecta con nuestros veterinarios en línea para consultas rápidas y orientación general.
            </p>
            <p className="text-sm text-gray-500">
              Disponible de Lunes a Domingo, 8:00 AM - 8:00 PM
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700">
                Para iniciar un chat con nuestros veterinarios, por favor ingresa tus datos:
              </p>
            </div>

            <form className="space-y-4">
              <input 
                type="text"
                placeholder="Nombre completo"
                className="w-full p-2 border rounded-md"
              />
              <input 
                type="email"
                placeholder="Correo electrónico"
                className="w-full p-2 border rounded-md"
              />
              <textarea 
                placeholder="Describe brevemente tu consulta"
                className="w-full p-2 border rounded-md h-32"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-[#8cb9a3] text-white py-2 px-4 rounded-md hover:bg-[#7aa08a] transition-colors"
              >
                Iniciar Chat
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
