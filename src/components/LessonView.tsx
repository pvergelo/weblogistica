import { useState } from "react";
import { Card, CardBody, CardHeader } from "./ui/Card";
import { Badge } from "./ui/Badge";
import type { Lesson, Module } from "../data/course";
import { LessonInfografia } from "./RichInfografias";
import { ResourcesSection } from "./ResourcesSection";

/* ── Helpers de UI ─────────────────────────────────────────────── */
function SectionTitle({ icon, title, subtitle }: { icon?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2 text-sm font-bold text-white/90">
        {icon && <span>{icon}</span>}
        <span>{title}</span>
      </div>
      {subtitle && <div className="mt-1 text-xs text-white/50 leading-relaxed">{subtitle}</div>}
    </div>
  );
}

/* ── Video embebido ─────────────────────────────────────────────── */
function YouTubeEmbed({ youtubeId, title, description }: { youtubeId: string; title: string; description?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="px-4 py-3">
        <div className="text-sm font-bold text-white/85">{title}</div>
        {description && <div className="mt-1 text-xs leading-relaxed text-white/50">{description}</div>}
        <a
          href={`https://www.youtube.com/watch?v=${youtubeId}`}
          target="_blank" rel="noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.2 5 12 5 12 5s-4.2 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9C6.8 19 12 19 12 19s4.2 0 7-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2S22 14.4 22 12.8v-1.5C22 9.6 21.8 8 21.8 8zM9.8 14.5V9.4l5.4 2.6-5.4 2.5z" />
          </svg>
          Ver en YouTube
        </a>
      </div>
    </div>
  );
}

