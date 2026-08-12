'use client';

export default function ServicesComponent() {
  return (
    <section id="servicios" className="relative bg-[#0D2B4D] px-6 py-20 overflow-hidden">
      <div className="max-w-[1180px] mx-auto relative z-10">
        <div className="text-center mb-12" data-reveal>
          <p className="text-[#6D8FB1] text-sm font-semibold tracking-widest uppercase mb-4">Lo que hacemos</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Portafolio de Servicios</h2>
          <p className="text-[#F2F4F7] max-w-2xl mx-auto">
            Brindamos acompañamiento estratégico desde la etapa previa a la constitución formal de la sociedad, integrando visión organizacional y estructura legal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {[
            { title: 'Derecho Corporativo', items: ['Elaboración de estatutos', 'Constitución de sociedades', 'Protocolización de actas', 'Disolución y liquidación'] },
            { title: 'Estructura Organizacional', items: ['Diagnóstico integral', 'Diseño de organigramas', 'Descriptivos de puesto', 'Elaboración de manuales'] },
            { title: 'Administración de RRHH', items: ['Reclutamiento estratégico', 'Administración laboral', 'Tabuladores salariales', 'Gestión de clima laboral'] },
            {title: 'Cumplimiento Legal Laboral', items: ['Contratos laborales', 'Litigio laboral', 'Auditorías laborales', 'Terminaciones y finiquitos', 'Reglamento Interior de Trabajo'] },
            { title: 'Servicios Contables', items: ['Contabilidad general', 'Cálculo de impuestos', 'Facturación electrónica', 'Administración de nómina'] },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-[#F2F4F7] rounded-lg p-6"
              data-reveal
              style={{ '--reveal-delay': `${0.1 * (idx % 3)}s` } as React.CSSProperties}
            >
              <h3 className="text-[#0D2B4D] font-semibold text-lg mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="text-[#4A4A4A] text-sm flex items-start gap-2">
                    <span className="text-[#2F5B7C] font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-[rgba(109,143,177,0.18)]" data-reveal>
          <h3 className="text-[#6D8FB1] text-2xl font-serif mb-4">Enfoque Diferenciador</h3>
          <p className="text-white text-sm mb-2">Estructura Organizacional + Capital Humano + Derecho Corporativo + Servicios Contables</p>
          <p className="text-[#F2F4F7] max-w-2xl mx-auto">
            No solo estructuramos empresas; construimos organizaciones legalmente sólidas, operativamente ordenadas y estratégicamente preparadas.
          </p>
        </div>
      </div>
    </section>
  );
}