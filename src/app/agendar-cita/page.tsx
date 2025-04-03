import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function ScheduleAppointmentPage() {
  return (
    <PageLayout title="Agendar Cita">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-[#ff9800]">Agenda tu Cita</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Nombre de la Mascota</label>
              <input 
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Nombre de tu mascota"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Tipo de Servicio</label>
              <select className="w-full p-2 border rounded-md">
                <option>Consulta General</option>
                <option>Vacunación</option>
                <option>Control Rutinario</option>
                <option>Emergencia</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Fecha Preferida</label>
              <input 
                type="date"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#ff9800] text-white py-2 px-4 rounded-md hover:bg-[#e68a00] transition-colors"
            >
              Agendar Cita
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}