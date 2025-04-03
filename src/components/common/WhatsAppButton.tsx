"use client";

import { useState, useEffect } from 'react';

type WhatsAppButtonProps = {
  phoneNumber?: string;
  delayMs?: number;
};

export default function WhatsAppButton({ 
  phoneNumber = "573113603168",
  delayMs = 1500 
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className={`
        fixed bottom-6 right-6 z-50 
        bg-green-500 text-white p-3 rounded-full shadow-lg 
        hover:bg-green-600 
        transition-all duration-300 
        flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
      `}
      aria-label="Contactar por WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="30" 
        height="30" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.84L2.05 22l4.16-1.84C7.81 21.34 9.83 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.85 0-3.57-.59-4.98-1.59l-.35-.26-3.67 1.62 1.62-3.67-.26-.35C3.59 15.57 3 13.85 3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9z"/>
      </svg>
    </a>
  );
}


