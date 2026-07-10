'use client';

export default function HeroComponent() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#0D2B4D] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(13,43,77,0.55) 0%, rgba(13,43,77,0.88) 65%, rgba(13,43,77,0.96) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 text-center">
        <div className="logo-halo">
          <img
            src="/logo.png"
            alt="Padilla Chávez & Asociados"
            className="logo-highlight w-[min(78vw,600px)] h-auto mx-auto mb-8 animate-fadeIn"
          />
        </div>
      </div>
    </section>
  );
}