/* ── Resumen expandible por sección ─────────────────────────────── */
const RICH_SUMMARIES: Record<string, { title: string; paragraphs: string[]; tip: string }> = {
  "estructura-portuaria": {
    title: "La Ley 1ª de 1991 y el sistema portuario colombiano",
    paragraphs: [
      "La Ley 1ª de 1991 marcó un punto de inflexión en la historia portuaria de Colombia. Antes de esta ley, los puertos eran administrados directamente por el Estado a través de Colpuertos, una entidad que arrastraba ineficiencias estructurales, sobrecostos laborales y baja productividad. Con la modernización, el Estado cedió la operación a las Sociedades Portuarias Regionales bajo régimen de concesión, transformando radicalmente la competitividad logística del país.",
      "El sistema portuario colombiano opera a través de una arquitectura de actores bien diferenciada. Las Sociedades Portuarias son las concesionarias responsables de la infraestructura; los Operadores Portuarios ejecutan la manipulación física de la carga; los Usuarios (navieras, importadores, exportadores) acceden a los servicios mediante contratos. La supervisión recae en la Supertransporte, mientras que MINTRANSPORTE define la política sectorial.",
      "Desde la perspectiva logística, comprender la Ley 1ª no es un ejercicio académico: es la base para entender por qué cada trámite, permiso o restricción existe. Los tiempos en puerto, los costos de estadía y las responsabilidades ante la carga están definidos por este marco. Un operador que no conoce el régimen de concesiones no puede anticipar consecuencias ante incumplimientos ni negociar condiciones contractuales con pleno conocimiento.",
    ],
    tip: "Relaciona la Ley 1ª con una operación real: busca el contrato de concesión de un terminal colombiano y observa qué obligaciones asume la Sociedad Portuaria frente al Estado.",
  },
  "autoridades": {
    title: "El rol de las autoridades portuarias en la operación",
    paragraphs: [
      "Cuando un buque arriba a un puerto colombiano, no es un solo organismo el que autoriza su ingreso y operación. Es una cadena de controles interinstitucionales donde cada autoridad tiene un mandato específico, una ventanilla de documentos y un impacto directo en los tiempos operativos. DIMAR lidera la inspección técnica de la nave; Migración Colombia controla el ingreso de tripulantes; INVIMA e ICA actúan sobre la carga conforme a riesgos sanitarios y fitosanitarios; la DIAN supervisa el flujo de mercancías con fines fiscales.",
      "El concepto de 'ventana única portuaria' busca sincronizar todas estas inspecciones para evitar que el buque espere en fondeo a que cada entidad llegue en momentos distintos. En la práctica, la coordinación falla cuando hay documentación incompleta, discrepancias entre manifiestos y carga real, o ausencia de algún representante de autoridad. Cada hora de espera en fondeo representa costos de demora (demurrage) que pueden ascender a miles de dólares.",
      "Para el logístico portuario, el conocimiento operativo de las autoridades no es burocrático: es crítico. Saber qué documento exige cada entidad, en qué momento del proceso y con qué formato, es la diferencia entre un arribo fluido y un bloqueo costoso. La preparación documental antes del arribo (pre-arribo) es la herramienta más efectiva para minimizar interferencias.",
    ],
    tip: "Construye una matriz: Autoridad → Documento que exige → Momento del proceso → Consecuencia de no tenerlo. Úsala como checklist real en tu primera operación.",
  },
  "tipos-terminales": {
    title: "La especialización portuaria como ventaja competitiva",
    paragraphs: [
      "Un terminal portuario no es simplemente un muelle con equipos. Es un sistema diseñado para optimizar el flujo de un tipo específico de carga. Los terminales de contenedores priorizan la velocidad de transferencia: grúas STS, patios en bloques, TOS (Terminal Operating System), camiones en secuencias controladas. Un terminal de granel sólido, en cambio, maximiza tonelaje por hora mediante fajas, tolvas, silos y dragas; la velocidad de contenedor sería irrelevante allí.",
      "En Colombia, la especialización es visible: Cartagena (SPR, Contecar) lidera en contenedores; Puerto Drummond y Cerrejón dominan el carbón; Vopak y Oiltanking manejan graneles líquidos en Barranquilla; el Ro-Ro de vehículos opera en terminales dedicados en Buenaventura. Esta especialización refleja la demanda del comercio exterior colombiano y la optimización de inversiones en equipos y procesos.",
      "Para el estudiante de logística portuaria, entender los tipos de terminal significa poder seleccionar el terminal adecuado para una carga, anticipar los KPIs que se van a medir y comprender los riesgos operativos por tipo de operación. Un error de terminal para carga peligrosa, por ejemplo, no solo genera costos: puede tener consecuencias legales y de seguridad graves.",
    ],
    tip: "Investiga los terminales activos en el puerto de Cartagena y clasifícalos por tipo. Luego haz lo mismo para Buenaventura. ¿Qué diferencias estructurales notas?",
  },
  "muelles-equipos": {
    title: "Equipos portuarios: el corazón de la productividad",
    paragraphs: [
      "Los equipos portuarios son el factor más visible de la productividad de un terminal. Una grúa STS de última generación puede lograr 35-45 movimientos por hora; una grúa antigua llega a 18-22. Esta diferencia, multiplicada por las horas de estadía de un buque, puede representar 12-18 horas adicionales en muelle: tiempo que el armador factura al terminal. La inversión en equipos modernos no es un lujo operativo, es una condición de competitividad.",
      "El plan de equipos para una operación no se decide el día del arribo. Se prepara en el pre-arribo, analizando el tipo de carga, el plan de estiba del buque, el número de grúas disponibles, los turnos y la capacidad del patio para recibir la descarga. Un error frecuente es asignar más grúas de las que el patio puede absorber, generando 'cuello de botella' en el lado tierra y tiempos muertos en el muelle.",
      "El mantenimiento preventivo de equipos es tan importante como su operación. Un equipo fuera de servicio en medio de una operación crítica puede detener toda la productividad del buque. Los planes de mantenimiento deben diseñarse para minimizar coincidencias con ventanas de atraque de buques prioritarios, coordinando con el área de planificación para anticipar riesgos de disponibilidad.",
    ],
    tip: "Aprende a leer una ficha técnica de grúa STS: capacidad nominal, alcance, velocidad de levante y productividad esperada. Estos datos son la base de cualquier cálculo de berth time.",
  },
  "zonas-almacenamiento": {
    title: "El patio como corazón operativo del terminal",
    paragraphs: [
      "El patio de un terminal portuario es mucho más que un espacio de almacenamiento temporal. Es el buffer operacional que sincroniza dos mundos con velocidades diferentes: el buque (que opera en ráfagas de alta intensidad) y el transporte terrestre (que opera en flujos continuos pero variables). Si el patio falla por congestión, la descarga del buque se detiene; si el patio está vacío por falta de carga, las grúas esperan. La gestión del patio es, en esencia, gestión del flujo.",
      "La segregación de carga en patio no es opcional: es una obligación de seguridad. Las mercancías peligrosas (IMO) no pueden almacenarse junto a carga alimentaria; los reefer necesitan puntos de conexión eléctrica y monitoreo constante; la carga sobredimensionada (OOG) requiere zonas especiales sin restricción de altura. La asignación incorrecta de zonas puede generar contaminación cruzada, daños a la carga, accidentes e incluso incidentes ambientales.",
      "La trazabilidad en patio es el tercer pilar. Cada contenedor debe tener una ubicación registrada en el TOS en tiempo real. Cuando el sistema de ubicaciones falla o no se actualiza, los equipos pierden tiempo buscando contenedores, la productividad cae y los clientes reclaman. Los 'movimientos improductivos' (mover un contenedor sin que sea parte del plan de operación) son el indicador más claro de una gestión de patio deficiente.",
    ],
    tip: "Calcula el impacto: si en un patio con capacidad de 5.000 TEUs el 30% son movimientos improductivos, ¿cuántos movimientos de valor real se pierden por turno? ¿Qué costo representa eso?",
  },
  "tipos-carga": {
    title: "Conocer la carga es el primer paso de toda operación",
    paragraphs: [
      "En logística portuaria, la naturaleza de la carga determina absolutamente todo: el tipo de terminal, los equipos requeridos, los documentos que se generan, los riesgos que se gestionan y los costos que se calculan. Un error en la identificación o clasificación de la carga es un error en cadena que puede propagarse desde el contrato de transporte hasta el proceso de aduana, pasando por planes de estiba incorrectos y zonas de almacenamiento inadecuadas.",
      "La carga contenedorizada ha revolucionado la logística global: estandariza el transporte, simplifica la transferencia entre modos y optimiza el espacio. Sin embargo, no toda carga puede o debe contenedorizarse. El granel sólido (carbón, cereales, minerales) requiere terminales especializados con capacidad de carga/descarga masiva. El granel líquido (hidrocarburos, aceites, químicos) necesita tanques, tuberías y sistemas de bombeo específicos. La carga Ro-Ro (vehículos, maquinaria rodante) necesita rampas de acceso y áreas de maniobra.",
      "Para el profesional de logística portuaria, dominar la clasificación de cargas significa poder anticipar cada decisión operativa: ¿qué terminal?, ¿qué equipo?, ¿qué embalaje?, ¿qué documento?, ¿qué riesgo específico debo controlar? Esta visión sistémica es la que distingue a un operador competente de uno que simplemente ejecuta instrucciones.",
    ],
    tip: "Crea una 'ficha de carga' para 5 productos colombianos de exportación (banano, carbón, café, aceite de palma, níquel). Para cada uno: tipo de carga, terminal ideal, equipo principal, riesgo clave.",
  },
  "carga-peligrosa": {
    title: "Mercancías peligrosas: cuando el error no tiene segunda oportunidad",
    paragraphs: [
      "El Código IMDG de la Organización Marítima Internacional no es sugerencia: es obligación legal para el transporte marítimo de mercancías peligrosas. Sus 9 clases cubren explosivos, gases, líquidos inflamables, sólidos inflamables, oxidantes y peróxidos, tóxicos e infecciosos, radiactivos, corrosivos y miscélaneos. Cada clase tiene sub-divisiones, grupos de embalaje, restricciones de segregación y protocolos de emergencia específicos.",
      "En la operación portuaria, las mercancías peligrosas generan obligaciones concretas: el plan de estiba del buque debe respetar las distancias de segregación; el patio debe tener zonas delimitadas y señalizadas; el personal debe tener entrenamiento específico y los equipos de emergencia deben estar disponibles. La documentación es crítica: el número ONU, la clase de peligro, el grupo de embalaje y la hoja de seguridad (SDS) deben estar presentes y verificados antes de recibir la carga.",
      "Los incidentes con mercancías peligrosas en puertos tienen consecuencias devastadoras. El incendio del MSC Flaminia (2012), el desastre de Beirut (2020, nitrato de amonio) y múltiples incidentes en terminales asiáticos ilustran que el protocolo IMDG no es burocracia: es la línea entre una operación controlada y una catástrofe. Cada profesional del sector debe conocer las respuestas básicas ante derrames, fugas e incendios de mercancías peligrosas.",
    ],
    tip: "Busca en el sistema UNECE la ficha de seguridad de UN 1203 (gasolina). Identifica: clase, grupo de embalaje, segregación con otras clases y medidas de emergencia. Practícalo con 3 números ONU más.",
  },
  "clasificacion-contenedores": {
    title: "El contenedor: la unidad de carga que cambió el mundo",
    paragraphs: [
      "La estandarización del contenedor ISO en los años 60, impulsada por Malcolm McLean, es considerada una de las revoluciones logísticas más importantes de la historia moderna. Antes del contenedor, cargar y descargar un buque de carga general tomaba semanas y era intensivo en mano de obra. Con el contenedor estándar, los tiempos se redujeron a horas y los costos de transporte cayeron drásticamente, impulsando el comercio global.",
      "Hoy existen múltiples variantes del contenedor ISO, cada una diseñada para una necesidad específica: el dry van (20' y 40') para carga general seca; el high cube (40'HC) para cargas voluminosas; el reefer para carga refrigerada que requiere temperatura controlada; el open top para cargas altas que no caben con techo; el flat rack para maquinaria y estructuras sobredimensionadas; el tank container para líquidos a granel. Cada tipo tiene capacidades, taras y restricciones operativas específicas que el profesional debe dominar.",
      "En la práctica, la selección del tipo correcto de contenedor afecta el costo total del transporte, la seguridad de la carga, el plan de estiba del buque y el proceso de aduana. Un reefer asignado a una carga que no lo requiere genera costos de energía innecesarios; un flat rack usado para carga que cabe en dry genera riesgos de aseguramiento. La decisión del tipo de contenedor es técnica y tiene consecuencias económicas y de seguridad.",
    ],
    tip: "Visita el sitio web de una naviera (Maersk, MSC o CMA-CGM) y explora su catálogo de contenedores. Compara dimensiones internas, pesos máximos y usos recomendados para dry vs HC vs reefer.",
  },
  "pre-arribo": {
    title: "La operación exitosa comienza antes del arribo",
    paragraphs: [
      "El pre-arribo es la fase más determinante de la productividad portuaria. Cuando el buque llega al muelle con toda la planificación hecha, la operación fluye. Cuando llega con documentación incompleta, equipos no disponibles o personal sin asignar, cada hora de retraso tiene un costo directo (demurrage, horas extra, costos de espera) e indirecto (pérdida de reputación, penalizaciones contractuales). La ecuación es simple: cada hora de pre-arribo bien invertida puede ahorrar 3-5 horas de operación.",
      "El proceso de pre-arribo involucra múltiples actores: la naviera envía el ETA y el plan de carga preliminar; el agente marítimo coordina con las autoridades (DIMAR, Migración, INVIMA, ICA); el terminal asigna el berth window y prepara los equipos; el almacenista libera espacio en patio; la DIAN comienza el pre-aforo. Esta orquestación, cuando falla en un solo eslabón, puede detener toda la cadena.",
      "Los sistemas modernos de planificación portuaria (TOS, VAS) permiten gestionar el pre-arribo con datos en tiempo real: ETA actual del buque (AIS), pronósticos de carga y descarga, disponibilidad de grúas, nivel de ocupación de patio. El profesional que domina estas herramientas tiene una ventaja competitiva significativa sobre quien trabaja con Excel y comunicaciones por teléfono.",
    ],
    tip: "Traza una línea de tiempo: T-72h, T-48h, T-24h, T-12h, T-2h antes del arribo. ¿Qué debe estar listo en cada momento? Construye tu propio checklist de pre-arribo.",
  },
  "puesto-atraque": {
    title: "La asignación del berth: geometría y estrategia",
    paragraphs: [
      "Asignar un puesto de atraque (berth) parece simple, pero es en realidad un problema de optimización multivariable. El planificador de muelle debe considerar: la eslora total del buque y su calado máximo (para verificar profundidad disponible), el tipo de carga y los equipos que requiere, las ventanas de tiempo disponibles del muelle, los conflictos con otros buques programados, las restricciones de maniobra (vientos, corrientes, disponibilidad de remolcadores y practicaje).",
      "Los conflictos en la programación de muelle son frecuentes: un buque que llega tarde desplaza toda la secuencia; un buque que necesita más tiempo del estimado genera 'colisión de ventanas'; un buque que requiere dos grúas STS en un muelle con una sola disponible obliga a reformular el plan de operación. La planificación de berth es una disciplina que combina datos técnicos, negociación con navieras y resiliencia operativa.",
      "En puertos con alta demanda (Cartagena, Buenaventura), la programación de muelle puede verse comprometida por la ocupación de berths. Los índices de ocupación superiores al 70% aumentan exponencialmente las probabilidades de conflicto y demora. Por eso, los terminales modernos invierten en software de berth planning que optimiza la asignación en tiempo real, considerando variables dinámicas como cambios en ETA y variaciones en los manifiestos.",
    ],
    tip: "Dado un muelle de 350 metros con 3 buques simultáneos (230m, 180m, 195m de eslora), ¿caben los tres? ¿Cuál sería el orden de prioridad si el de 230m es de contenedores y los otros son de granel?",
  },
  "equipos-herramientas": {
    title: "El plan de recursos: del papel a la operación real",
    paragraphs: [
      "Planificar los equipos y herramientas para una operación portuaria no es llenar un formulario. Es un ejercicio de ingeniería operativa que conecta el tipo de carga, la productividad esperada, los turnos disponibles y los riesgos de disponibilidad de cada equipo. Un plan de recursos incorrecto se traduce directamente en tiempos muertos, accidentes por uso inadecuado de equipos o sobretiempos que encarecen la operación.",
      "La diferencia entre capacidad nominal y capacidad efectiva es fundamental. Una grúa STS puede tener capacidad nominal de 40 mov/hr, pero si hay interferencias de patio, cambios de bodega o mal tiempo, la capacidad efectiva puede caer a 25-28 mov/hr. El planificador profesional trabaja siempre con la capacidad efectiva ajustada por factores de eficiencia operativa.",
      "Las cuadrillas son el recurso humano crítico de la operación. Su composición varía según el tipo de carga: en contenedores, la cuadrilla mínima de muelle incluye operadores de grúa, señaleros, trincadores y supervisores; en granel, se necesitan operadores de tolva, controladores de báscula y personal de limpieza. El error más costoso en gestión de cuadrillas es asignar personal insuficiente para el ritmo de operación, generando cuellos de botella humanos.",
    ],
    tip: "Para un buque portacontenedores con 800 movimientos totales, 2 grúas STS a 28 MPH efectivo, turnos de 8 horas: ¿cuántas horas de operación necesitas? ¿Cuántos turnos? Simula una avería de una grúa a mitad de operación.",
  },
  "coordinacion-personal": {
    title: "La coordinación: cuando el equipo es el sistema",
    paragraphs: [
      "En una operación portuaria compleja, el error humano de coordinación es tan peligroso como el fallo mecánico. La comunicación entre muelle, patio, gate, oficina de operaciones y autoridades debe ser continua, clara y estructurada. Un mensaje ambiguo sobre la posición de un contenedor puede enviar una grúa al lugar equivocado; una orden confusa de secuencia puede comprometer la estabilidad del buque durante la descarga.",
      "El toolbox talk (reunión de seguridad al inicio del turno) no es un trámite formal. Es el momento donde se identifican los riesgos del día, se asignan responsables, se verifican equipos de protección y se comunican cambios de plan. Un turno que arranca sin briefing es un turno donde cada operador actúa sobre supuestos propios, multiplicando las probabilidades de incidente.",
      "La matriz RACI aplicada a operaciones portuarias permite clarificar en segundos quién hace qué, quién aprueba, quién debe ser consultado y quién debe ser informado. En operaciones simultáneas (dos buques en muelle, tráfico de gates y operaciones de patio), la claridad de roles es la diferencia entre un turno eficiente y una operación caótica.",
    ],
    tip: "Diseña un 'handover' de turno para un terminal de contenedores: ¿qué información mínima debe transferirse entre el supervisor saliente y el entrante para garantizar continuidad operativa?",
  },
  "estibas-desestibas": {
    title: "La secuencia de estiba: física, lógica y seguridad integradas",
    paragraphs: [
      "La operación de estiba y desestiba de un buque portacontenedores no es una secuencia aleatoria: es un algoritmo físico donde el orden de movimiento afecta directamente la estabilidad del buque, la productividad de las grúas y la seguridad del personal. Cargar primero los contenedores pesados en el fondo y popa, y los livianos en cubierta y proa, respeta los principios de estabilidad hidrostática; ignorar esto puede crear momentos de escora que comprometen la seguridad.",
      "Las zonas de exclusión en muelle son áreas donde el acceso está prohibido durante maniobras de izaje. Cuando una grúa STS está en operación, la zona bajo la pluma (entre el buque y la grúa) es una zona de exclusión estricta: nadie puede caminar por allí sin permiso explícito del supervisor. Este principio básico de seguridad, cuando se viola por urgencia operativa, es la causa más frecuente de accidentes fatales en terminales portuarios.",
      "La coordinación entre el planificador de estiba (en oficina), el supervisor de muelle (en la zona) y el oficial de carga del buque (a bordo) debe ser continua durante toda la operación. Cambios en el plan (por problemas de estabilidad, contenedores rechazados o cambios de último minuto en manifiestos) deben comunicarse inmediatamente a todos los actores para ajustar la secuencia sin comprometer seguridad ni productividad.",
    ],
    tip: "Analiza un incidente real de 'container overboard': busca casos documentados donde contenedores cayeron al mar por trinca deficiente o secuencia de carga incorrecta. ¿Qué falló en la coordinación?",
  },
  "documentos-operacion": {
    title: "La documentación: trazabilidad y evidencia de la operación",
    paragraphs: [
      "En logística portuaria, si no está documentado, no ocurrió. Esta máxima aplica en todas las fases: el daño a un contenedor sin EIR firmado es irrecuperable; la descarga sin reporte de turno es invisible para la auditoría; el contenedor sin posición registrada en el TOS es un problema de inventario que puede costar horas de búsqueda. La calidad documental no es burocracia: es la evidencia que protege a todos los actores de la cadena.",
      "El conocimiento de embarque (BL - Bill of Lading) es el documento más importante del comercio marítimo. Es título valor, contrato de transporte y recibo de mercancías en uno solo. Errores en el BL (datos del consignatario, descripción de carga, cantidad de bultos) generan demoras en la aduana, disputas legales y costos adicionales que pueden superar ampliamente el valor del flete pagado. Su revisión antes de la emisión es una responsabilidad crítica.",
      "Los reportes operativos (de turno, de incidentes, de rendimiento) son la base del análisis de mejora continua. Un terminal que no documenta sus rendimientos no puede identificar sus ineficiencias, no puede negociar con base en datos con sus clientes y no puede cumplir con certificaciones de calidad. La trazabilidad documental es también un requisito de seguridad: en caso de incidente, los registros operativos son la primera evidencia que revisan las autoridades.",
    ],
    tip: "Obtén un modelo de BL (Bill of Lading) de una naviera. Identifica todos los campos obligatorios y para cada uno, define: ¿quién lo llena, con qué información, y qué consecuencia tiene un error en ese campo?",
  },
  "tiempos-motonave": {
    title: "El berth time: la ecuación que define la rentabilidad",
    paragraphs: [
      "El tiempo que un buque permanece atracado en muelle (berth time) es la variable más costosa de la operación portuaria. El armador calcula un costo por hora de estadía (incluyendo tripulación, combustible, depreciación del buque y costo de oportunidad de la ruta). Si el terminal supera el tiempo estimado, genera cargos de demurrage que puede facturar al terminal o al cargador, dependiendo del contrato. En terminales de alta rotación, una hora de retraso no recuperada puede costar entre USD 5.000 y USD 50.000.",
      "La fórmula base del berth time es simple: Total de movimientos / Productividad por hora = Horas de operación. Pero el cálculo real incluye factores de ajuste: cambios de bodega (donde la grúa pierde 10-15 min), descansos de cuadrilla, interrupciones por mal tiempo, atrasos en liberación de contenedores IMO y tiempo administrativo de inicio y cierre de operación. Un planificador experto aplica un 'factor de eficiencia' del 70-85% sobre la capacidad nominal.",
      "Los KPIs de productividad portuaria están publicados por organismos internacionales (UNCTAD, World Bank). Un terminal de contenedores de clase mundial opera entre 35-45 MPH (moves per hour) por grúa. Los puertos colombianos han avanzado significativamente, pero aún hay brecha frente a terminales de Asia y Europa. Conocer estos benchmarks permite al profesional contextualizar los rendimientos locales y proponer mejoras con base en referentes globales.",
    ],
    tip: "Simulación: buque con 1.200 movimientos totales, 3 grúas STS, factor de eficiencia del 78%, productividad nominal de 32 MPH. Calcula el berth time esperado. Ahora simula que una grúa falla a la hora 6. ¿Cómo cambia el ETD?",
  },
  "zonas-por-carga": {
    title: "Slotting portuario: asignar bien desde el inicio",
    paragraphs: [
      "La asignación de zonas de almacenamiento en un terminal portuario es una decisión estratégica disfrazada de logística táctica. Cada contenedor que se ubica en una posición subóptima genera movimientos improductivos futuros: el reefer que se coloca lejos de los puntos de conexión obliga a una reubicación antes de su retiro; el contenedor IMO ubicado junto a alimentos genera un riesgo sanitario que requiere segregación de urgencia; el contenedor de exportación ubicado lejos del muelle agrega tiempo de recorrido al camión de terminal.",
      "El concepto de 'slotting' viene del almacenaje industrial y se aplica perfectamente al patio portuario: los contenedores de mayor rotación (que van a ser retirados pronto) deben estar en posiciones de fácil acceso; los contenedores de larga estadía pueden ir al fondo del patio; las cargas especiales (reefer, IMO, OOG) tienen zonas fijas con requisitos de infraestructura específica. Esta lógica reduce los movimientos improductivos hasta en un 30%.",
      "La congestión de patio es el mayor enemigo de la eficiencia portuaria. Cuando el patio supera el 80% de ocupación, los movimientos improductivos se multiplican exponencialmente porque los equipos necesitan mover contenedores para acceder a los que están debajo. Por eso, los terminales modernos gestionan el 'dwell time' activamente: cobran tarifas progresivas por estadía prolongada para incentivar el retiro rápido y mantener el patio fluido.",
    ],
    tip: "Dibuja un patio portuario simple con 200 slots. Asigna zonas: reefer (necesitan conexión eléctrica), IMO (distancia de seguridad de otras cargas), dry (alta rotación cerca del gate), vacíos (zona de menor acceso). ¿Cuántos slots usas de cada tipo?",
  },
  "baroti": {
    title: "BAROTI: el idioma universal de la estiba",
    paragraphs: [
      "El sistema Bay-Row-Tier (BAROTI) es el sistema de coordenadas que permite ubicar con exactitud cualquier contenedor en cualquier buque portacontenedores del mundo. Funciona como un sistema de tres dimensiones: Bay indica la posición longitudinal del buque (proa a popa, numerado con impares a bordo y pares en entre-cubierta); Row indica la posición transversal (del centro hacia los costados); Tier indica la altura (desde el fondo de bodega hasta la cubierta superior).",
      "Un contenedor identificado como '030286' está en Bay 03, Row 02, Tier 86. Esta codificación permite que el planificador de estiba en tierra, el oficial de carga del buque y el operador de grúa en muelle hablen exactamente del mismo contenedor, en el mismo lugar, sin ambigüedad. El plan de estiba completo de un buque portacontenedores moderno puede incluir 15.000-24.000 posiciones, todas identificadas con este sistema.",
      "Las restricciones del plan de estiba van más allá de las posiciones disponibles. El peso máximo por stack (apilamiento), la resistencia de cubierta en zonas de peso concentrado, la segregación IMO, la ubicación de reefer (con acceso a conexiones eléctricas), los contenedores de alta (que requieren posiciones con autorización especial) y la estabilidad hidrostática del buque son variables que el software de estiba procesa para generar un plan óptimo y seguro.",
    ],
    tip: "Practica con una grilla en papel: crea un bay simple de 4 rows y 3 tiers. Coloca 10 contenedores con restricciones (2 reefer, 1 IMO clase 3, 2 HC) y verifica que respetan: segregación, acceso a conexiones y límites de peso.",
  },
  "trinca": {
    title: "Trinca: el último eslabón de la seguridad marítima",
    paragraphs: [
      "La pérdida de contenedores en alta mar es un problema real y recurrente. La World Shipping Council estima que entre 1.000 y 6.000 contenedores se pierden anualmente en los océanos. Las causas son múltiples, pero la trinca deficiente es una de las principales: twistlocks mal colocados, lashing rods con tensión insuficiente, tornillos de tensión (turnbuckles) no apretados al torque correcto o equipos de trinca en estado de deterioro que ceden ante el movimiento del buque.",
      "Los equipos de trinca están estandarizados internacionalmente: el twistlock se fija en el corner casting del contenedor y gira 90° para bloquearse al siguiente contenedor o a la plataforma del buque; el lashing rod es una barra diagonal de acero que conecta el contenedor con un punto de anclaje en cubierta; el turnbuckle regula la tensión de la barra. Cada pieza tiene especificaciones de carga de trabajo (SWL) que no deben superarse, especialmente en condiciones de mar gruesa.",
      "El proceso de trinca y destrinca requiere entrenamiento específico y supervisión constante. El personal que realiza estas maniobras está expuesto a riesgos de atrapamiento, caídas y golpes por objetos en movimiento. El EPP mínimo incluye casco, chaleco, calzado de seguridad y arnés en posiciones elevadas. El supervisor debe verificar visualmente cada punto de trinca antes de declarar 'listo para zarpe'.",
    ],
    tip: "Investiga el incidente del 'Ever Given' en el Canal de Suez (2021). Aunque no fue por trinca, analiza cómo la planificación de estiba (peso, distribución) contribuyó al encallamiento. ¿Qué lecciones aplican al plan de estiba y trinca?",
  },
  "aduanas": {
    title: "La aduana: donde la logística encuentra la legalidad",
    paragraphs: [
      "El proceso aduanero en Colombia, gestionado por la DIAN, es el punto donde la logística portuaria se intersecta con la normativa tributaria y el control del comercio exterior. Para el operador portuario, entender la aduana no es opcional: los tiempos de despacho aduanero determinan el dwell time de la carga en patio, y las demoras aduaneras son la segunda causa más frecuente de congestión portuaria (después de la congestión de transporte terrestre).",
      "El proceso de importación sigue una secuencia clara: presentación de la declaración de importación (DUA), aforo (inspección documental o física), liquidación de tributos (arancel + IVA), pago y levante. El 'aforo' puede ser 'verde' (pasa sin inspección física), 'amarillo' (revisión documental) o 'rojo' (inspección física completa). El perfilamiento de riesgo que hace la DIAN determina el tipo de aforo, y los operadores con historial limpio pueden obtener beneficios como el Operador Económico Autorizado (OEA).",
      "Los errores documentales son la causa más frecuente de retención de carga: inconsistencias entre el valor declarado y el de factura, descripción incorrecta de mercancías, código arancelario equivocado o documentos faltantes. Cada error tiene un costo directo (almacenaje adicional en patio) e indirecto (tiempo del agente de aduana para correcciones, posibles multas y eventuales investigaciones por presunta infracción aduanera).",
    ],
    tip: "Consulta el portal de la DIAN (www.dian.gov.co) y busca el proceso de 'declaración de importación'. Identifica los documentos mínimos requeridos y el plazo máximo para presentar la declaración después del arribo.",
  },
  "incoterms-documentos": {
    title: "Incoterms 2020: el contrato invisible del comercio internacional",
    paragraphs: [
      "Los Incoterms (International Commercial Terms) son reglas publicadas por la Cámara de Comercio Internacional (ICC) que definen, en un acrónimo de tres letras, las responsabilidades, costos y riesgos que asumen vendedor y comprador en una transacción de comercio internacional. No son ley, pero cuando se incorporan a un contrato de compraventa, tienen fuerza contractual. La versión vigente es Incoterms 2020, que introdujo modificaciones importantes respecto a 2010.",
      "El punto más crítico de cualquier Incoterm es la transferencia del riesgo: el momento exacto en que el riesgo de pérdida o daño de la mercancía pasa del vendedor al comprador. En FOB, ese momento es cuando la mercancía está a bordo en el puerto de embarque; en CIF, el vendedor asume el flete y el seguro, pero el riesgo ya pasó al comprador cuando la mercancía estaba a bordo. Este malentendido común —creer que en CIF el vendedor asume el riesgo hasta destino— ha generado disputas millonarias en comercio internacional.",
      "Los documentos asociados a los Incoterms forman el 'paquete documental' de la operación: el BL (o AWB en aéreo) prueba el contrato de transporte; la factura comercial es la base para la declaración aduanera; el packing list detalla la carga para la inspección; el certificado de origen puede otorgar beneficios arancelarios; el certificado de seguro (en CIF/CIP) prueba la cobertura contratada. La coherencia entre todos estos documentos es fundamental para un despacho aduanero ágil.",
    ],
    tip: "Analiza un caso concreto: un vendedor colombiano exporta flores a Holanda en términos FOB Bogotá. ¿Es correcto usar FOB para una exportación aérea? ¿Qué Incoterm sería más apropiado y por qué? (Pista: FOB es solo para transporte marítimo).",
  },
};

