export type VideoLink = {
  title: string;
  youtubeId: string;
  description?: string;
};

export type ResourceLink = { title: string; url: string; description?: string; tag?: string };

export type Lesson = {
  id: string;
  title: string;
  summary: string;
  outcomes: string[];
  keyConcepts: string[];
  instructorTips: string[];
  activities: string[];
  videos: VideoLink[];
  resources: ResourceLink[];
  glossary: { term: string; def: string }[];
};

export type Module = {
  id: string;
  dayLabel: string;
  schedule: string;
  instructor: string;
  theme: string;
  lessons: Lesson[];
};

export const courseTitle = "Logística Portuaria";
export const courseSubtitle =
  "Esquema modular con material de apoyo para navegar temas, reforzar conceptos y conectar teoría con operación real.";

export const modules: Module[] = [
  {
    id: "dia-1",
    dayLabel: "Día 1",
    schedule: "19:00 – 21:30",
    instructor: "Maikol Mell Ferrer",
    theme: "Introducción a la Logística Portuaria",
    lessons: [
      {
        id: "estructura-portuaria",
        title: "Estructura portuaria en Colombia y marco normativo (Ley 1ª de 1991)",
        summary:
          "Panorama del sistema portuario colombiano: actores, roles, concesiones y obligaciones. Lectura operativa del marco legal para comprender cómo se habilita, regula y supervisa la actividad portuaria en Colombia.",
        outcomes: [
          "Identificar los componentes del sistema portuario (sociedades portuarias, terminales, usuarios, operadores).",
          "Explicar la Ley 1ª de 1991 en lenguaje operativo: qué regula y por qué es clave.",
          "Relacionar norma–proceso: permisos, concesiones, responsabilidades y control.",
        ],
        keyConcepts: [
          "Sistema portuario: concesión, operación, servicios a la nave y a la carga",
          "Ley 1ª de 1991: modernización, privatización operativa, régimen de concesiones",
          "Cadena logística: puerto como nodo multimodal y de control",
        ],
        instructorTips: [
          "Conecta la norma con casos reales: apertura de un terminal, inspecciones, sanciones.",
          "Usa un mapa mental: Actor → Rol → Documento → Riesgo.",
        ],
        activities: [
          "Actividad guiada: construir un 'mapa de actores' del puerto (quién autoriza, quién opera, quién inspecciona).",
          "Mini-caso: ¿qué pasa si un terminal incumple condiciones de concesión? Definir impactos.",
        ],
        videos: [
          {
            title: "Logística Portuaria – Introducción general",
            youtubeId: "9GDMlwpb6ac",
            description: "Visión general del sistema de logística portuaria, sus componentes y relevancia en el comercio internacional.",
          },
          {
            title: "El sistema portuario y su funcionamiento",
            youtubeId: "UOSjLiUOaQ0",
            description: "Explicación del funcionamiento del sistema portuario: actores, roles y flujos operativos.",
          },
        ],
        resources: [
          {
            title: "Ley 1ª de 1991 – Norma de modernización del sistema portuario colombiano",
            url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=291",
            description: "Texto oficial completo de la Ley Primera de 1991. Establece el régimen de concesiones, los actores del sistema portuario, sus responsabilidades y el marco de habilitación de terminales en Colombia.",
            tag: "Norma oficial",
          },
          {
            title: "DIMAR – Dirección General Marítima de Colombia",
            url: "https://www.dimar.mil.co/",
            description: "Portal oficial de la autoridad marítima nacional. Accede a normativas, circulares, reglamentos de seguridad, inspecciones y gestión de capitanías de puerto en Colombia.",
            tag: "Entidad oficial",
          },
        ],
        glossary: [
          {
            term: "Concesión portuaria",
            def: "Autorización estatal para administrar/explotar infraestructura portuaria bajo condiciones, plazos y obligaciones.",
          },
          {
            term: "Terminal portuaria",
            def: "Unidad operativa donde se atienden naves y se manipulan/almacenan cargas con equipos y procesos definidos.",
          },
        ],
      },
      {
        id: "autoridades",
        title: "Autoridades portuarias y control (DIMAR, Migración, Salud Pública y otras)",
        summary:
          "Reconocimiento de autoridades y entidades de control que intervienen en el arribo de naves, el flujo de tripulantes/pasajeros y la gestión sanitaria/seguridad. Cada autoridad tiene un rol específico que determina los tiempos y documentos requeridos.",
        outcomes: [
          "Diferenciar autoridad marítima, migratoria, sanitaria y aduanera.",
          "Explicar cómo se integran los controles en la secuencia de arribo y zarpe.",
          "Identificar puntos críticos: demoras, documentación incompleta, inspecciones.",
        ],
        keyConcepts: [
          "Arribo/Zarpe: permisos, inspecciones y coordinación interinstitucional",
          "Gestión del riesgo: seguridad, sanidad, control migratorio y aduanero",
          "Ventana única, documentación y trazabilidad operativa",
        ],
        instructorTips: [
          "Usa una línea de tiempo del arribo: Pre-arribo → Fondeo → Atraque → Operación → Zarpe.",
          "Resalta el costo de la demora y cómo prevenirla con calidad documental.",
        ],
        activities: [
          "Checklist: documentación típica por autoridad (qué valida cada una).",
          "Simulación: reunión de coordinación interinstitucional para un arribo con carga sensible.",
        ],
        videos: [
          {
            title: "Proceso de arribo de buques y control portuario",
            youtubeId: "6EJDvOTBqTM",
            description: "Detalle del proceso de arribo, comunicaciones, inspecciones y coordinación entre autoridades en un puerto.",
          },
          {
            title: "Control marítimo y autoridades en puertos",
            youtubeId: "7dJgSVEk-e0",
            description: "Visión de los roles de las distintas autoridades que intervienen en la operación portuaria.",
          },
        ],
        resources: [
          {
            title: "Migración Colombia – Control migratorio en puertos y fronteras",
            url: "https://www.migracioncolombia.gov.co/",
            description: "Portal oficial de la entidad responsable del control de ingreso y salida de tripulantes y pasajeros en puertos colombianos. Consulta requisitos, visas y permisos de permanencia.",
            tag: "Entidad oficial",
          },
          {
            title: "INVIMA – Autoridad sanitaria para control portuario",
            url: "https://www.invima.gov.co/",
            description: "Instituto Nacional de Vigilancia de Medicamentos y Alimentos: supervisa el ingreso de alimentos, medicamentos, cosméticos y productos regulados a través de puertos marítimos y fluviales.",
            tag: "Entidad oficial",
          },
        ],
        glossary: [
          {
            term: "Pre-arribo",
            def: "Conjunto de coordinaciones y avisos previos a la llegada de la nave para minimizar demoras y riesgos.",
          },
          {
            term: "Fondeo",
            def: "Posición de espera de la nave anclada fuera del muelle mientras se gestiona la autorización de atraque.",
          },
        ],
      },
    ],
  },
  {
    id: "dia-2",
    dayLabel: "Día 2",
    schedule: "19:00 – 21:30",
    instructor: "Maikol Mell Ferrer",
    theme: "Introducción a terminales portuarias",
    lessons: [
      {
        id: "tipos-terminales",
        title: "Tipos de terminales portuarias",
        summary:
          "Comparación funcional y operativa entre terminales de contenedores, graneles, carga general, Ro-Ro y multipropósito. Qué cambia en procesos, equipos y KPIs según el tipo de terminal.",
        outcomes: [
          "Clasificar terminales por tipo de carga y servicio.",
          "Entender impactos del tipo de terminal en seguridad, productividad y costos.",
          "Seleccionar indicadores base por tipo de operación.",
        ],
        keyConcepts: [
          "Terminal especializado vs multipropósito: ventajas y desventajas",
          "Flujos: recepción → patio → muelle → nave (y viceversa)",
          "KPIs: movimientos/hora, dwell time, productividad de grúa",
        ],
        instructorTips: [
          "Apoya con fotos/diagramas: patio de contenedores vs silo/granel.",
          "Introduce el concepto de 'cuello de botella' por tipo de terminal.",
        ],
        activities: [
          "Ejercicio: identificar el tipo de terminal ideal para 4 productos (banano, carbón, vehículos, químicos).",
        ],
        videos: [
          {
            title: "Tipos de terminales portuarias y sus operaciones",
            youtubeId: "uSzQzVHiHAM",
            description: "Clasificación de terminales portuarias: contenedores, graneles sólidos y líquidos, carga general y Ro-Ro.",
          },
          {
            title: "How Container Terminals Work",
            youtubeId: "5lCj-lYzXFE",
            description: "Funcionamiento de un terminal de contenedores moderno, desde el arribo del buque hasta la salida de camiones.",
          },
        ],
        resources: [
          {
            title: "UNCTAD – Desempeño portuario y logística marítima mundial",
            url: "https://unctad.org/topic/transport-and-trade-logistics/ports",
            description: "Conferencia de las Naciones Unidas sobre Comercio y Desarrollo: estadísticas globales, indicadores de productividad portuaria, metodologías de medición y guías para la mejora del desempeño en terminales a nivel mundial.",
            tag: "Organismo internacional",
          },
        ],
        glossary: [
          {
            term: "Dwell time",
            def: "Tiempo promedio que la carga permanece en patio/almacén antes de salir del terminal.",
          },
          {
            term: "Terminal Ro-Ro",
            def: "Terminal especializado en carga rodante (vehículos, maquinaria) que entra y sale de la nave por sus propios medios.",
          },
        ],
      },
      {
        id: "muelles-equipos",
        title: "Tipos de muelles y equipos portuarios",
        summary:
          "Muelle, atraque y equipos: grúas STS, RTG/RMG, reach stacker, montacargas, tolvas, fajas, spreaders. Cómo se asignan según carga y plan de trabajo para maximizar productividad y seguridad.",
        outcomes: [
          "Distinguir muelles por configuración y uso.",
          "Asociar equipos con riesgos y capacidades operativas.",
          "Interpretar una asignación básica de recursos por operación.",
        ],
        keyConcepts: [
          "Capacidad vs productividad vs seguridad en el muelle",
          "Mantenimiento y disponibilidad operativa de equipos",
          "Plan de equipos: turnos, redundancia, restricciones climáticas",
        ],
        instructorTips: [
          "Incluye micro-demostración: cómo impacta una grúa fuera de servicio en el ETA/ETD.",
        ],
        activities: [
          "Actividad: matriz 'equipo–carga–riesgo–control' para 5 equipos.",
        ],
        videos: [
          {
            title: "Equipos portuarios: STS, RTG y Reach Stacker",
            youtubeId: "Z6H3LXHFhHU",
            description: "Demostración visual de los principales equipos de un terminal portuario moderno.",
          },
          {
            title: "Port cranes and terminal equipment explained",
            youtubeId: "hKBt8e_hOMo",
            description: "Funcionamiento de grúas ship-to-shore y equipos de patio en terminales de contenedores.",
          },
        ],
        resources: [
          {
            title: "Liebherr – Catálogo oficial de equipos y grúas portuarias",
            url: "https://www.liebherr.com/es/col/productos/gruas-maritimas/gruas-portuarias/gruas-portuarias.html",
            description: "Fichas técnicas oficiales de grúas STS, RTG, reach stacker y equipos de manipulación portuaria del fabricante líder mundial. Incluye especificaciones, imágenes y casos de uso.",
            tag: "Referencia técnica",
          },
        ],
        glossary: [
          {
            term: "STS (Ship-to-Shore)",
            def: "Grúa principal para mover contenedores entre nave y muelle. Es el equipo de mayor capacidad y productividad.",
          },
          {
            term: "RTG (Rubber Tyred Gantry)",
            def: "Grúa pórtico sobre llantas para patio de contenedores. Apila y recupera contenedores en bloques.",
          },
        ],
      },
      {
        id: "zonas-almacenamiento",
        title: "Zonas de almacenamiento portuario",
        summary:
          "Diseño de patios y bodegas: segregación por tipo de carga, compatibilidad, peligrosidad, rotación, control documental y trazabilidad. El patio es el corazón operativo entre el muelle y la ciudad.",
        outcomes: [
          "Definir criterios de segregación y layout de patio.",
          "Explicar el rol del almacén/patio en la continuidad operativa.",
          "Identificar riesgos por mala asignación de zonas.",
        ],
        keyConcepts: [
          "Patio como buffer operacional entre muelle y transporte terrestre",
          "Segregación: IMO, temperatura, compatibilidad química",
          "Trazabilidad: ubicaciones, inventario, gates de entrada/salida",
        ],
        instructorTips: [
          "Conecta con tiempos: recepción/gate congestion y dwell.",
        ],
        activities: [
          "Diseño rápido: dibujar un layout simple con zonas (reefer, IMO, general, vacío).",
        ],
        videos: [
          {
            title: "Container yard planning and management",
            youtubeId: "4d6LKjBmHMY",
            description: "Planificación y gestión del patio de contenedores: zonas, flujos y trazabilidad.",
          },
        ],
        resources: [
          {
            title: "OMI – Código IMDG y reglas de almacenamiento de mercancías peligrosas",
            url: "https://www.imo.org/es/OurWork/Safety/Pages/DangerousGoods-default.aspx",
            description: "Organización Marítima Internacional: normativa oficial del Código IMDG para transporte marítimo de sustancias peligrosas. Incluye clases de peligro, embalaje, etiquetado, segregación y reglas de almacenamiento en patio.",
            tag: "Norma internacional",
          },
        ],
        glossary: [
          {
            term: "Reefer",
            def: "Contenedor refrigerado que requiere conexión eléctrica y control constante de temperatura.",
          },
          {
            term: "Gate",
            def: "Puerta de entrada/salida del terminal donde se registra e inspecciona la carga y el transporte.",
          },
        ],
      },
    ],
  },
  {
    id: "seccion-3",
    dayLabel: "Sección 3",
    schedule: "19:00 – 21:30",
    instructor: "Maikol Mell Ferrer",
    theme: "Cargas portuarias y clasificación de contenedores",
    lessons: [
      {
        id: "tipos-carga",
        title: "Tipos de cargas portuarias",
        summary:
          "Clasificación por naturaleza y manipulación: contenedorizada, granel sólido, granel líquido, carga general, proyecto, Ro-Ro. Implicaciones en embalaje, documentación, equipos y riesgos operativos.",
        outcomes: [
          "Clasificar cargas según operación y tratamiento requerido.",
          "Seleccionar criterios de manipulación segura por tipo de carga.",
          "Relacionar carga–equipo–documento–riesgo en una sola vista.",
        ],
        keyConcepts: [
          "Unidad de carga y embalaje: pallet, big-bag, contenedor, granel",
          "Requisitos de estiba y segregación por naturaleza de la carga",
          "Daños típicos: humedad, contaminación, golpes, derrames, temperatura",
        ],
        instructorTips: [
          "Usa ejemplos locales (banano, café, carbón, combustibles, químicos).",
        ],
        activities: [
          "Taller: 'ficha de carga' (características, riesgos, controles, equipo recomendado).",
        ],
        videos: [
          {
            title: "Tipos de carga en logística portuaria",
            youtubeId: "F8wTZyT5C8g",
            description: "Clasificación de las cargas portuarias: contenedorizada, granel, general y especial.",
          },
          {
            title: "Bulk cargo, general cargo y contenedores – diferencias",
            youtubeId: "oPgxf0F24oI",
            description: "Comparación entre tipos de carga y sus implicaciones en equipos, documentación y riesgos.",
          },
        ],
        resources: [
          {
            title: "Cámara de Comercio Internacional – Reglas Incoterms 2020 (versión oficial)",
            url: "https://iccwbo.org/business-solutions/incoterms-rules/",
            description: "Sitio oficial de la CCI con la definición, alcance y responsabilidades de cada uno de los 11 Incoterms 2020. Recurso de referencia para vendedores, compradores, agentes de carga y operadores logísticos.",
            tag: "Norma internacional",
          },
        ],
        glossary: [
          {
            term: "Carga proyecto",
            def: "Carga sobredimensionada o de gran peso que requiere ingeniería de transporte y maniobras especiales.",
          },
          {
            term: "Granel sólido",
            def: "Carga a granel sin embalaje: minerales, cereales, carbón, fertilizantes, etc.",
          },
        ],
      },
      {
        id: "carga-peligrosa",
        title: "Cargas peligrosas (IMO/IMDG): identificación y controles",
        summary:
          "Principios para clasificar mercancías peligrosas, etiquetas, documentación, segregación y respuesta a incidentes. Enfoque práctico para patio, muelle y a bordo.",
        outcomes: [
          "Reconocer las 9 clases IMO y señales de riesgo (placards).",
          "Aplicar controles básicos de segregación y almacenamiento.",
          "Definir acciones iniciales ante derrames/incidentes IMO.",
        ],
        keyConcepts: [
          "IMDG: clases de peligro, UN number, placards y etiquetas",
          "Compatibilidad y segregación de mercancías peligrosas",
          "Gestión de emergencias, comunicación y ERG (Emergency Response Guide)",
        ],
        instructorTips: [
          "Trabaja con 'qué harías si…' para activar pensamiento de seguridad.",
        ],
        activities: [
          "Ejercicio: leer una etiqueta IMO y deducir controles mínimos de manipulación.",
          "Caso: derrame en patio—definir perímetro, notificación y mitigación.",
        ],
        videos: [
          {
            title: "Mercancías peligrosas – Código IMDG explicado",
            youtubeId: "1kqVjrW6krc",
            description: "Introducción al Código IMDG: clases, UN numbers, placards y reglas de segregación.",
          },
          {
            title: "Dangerous Goods – 9 Classes explained",
            youtubeId: "L5lHtDiM8Ik",
            description: "Las 9 clases de mercancías peligrosas, sus características y riesgos específicos.",
          },
        ],
        resources: [
          {
            title: "OMI – Código IMDG: clasificación y control de mercancías peligrosas",
            url: "https://www.imo.org/es/OurWork/Safety/Pages/DangerousGoods-default.aspx",
            description: "Norma internacional de la Organización Marítima Internacional para el transporte marítimo de sustancias peligrosas. Detalla las 9 clases de peligro, identificación por número ONU, etiquetado, segregación en buques y protocolos de emergencia.",
            tag: "Norma internacional",
          },
        ],
        glossary: [
          {
            term: "UN Number",
            def: "Número de identificación internacional de una sustancia peligrosa para transporte (ej. UN 1203 = gasolina).",
          },
          {
            term: "Placard",
            def: "Señal/etiqueta estandarizada que identifica la clase de peligro de una mercancía IMO.",
          },
        ],
      },
      {
        id: "clasificacion-contenedores",
        title: "Clasificación de contenedores y usos operativos",
        summary:
          "Dry, reefer, open top, flat rack, tank, high cube, pallet wide. Selección según carga, restricciones y estiba. Lectura operativa de dimensiones y capacidades reales.",
        outcomes: [
          "Diferenciar tipos de contenedor por uso y características.",
          "Identificar restricciones típicas (altura, temperatura, ventilación, peso máximo).",
          "Relacionar tipo de contenedor con estiba y trinca a bordo.",
        ],
        keyConcepts: [
          "Dimensiones estándar ISO: 20', 40', 40'HC y variantes",
          "Capacidad, tara, payload y restricciones de peso",
          "Requisitos operativos de reefer y tanque (IMO)",
        ],
        instructorTips: [
          "Incluye ejemplos de selección: ¿qué contenedor usar para maquinaria, fruta, químicos?",
        ],
        activities: [
          "Actividad: 'elige el contenedor' para 6 escenarios distintos y justifica la elección.",
        ],
        videos: [
          {
            title: "Tipos de contenedores – Para qué sirve cada uno",
            youtubeId: "1m1EsOBpVaA",
            description: "Guía visual de todos los tipos de contenedores: dry, reefer, open top, flat rack, tank y high cube.",
          },
          {
            title: "Container types and specifications",
            youtubeId: "Np5HQMhPFrM",
            description: "Especificaciones técnicas y usos de los principales tipos de contenedor ISO.",
          },
        ],
        resources: [
          {
            title: "ISO – Normas técnicas para contenedores de transporte de carga",
            url: "https://www.iso.org/committee/45316.html",
            description: "Comité técnico de la Organización Internacional de Normalización responsable de los estándares ISO para contenedores de carga: dimensiones, resistencia estructural, especificaciones de esquineros y marquillas de identificación.",
            tag: "Norma internacional",
          },
        ],
        glossary: [
          {
            term: "High Cube (HC)",
            def: "Contenedor con mayor altura interior (2,70 m vs 2,39 m estándar), comúnmente en 40'.",
          },
          {
            term: "Flat Rack",
            def: "Contenedor plataforma con laterales abatibles, ideal para cargas sobredimensionadas.",
          },
        ],
      },
    ],
  },
  {
    id: "dia-8",
    dayLabel: "Día 8",
    schedule: "19:00 – 21:30",
    instructor: "Maikol Mell Ferrer",
    theme: "Planificación de las operaciones portuarias",
    lessons: [
      {
        id: "pre-arribo",
        title: "Planificación pre-arribo de la motonave",
        summary:
          "Cómo preparar la operación antes de que la nave llegue: coordinación, documentación, estimaciones, ventanas, riesgos y plan preliminar de recursos. La mejor productividad se gana antes del atraque.",
        outcomes: [
          "Construir una lista de verificación pre-arribo completa.",
          "Identificar riesgos de demora y sus mitigaciones.",
          "Definir un plan preliminar de recursos por tipo de carga.",
        ],
        keyConcepts: [
          "ETA, ventana de atraque y restricciones operativas",
          "Plan de muelle y patio: sincronización de recursos",
          "Coordinación con autoridades, naviera y agente marítimo",
        ],
        instructorTips: [
          "Enfatiza: la mejor productividad se gana antes del atraque.",
        ],
        activities: [
          "Plantilla: 'Plan pre-arribo' con supuestos, riesgos y responsables.",
        ],
        videos: [
          {
            title: "Planificación de operaciones en terminales portuarias",
            youtubeId: "aN9M1fEjnhQ",
            description: "Cómo se planifican las operaciones en un terminal portuario antes del arribo del buque.",
          },
          {
            title: "Berth planning and vessel scheduling",
            youtubeId: "8iVMbU05E5o",
            description: "Proceso de planificación de atraque y programación de buques en terminales de contenedores.",
          },
        ],
        resources: [
          {
            title: "UNCTAD – Indicadores de desempeño portuario (KPIs) para terminales",
            url: "https://unctad.org/system/files/official-document/dtlkdb2016d1_en.pdf",
            description: "Documento técnico de UNCTAD con la metodología oficial para medir y comparar indicadores clave de desempeño en terminales portuarias: movimientos por hora de grúa, tiempo de estadía de buques, ocupación de patio y productividad por berth.",
            tag: "Organismo internacional",
          },
        ],
        glossary: [
          {
            term: "ETA",
            def: "Estimated Time of Arrival: hora estimada de arribo de la nave al puerto.",
          },
          {
            term: "ETD",
            def: "Estimated Time of Departure: hora estimada de zarpe de la nave del puerto.",
          },
        ],
      },
      {
        id: "puesto-atraque",
        title: "Asignación del puesto de atraque de la motonave",
        summary:
          "Criterios para asignar muelle: eslora/calado, prioridades, compatibilidad con carga/equipos, interferencias, mareas y ventanas operativas. Impacto directo en productividad y costos.",
        outcomes: [
          "Aplicar criterios técnicos para decidir la asignación de atraque.",
          "Reconocer conflictos típicos en la programación de muelle.",
          "Explicar el impacto del atraque en productividad y seguridad.",
        ],
        keyConcepts: [
          "Berth window: ventana de disponibilidad de muelle",
          "Restricciones de calado, eslora y maniobra",
          "Interfaz muelle–patio: flujo de camiones y trenes",
        ],
        instructorTips: [
          "Usa un diagrama simple de muelle con dos buques y recursos limitados.",
        ],
        activities: [
          "Ejercicio: resolver un 'rompecabezas' de asignación de muelle con restricciones reales.",
        ],
        videos: [
          {
            title: "Berth allocation and port scheduling",
            youtubeId: "lk3GxisMHhA",
            description: "Cómo se asignan los puestos de atraque en un terminal portuario con múltiples buques.",
          },
        ],
        resources: [
          {
            title: "DIMAR – Glosario técnico náutico y portuario oficial",
            url: "https://www.dimar.mil.co/content/glosario",
            description: "Glosario oficial de la Dirección General Marítima de Colombia con definiciones precisas de términos náuticos y portuarios: calado, eslora, manga, francobordo, fondeo, practicaje y maniobra de atraque.",
            tag: "Entidad oficial",
          },
        ],
        glossary: [
          {
            term: "Calado",
            def: "Profundidad que alcanza el casco bajo la línea de flotación; determina acceso y posibilidad de atraque.",
          },
          {
            term: "Eslora",
            def: "Longitud total del buque de proa a popa; condiciona la disponibilidad de muelle.",
          },
        ],
      },
      {
        id: "equipos-herramientas",
        title: "Planificación de equipos y herramientas según tipo de carga",
        summary:
          "Asignación táctica de equipos, turnos, cuadrillas, herramientas de izaje y controles de seguridad. Cómo traducir el tipo de carga en un plan concreto de recursos.",
        outcomes: [
          "Definir un plan de equipos por operación con criterios técnicos.",
          "Introducir reservas y contingencias operativas.",
          "Reconocer la relación equipo–productividad–costo.",
        ],
        keyConcepts: [
          "Disponibilidad de equipos y planes de mantenimiento",
          "Cuadrillas por turno y herramientas especializadas",
          "Capacidad efectiva vs nominal: factores de ajuste",
        ],
        instructorTips: [
          "Explica con números simples: movimientos/hora y horas-hombre por operación.",
        ],
        activities: [
          "Actividad: armar un plan de recursos para un buque portacontenedores mediano.",
        ],
        videos: [
          {
            title: "Port operations planning and equipment management",
            youtubeId: "cxhnLi9VRBU",
            description: "Planificación de recursos y equipos para operaciones portuarias eficientes.",
          },
        ],
        resources: [
          {
            title: "OIT – Seguridad y salud en el trabajo portuario",
            url: "https://www.ilo.org/global/topics/safety-and-health-at-work/lang--es/index.htm",
            description: "Organización Internacional del Trabajo: guías técnicas, convenios y normativas de seguridad y salud para trabajadores portuarios. Incluye manipulación de cargas, uso de equipos de izaje, gestión del riesgo y prevención de accidentes.",
            tag: "Organismo internacional",
          },
        ],
        glossary: [
          {
            term: "Capacidad efectiva",
            def: "Producción real considerando restricciones: turnos, fallas de equipo, clima e interferencias.",
          },
          {
            term: "Cuadrilla",
            def: "Grupo de trabajadores asignados a una operación específica (muelle, estiba, patio).",
          },
        ],
      },
    ],
  },
  {
    id: "dia-9",
    dayLabel: "Día 9",
    schedule: "19:00 – 21:30",
    instructor: "Maikol Mell Ferrer",
    theme: "Coordinación de las operaciones portuarias",
    lessons: [
      {
        id: "coordinacion-personal",
        title: "Coordinación del personal según tipo de operación",
        summary:
          "Roles operativos (muelle, patio, gate, seguridad, mantenimiento) y coordinación por turnos. Comunicación efectiva para minimizar errores y tiempos muertos en operaciones continuas.",
        outcomes: [
          "Definir roles y responsabilidades por tipo de operación.",
          "Diseñar un brief de turno (handover) efectivo.",
          "Identificar fallas típicas por mala coordinación y cómo prevenirlas.",
        ],
        keyConcepts: [
          "Briefing / toolbox talk: reunión de arranque de turno",
          "RACI operativo: Responsable, Aprobador, Consultado, Informado",
          "Gestión del cambio y escalamiento de incidentes",
        ],
        instructorTips: [
          "Haz visible la comunicación: radio, bitácora, tablero de control, alertas.",
        ],
        activities: [
          "Simulación: reunión de arranque de turno con riesgos, metas y asignación de roles.",
        ],
        videos: [
          {
            title: "Coordinación de operaciones en terminales portuarios",
            youtubeId: "R7kZzRfzVKM",
            description: "Cómo se coordinan los equipos, turnos y operaciones en un terminal portuario moderno.",
          },
          {
            title: "Port operations coordination and teamwork",
            youtubeId: "3wqHFNM3Q00",
            description: "Mejores prácticas de coordinación operacional y comunicación en puertos.",
          },
        ],
        resources: [
          {
            title: "PMI – Guía práctica de la matriz RACI para gestión de equipos operativos",
            url: "https://www.pmi.org/learning/library/make-raci-work-8252",
            description: "Guía del Project Management Institute para implementar correctamente la matriz RACI en entornos operativos: cómo definir quién es Responsable, Aprobador, Consultado e Informado en operaciones portuarias por turno.",
            tag: "Herramienta de gestión",
          },
        ],
        glossary: [
          {
            term: "Handover",
            def: "Transferencia formal de información entre turnos para garantizar continuidad y control operativo.",
          },
          {
            term: "Toolbox talk",
            def: "Reunión breve de seguridad antes de iniciar una operación, donde se revisan riesgos y controles.",
          },
        ],
      },
      {
        id: "estibas-desestibas",
        title: "Coordinación de la manipulación a bordo: estibas y desestibas",
        summary:
          "Secuenciación segura de movimientos, balance, accesos, riesgos a bordo, comunicación con la nave y supervisión. Enfoque en contenedores y carga general para minimizar riesgos y maximizar productividad.",
        outcomes: [
          "Explicar la lógica de secuencia de carga y descarga en buques.",
          "Reconocer riesgos de maniobra a bordo y sus controles.",
          "Coordinar señales y comunicación crítica en operaciones simultáneas.",
        ],
        keyConcepts: [
          "Secuenciación de bodegas/bays para optimizar estabilidad y tiempo",
          "Interferencias y zonas de exclusión por maniobras de izaje",
          "Seguridad: caída de objetos, atrapamientos, fatiga de materiales",
        ],
        instructorTips: [
          "Refuerza: primero seguridad, luego productividad. Nunca al revés.",
        ],
        activities: [
          "Caso: cambio de plan por mal clima—reordenar secuencia y recursos de manera óptima.",
        ],
        videos: [
          {
            title: "Container stowage and discharge sequence",
            youtubeId: "p5nrSM9tIuo",
            description: "Secuenciación de carga y descarga de contenedores en buques portacontenedores.",
          },
          {
            title: "Loading and unloading ship operations",
            youtubeId: "pJ-bJOaETgM",
            description: "Operaciones de estiba y desestiba a bordo: seguridad, comunicación y productividad.",
          },
        ],
        resources: [
          {
            title: "OMI – Normas de seguridad para operaciones a bordo y manejo de carga",
            url: "https://www.imo.org/es/OurWork/Safety/Pages/Default.aspx",
            description: "Portal oficial de seguridad marítima de la Organización Marítima Internacional. Accede al Código ISM, convenio SOLAS y directrices para operaciones de carga a bordo: izaje, zonas de exclusión, comunicaciones y gestión de emergencias.",
            tag: "Norma internacional",
          },
        ],
        glossary: [
          {
            term: "Zona de exclusión",
            def: "Área delimitada donde el acceso está restringido por maniobras de izaje y riesgos activos.",
          },
          {
            term: "Secuencia de descarga",
            def: "Orden planificado en que se retiran los contenedores del buque para mantener la estabilidad.",
          },
        ],
      },
    ],
  },
  {
    id: "dia-10",
    dayLabel: "Día 10",
    schedule: "19:00 – 21:30",
    instructor: "Maikol Mell Ferrer",
    theme: "Análisis de rendimientos de las operaciones portuarias",
    lessons: [
      {
        id: "documentos-operacion",
        title: "Documentos de la operación portuaria",
        summary:
          "Documentación típica: manifiestos, BL, órdenes de trabajo, registros de operación, EIR, reportes de turno e incidentes. La calidad documental evita reprocesos, disputas y pérdidas económicas.",
        outcomes: [
          "Enumerar documentos clave por fase de la operación.",
          "Relacionar cada documento con control, trazabilidad y evidencia.",
          "Detectar errores frecuentes y su impacto operativo y legal.",
        ],
        keyConcepts: [
          "Trazabilidad documental: cadena de custodia de la carga",
          "Control de inventario y conciliación de manifiestos",
          "Evidencia operativa para auditoría y reclamaciones",
        ],
        instructorTips: [
          "Crea un 'mapa de documentos' por proceso (gate, patio, muelle, aduana).",
        ],
        activities: [
          "Ejercicio: ordenar documentos en la secuencia correcta de un flujo de importación.",
        ],
        videos: [
          {
            title: "Bill of Lading explicado – El documento más importante",
            youtubeId: "9fOuZuNpkwM",
            description: "Qué es el conocimiento de embarque (BL), tipos y cómo funciona en el comercio marítimo.",
          },
          {
            title: "Documentos en el comercio internacional y logística",
            youtubeId: "SZ_NKhvL_iU",
            description: "Guía completa de los documentos clave en importaciones y exportaciones marítimas.",
          },
        ],
        resources: [
          {
            title: "FIATA – Guía oficial de documentos de transporte internacional",
            url: "https://fiata.org/resources/documents/",
            description: "Federación Internacional de Asociaciones de Transitarios: documentos oficiales del transporte internacional, incluyendo el conocimiento de embarque (B/L), la carta de porte y guías de referencia para operadores logísticos y portuarios.",
            tag: "Organismo internacional",
          },
        ],
        glossary: [
          {
            term: "EIR",
            def: "Equipment Interchange Receipt: comprobante del estado del contenedor al entrar o salir del terminal.",
          },
          {
            term: "Manifiesto de carga",
            def: "Documento que lista toda la carga a bordo de un buque, con descripción, cantidad y consignatarios.",
          },
        ],
      },
      {
        id: "tiempos-motonave",
        title: "Estimación del tiempo de la motonave en el puesto de atraque",
        summary:
          "Cómo estimar la permanencia en muelle (berth time): movimientos esperados, productividad, turnos, restricciones, ventanas y contingencias. Base fundamental para planificación y control de costos.",
        outcomes: [
          "Calcular una estimación simple de tiempo de atraque.",
          "Entender las variables que degradan la productividad.",
          "Proponer medidas concretas para reducir demoras operativas.",
        ],
        keyConcepts: [
          "Movimientos totales vs productividad (MPH): la ecuación básica",
          "Demoras: clima, fallas de equipos, documentación, interferencias portuarias",
          "ETD y costo por hora de permanencia en muelle",
        ],
        instructorTips: [
          "Enséñalo con una fórmula simple y luego agrega 'factores de ajuste' reales.",
        ],
        activities: [
          "Taller: estimar berth time para 800 movimientos con 2 grúas a 25 MPH.",
        ],
        videos: [
          {
            title: "Terminal productivity KPIs – Moves per hour",
            youtubeId: "pJ-bJOaETgM",
            description: "Indicadores clave de productividad en terminales de contenedores y cómo medirlos.",
          },
        ],
        resources: [
          {
            title: "Alphaliner – Estadísticas y productividad de terminales de contenedores",
            url: "https://alphaliner.axsmarine.com/PublicTop100/",
            description: "Base de datos pública de Alphaliner con rankings de los principales terminales y navieras del mundo. Referencia para comparar productividad (movimientos/hora), capacidad instalada y tendencias de tráfico de contenedores globalmente.",
            tag: "Referencia operacional",
          },
        ],
        glossary: [
          {
            term: "MPH (Moves per Hour)",
            def: "Movimientos por hora: indicador principal de productividad de grúa en terminales de contenedores.",
          },
          {
            term: "Berth time",
            def: "Tiempo total que el buque permanece atracado en el muelle, incluyendo operaciones y demoras.",
          },
        ],
      },
      {
        id: "zonas-por-carga",
        title: "Asignación de zonas de almacenamiento según tipo de carga",
        summary:
          "Criterios de asignación: rotación, compatibilidad, seguridad, accesos, inspección, requerimientos especiales (reefer/IMO), y optimización de recorridos para reducir tiempos y costos.",
        outcomes: [
          "Aplicar criterios de zoning a diferentes tipos de carga.",
          "Prevenir contaminación cruzada y riesgos de seguridad.",
          "Optimizar tiempos de movilización entre muelle y patio.",
        ],
        keyConcepts: [
          "Slotting: asignación estratégica de ubicaciones en patio",
          "Restricciones especiales: reefer, IMO, carga sobredimensionada",
          "Congestión y gestión del flujo en patio de alta rotación",
        ],
        instructorTips: [
          "Resalta el trade-off: cercanía al muelle vs congestión en zonas de alta demanda.",
        ],
        activities: [
          "Actividad: asignar 10 contenedores (reefer/IMO/dry) en un patio con restricciones definidas.",
        ],
        videos: [
          {
            title: "Yard management and container slotting",
            youtubeId: "4d6LKjBmHMY",
            description: "Cómo se gestiona el patio de contenedores para optimizar flujos y reducir movimientos improductivos.",
          },
        ],
        resources: [
          {
            title: "UNCTAD – Guía de planificación y diseño de terminales portuarias",
            url: "https://unctad.org/system/files/official-document/dtlkdb2016d1_en.pdf",
            description: "Documento técnico de UNCTAD con metodología para planificar el layout de terminales portuarias: distribución de patios, zonas de almacenamiento especial (reefer, IMO), accesos y flujos de camiones y trenes.",
            tag: "Organismo internacional",
          },
        ],
        glossary: [
          {
            term: "Slotting",
            def: "Asignación estratégica de ubicaciones en patio para reducir movimientos improductivos y demoras.",
          },
          {
            term: "Movimiento improductivo",
            def: "Movimiento de contenedor que no genera valor: reubicaciones innecesarias por mala planificación.",
          },
        ],
      },
    ],
  },
  {
    id: "dia-11",
    dayLabel: "Día 11",
    schedule: "19:00 – 21:30",
    instructor: "Maikol Mell Ferrer",
    theme: "Planificación de estiba de cargas",
    lessons: [
      {
        id: "baroti",
        title: "Planificación de estiba en buques portacontenedores (Sistema BAROTI)",
        summary:
          "Introducción a la lógica de estiba: seguridad estructural, estabilidad del buque, secuencia operativa, segregación IMO y optimización. El sistema Bay-Row-Tier (BAROTI) es el lenguaje universal del plan de estiba.",
        outcomes: [
          "Interpretar conceptos base de un plan de estiba usando coordenadas BAROTI.",
          "Reconocer restricciones de estabilidad, resistencia de cubierta y seguridad.",
          "Entender la relación directa entre estiba y productividad en la descarga.",
        ],
        keyConcepts: [
          "Bay / Row / Tier: sistema de coordenadas para ubicación de contenedores",
          "Restricciones de peso, estabilidad y resistencia de cubierta",
          "Segregación IMO y ubicación de reefers en plan de estiba",
        ],
        instructorTips: [
          "Apoya con una grilla simple bay-row-tier para visualizar posiciones reales.",
        ],
        activities: [
          "Actividad: ubicar 12 contenedores con restricciones (peso/reefer/IMO) en una grilla pequeña.",
        ],
        videos: [
          {
            title: "Container stowage plan – Bay, Row and Tier explained",
            youtubeId: "SZ_NKhvL_iU",
            description: "Cómo funciona el plan de estiba de contenedores usando el sistema Bay-Row-Tier.",
          },
          {
            title: "Stowage planning for container ships",
            youtubeId: "p5nrSM9tIuo",
            description: "Principios de planificación de estiba: secuencia, restricciones y optimización de carga.",
          },
        ],
        resources: [
          {
            title: "OMI – Código CSS: seguridad en la estiba y sujeción de carga a bordo",
            url: "https://www.imo.org/es/OurWork/Safety/Pages/CargoSecuring.aspx",
            description: "Código de Prácticas de Seguridad para la Estiba y Sujeción de la Carga (Código CSS) de la Organización Marítima Internacional. Incluye principios del sistema Bay-Row-Tier, restricciones de peso y distribución de contenedores en buques portacontenedores.",
            tag: "Norma internacional",
          },
        ],
        glossary: [
          {
            term: "Bay / Row / Tier",
            def: "Sistema de tres coordenadas para ubicar exactamente cada contenedor en un buque portacontenedores.",
          },
          {
            term: "Plan de estiba",
            def: "Documento que indica la posición planificada de cada contenedor en el buque, con sus características.",
          },
        ],
      },
      {
        id: "trinca",
        title: "Trinca y destrinca de contenedores en buques portacontenedores",
        summary:
          "Dispositivos y procedimientos para asegurar contenedores: twistlocks, lashing rods, turnbuckles y bases de corner casting. Riesgos críticos y controles durante trinca y destrinca.",
        outcomes: [
          "Reconocer y nombrar los elementos de trinca de contenedores.",
          "Aplicar principios de seguridad en maniobras de trinca/destrinca.",
          "Explicar por qué la trinca inadecuada es una amenaza para la seguridad marítima.",
        ],
        keyConcepts: [
          "Lashing gear: twistlock, lashing rod, turnbuckle, bridge fitting",
          "Zonas de riesgo en cubierta y EPP obligatorio",
          "Secuencia segura de destrinca antes de maniobras de grúa",
        ],
        instructorTips: [
          "Enfatiza incidentes reales de contenedores perdidos por trinca deficiente.",
        ],
        activities: [
          "Checklist: inspección visual de equipos de trinca (condición, desgaste, uso correcto).",
        ],
        videos: [
          {
            title: "Container lashing – Twistlock and turnbuckle explained",
            youtubeId: "e_2ckBTU5fc",
            description: "Equipos de trinca de contenedores: tipos, uso correcto y normas de seguridad a bordo.",
          },
          {
            title: "Container securing and lashing on ships",
            youtubeId: "3wqHFNM3Q00",
            description: "Procedimientos de aseguramiento de contenedores en buques: seguridad y mejores prácticas.",
          },
        ],
        resources: [
          {
            title: "MacGregor – Equipos de trinca y aseguramiento de contenedores en buques",
            url: "https://www.macgregor.com/products/cargo-securing/",
            description: "Fabricante líder de sistemas de trinca para buques portacontenedores. Catálogo técnico de twistlocks, lashing rods, turnbuckles y bridge fittings con especificaciones, manuales de inspección y normas de mantenimiento preventivo.",
            tag: "Referencia técnica",
          },
        ],
        glossary: [
          {
            term: "Trinca",
            def: "Aseguramiento mecánico de contenedores para evitar desplazamientos durante la navegación.",
          },
          {
            term: "Twistlock",
            def: "Dispositivo que se encaja en el corner casting del contenedor para fijarlo al buque o al contenedor inferior.",
          },
        ],
      },
    ],
  },
  {
    id: "dia-12",
    dayLabel: "Día 12",
    schedule: "19:00 – 21:30",
    instructor: "Maikol Mell Ferrer",
    theme: "Incoterms en la logística portuaria",
    lessons: [
      {
        id: "aduanas",
        title: "Aduanas: procedimientos aduaneros (visión operativa)",
        summary:
          "Flujo aduanero básico para importación y exportación, tipos de inspecciones y roles de los actores. Por qué los documentos y tiempos impactan directamente la operación portuaria y los costos logísticos.",
        outcomes: [
          "Describir las etapas típicas del proceso aduanero (importación/exportación).",
          "Identificar puntos de control e inspección de la DIAN.",
          "Relacionar demoras aduaneras con costos logísticos concretos.",
        ],
        keyConcepts: [
          "Declaración de importación/exportación, levante y aforo",
          "Riesgo aduanero y perfilamiento de operadores",
          "Documentación requerida y trazabilidad para despacho",
        ],
        instructorTips: [
          "Conecta con casos: carga retenida, inconsistencia documental, inspección no programada.",
        ],
        activities: [
          "Mapa de proceso: dibujar el flujo aduanero simplificado y ubicar quién hace qué y cuándo.",
        ],
        videos: [
          {
            title: "Proceso aduanero de importación en Colombia",
            youtubeId: "y-xAKZlBSGM",
            description: "Paso a paso del proceso aduanero de importación: documentos, declaración, aforo y levante.",
          },
          {
            title: "Procedimientos aduaneros y DIAN – Colombia",
            youtubeId: "G7Rqz5fCa6M",
            description: "Cómo funciona la aduana en Colombia: DIAN, declaración de importación y proceso de levante.",
          },
        ],
        resources: [
          {
            title: "DIAN – Dirección de Impuestos y Aduanas Nacionales de Colombia",
            url: "https://www.dian.gov.co/",
            description: "Portal oficial de la DIAN: declaraciones de importación y exportación, procedimientos de aforo, liquidación de tributos aduaneros, consulta de resoluciones y trámites de Operador Económico Autorizado (OEA) para Colombia.",
            tag: "Entidad oficial",
          },
        ],
        glossary: [
          {
            term: "Levante",
            def: "Autorización de la autoridad aduanera para disponer de la mercancía importada.",
          },
          {
            term: "Aforo",
            def: "Inspección física y/o documental de la mercancía por parte de la autoridad aduanera.",
          },
        ],
      },
      {
        id: "incoterms-documentos",
        title: "Incoterms y documentos portuarios esenciales",
        summary:
          "Cómo los Incoterms 2020 definen responsabilidades, costos y riesgos en la cadena logística; y cómo se conectan con documentos clave: BL, factura comercial, packing list, certificados de origen y seguro.",
        outcomes: [
          "Diferenciar responsabilidades entre comprador y vendedor según el Incoterm pactado.",
          "Identificar documentos esenciales por tipo de operación (FOB, CIF, DAP).",
          "Evitar errores comunes: Incoterm mal aplicado o incoherente con el medio de transporte.",
        ],
        keyConcepts: [
          "Punto de transferencia de riesgo y costo: lo más crítico del Incoterm",
          "Obligaciones del vendedor vs comprador en cada Incoterm",
          "Documentos base: BL, factura comercial, packing list, seguro",
        ],
        instructorTips: [
          "Trabaja con escenarios concretos: FOB vs CIF vs DAP (qué paga quién y dónde ocurre el riesgo).",
        ],
        activities: [
          "Actividad: completar una tabla de responsabilidades para 3 Incoterms en un caso marítimo real.",
        ],
        videos: [
          {
            title: "Incoterms 2020 explicados en español – Guía completa",
            youtubeId: "8EytQVpNBV0",
            description: "Todos los Incoterms 2020 explicados: responsabilidades, punto de riesgo y documentos requeridos.",
          },
          {
            title: "FOB vs CIF vs DAP – Diferencias clave para logística marítima",
            youtubeId: "9fOuZuNpkwM",
            description: "Comparación práctica de los Incoterms más usados en logística marítima y portuaria.",
          },
        ],
        resources: [
          {
            title: "CCI – Incoterms 2020: Reglas Oficiales de Comercio Internacional",
            url: "https://iccwbo.org/business-solutions/incoterms-rules/",
            description: "Sitio oficial de la Cámara de Comercio Internacional con la definición, alcance y responsabilidades completas de cada uno de los 11 Incoterms 2020: EXW, FCA, CPT, CIP, DAP, DPU, DDP, FAS, FOB, CFR y CIF. Recurso de referencia para vendedores, compradores, agentes de carga y operadores logísticos.",
            tag: "Norma internacional",
          },
        ],
        glossary: [
          {
            term: "FOB (Free On Board)",
            def: "El riesgo se transfiere cuando la mercancía está a bordo en el puerto de embarque. Solo para transporte marítimo.",
          },
          {
            term: "CIF (Cost, Insurance and Freight)",
            def: "El vendedor paga flete y seguro hasta el puerto destino, pero el riesgo se transfiere al cargar a bordo.",
          },
          {
            term: "DAP (Delivered At Place)",
            def: "El vendedor entrega la mercancía en el lugar acordado en destino, listo para descarga. Riesgo hasta allí.",
          },
        ],
      },
    ],
  },
];
