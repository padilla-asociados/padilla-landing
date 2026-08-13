'use client';

import { useInView } from './useInView';

function TeamMember({ image, name }) {
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

export default function TeamComponent() {
  const [ref, isInView] = useInView();

  const team = [
    { name: 'Citlalli', image: '/citlalli.png' },
    { name: 'Johana', image: '/Johana.png' },
    { name: 'Julio', image: '/Julio.png' },
  ];

  return (
    <section id="equipo" className="relative bg-[#0b2440] px-6 py-20 overflow-hidden">
      <div className="max-w-[1180px] mx-auto relative z-10">
        <div ref={ref} className="text-center mb-12">
          <p className={`text-[#7fb2db] text-sm tracking-widest uppercase mb-4 transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Nuestro Equipo</p>
          <h2 className={`text-4xl md:text-5xl font-serif text-white transition-all duration-600 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Equipo Especializado</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamMember key={member.name} image={member.image} name={member.name} />
          ))}
        </div>
      </div>
    </section>
  );
}