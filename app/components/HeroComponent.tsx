'use client';

export default function HeroComponent() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#0b2440] overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <img 
          src="/imagenes/hero-bg.jpg" 
          alt="background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 text-center">
        <img 
          src="/imagenes/logo.png" 
          alt="Padilla Chávez & Asociados" 
          className="w-[min(70vw,540px)] h-auto mx-auto mb-8 animate-fadeIn"
        />
      </div>
    </section>
  );
}