/* ── Resumen expandible ─────────────────────────────────────────── */
function RichSummaryBlock({ lessonId, moduleTema }: { lessonId: string; moduleTema: string }) {
  const [expanded, setExpanded] = useState(false);
  const data = RICH_SUMMARIES[lessonId];
  if (!data) return null;

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2">
      {/* Header clicable */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/3 transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-violet-500/30 text-lg">
            📖
          </div>
          <div>
            <div className="text-sm font-bold text-white/90">{data.title}</div>
            <div className="text-xs text-white/45 mt-0.5">
              {expanded ? "Haz clic para colapsar el resumen" : "Haz clic para leer el resumen completo del tema"}
            </div>
          </div>
        </div>
        <div className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/50 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}>
          ▼
        </div>
      </button>

      {/* Contenido expandible */}
      {expanded && (
        <div className="border-t border-white/8 px-5 pb-5 pt-4">
          {/* Módulo tag */}
          <div className="mb-4 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
            Módulo: {moduleTema}
          </div>

          {/* Párrafos */}
          <div className="space-y-4">
            {data.paragraphs.map((p, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-2 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-[10px] font-black text-white/60">
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed text-white/70">{p}</p>
              </div>
            ))}
          </div>

          {/* Tip */}
          <div className="mt-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-2">
              <span>💡</span>
              <span>Para profundizar</span>
            </div>
            <p className="text-sm leading-relaxed text-white/65">{data.tip}</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Vista principal ────────────────────────────────────────────── */
export function LessonView({ module, lesson }: { module: Module; lesson: Lesson }) {
  return (
    <div className="space-y-5">
      {/* ── Header ── */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl">
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="soft">{module.dayLabel}</Badge>
            <Badge variant="outline">{module.schedule}</Badge>
            <Badge variant="soft">👨‍🏫 {module.instructor}</Badge>
          </div>
          <h2 className="mt-4 text-balance text-2xl font-black tracking-tight text-white md:text-3xl">
            {lesson.title}
          </h2>
          <p className="mt-3 max-w-3xl text-pretty text-sm leading-relaxed text-white/65">
            {lesson.summary}
          </p>
          {/* Quick stats */}
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { v: lesson.outcomes.length, l: "Objetivos", c: "text-sky-400" },
              { v: lesson.keyConcepts.length, l: "Conceptos", c: "text-indigo-400" },
              { v: lesson.videos.length, l: "Videos", c: "text-red-400" },
              { v: lesson.glossary.length, l: "Términos", c: "text-violet-400" },
              { v: lesson.activities.length, l: "Actividades", c: "text-emerald-400" },
              { v: lesson.resources.length, l: "Recursos", c: "text-amber-400" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-center">
                <div className={`text-lg font-black ${s.c}`}>{s.v}</div>
                <div className="text-[10px] text-white/45">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Resumen expandible ── */}
      <RichSummaryBlock lessonId={lesson.id} moduleTema={module.theme} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_400px]">
        {/* ── COLUMNA IZQUIERDA ── */}
        <div className="space-y-5">
          {/* Resultados */}
          <Card>
            <CardHeader>
              <SectionTitle icon="🎯" title="Resultados de Aprendizaje"
                subtitle="Al finalizar este tema, el estudiante podrá demostrar comprensión conceptual y criterio operativo." />
            </CardHeader>
            <CardBody>
              <div className="space-y-2.5">
                {lesson.outcomes.map((o, i) => (
                  <div key={i} className="flex gap-3 rounded-xl border border-white/10 bg-black/20 p-3.5">
                    <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gradient-to-br from-sky-500/30 to-indigo-500/30 text-xs font-black text-white/80">{i + 1}</div>
                    <p className="text-sm leading-relaxed text-white/75">{o}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Conceptos clave */}
          <Card>
            <CardHeader>
              <SectionTitle icon="💡" title="Conceptos Clave"
                subtitle="Vocabulario y principios que deben quedar anclados para seguir avanzando en el curso." />
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {lesson.keyConcepts.map((c, idx) => (
                  <div key={idx} className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4">
                    <div className="text-xs font-bold text-indigo-400 mb-1">Concepto {idx + 1}</div>
                    <div className="text-sm text-white/75 leading-relaxed">{c}</div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Actividades */}
          <Card>
            <CardHeader>
              <SectionTitle icon="✏️" title="Actividades Sugeridas"
                subtitle="Propuestas para clase o tarea que conectan teoría con operación, decisiones y documentación." />
            </CardHeader>
            <CardBody>
              <div className="space-y-3">
                {lesson.activities.map((a, i) => (
                  <div key={i} className="flex gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                    <span className="text-lg flex-none">🔬</span>
                    <p className="text-sm leading-relaxed text-white/75">{a}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Glosario */}
          <Card>
            <CardHeader>
              <SectionTitle icon="📚" title="Glosario Técnico"
                subtitle="Definiciones precisas para hablar el mismo idioma operacional desde el primer día." />
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {lesson.glossary.map((g) => (
                  <div key={g.term} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-black text-white/90">{g.term}</div>
                    <div className="mt-1.5 h-px bg-white/10" />
                    <div className="mt-2 text-sm leading-relaxed text-white/60">{g.def}</div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Recomendaciones */}
          <Card>
            <CardHeader>
              <SectionTitle icon="👨‍🏫" title="Recomendaciones del Docente"
                subtitle="Enfoque didáctico para aprovechar al máximo la sesión y evitar errores típicos." />
            </CardHeader>
            <CardBody>
              <div className="space-y-2.5">
                {lesson.instructorTips.map((t, i) => (
                  <div key={i} className="flex gap-3 text-sm text-white/75">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-violet-400/60" />
                    <span className="leading-relaxed">{t}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Checklist */}
          <Card>
            <CardHeader>
              <SectionTitle icon="✅" title="Checklist de Preparación"
                subtitle="Antes de clase, verifica que puedes responder estas preguntas." />
            </CardHeader>
            <CardBody>
              <div className="space-y-2">
                {[
                  `¿Puedo explicar con mis propias palabras qué es "${lesson.title.split(":")[0].split("(")[0].trim()}"?`,
                  "¿Identifiqué al menos 3 términos del glosario que no conocía antes?",
                  "¿Pude relacionar este tema con un riesgo operativo concreto?",
                  "¿Vi al menos un video de apoyo y anoté los conceptos clave?",
                  "¿Leí el resumen completo del tema (sección 'Contenido de Estudio')?",
                  "¿Relacioné este tema con los módulos anteriores del curso?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-3">
                    <div className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded border border-white/20 bg-white/5 text-[10px] text-white/40">{i + 1}</div>
                    <p className="text-xs leading-relaxed text-white/60">{q}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        {/* ── COLUMNA DERECHA ── */}
        <div className="space-y-5">
          {/* Infografía */}
          <LessonInfografia lessonId={lesson.id} />

          {/* Videos */}
          <div className="space-y-4">
            <div className="px-1">
              <div className="flex items-center gap-2 text-sm font-bold text-white/90">
                <span>🎬</span>
                <span>Videos de Apoyo</span>
              </div>
              <div className="mt-1 text-xs text-white/45">
                Reproducibles directamente aquí. También puedes abrirlos en YouTube.
              </div>
            </div>
            {lesson.videos.map((v) => (
              <YouTubeEmbed key={v.youtubeId} youtubeId={v.youtubeId} title={v.title} description={v.description} />
            ))}
          </div>

          {/* Recursos en español ← NUEVO COMPONENTE */}
          <ResourcesSection resources={lesson.resources} />
        </div>
      </div>
    </div>
  );
}
