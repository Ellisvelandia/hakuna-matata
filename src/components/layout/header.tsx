'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/utils/constants';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full shadow-md relative z-50">
      {/* Top Bar */}
      <div className="bg-[#8cb9a3] py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div /> {/* Spacer */}
          <div className="flex items-center">
            <span className="mr-2 text-sm hidden md:inline text-white">
              ¡Llámanos!
            </span>
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
      <div className="bg-white py-4 relative">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center relative z-50">
            <Image
              src="/images/hakuna.webp"
              alt="Hakuna Matata Clinica Veterinaria"
              width={60}
              height={60}
              priority
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/cita" 
              className="relative z-50 inline-block px-6 py-3 rounded-full bg-[#8cb9a3] text-white hover:bg-[#7aa891] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Solicitar una Cita
            </Link>
            
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-[#8cb9a3] text-white hover:bg-[#7aa891] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8cb9a3] focus:ring-offset-2"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                <span 
                  className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'
                  }`}
                />
                <span 
                  className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-500 md:hidden z-[60] ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-y-0 right-0 w-[300px] bg-white shadow-2xl transform transition-all duration-500 ease-in-out md:hidden z-[70] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col pt-4">
          {/* Menu Header */}
          <div className="px-6 mb-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium text-gray-800">Menú</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                aria-label="Cerrar menú"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* CTA Button */}
            <Link
              href="/cita"
              className="block w-full py-2.5 px-4 text-center rounded-lg bg-[#8cb9a3] text-white hover:bg-[#7aa891] transition-all duration-300 mb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solicitar una Cita
            </Link>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-2 px-4">
              {NAV_LINKS.main.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="block px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-[#8cb9a3]">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-8">
            {NAV_LINKS.main.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="block text-white hover:text-[#ff9800] transition-all duration-300 hover:scale-105 transform"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

