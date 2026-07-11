'use client';

import Link from 'next/link';

export default function AboutComponent() {
  return (
    <section id="quienes-somos" className="relative bg-[#F2F4F7] px-6 py-20 overflow-hidden">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="mb-8" data-reveal>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0D2B4D] mb-6">¿Quiénes Somos?</h2>
        </div>
        
        <p className="text-lg text-[#4A4A4A] max-w-2xl mb-12 leading-relaxed">
          En Padilla Chávez &amp; Asociados somos un despacho especializado en la estructuración integral de empresas. Acompañamos a organizaciones desde su constitución y durante su crecimiento, integrando servicios legales, contables, estructura organizacional y capital humano para construir modelos empresariales sólidos, ordenados y sostenibles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/mision" className="bg-[#0D2B4D] rounded-lg p-6 text-white hover:shadow-lg transition block">
            <h3 className="font-semibold mb-2">Misión</h3>
            <p className="text-sm text-[#F2F4F7]/70 mb-4">Acompañar a empresas en su estructuración integral</p>
            <p className="text-xs text-[#6D8FB1]">Toca para más</p>
          </Link>
          <Link href="/vision" className="bg-[#0D2B4D] rounded-lg p-6 text-white hover:shadow-lg transition block">
            <h3 className="font-semibold mb-2">Visión</h3>
            <p className="text-sm text-[#F2F4F7]/70 mb-4">Ser un despacho referente en transformación organizacional</p>
            <p className="text-xs text-[#6D8FB1]">Toca para más</p>
          </Link>
          <Link href="/valores" className="bg-[#0D2B4D] rounded-lg p-6 text-white hover:shadow-lg transition block">
            <h3 className="font-semibold mb-2">Valores</h3>
            <p className="text-sm text-[#F2F4F7]/70 mb-4">Orden, ética y acompañamiento cercano</p>
            <p className="text-xs text-[#6D8FB1]">Toca para más</p>
          </Link>
        </div>
      </div>
    </section>
  );
}