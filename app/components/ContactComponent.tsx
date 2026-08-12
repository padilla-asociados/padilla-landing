'use client';

import { useInView } from './useInView';

function ContactElement({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function ContactComponent() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-20 bg-[#0b2440] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(9,26,48,0.88) 0%, rgba(11,36,64,0.72) 45%, rgba(11,36,64,0.85) 100%), url('/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom'
      }}
    >
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <ContactElement>
          <img 
            src="/logo.png" 
            alt="Padilla Chávez & Asociados" 
            className="w-[min(55vw,420px)] mx-auto mb-8"
          />
        </ContactElement>

        <ContactElement delay={150}>
          <p className="text-white text-2xl md:text-3xl font-serif italic mb-8">
            "Estructura organizacional que impulsa el futuro."
          </p>
        </ContactElement>

        <ContactElement delay={300}>
          <p className="text-[#7fb2db] text-sm tracking-widest uppercase mb-8">
            Contáctanos para más información
          </p>
        </ContactElement>

        <ContactElement delay={450}>
          <a 
            href="https://wa.me/523319544459?text=Hola%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105"
          >
            <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
            Contáctanos
          </a>
        </ContactElement>
      </div>
    </section>
  );
}