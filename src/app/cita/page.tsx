"use client";

import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { isMobile, isTablet } from '@/utils/responsive';

export default function CitaPage() {
  const [iframeHeight, setIframeHeight] = useState(600); // Default desktop height

  useEffect(() => {
    // Update height after component mounts
    const updateHeight = () => {
      const width = window.innerWidth;
      if (isMobile(width)) {
        setIframeHeight(700);
      } else if (isTablet(width)) {
        setIframeHeight(650);
      } else {
        setIframeHeight(600);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <PageLayout title="Agendar Cita">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-[#8cb9a3]">
          Agendar Cita
        </h2>
        
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
            Seleccione el día y hora que prefiera para su cita. Nuestro sistema de reservas le guiará durante el proceso.
          </p>
          
          <div className="w-full -mx-4 sm:mx-0 overflow-hidden">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3yTWm3ydA5Dm-6SPcJw-hlwsMZ_RDg4Hf-jJuu1TWZ-xnTDz_BYTSQ5pmMIfju8A2-AtdGAzwD?gv=true" 
              className="w-full border-0 rounded-lg"
              style={{ 
                height: `${iframeHeight}px`,
                minWidth: '320px',
                maxWidth: '100%'
              }}
              frameBorder="0"
            />
          </div>

          <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600">
            <p className="font-medium">Importante:</p>
            <ul className="list-disc ml-4 mt-2 space-y-1 sm:space-y-2">
              <li>Recibirá un correo de confirmación una vez agendada la cita</li>
              <li>Puede cancelar o reprogramar su cita a través del enlace en el correo de confirmación</li>
              <li>Por favor llegue 10 minutos antes de su hora programada</li>
            </ul>
          </div>

          <div className="mt-4 text-center text-sm text-gray-500">
            Si el calendario no carga, por favor recargue la página
          </div>
        </div>
      </div>
    </PageLayout>
  );
}






