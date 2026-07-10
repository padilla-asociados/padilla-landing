'use client';

export default function AlliesComponent() {
  return (
    <section className="relative bg-gradient-to-b from-[#0b2440] to-[#0b2440] px-6 py-20 overflow-hidden">
      <div className="max-w-[1180px] mx-auto relative z-10">
        <div className="text-center mb-12" data-reveal>
          <p className="text-[#7fb2db] text-sm tracking-widest uppercase mb-4">Nuestros Aliados</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Aliados Estratégicos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-reveal style={{ '--reveal-delay': '0.1s' } as React.CSSProperties}>
            <img
              src="/imagenes/laura.png"
              alt="Laura Alvarez"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div data-reveal style={{ '--reveal-delay': '0.25s' } as React.CSSProperties}>
            <img
              src="/imagenes/jorge.png"
              alt="Jorge Ruiz"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
