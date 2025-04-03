"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

type DropdownRef = {
  [key: string]: HTMLDivElement | null;
};

type NavLink = {
  href: string;
  label: string;
};

const mainNavLinks: NavLink[] = [
  { href: '/', label: 'INICIO' },
  { href: '/acerca', label: 'ACERCA' },
  { href: '/servicios', label: 'SERVICIOS' },
  { href: '/recursos', label: 'RECURSOS' },
];

const serviceLinks: NavLink[] = [
  { href: '/bienestar', label: 'Bienestar' },
  { href: '/vacunas', label: 'Vacunas' },
  { href: '/cuidado-dental', label: 'Cuidado Dental' },
  { href: '/cirugia', label: 'Cirugía' },
  { href: '/esterilizacion', label: 'Esterilización' },
  { href: '/terapia-laser', label: 'Terapia Láser' },
  { href: '/acupuntura', label: 'Acupuntura' },
  { href: '/quiropractica', label: 'Quiropráctica' },
  { href: '/peluqueria', label: 'Peluquería' },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const dropdownRefs = useRef<DropdownRef>({});

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <header className="w-full shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#8cb9a3] py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div /> {/* Spacer */}
          <div className="flex items-center">
            <span className="mr-2 text-sm hidden md:inline text-white">¡Llámanos!</span>
            <a 
              href="tel:+573113603168" 
              className="font-semibold text-sm md:text-base text-white hover:text-[#ff9800] transition-colors"
              aria-label="Llamar al +57 311 3603168"
            >
              +57 311 3603168
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <Link href="/" className="mb-4 md:mb-0 hover:opacity-90 transition-opacity">
            <div className="flex items-center">
              <Image
                src="/images/hakuna.webp"
                alt="Hakuna Matata Clinica Veterinaria"
                width={80}
                height={80}
                className="h-auto mr-3"
                priority
              />
              <div>
                <h1 className="text-2xl font-bold text-[#ff9800]">Hakuna Matata</h1>
                <p className="text-sm text-gray-600">Clínica Veterinaria</p>
              </div>
            </div>
          </Link>

          {/* Appointment Button */}
          <Link
            href="/cita"
            className="inline-block px-6 py-3 rounded-full bg-[#8cb9a3] text-white 
              hover:bg-[#7aa08a] transition-all duration-300 transform hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-[#8cb9a3] focus:ring-offset-2"
          >
            Solicitar una Cita
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden border-t border-gray-200">
        <div className="container mx-auto py-2 px-4">
          <button
            onClick={toggleMobileMenu}
            className="flex items-center justify-center p-2 rounded-md text-[#8cb9a3] 
              hover:text-[#7aa08a] hover:bg-gray-100 
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#8cb9a3]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-[#8cb9a3] border-t border-b border-gray-200 
        ${isMobile && !mobileMenuOpen ? 'hidden' : 'block'}`}>
        <div className="container mx-auto">
          <ul className="flex flex-col md:flex-row justify-center md:justify-center 
            space-y-2 md:space-y-0 md:space-x-12 py-4 md:py-3">
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`navbar-link block md:inline-block py-2 px-3 md:px-0 
                    rounded-md text-white font-medium hover:text-gray-100 
                    transition-colors duration-200
                    ${isActive(link.href) ? 'border-b-2 border-white md:bg-transparent' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

