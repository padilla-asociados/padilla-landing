'use client';

export default function ValoresPage() {
  return (
    <main className="bg-[#F2F4F7] min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <a href="/" className="text-[#2F5B7C] hover:underline mb-8 inline-block">← Volver</a>
        
        <h1 className="text-5xl font-serif text-[#0D2B4D] mb-8">Valores</h1>
        
        <div className="space-y-8">
          {[
            { title: 'Orden y estructura', desc: 'Creemos que las organizaciones sólidas se construyen sobre bases claras, definidas y bien diseñadas.' },
            { title: 'Enfoque humano', desc: 'Las personas son el eje estratégico de toda organización y su correcta gestión garantiza resultados sostenibles.' },
            { title: 'Estrategia y prevención', desc: 'Anticiparnos a los riesgos organizacionales, laborales y patrimoniales forma parte esencial de nuestra propuesta de valor.' },
            { title: 'Ética y cumplimiento', desc: 'Actuamos con responsabilidad, transparencia y apego al marco legal.' },
            { title: 'Acompañamiento cercano', desc: 'No solo asesoramos; caminamos junto a nuestros clientes en cada etapa de su evolución.' },
            { title: 'Evolución y cambio', desc: 'Impulsamos organizaciones capaces de adaptarse, transformarse y consolidarse en entornos dinámicos.' },
          ].map((valor, idx) => (
            <div key={idx} className="border-l-4 border-[#2F5B7C] pl-6">
              <h3 className="text-2xl font-serif font-semibold text-[#0D2B4D] mb-3">{valor.title}</h3>
              <p className="text-[#4A4A4A] text-lg">{valor.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}