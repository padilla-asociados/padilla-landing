'use client';

import { useInView } from './useInView';

function ClientLogo({ logo, name }: { logo: string; name: string }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`rounded-lg p-6 flex items-center justify-center transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <img
        src={logo}
        alt={name}
        className="max-w-full h-auto max-h-20 object-contain rounded-lg"
      />
    </div>
  );
}

export default function ClientsComponent() {
  const [ref, isInView] = useInView();

  const clients = [
    { name: 'Urcont', logo: '/urcont.png' },
    { name: 'Wellnessphere', logo: '/wellnessphere.png' },
    { name: 'Mobilario', logo: '/mobilario.png' },
    { name: 'JC Consultores', logo: '/jcconsultores.png' },
    { name: 'Autotransportes', logo: '/autotransportes.png' },
    { name: 'LUA', logo: '/lua.png' },
  ];

  return (
    <section id="clientes" className="relative bg-[#f6f3ec] px-6 py-20 overflow-hidden">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div ref={ref} className="text-center mb-16">
          <p className={`text-[#2c5f8a] text-sm tracking-widest uppercase mb-4 transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Empresas que confían en nosotros</p>
          <h2 className={`text-4xl md:text-5xl font-serif text-[#0b2440] mb-8 transition-all duration-600 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Nuestros Clientes</h2>
          <p className={`text-lg text-[#3d4a56] max-w-2xl mx-auto leading-relaxed transition-all duration-600 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Hemos acompañado a empresas de diversos sectores en su estructura, transformación y crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <ClientLogo key={client.name} logo={client.logo} name={client.name} />
          ))}
        </div>
      </div>
    </section>
  );
}