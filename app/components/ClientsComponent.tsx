'use client';

export default function ClientsComponent() {
  const clients = [
    { name: 'Urcont', logo: '/urcont.png' },
    { name: 'Wellnessphere', logo: '/wellnessphere.png' },
    { name: 'Mobilario', logo: '/mobilario.png' },
    { name: 'JC Consultores', logo: '/jcconsultores.png' },
    { name: 'Autotransportes', logo: '/autotransportes.png' },
    { name: 'LUA', logo: '/lua.png' },
  ];

  return (
    <section className="relative bg-[#f6f3ec] px-6 py-20 overflow-hidden">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#2c5f8a] text-sm tracking-widest uppercase mb-4">Empresas que confían en nosotros</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0b2440] mb-8">Nuestros Clientes</h2>
          <p className="text-lg text-[#3d4a56] max-w-2xl mx-auto leading-relaxed">
            Hemos acompañado a empresas de diversos sectores en su estructuración, transformación y crecimiento. Desde startups hasta organizaciones consolidadas, cada cliente representa nuestro compromiso con la excelencia y el desarrollo sostenible.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 animate-[fadeUp_0.8s_ease_forwards]">
          {clients.map((client) => (
            <div key={client.name} className="rounded-lg p-6 flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full h-auto max-h-20 object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}