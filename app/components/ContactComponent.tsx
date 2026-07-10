'use client';

export default function ContactComponent() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-20 bg-[#0b2440] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(9,26,48,0.88) 0%, rgba(11,36,64,0.72) 45%, rgba(11,36,64,0.85) 100%), url('/imagenes/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom'
      }}
    >
      <div className="max-w-2xl mx-auto text-center relative z-10" data-reveal>
        <img
          src="/imagenes/logo.png"
          alt="Padilla Chávez & Asociados"
          className="w-[min(55vw,420px)] mx-auto mb-8"
        />

        <p className="text-white text-2xl md:text-3xl font-serif italic mb-8">
          &quot;Estructura organizacional que impulsa el futuro.&quot;
        </p>

        <p className="text-[#7fb2db] text-sm tracking-widest uppercase mb-8">
          Contáctanos para más información
        </p>

        <div
          className="flex flex-col md:flex-row justify-center items-center gap-12"
          data-reveal
          style={{ '--reveal-delay': '0.2s' } as React.CSSProperties}
        >
          <div className="text-center">
            <p className="text-[#e4eaf0] text-lg font-semibold">33 1954 4459</p>
            <p className="text-[#e4eaf0] text-sm">81 2642 0206</p>
          </div>
          <div className="text-center">
            <p className="text-[#e4eaf0] text-sm">Col. Cañadas de San Lorenzo</p>
            <p className="text-[#e4eaf0] text-sm">Zapopan, Jalisco, México</p>
          </div>
        </div>
      </div>
    </section>
  );
}