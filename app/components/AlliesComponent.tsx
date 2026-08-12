'use client';

import { useInView } from './useInView';

function AllyCard({ image, name }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
}

export default function AlliesComponent() {
  const [ref, isInView] = useInView();

  const allies = [
    { name: 'Laura', image: '/laura.png' },
    { name: 'Jorge', image: '/jorge.png' },
    { name: 'Johana', image: '/Johana.png' },
    { name: 'Julio', image: '/Julio.png' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0b2440] to-[#0b2440] px-6 py-20 overflow-hidden">
      <div className="max-w-[1180px] mx-auto relative z-10">
        <div ref={ref} className="text-center mb-12">
          <p className={`text-[#7fb2db] text-sm tracking-widest uppercase mb-4 transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Nuestros Aliados</p>
          <h2 className={`text-4xl md:text-5xl font-serif text-white transition-all duration-600 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Aliados Estratégicos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allies.map((ally) => (
            <AllyCard key={ally.name} image={ally.image} name={ally.name} />
          ))}
        </div>
      </div>
    </section>
  );
}