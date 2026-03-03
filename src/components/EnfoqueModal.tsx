import { useState } from "react";
import {
  InfografiaLey1,
  InfografiaTerminales,
  InfografiaKPIs,
  InfografiaPreArribo,
} from "./RichInfografias";

type Enfoque = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  border: string;
  resumen: string[];
  puntosClave: string[];
  infografia: React.ReactNode;
  stats: { label: string; value: string }[];
};

const enfoques: Enfoque[] = [
  {
    id: "normativa",
    icon: "⚖️",
    title: "Normativa y Autoridades",
    subtitle: "Marco legal · Ley 1ª/1991 · Control institucional",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/30",
    stats: [
      { label: "Autoridades de control", value: "6+" },
      { label: "Ley marco", value: "1ª/1991" },
      { label: "Tipos de concesión", value: "3" },
      { label: "Documentos de arribo", value: "8+" },
    ],
    resumen: [
      "La logística portuaria colombiana opera bajo el marco normativo establecido por la Ley 1ª de 1991, que transformó el sistema portuario nacional al pasar de un modelo estatal centralizado a un esquema de concesiones privadas supervisadas por el Estado.",
      "Esta ley creó las Sociedades Portuarias Regionales (SPR) como concesionarias de la infraestructura, mientras que el Estado —a través de la Supertransporte y el Ministerio de Transporte— mantiene la rectoría, regulación y control del sistema portuario colombiano.",
      "En cada operación portuaria intervienen múltiples autoridades: DIMAR ejerce la autoridad marítima sobre naves y tripulaciones; Migración Colombia controla el movimiento de personas; el INVIMA y las entidades de salud pública gestionan el riesgo sanitario; la DIAN ejerce el control aduanero y tributario; el ICA supervisa el componente fitosanitario; y la Policía / Armada Nacional garantizan la seguridad del recinto portuario.",
      "La coordinación entre estas entidades es crítica para evitar demoras en el proceso de arribo y zarpe. Una gestión documental deficiente puede generar demoras de horas o días con costos operativos significativos para el buque, el terminal y el importador/exportador.",
    ],
    puntosClave: [
      "La Ley 1ª de 1991 es el origen legal de todo el sistema portuario moderno de Colombia.",
      "DIMAR es la máxima autoridad marítima: controla naves, tripulación y seguridad de navegación.",
      "La ventana de atraque depende de la coordinación interinstitucional exitosa.",
      "El pre-arribo oportuno y la calidad documental reducen drásticamente los costos de demora.",
      "El Puerto como nodo multimodal conecta el mar con carretera, ferrocarril y fluvial.",
    ],
    infografia: <InfografiaLey1 />,
  },
  {
    id: "terminales",
    icon: "🏗️",
    title: "Terminales, Equipos y Patios",
    subtitle: "Infraestructura · Operación · Gestión de patio",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    stats: [
      { label: "Tipos de terminal", value: "6" },
      { label: "Equipos principales", value: "8+" },
      { label: "Zonas de patio", value: "4 tipos" },
      { label: "Clases IMO", value: "9" },
    ],
    resumen: [
      "Los terminales portuarios se clasifican según el tipo de carga que atienden: contenedores, granel sólido, granel líquido, carga general, Ro-Ro y multipropósito. Esta clasificación determina el tipo de infraestructura, equipos, procesos y KPIs de desempeño aplicables.",
      "Los terminales de contenedores son los de mayor complejidad operativa y tecnológica: utilizan grúas STS (Ship-to-Shore) para el movimiento entre buque y muelle, RTG o RMG para el patio de contenedores, y reach stackers o montacargas para zonas de menor densidad. La productividad se mide en MPH (Movimientos por Hora).",
      "Las zonas de almacenamiento en patio deben estar cuidadosamente planificadas: segregación de cargas IMO (peligrosas), áreas reefer con conexiones eléctricas, zonas de vacíos, áreas de inspección y zonas de carga sobredimensionada. La trazabilidad de cada contenedor desde el gate hasta la entrega es fundamental.",
      "Los tipos de contenedores definen las posibilidades operativas: dry van (20' y 40'), high cube, reefer, open top, flat rack, tank container. Cada tipo tiene restricciones de peso, temperatura, compatibilidad y estiba que el operador debe dominar para planificar correctamente.",
    ],
    puntosClave: [
      "La grúa STS es el equipo de mayor productividad e impacto en el tiempo de permanencia del buque.",
      "El dwell time alto en patio indica ineficiencia logística o problemas de despacho aduanero.",
      "La segregación de cargas IMO es obligatoria y genera zonas específicas con protocolos de seguridad.",
      "Los contenedores reefer requieren monitoreo continuo de temperatura y conexión eléctrica en patio.",
      "El diseño del patio (layout) impacta directamente la productividad y los costos operativos.",
    ],
    infografia: <InfografiaTerminales />,
  },
  {
    id: "planificacion",
    icon: "📊",
    title: "Planificación, Coordinación y Rendimientos",
    subtitle: "Operaciones · KPIs · Incoterms · Documentación",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    stats: [
      { label: "KPIs principales", value: "6" },
      { label: "Incoterms 2020", value: "11" },
      { label: "Documentos clave", value: "12+" },
      { label: "Fases de operación", value: "7" },
    ],
    resumen: [
      "La planificación portuaria comienza antes del arribo de la motonave. El proceso pre-arribo incluye la recepción y análisis del ETA, la revisión del manifiesto de carga, la asignación preliminar del puesto de atraque según características del buque (eslora, calado, tipo de carga), y la planificación de recursos como equipos, cuadrillas y patio.",
      "La coordinación operativa involucra múltiples actores simultáneamente: el agente naviero, el terminal, las autoridades de control, el operador portuario y los usuarios de la carga. Los sistemas de gestión de terminales (TOS) integran la información para optimizar la asignación de recursos y reducir tiempos muertos.",
      "Los rendimientos se miden con KPIs estandarizados: MPH (Moves per Hour) para grúas, Dwell Time para patio, Berth Time para tiempo de muelle, TAT (Turn-Around Time) para camiones en gate y ocupación de muelle. Estos indicadores son la base para mejorar la productividad y negociar contratos de servicio con navieras.",
      "Los Incoterms 2020 definen con precisión dónde termina la responsabilidad del vendedor y dónde comienza la del comprador, incluyendo costos de flete, seguro y riesgos. El Incoterm incorrecto puede generar pérdidas millonarias en disputas de seguros y reclamaciones por daños.",
    ],
    puntosClave: [
      "La mejor productividad se gana antes del atraque: el pre-arribo define el éxito de la operación.",
      "El plan de estiba BAROTI (Bay-Row-Tier) es el lenguaje universal de los portacontenedores.",
      "El BL (Bill of Lading) es el documento más importante: título de propiedad de la carga.",
      "FOB vs CIF: la diferencia está en quién asume el riesgo y el costo durante el transporte marítimo.",
      "La trinca inadecuada de contenedores en cubierta es causa de pérdidas catastróficas en alta mar.",
    ],
    infografia: <InfografiaKPIs />,
  },
];

