import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/utils/constants";
import {
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Social Media Links */}
      <div className="border-t border-gray-200 py-4 bg-[#8cb9a3]/80">
        <div className="container mx-auto flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/HakunaMatataVet"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/hakuna_matata_veterinaria"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0069] via-[#E4405F] to-[#FE5A3E] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.youtube.com/HakunaMatataVet"
            aria-label="YouTube"
            className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
          >
            <Youtube size={24} />
          </a>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className="bg-[#8cb9a3]/80 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: Contact Info */}
            <div className="space-y-4">
              {/* Logo */}
              <div className="flex items-center mb-4">
                <Image
                  src="/images/hakuna.webp"
                  alt="Hakuna Matata Clinica Veterinaria"
                  width={70}
                  height={70}
                  className="h-auto mr-3"
                />
                <div>
                  <h2 className="text-xl font-bold text-white">
                    HAKUNA MATATA
                  </h2>
                  <p className="text-sm text-white/90">CLÍNICA VETERINARIA</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="flex items-center">
                <span className="inline-block mr-2 text-white">
                  <MapPin size={20} />
                </span>
                <a
                  href="https://maps.google.com/?q=Cl. 29 #7-18, Girardot, Cundinamarca, Colombia"
                  className="hover:text-white/80 transition-colors"
                >
                  Cl. 29 #7-18
                  <br />
                  Girardot, Cundinamarca
                </a>
              </div>

              <div className="flex items-center">
                <span className="inline-block mr-2 text-white">
                  <Phone size={20} />
                </span>
                <a href="tel:+573113603168" className="hover:text-white/80 transition-colors">
                  +57 311 3603168
                </a>
              </div>

              <div className="flex items-start">
                <span className="inline-block mr-2 mt-1 text-white">
                  <Clock size={20} />
                </span>
                <div>
                  <div>Abierto las 24 horas</div>
                </div>
              </div>
            </div>

            {/* Column 2: Map */}
            <div>
              <div className="h-64 w-full bg-white rounded-lg shadow-md relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.0123456789!2d-74.80052720378369!3d4.302597962105834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTgnMDkuNCJOIDc0wrA0OCcwMS45Ilc!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hakuna Matata Clinica Veterinaria Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#8cb9a3] py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <div className="mb-2">
            <p className="text-white">
              © {new Date().getFullYear()} Hakuna Matata Clínica Veterinaria -
              Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
