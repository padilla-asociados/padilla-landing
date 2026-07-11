'use client';

export default function HeroComponent() {
  return (
    <section id="inicio" className="relative min-h-screen w-full flex items-center justify-center bg-[#0D2B4D] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-65"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(13,43,77,0.12) 0%, rgba(13,43,77,0.3) 65%, rgba(13,43,77,0.42) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <img
          src="/logo.png"
          alt="Padilla Chávez & Asociados"
          className="logo-highlight w-[min(78vw,600px)] h-auto mx-auto mb-8 animate-fadeIn"
        />

        <p
          className="animate-fadeIn text-white text-xl md:text-2xl font-serif italic max-w-xl mx-auto"
          style={{ animationDelay: '0.5s' }}
        >
          &quot;Estructura organizacional que impulsa el futuro.&quot;
        </p>
      </div>
    </section>
  );
}