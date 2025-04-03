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
              className="btn-primary"
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
            className="flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ff9800]"
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
      <nav className={`bg-white border-t border-b border-gray-200 ${isMobile && !mobileMenuOpen ? 'hidden' : 'block'}`}>
        <div className="container mx-auto">
          <ul className="flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-12 py-4 md:py-3">
            {/* Main Pages */}
            <li>
              <Link
                href="/acerca"
                className={`navbar-link block md:inline-block py-2 px-3 md:px-0 rounded-md ${isActive('/acerca') ? 'text-[#ff9800] bg-gray-100 md:bg-transparent' : ''}`}
              >
                ACERCA
              </Link>
            </li>

            <li>
              <Link
                href="/servicios"
                className={`navbar-link block md:inline-block py-2 px-3 md:px-0 rounded-md ${isActive('/servicios') ? 'text-[#ff9800] bg-gray-100 md:bg-transparent' : ''}`}
              >
                SERVICIOS
              </Link>
            </li>

            <li>
              <Link
                href="/recursos"
                className={`navbar-link block md:inline-block py-2 px-3 md:px-0 rounded-md ${isActive('/recursos') ? 'text-[#ff9800] bg-gray-100 md:bg-transparent' : ''}`}
              >
                RECURSOS
              </Link>
            </li>

            <li>
              <Link
                href="/contacto"
                className={`navbar-link block md:inline-block py-2 px-3 md:px-0 rounded-md ${isActive('/contacto') ? 'text-[#ff9800] bg-gray-100 md:bg-transparent' : ''}`}
              >
                CONTACTO
              </Link>
            </li>

            {/* About Dropdown */}
            <li className="dropdown relative group md:hidden">
              <div
                className={`navbar-link cursor-pointer flex items-center justify-between py-2 px-3 rounded-md ${activeDropdown === 'about' ? 'bg-gray-100' : ''}`}
                onClick={() => toggleDropdown('about')}
                ref={(el) => dropdownRefs.current['about'] = el}
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
              <div className={`dropdown-menu ${isMobile ? 'relative bg-gray-50 rounded-md mt-1 overflow-hidden' : 'absolute bg-white shadow-md z-10 min-w-[200px] mt-2'} ${activeDropdown === 'about' ? 'block' : 'hidden md:group-hover:block'}`}>
                <Link href="/nuestro-equipo" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/nuestro-equipo') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Nuestro Equipo</Link>
                <Link href="/amigable-con-gatos" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/amigable-con-gatos') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Amigable con Gatos</Link>
                <Link href="/sin-miedo" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/sin-miedo') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Sin Miedo</Link>
                <Link href="/galeria-fotos" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/galeria-fotos') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Galería de Fotos</Link>
              </div>
            </li>

            {/* Services Dropdown */}
            <li className="dropdown relative group md:hidden">
              <div
                className={`navbar-link cursor-pointer flex items-center justify-between py-2 px-3 rounded-md ${activeDropdown === 'services' ? 'bg-gray-100' : ''}`}
                onClick={() => toggleDropdown('services')}
                ref={(el) => dropdownRefs.current['services'] = el}
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
              <div className={`dropdown-menu ${isMobile ? 'relative bg-gray-50 rounded-md mt-1 overflow-hidden' : 'absolute bg-white shadow-md z-10 min-w-[200px] mt-2'} ${activeDropdown === 'services' ? 'block' : 'hidden md:group-hover:block'}`}>
                <Link href="/bienestar" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/bienestar') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Bienestar</Link>
                <Link href="/vacunas" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/vacunas') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Vacunas</Link>
                <Link href="/cuidado-dental" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/cuidado-dental') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Cuidado Dental</Link>
                <Link href="/cirugia" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/cirugia') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Cirugía</Link>
                <Link href="/esterilizacion" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/esterilizacion') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Esterilización</Link>
                <Link href="/terapia-laser" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/terapia-laser') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Terapia Láser</Link>
                <Link href="/acupuntura" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/acupuntura') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Acupuntura</Link>
                <Link href="/quiropractica" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/quiropractica') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Quiropráctica</Link>
                <Link href="/peluqueria" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/peluqueria') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Peluquería</Link>
              </div>
            </li>

            {/* Resources Dropdown */}
            <li className="dropdown relative group md:hidden">
              <div
                className={`navbar-link cursor-pointer flex items-center justify-between py-2 px-3 rounded-md ${activeDropdown === 'resources' ? 'bg-gray-100' : ''}`}
                onClick={() => toggleDropdown('resources')}
                ref={(el) => dropdownRefs.current['resources'] = el}
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
              <div className={`dropdown-menu ${isMobile ? 'relative bg-gray-50 rounded-md mt-1 overflow-hidden' : 'absolute bg-white shadow-md z-10 min-w-[200px] mt-2'} ${activeDropdown === 'resources' ? 'block' : 'hidden md:group-hover:block'}`}>
                <Link href="/solicitud-cita" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/solicitud-cita') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Solicitud de Cita</Link>
                <Link href="/formulario-informacion" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/formulario-informacion') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Formulario de Información</Link>
                <Link href="/enviar-registros" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/enviar-registros') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Enviar Registros</Link>
                <Link href="/admin-hospital" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/admin-hospital') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Admin Hospital</Link>
                <Link href="/recarga-receta" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/recarga-receta') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Recarga de Receta</Link>
                <Link href="/comprar-online" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/comprar-online') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Comprar Online</Link>
                <Link href="/registros-mascota" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/registros-mascota') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Registros de Mascota</Link>
                <Link href="/empleo" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/empleo') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Empleo</Link>
                <Link href="/preparaciones-desastres" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/preparaciones-desastres') ? 'text-[#ff9800] bg-gray-100' : ''}`}>Preparaciones para Desastres</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
