'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NAV_LINKS } from '@/utils/constants';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md">
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

      {/* Logo and Navigation */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/hakuna.webp"
              alt="Hakuna Matata Clinica Veterinaria"
              width={60}
              height={60}
              priority
            />
          </Link>
          
          <Link 
            href="/cita" 
            className="inline-block px-6 py-3 rounded-full bg-[#8cb9a3] text-white hover:bg-[#7aa891] transition-colors"
          >
            Solicitar una Cita
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden container mx-auto px-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center p-2 rounded-md text-[#8cb9a3] hover:text-[#7aa891] transition-colors"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Open main menu</span>
          {/* Menu Icon */}
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className={`bg-[#8cb9a3] md:block ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-col md:flex-row justify-center md:justify-center space-y-2 md:space-y-0 md:space-x-6">
            {NAV_LINKS.main.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="block text-white hover:text-[#ff9800] transition-colors"
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