export function EnfoqueCards() {
  const [active, setActive] = useState<string | null>(null);
  const sel = enfoques.find((e) => e.id === active);

  return (
    <div className="mt-5 space-y-4">
      {/* Cards de enfoque */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {enfoques.map((e) => (
          <button
            key={e.id}
            onClick={() => setActive(active === e.id ? null : e.id)}
            className={`group rounded-2xl border bg-gradient-to-br p-4 text-left transition-all duration-200 ${e.color} ${e.border} ${
              active === e.id
                ? "ring-2 ring-white/20 scale-[1.01]"
                : "hover:scale-[1.01] hover:ring-1 hover:ring-white/10"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">{e.icon}</span>
              <div>
                <div className="text-xs font-semibold text-white/50 uppercase tracking-wider">Enfoque</div>
                <div className="text-sm font-bold text-white/90">{e.title}</div>
              </div>
            </div>
            <div className="mt-2 text-xs text-white/55 leading-relaxed">{e.subtitle}</div>
            <div className="mt-3 grid grid-cols-2 gap-1.5">
              {e.stats.map((s) => (
                <div key={s.label} className="rounded-lg bg-black/20 px-2 py-1.5">
                  <div className="text-[10px] text-white/45">{s.label}</div>
                  <div className="text-xs font-bold text-white/80">{s.value}</div>
                </div>
              ))}
            </div>
            <div
              className={`mt-3 flex items-center gap-1 text-xs font-semibold transition-colors ${
                active === e.id ? "text-white" : "text-white/50 group-hover:text-white/80"
              }`}
            >
              {active === e.id ? "▲ Cerrar resumen" : "▼ Ver resumen completo"}
            </div>
          </button>
        ))}
      </div>

      {/* Panel expandido */}
      {sel && (
        <div
          className={`rounded-3xl border bg-gradient-to-br ${sel.color} ${sel.border} overflow-hidden transition-all duration-300`}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{sel.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-white">{sel.title}</h3>
                <p className="text-sm text-white/55">{sel.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_420px]">
              {/* Texto */}
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  Resumen del Módulo
                </div>
                {sel.resumen.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-white/75">
                    {p}
                  </p>
                ))}

                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
                    Puntos Clave para Recordar
                  </div>
                  <ul className="space-y-2">
                    {sel.puntosClave.map((p, i) => (
                      <li key={i} className="flex gap-3 text-sm text-white/70">
                        <span className="mt-1.5 flex-none h-5 w-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] font-bold text-white/60">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {sel.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center"
                    >
                      <div className="text-2xl font-black text-white">{s.value}</div>
                      <div className="mt-1 text-[10px] text-white/50 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Infografía */}
              <div className="flex flex-col gap-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  Infografía del Módulo
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/20 p-2">
                  {sel.infografia}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Flujo portuario siempre visible */}
      <div className="rounded-2xl border border-white/10 bg-black/20 p-4 overflow-hidden">
        <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
          Proceso de Planificación Portuaria — Flujo Completo
        </div>
        <InfografiaPreArribo />
      </div>
    </div>
  );
}
