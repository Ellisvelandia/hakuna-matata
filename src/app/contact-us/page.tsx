import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <div>
      {/* Page Header */}
      <div className="relative h-64 bg-gray-200">
        <Image
          src="https://ext.same-assets.com/965708439/608452770.jpeg"
          alt="Contact Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl font-semibold text-white">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl mb-6">Get In Touch</h2>
            <p className="mb-8 text-gray-700">
              Have a question or need more information? Feel free to contact us using any of the methods below, or fill out the contact form and we'll get back to you as soon as possible.
            </p>

            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#5abbb0] flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-gray-700">
                  Cl. 29 #7-18<br />
                  Girardot, Cundinamarca
                </p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#5abbb0] flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-700">
                  <a href="tel:+573113603168" className="hover:text-primary">+57 311 3603168</a>
                </p>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#5abbb0] flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Hours</h3>
                <div className="text-gray-700">
                  <p>Abierto las 24 horas</p>
                </div>
              </div>
            </div>

            <Link href="/appointment-request" className="btn-primary">
              Request an Appointment
            </Link>
          </div>

          {/* Map */}
          <div>
            <div className="rounded-lg overflow-hidden h-96 w-full mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.0123456789!2d-74.80052720378369!3d4.302597962105834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTgnMDkuNCJOIDc0wrA0OCcwMS45Ilc!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hakuna Matata Clinica Veterinaria Location Map"
              />
            </div>

            <h3 className="text-2xl mb-4">Get Directions</h3>
            <p className="text-gray-700 mb-6">
              Estamos convenientemente ubicados en la Cl. 29 #7-18, Girardot, Cundinamarca.
            </p>

            <a
              href="http://maps.google.com/?q=Hakuna Matata Clinica Veterinaria, Cl. 29 #7-18, Girardot, Cundinamarca, Colombia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
