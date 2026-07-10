'use client';

export default function MisionPage() {
  return (
    <main className="bg-[#f6f3ec] min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <a href="/" className="text-[#2c5f8a] hover:underline mb-8 inline-block">← Volver</a>

        <h1 className="text-5xl font-serif text-[#0b2440] mb-8">Misión</h1>

        <div className="prose prose-lg text-[#3d4a56] space-y-6">
          <p>Acompañar a las empresas desde su proceso de constitución y durante cada etapa de su crecimiento mediante la construcción de estructuras organizacionales, financieras y jurídicas sólidas, eficientes y sostenibles.</p>
          <p>Brindamos asesoría integral que integra derecho corporativo, contable, estructura organizacional y administración estratégica del capital humano, asegurando cumplimiento normativo, orden interno y mejora continua de procesos, con el objetivo de fortalecer su operación y garantizar su desarrollo a largo plazo.</p>
        </div>
      </div>
    </main>
  );
}