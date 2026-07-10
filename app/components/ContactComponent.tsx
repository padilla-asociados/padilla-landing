'use client';

export default function ContactComponent() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-20 bg-[#0D2B4D] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(13,43,77,0.92) 0%, rgba(13,43,77,0.86) 45%, rgba(13,43,77,0.94) 100%), url('/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom'
      }}
    >
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="logo-halo">
          <img
            src="/logo.png"
            alt="Padilla Chávez & Asociados"
            className="logo-highlight w-[min(62vw,480px)] mx-auto mb-8"
          />
        </div>

        <p className="text-white text-2xl md:text-3xl font-serif italic mb-8">
          &quot;Estructura organizacional que impulsa el futuro.&quot;
        </p>

        <p className="text-[#6D8FB1] text-sm font-semibold tracking-widest uppercase mb-8">
          Contáctanos para más información
        </p>

        <a 
          href="https://wa.me/523319544459?text=Hola%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105"
        >
          <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
          Contáctanos
        </a>
      </div>
    </section>
  );
}