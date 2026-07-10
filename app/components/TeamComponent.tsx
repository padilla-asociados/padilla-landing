'use client';

export default function TeamComponent() {
  return (
    <section className="relative bg-[#0D2B4D] px-6 py-20 overflow-hidden">
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-12" data-reveal>
          <p className="text-[#6D8FB1] text-sm font-semibold tracking-widest uppercase mb-4">Nuestro Equipo</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Equipo Especializado</h2>
        </div>

        <div className="max-w-2xl mx-auto" data-reveal style={{ '--reveal-delay': '0.15s' } as React.CSSProperties}>
          <img
            src="/citlalli.png"
            alt="Citlalli Padilla"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}