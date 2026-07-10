'use client';

import Link from 'next/link';

export default function AboutComponent() {
  return (
    <section className="relative bg-[#f6f3ec] px-6 py-20 overflow-hidden">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="mb-8" data-reveal>
          <p className="text-[#2c5f8a] text-sm tracking-widest uppercase mb-4">Despacho de estructuración corporativa</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0b2440] mb-6">¿Quiénes Somos?</h2>
        </div>
        
        <p className="text-lg text-[#3d4a56] max-w-2xl mb-12 leading-relaxed">
          En Padilla Chávez &amp; Asociados somos un despacho especializado en la estructuración integral de empresas. Acompañamos a organizaciones desde su constitución y durante su crecimiento, integrando servicios legales, contables, estructura organizacional y capital humano para construir modelos empresariales sólidos, ordenados y sostenibles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/mision" className="bg-[#0b2440] rounded-lg p-6 text-white hover:shadow-lg transition block">
            <h3 className="font-semibold mb-2">Misión</h3>
            <p className="text-sm text-gray-300">Acompañar a empresas en su estructuración integral</p>
          </Link>
          <Link href="/vision" className="bg-[#0b2440] rounded-lg p-6 text-white hover:shadow-lg transition block">
            <h3 className="font-semibold mb-2">Visión</h3>
            <p className="text-sm text-gray-300">Ser un despacho referente en transformación organizacional</p>
          </Link>
          <Link href="/valores" className="bg-[#0b2440] rounded-lg p-6 text-white hover:shadow-lg transition block">
            <h3 className="font-semibold mb-2">Valores</h3>
            <p className="text-sm text-gray-300">Orden, ética y acompañamiento cercano</p>
          </Link>
        </div>
      </div>
    </section>
  );
}