import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';

export default function ContactPage() {
  return (
    <PageLayout 
      title="Contacto" 
      backgroundImage="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Comuníquese con Nosotros</h2>
          <p className="mb-8 text-gray-700">
            ¿Tiene alguna pregunta o necesita más información? No dude en contactarnos utilizando cualquiera de los métodos a continuación, o complete el formulario de contacto y nos comunicaremos con usted lo antes posible.
          </p>

          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#ff9800] flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-lg">Dirección</h3>
              <p className="text-gray-700">
                Cl. 29 #7-18<br />
                Girardot, Cundinamarca
              </p>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#ff9800] flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-lg">Teléfono</h3>
              <p className="text-gray-700">
                <a href="tel:+573113603168" className="hover:text-[#ff9800]">+57 311 3603168</a>
              </p>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#ff9800] flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-lg">Email</h3>
              <p className="text-gray-700">
                <a href="mailto:info@hakunamatatavet.com" className="hover:text-[#ff9800]">info@hakunamatatavet.com</a>
              </p>
            </div>
          </div>

          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-[#ff9800] flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-lg">Horario</h3>
              <div className="text-gray-700">
                <p>Abierto las 24 horas</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <a 
              href="https://wa.me/573113603168" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
              </svg>
              WhatsApp
            </a>
            <a 
              href="https://www.instagram.com/hakuna_matata_veterinaria" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center bg-[#E1306C] text-white px-4 py-2 rounded-md hover:bg-[#C13584] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12,2.16C15.2,2.16 15.52,2.17 16.77,2.22C18.85,2.31 20.1,2.78 20.1,2.78C20.64,3 21.1,3.27 21.56,3.73C22,4.17 22.3,4.63 22.5,5.16C22.5,5.16 23,6.44 23.06,8.48C23.11,9.74 23.13,10.05 23.13,13.23C23.13,16.41 23.11,16.72 23.06,18C23,20 22.5,21.3 22.5,21.3C22.3,21.84 22,22.3 21.56,22.73C21.12,23.17 20.65,23.47 20.12,23.67C20.12,23.67 18.84,24.17 16.8,24.23C15.54,24.28 15.24,24.3 12.06,24.3C8.88,24.3 8.57,24.28 7.3,24.23C5.28,24.17 3.98,23.67 3.98,23.67C3.44,23.47 2.98,23.17 2.54,22.73C2.1,22.29 1.8,21.83 1.6,21.3C1.6,21.3 1.1,20.02 1.04,18C0.99,16.72 0.97,16.42 0.97,13.24C0.97,10.06 0.99,9.75 1.04,8.5C1.1,6.46 1.6,5.18 1.6,5.18C1.8,4.64 2.1,4.18 2.54,3.74C2.98,3.3 3.44,3 3.98,2.8C3.98,2.8 5.26,2.3 7.3,2.24C8.56,2.19 8.86,2.17 12.04,2.17M12,0C8.74,0 8.4,0.02 7.13,0.07C5.01,0.14 3.56,0.5 2.28,1.12C0.98,1.76 0,2.7 0,2.7C0,2.7 -0.88,3.7 -1.44,5.02C-2.04,6.29 -2.42,7.76 -2.48,9.86C-2.54,11.13 -2.55,11.47 -2.55,14.73C-2.55,18 -2.54,18.33 -2.48,19.6C-2.42,21.72 -2.04,23.16 -1.44,24.45C-0.88,25.76 0,26.76 0,26.76C0,26.76 0.98,27.7 2.28,28.34C3.56,28.96 5.01,29.33 7.13,29.39C8.4,29.44 8.74,29.46 12,29.46C15.26,29.46 15.6,29.44 16.87,29.39C18.99,29.33 20.44,28.96 21.72,28.34C23.02,27.7 23.89,26.76 23.89,26.76C23.89,26.76 24.89,25.76 25.53,24.45C26.13,23.16 26.5,21.72 26.57,19.6C26.62,18.33 26.64,18 26.64,14.73C26.64,11.47 26.62,11.13 26.57,9.86C26.5,7.76 26.13,6.29 25.53,5.02C24.89,3.7 23.89,2.7 23.89,2.7C23.89,2.7 23.02,1.76 21.72,1.12C20.44,0.5 18.99,0.14 16.87,0.07C15.6,0.02 15.26,0 12,0M12,5.84C8.6,5.84 5.84,8.6 5.84,12C5.84,15.4 8.6,18.16 12,18.16C15.4,18.16 18.16,15.4 18.16,12C18.16,8.6 15.4,5.84 12,5.84M12,16C9.79,16 8,14.21 8,12C8,9.79 9.79,8 12,8C14.21,8 16,9.79 16,12C16,14.21 14.21,16 12,16M19.85,5.61C19.85,6.41 19.2,7.06 18.4,7.06C17.6,7.06 16.95,6.41 16.95,5.61C16.95,4.81 17.6,4.16 18.4,4.16C19.2,4.16 19.85,4.81 19.85,5.61Z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-[#ff9800]">Envíenos un Mensaje</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#ff9800] text-white py-3 px-6 rounded-md font-medium hover:bg-[#e68a00] transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.0123456789!2d-74.80052720378369!3d4.302597962105834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTgnMDkuNCJOIDc0wrA0OCcwMS45Ilc!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hakuna Matata Clínica Veterinaria Mapa de Ubicación"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
