"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Function to set dropdown refs
  const setDropdownRef = (key: string, el: HTMLDivElement | null) => {
    dropdownRefs.current[key] = el;
  };

  // Handle window resize to determine if we're on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown]) {
        const dropdownElement = dropdownRefs.current[activeDropdown];
        if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Close mobile menu and dropdowns when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close any open dropdowns when toggling the mobile menu
    setActiveDropdown(null);
  };

  // Check if a link is active (current page or parent section)
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#c5cad2] py-2 text-right px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div /> {/* Empty div for layout */}
          <div className="flex items-center">
            <span className="mr-2 text-sm hidden md:inline">¡Llámanos!</span>
            <a href="tel:+573113603168" className="font-semibold text-sm md:text-base">+57 311 3603168</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0 flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/hakuna-matata-logo.png"
                  alt="Hakuna Matata Clinica Veterinaria"
                  width={80}
                  height={80}
                  className="h-auto mr-3"
                />
                <div>
                  <h1 className="text-2xl font-bold text-[#ff9800]">Hakuna Matata</h1>
                  <p className="text-sm text-gray-600">Clínica Veterinaria</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Request Appointment Button */}
          <div>
            <a
              href="/cita"
              className="inline-block px-6 py-3 rounded-full bg-[#8cb9a3] text-white hover:bg-[#7aa08a] transition duration-300"
            >
              Solicitar una Cita
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden border-t border-gray-200">
        <div className="container mx-auto py-2 px-4">
          <button
            onClick={toggleMobileMenu}
            className="flex items-center justify-center p-2 rounded-md text-[#8cb9a3] hover:text-[#7aa08a] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#8cb9a3]"
            aria-expanded={mobileMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Abrir menú principal</span>
            {/* Hamburger icon */}
            <svg
              className={`h-6 w-6 ${mobileMenuOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* X icon */}
            <svg
              className={`h-6 w-6 ${mobileMenuOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`bg-[#8cb9a3] border-t border-b border-gray-200 ${isMobile && !mobileMenuOpen ? 'hidden' : 'block'}`}>
        <div className="container mx-auto">
          <ul className="flex flex-col md:flex-row justify-center md:justify-center space-y-2 md:space-y-0 md:space-x-12 py-4 md:py-3">
            {/* Main Pages */}
            <li>
              <Link
                href="/"
                className={`navbar-link block md:inline-block py-2 px-3 md:px-0 rounded-md text-white font-medium hover:text-gray-100 ${isActive('/') && pathname === '/' ? 'border-b-2 border-white md:bg-transparent' : ''}`}
              >
                INICIO
              </Link>
            </li>

            <li>
              <Link
                href="/acerca"
                className={`navbar-link block md:inline-block py-2 px-3 md:px-0 rounded-md text-white font-medium hover:text-gray-100 ${isActive('/acerca') ? 'border-b-2 border-white md:bg-transparent' : ''}`}
              >
                ACERCA
              </Link>
            </li>

            <li>
              <Link
                href="/servicios"
                className={`navbar-link block md:inline-block py-2 px-3 md:px-0 rounded-md text-white font-medium hover:text-gray-100 ${isActive('/servicios') ? 'border-b-2 border-white md:bg-transparent' : ''}`}
              >
                SERVICIOS
              </Link>
            </li>

            <li>
              <Link
                href="/recursos"
                className={`navbar-link block md:inline-block py-2 px-3 md:px-0 rounded-md text-white font-medium hover:text-gray-100 ${isActive('/recursos') ? 'border-b-2 border-white md:bg-transparent' : ''}`}
              >
                RECURSOS
              </Link>
            </li>

            <li>
              <Link
                href="/contacto"
                className={`navbar-link block md:inline-block py-2 px-3 md:px-0 rounded-md text-white font-medium hover:text-gray-100 ${isActive('/contacto') ? 'border-b-2 border-white md:bg-transparent' : ''}`}
              >
                CONTACTO
              </Link>
            </li>

            {/* About Dropdown */}
            <li className="dropdown relative group md:hidden">
              <div
                className={`navbar-link cursor-pointer flex items-center justify-between py-2 px-3 rounded-md ${activeDropdown === 'about' ? 'bg-gray-100' : ''}`}
                onClick={() => toggleDropdown('about')}
                ref={(el) => setDropdownRef('about', el)}
              >
                <span>Acerca de Nosotros</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className={`dropdown-menu ${isMobile ? 'relative bg-[#7aa08a] rounded-md mt-1 overflow-hidden' : 'absolute bg-white shadow-md z-10 min-w-[200px] mt-2'} ${activeDropdown === 'about' ? 'block' : 'hidden md:group-hover:block'}`}>
                <Link href="/nuestro-equipo" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/nuestro-equipo') ? 'bg-[#6b9079]' : ''}`}>Nuestro Equipo</Link>
                <Link href="/amigable-con-gatos" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/amigable-con-gatos') ? 'bg-[#6b9079]' : ''}`}>Amigable con Gatos</Link>
                <Link href="/sin-miedo" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/sin-miedo') ? 'bg-[#6b9079]' : ''}`}>Sin Miedo</Link>
                <Link href="/galeria-fotos" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/galeria-fotos') ? 'bg-[#6b9079]' : ''}`}>Galería de Fotos</Link>
              </div>
            </li>

            {/* Services Dropdown */}
            <li className="dropdown relative group md:hidden">
              <div
                className={`navbar-link cursor-pointer flex items-center justify-between py-2 px-3 rounded-md ${activeDropdown === 'services' ? 'bg-gray-100' : ''}`}
                onClick={() => toggleDropdown('services')}
                ref={(el) => setDropdownRef('services', el)}
              >
                <span>Nuestros Servicios</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className={`dropdown-menu ${isMobile ? 'relative bg-[#7aa08a] rounded-md mt-1 overflow-hidden' : 'absolute bg-white shadow-md z-10 min-w-[200px] mt-2'} ${activeDropdown === 'services' ? 'block' : 'hidden md:group-hover:block'}`}>
                <Link href="/bienestar" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/bienestar') ? 'bg-[#6b9079]' : ''}`}>Bienestar</Link>
                <Link href="/vacunas" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/vacunas') ? 'bg-[#6b9079]' : ''}`}>Vacunas</Link>
                <Link href="/cuidado-dental" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/cuidado-dental') ? 'bg-[#6b9079]' : ''}`}>Cuidado Dental</Link>
                <Link href="/cirugia" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/cirugia') ? 'bg-[#6b9079]' : ''}`}>Cirugía</Link>
                <Link href="/esterilizacion" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/esterilizacion') ? 'bg-[#6b9079]' : ''}`}>Esterilización</Link>
                <Link href="/terapia-laser" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/terapia-laser') ? 'bg-[#6b9079]' : ''}`}>Terapia Láser</Link>
                <Link href="/acupuntura" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/acupuntura') ? 'bg-[#6b9079]' : ''}`}>Acupuntura</Link>
                <Link href="/quiropractica" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/quiropractica') ? 'bg-[#6b9079]' : ''}`}>Quiropráctica</Link>
                <Link href="/peluqueria" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/peluqueria') ? 'bg-[#6b9079]' : ''}`}>Peluquería</Link>
              </div>
            </li>

            {/* Resources Dropdown */}
            <li className="dropdown relative group md:hidden">
              <div
                className={`navbar-link cursor-pointer flex items-center justify-between py-2 px-3 rounded-md ${activeDropdown === 'resources' ? 'bg-gray-100' : ''}`}
                onClick={() => toggleDropdown('resources')}
                ref={(el) => setDropdownRef('resources', el)}
              >
                <span>Recursos para Mascotas</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className={`dropdown-menu ${isMobile ? 'relative bg-[#7aa08a] rounded-md mt-1 overflow-hidden' : 'absolute bg-white shadow-md z-10 min-w-[200px] mt-2'} ${activeDropdown === 'resources' ? 'block' : 'hidden md:group-hover:block'}`}>
                <Link href="/solicitud-cita" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/solicitud-cita') ? 'bg-[#6b9079]' : ''}`}>Solicitud de Cita</Link>
                <Link href="/formulario-informacion" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/formulario-informacion') ? 'bg-[#6b9079]' : ''}`}>Formulario de Información</Link>
                <Link href="/enviar-registros" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/enviar-registros') ? 'bg-[#6b9079]' : ''}`}>Enviar Registros</Link>
                <Link href="/admin-hospital" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/admin-hospital') ? 'bg-[#6b9079]' : ''}`}>Admin Hospital</Link>
                <Link href="/recarga-receta" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/recarga-receta') ? 'bg-[#6b9079]' : ''}`}>Recarga de Receta</Link>
                <Link href="/comprar-online" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/comprar-online') ? 'bg-[#6b9079]' : ''}`}>Comprar Online</Link>
                <Link href="/registros-mascota" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/registros-mascota') ? 'bg-[#6b9079]' : ''}`}>Registros de Mascota</Link>
                <Link href="/empleo" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/empleo') ? 'bg-[#6b9079]' : ''}`}>Empleo</Link>
                <Link href="/preparaciones-desastres" className={`block px-4 py-2 text-white hover:bg-[#6b9079] ${isActive('/preparaciones-desastres') ? 'bg-[#6b9079]' : ''}`}>Preparaciones para Desastres</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
