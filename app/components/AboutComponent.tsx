'use client';

import Link from 'next/link';
import { useInView } from './useInView';

function AboutCard({ href, title, desc, idx }) {
  const [ref, isInView] = useInView();

  return (
    <Link 
      ref={ref}
      href={href} 
      className={`bg-[#0b2440] rounded-lg p-6 text-white hover:shadow-lg transition-all duration-600 block ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">{desc}</p>
      <p className="text-xs text-[#7fb2db]">Toca para más</p>
    </Link>
  );
}

export default function AboutComponent() {
  const [ref, isInView] = useInView();

  const cards = [
    { href: '/mision', title: 'Misión', desc: 'Acompañar a empresas en su estructuración integral' },
    { href: '/vision', title: 'Visión', desc: 'Ser un despacho referente en transformación organizacional' },
    { href: '/valores', title: 'Valores', desc: 'Orden, ética y acompañamiento cercano' },
  ];

  return (
    <section className="relative bg-[#f6f3ec] px-6 py-20 overflow-hidden">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div ref={ref} className="mb-8">
          <p className={`text-[#2c5f8a] text-sm tracking-widest uppercase mb-4 transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Despacho de estructuración corporativa</p>
          <h2 className={`text-4xl md:text-5xl font-serif text-[#0b2440] mb-6 transition-all duration-600 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>¿Quiénes Somos?</h2>
        </div>
        
        <div className="mb-12">
          <p ref={ref} className={`text-lg text-[#3d4a56] max-w-2xl mb-12 leading-relaxed transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            En Padilla Chávez &amp; Asociados somos un despacho especializado en la estructuración integral de empresas. Acompañamos a organizaciones desde su constitución y durante su crecimiento, integrando servicios legales, contables, estructura organizacional y capital humano para construir modelos empresariales sólidos, ordenados y sostenibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <AboutCard key={card.href} {...card} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}