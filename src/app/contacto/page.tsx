import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { CONTACT_INFO } from "@/utils/constants";
import Image from "next/image";

export default function ContactPage() {
  return (
    <PageLayout title="Contacto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column - Contact Form with Image */}
          <div className="flex-1">
            <div className="mb-8">
              <div className="rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Nuestra sala de espera"
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h2 className="text-3xl font-semibold mb-4">¿NECESITAS AYUDA?</h2>
              <h3 className="text-2xl mb-4">Contáctanos</h3>
              <p className="text-gray-600 mb-6">
                Ya sea que seas nuevo con nosotros o un cliente actual con
                preguntas, nos encantaría saber de ti. Puedes contactarnos
                llamando, visitándonos o completando nuestro formulario de
                contacto.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#96B4B5]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#96B4B5]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#96B4B5]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#96B4B5] text-white px-6 py-2 rounded hover:bg-[#7A9899] transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Right Column - Contact Information with Image */}
          <div className="flex-1">
            <div className="rounded-lg overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Nuestro equipo veterinario"
                width={600}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Hakuna Matata Clínica Veterinaria
              </h3>
              <p className="text-gray-600">
                {CONTACT_INFO.address.street}
                <br />
                {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}
              </p>
              <p className="mt-4">
                <strong>Teléfono:</strong>{" "}
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-[#96B4B5] hover:underline"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </p>
              <p>
                <strong>Correo:</strong>{" "}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-[#96B4B5] hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Horario de Atención:
              </h3>
              <p className="text-gray-600">{CONTACT_INFO.hours}</p>
            </div>

            <div className="rounded-lg overflow-hidden my-8">
              <Image
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Paciente feliz"
                width={600}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Síguenos en:</h3>
              <div className="flex space-x-4">
                <a
                  href={CONTACT_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#96B4B5] hover:text-[#7A9899]"
                >
                  Facebook
                </a>
                <a
                  href={CONTACT_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#96B4B5] hover:text-[#7A9899]"
                >
                  Instagram
                </a>
                <a
                  href={CONTACT_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#96B4B5] hover:text-[#7A9899]"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Métodos de Pago:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Efectivo</li>
                <li>Tarjetas de crédito y débito</li>
                <li>Transferencias bancarias</li>
                <li>Nequi</li>
                <li>Daviplata</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
