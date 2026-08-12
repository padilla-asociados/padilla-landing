'use client';

import { useState } from 'react';

const SECTIONS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'quienes-somos', label: 'Quiénes Somos' },
  { id: 'equipo', label: 'Nuestro Equipo' },
  { id: 'aliados', label: 'Aliados Estratégicos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'clientes', label: 'Nuestros Clientes' },
  { id: 'contacto', label: 'Contacto' },
];

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  function handleNavigate(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        className="fixed top-6 left-6 z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full bg-[#0D2B4D] shadow-lg hover:bg-[#2F5B7C] transition-colors"
      >
        <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 z-40 h-full w-80 max-w-[85vw] bg-[#F2F4F7] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-8 pt-28 pb-8 bg-white border-b border-black/10">
          <img src="/logo.png" alt="Padilla Chávez & Asociados" className="h-24 w-auto object-contain" />
        </div>
        <nav className="py-4 flex-1 overflow-y-auto">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNavigate(s.id)}
              className="w-full text-left px-8 py-4 text-[#4A4A4A] text-base font-semibold tracking-wide hover:bg-[#0D2B4D]/5 hover:text-[#2F5B7C] transition-colors"
            >
              {s.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
