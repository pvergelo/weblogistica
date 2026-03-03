/* ─────────────────────────────────────────────────────────────────────────
   RichInfografias.tsx
   Infografías SVG ricas y detalladas por tema.
   Sin foreignObject, sin xmlns duplicados. Solo SVG nativo.
───────────────────────────────────────────────────────────────────────── */

/* Ley 1ª de 1991 — Estructura portuaria */
export function InfografiaLey1() {
  const niveles = [
    { y: 40, label: "ESTADO COLOMBIANO", sub: "Marco constitucional", color: "#38bdf8", w: 300 },
    { y: 110, label: "MINTRANSPORTE", sub: "Política portuaria", color: "#818cf8", w: 260 },
    { y: 180, label: "SUPERTRANSPORTE", sub: "Inspección y vigilancia", color: "#a78bfa", w: 220 },
    { y: 250, label: "SOCIEDADES PORTUARIAS", sub: "Concesionarios de terminales", color: "#34d399", w: 260 },
    { y: 320, label: "OPERADORES PORTUARIOS", sub: "Manipulación de carga", color: "#fbbf24", w: 220 },
    { y: 390, label: "USUARIOS DEL PUERTO", sub: "Navieras, importadores, exportadores", color: "#f472b6", w: 300 },
  ];
  return (
    <svg viewBox="0 0 400 460" className="w-full h-auto">
      <defs>
        <linearGradient id="bgley" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
      </defs>
      <rect width="400" height="460" rx="16" fill="url(#bgley)" />
      <text x="200" y="22" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">LEY 1ª DE 1991 — ESTRUCTURA PORTUARIA</text>

      {/* Línea central */}
      <line x1="200" y1="35" x2="200" y2="420" stroke="#334155" strokeWidth="1.5" strokeDasharray="4,3" />

      {niveles.map((n, i) => {
        const x = 200 - n.w / 2;
        return (
          <g key={i}>
            {i > 0 && (
              <line x1="200" y1={n.y - 30} x2="200" y2={n.y - 8} stroke={n.color} strokeWidth="1.5" strokeOpacity="0.5" />
            )}
            <rect x={x} y={n.y - 8} width={n.w} height={52} rx="10" fill={n.color} fillOpacity="0.12" stroke={n.color} strokeOpacity="0.35" strokeWidth="1" />
            <text x="200" y={n.y + 14} textAnchor="middle" fill={n.color} fontSize="10" fontWeight="bold">{n.label}</text>
            <text x="200" y={n.y + 29} textAnchor="middle" fill="#94a3b8" fontSize="8">{n.sub}</text>
          </g>
        );
      })}

      {/* Flecha indicadora */}
      <text x="14" y="230" fill="#475569" fontSize="7" fontWeight="bold" transform="rotate(-90,14,230)">JERARQUÍA NORMATIVA</text>
    </svg>
  );
}

/* Autoridades portuarias */
export function InfografiaAutoridades() {
  const ents = [
    { name: "DIMAR", role: "Control marítimo y seguridad", emoji: "⚓", color: "#38bdf8", x: 70, y: 80 },
    { name: "MIGRACIÓN", role: "Control personas a bordo", emoji: "🛂", color: "#818cf8", x: 240, y: 80 },
    { name: "INVIMA", role: "Sanidad portuaria", emoji: "🏥", color: "#34d399", x: 70, y: 190 },
    { name: "ICA", role: "Cuarentena agropecuaria", emoji: "🌿", color: "#fbbf24", x: 240, y: 190 },
    { name: "DIAN", role: "Control aduanero fiscal", emoji: "💰", color: "#f472b6", x: 70, y: 300 },
    { name: "POLICÍA", role: "Seguridad y orden público", emoji: "🛡️", color: "#fb923c", x: 240, y: 300 },
  ];
  return (
    <svg viewBox="0 0 340 400" className="w-full h-auto">
      <rect width="340" height="400" rx="16" fill="#0f172a" />
      <text x="170" y="22" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">AUTORIDADES DE CONTROL PORTUARIO</text>

      {/* Buque centro */}
      <circle cx="170" cy="200" r="32" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
      <text x="170" y="196" textAnchor="middle" fill="#e2e8f0" fontSize="18">🚢</text>
      <text x="170" y="212" textAnchor="middle" fill="#64748b" fontSize="7">BUQUE</text>

      {ents.map((e, i) => {
        const angle = (i / ents.length) * 2 * Math.PI - Math.PI / 2;
        const cx = 170 + Math.cos(angle) * 105;
        const cy = 200 + Math.sin(angle) * 110;
        return (
          <g key={i}>
            <line x1="170" y1="200" x2={cx} y2={cy} stroke={e.color} strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3,2" />
            <rect x={cx - 48} y={cy - 26} width="96" height="52" rx="10" fill={e.color} fillOpacity="0.12" stroke={e.color} strokeOpacity="0.4" strokeWidth="1" />
            <text x={cx} y={cy - 9} textAnchor="middle" fontSize="14">{e.emoji}</text>
            <text x={cx} y={cy + 7} textAnchor="middle" fill={e.color} fontSize="8" fontWeight="bold">{e.name}</text>
            <text x={cx} y={cy + 20} textAnchor="middle" fill="#94a3b8" fontSize="6.5">{e.role}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* Tipos de terminales */
export function InfografiaTerminales() {
  const tipos = [
    { name: "Contenedores", icon: "📦", kpi: "25-45 mov/hr", color: "#38bdf8" },
    { name: "Granel sólido", icon: "⛏️", kpi: "5.000-20.000 T/día", color: "#fbbf24" },
    { name: "Granel líquido", icon: "🛢️", kpi: "500-2.000 m³/hr", color: "#f472b6" },
    { name: "Carga general", icon: "📋", kpi: "200-800 T/turno", color: "#34d399" },
    { name: "Ro-Ro", icon: "🚗", kpi: "100-400 veh/día", color: "#a78bfa" },
    { name: "Multipropósito", icon: "🔄", kpi: "Flexible por carga", color: "#fb923c" },
  ];
  return (
    <svg viewBox="0 0 380 340" className="w-full h-auto">
      <rect width="380" height="340" rx="16" fill="#0f172a" />
      <text x="190" y="24" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">TIPOS DE TERMINALES PORTUARIAS</text>
      {tipos.map((t, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 20 + col * 120;
        const y = 48 + row * 130;
        return (
          <g key={i}>
            <rect x={x} y={y} width="108" height="110" rx="12" fill={t.color} fillOpacity="0.1" stroke={t.color} strokeOpacity="0.35" strokeWidth="1" />
            <text x={x + 54} y={y + 32} textAnchor="middle" fontSize="26">{t.icon}</text>
            <text x={x + 54} y={y + 55} textAnchor="middle" fill={t.color} fontSize="8.5" fontWeight="bold">{t.name}</text>
            <line x1={x + 14} y1={y + 64} x2={x + 94} y2={y + 64} stroke={t.color} strokeOpacity="0.2" strokeWidth="1" />
            <text x={x + 54} y={y + 78} textAnchor="middle" fill="#94a3b8" fontSize="7">Productividad</text>
            <text x={x + 54} y={y + 93} textAnchor="middle" fill="#e2e8f0" fontSize="7.5" fontWeight="bold">{t.kpi}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* Equipos portuarios */
export function InfografiaEquipos() {
  const equipos = [
    { name: "STS", full: "Ship-to-Shore", cap: "40–65 T", color: "#38bdf8", y: 60 },
    { name: "RTG", full: "Gantry en llantas", cap: "35–50 T", color: "#818cf8", y: 145 },
    { name: "RMG", full: "Gantry en riel", cap: "35–50 T", color: "#a78bfa", y: 230 },
    { name: "RS", full: "Reach Stacker", cap: "40–45 T", color: "#34d399", y: 315 },
  ];
  return (
    <svg viewBox="0 0 360 400" className="w-full h-auto">
      <rect width="360" height="400" rx="16" fill="#0f172a" />
      <text x="180" y="24" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">EQUIPOS PORTUARIOS PRINCIPALES</text>
      {equipos.map((e) => (
        <g key={e.name}>
          <rect x="24" y={e.y} width="312" height="68" rx="12" fill={e.color} fillOpacity="0.08" stroke={e.color} strokeOpacity="0.3" strokeWidth="1" />
          <rect x="24" y={e.y} width="56" height="68" rx="12" fill={e.color} fillOpacity="0.18" />
          <text x="52" y={e.y + 42} textAnchor="middle" fill={e.color} fontSize="18" fontWeight="black">{e.name}</text>
          <text x="110" y={e.y + 26} fill={e.color} fontSize="10" fontWeight="bold">{e.full}</text>
          <text x="110" y={e.y + 42} fill="#94a3b8" fontSize="8.5">Capacidad de izaje: <tspan fill="#e2e8f0" fontWeight="bold">{e.cap}</tspan></text>
          <text x="110" y={e.y + 57} fill="#64748b" fontSize="8">Equipo clave en operaciones portuarias de contenedores</text>
        </g>
      ))}
    </svg>
  );
}

/* Zonas de almacenamiento */
export function InfografiaZonas() {
  const zonas = [
    { label: "ZONA IMO", sub: "Mercancías peligrosas", color: "#ef4444", x: 20, y: 48, w: 160, h: 80 },
    { label: "ZONA REEFER", sub: "Contenedores fríos", color: "#38bdf8", x: 200, y: 48, w: 160, h: 80 },
    { label: "ZONA DRY", sub: "Carga general seca", color: "#34d399", x: 20, y: 148, w: 340, h: 80 },
    { label: "ZONA VACÍOS", sub: "Contenedores vacíos", color: "#94a3b8", x: 20, y: 248, w: 160, h: 80 },
    { label: "ZONA OOG", sub: "Carga sobredimensionada", color: "#fbbf24", x: 200, y: 248, w: 160, h: 80 },
  ];
  return (
    <svg viewBox="0 0 380 360" className="w-full h-auto">
      <rect width="380" height="360" rx="16" fill="#0f172a" />
      <text x="190" y="24" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">ZONAS DE ALMACENAMIENTO EN PATIO</text>
      <text x="190" y="38" textAnchor="middle" fill="#475569" fontSize="7.5">Distribución por tipo de carga y requisitos especiales</text>

      {zonas.map((z, i) => (
        <g key={i}>
          <rect x={z.x} y={z.y} width={z.w} height={z.h} rx="10"
            fill={z.color} fillOpacity="0.1" stroke={z.color} strokeOpacity="0.4" strokeWidth="1.5" />
          <text x={z.x + z.w / 2} y={z.y + 34} textAnchor="middle" fill={z.color} fontSize="9" fontWeight="bold">{z.label}</text>
          <text x={z.x + z.w / 2} y={z.y + 50} textAnchor="middle" fill="#94a3b8" fontSize="7.5">{z.sub}</text>
        </g>
      ))}

      {/* MUELLE */}
      <rect x="20" y="346" width="340" height="14" rx="4" fill="#334155" />
      <text x="190" y="357" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">◀ MUELLE / LÍNEA DE ATRAQUE ▶</text>
    </svg>
  );
}

/* Tipos de cargas */
export function InfografiaCargas() {
  const cargas = [
    { name: "Contenedorizada", pct: 65, color: "#38bdf8" },
    { name: "Granel sólido", pct: 15, color: "#fbbf24" },
    { name: "Granel líquido", pct: 10, color: "#f472b6" },
    { name: "Carga general", pct: 7, color: "#34d399" },
    { name: "Ro-Ro / Proyecto", pct: 3, color: "#a78bfa" },
  ];
  const total = cargas.reduce((s, c) => s + c.pct, 0);
  let accum = 0;
  return (
    <svg viewBox="0 0 360 380" className="w-full h-auto">
      <rect width="360" height="380" rx="16" fill="#0f172a" />
      <text x="180" y="24" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">DISTRIBUCIÓN DE TIPOS DE CARGA PORTUARIA</text>

      {/* Barras horizontales */}
      {cargas.map((c, i) => {
        const y = 50 + i * 56;
        const barW = (c.pct / total) * 290;
        accum += c.pct;
        return (
          <g key={i}>
            <text x="20" y={y + 14} fill={c.color} fontSize="9" fontWeight="bold">{c.name}</text>
            <rect x="20" y={y + 20} width={290} height="20" rx="6" fill="#1e293b" />
            <rect x="20" y={y + 20} width={barW} height="20" rx="6" fill={c.color} fillOpacity="0.7" />
            <text x={24 + barW} y={y + 34} fill="#e2e8f0" fontSize="9" fontWeight="bold">{c.pct}%</text>
          </g>
        );
      })}

      <text x="180" y="345" textAnchor="middle" fill="#475569" fontSize="8">Fuente: UNCTAD Review of Maritime Transport (referencia aproximada)</text>
    </svg>
  );
}

/* IMDG — 9 clases */
export function InfografiaIMDG() {
  const clases = [
    { num: "1", name: "Explosivos", color: "#ef4444", icon: "💥" },
    { num: "2", name: "Gases", color: "#f97316", icon: "🔵" },
    { num: "3", name: "Líquidos inflamables", color: "#eab308", icon: "🔥" },
    { num: "4", name: "Sólidos inflamables", color: "#84cc16", icon: "🔶" },
    { num: "5", name: "Oxidantes/Peróxidos", color: "#06b6d4", icon: "⚡" },
    { num: "6", name: "Tóxicos/Infecciosos", color: "#8b5cf6", icon: "☠️" },
    { num: "7", name: "Radiactivos", color: "#f59e0b", icon: "☢️" },
    { num: "8", name: "Corrosivos", color: "#14b8a6", icon: "⚗️" },
    { num: "9", name: "Varios / Misceláneos", color: "#94a3b8", icon: "⚠️" },
  ];
  return (
    <svg viewBox="0 0 380 420" className="w-full h-auto">
      <rect width="380" height="420" rx="16" fill="#0f172a" />
      <text x="190" y="24" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">CÓDIGO IMDG — 9 CLASES DE PELIGRO</text>
      {clases.map((c, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 16 + col * 118;
        const y = 40 + row * 116;
        return (
          <g key={i}>
            <rect x={x} y={y} width="106" height="100" rx="12" fill={c.color} fillOpacity="0.1" stroke={c.color} strokeOpacity="0.4" strokeWidth="1.5" />
            <text x={x + 53} y={y + 28} textAnchor="middle" fontSize="22">{c.icon}</text>
            <rect x={x + 6} y={y + 38} width="22" height="16" rx="4" fill={c.color} fillOpacity="0.25" />
            <text x={x + 17} y={y + 50} textAnchor="middle" fill={c.color} fontSize="9" fontWeight="black">{c.num}</text>
            <text x={x + 53} y={y + 64} textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="bold">{c.name.split("/")[0]}</text>
            {c.name.includes("/") && (
              <text x={x + 53} y={y + 76} textAnchor="middle" fill="#94a3b8" fontSize="7">{c.name.split("/")[1]}</text>
            )}
          </g>
        );
      })}
      <text x="190" y="410" textAnchor="middle" fill="#475569" fontSize="8">Organización Marítima Internacional (OMI) · Código IMDG</text>
    </svg>
  );
}

/* Contenedores ISO */
export function InfografiaContenedores() {
  const tipos = [
    { name: "20' Dry", dim: "6.1 × 2.4 × 2.6 m", payload: "28.000 kg", color: "#38bdf8" },
    { name: "40' Dry", dim: "12.2 × 2.4 × 2.6 m", payload: "26.500 kg", color: "#818cf8" },
    { name: "40' HC", dim: "12.2 × 2.4 × 2.9 m", payload: "26.000 kg", color: "#a78bfa" },
    { name: "Reefer 40'", dim: "12.2 × 2.4 × 2.9 m", payload: "27.700 kg", color: "#38bdf8" },
    { name: "Open Top 40'", dim: "12.2 × 2.4 × 2.6 m", payload: "26.000 kg", color: "#fbbf24" },
    { name: "Flat Rack 40'", dim: "12.2 × 2.4 × 2.1 m", payload: "40.000 kg", color: "#34d399" },
    { name: "Tank ISO", dim: "Varía por norma", payload: "Hasta 26.000 L", color: "#f472b6" },
    { name: "Pallet Wide 40'", dim: "12.2 × 2.5 × 2.7 m", payload: "25.500 kg", color: "#fb923c" },
  ];
  return (
    <svg viewBox="0 0 380 500" className="w-full h-auto">
      <rect width="380" height="500" rx="16" fill="#0f172a" />
      <text x="190" y="24" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">CLASIFICACIÓN DE CONTENEDORES ISO</text>
      {tipos.map((t, i) => {
        const y = 40 + i * 56;
        return (
          <g key={i}>
            <rect x="16" y={y} width="348" height="46" rx="10" fill={t.color} fillOpacity="0.08" stroke={t.color} strokeOpacity="0.3" strokeWidth="1" />
            <rect x="16" y={y} width="90" height="46" rx="10" fill={t.color} fillOpacity="0.18" />
            <text x="61" y={y + 28} textAnchor="middle" fill={t.color} fontSize="9" fontWeight="black">{t.name}</text>
            <text x="130" y={y + 19} fill="#94a3b8" fontSize="8">Dimensiones</text>
            <text x="130" y={y + 33} fill="#e2e8f0" fontSize="8.5" fontWeight="bold">{t.dim}</text>
            <text x="270" y={y + 19} fill="#94a3b8" fontSize="8">Carga máx.</text>
            <text x="270" y={y + 33} fill={t.color} fontSize="8.5" fontWeight="bold">{t.payload}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* Planificación pre-arribo */
export function InfografiaPreArribo() {
  const pasos = [
    { label: "ETA recibido", desc: "Naviera notifica ETA 72h antes", color: "#38bdf8", icon: "📡" },
    { label: "Coordinación", desc: "Agente + terminal + autoridades", color: "#818cf8", icon: "📞" },
    { label: "Plan de muelle", desc: "Asignación de berth y ventana", color: "#a78bfa", icon: "📋" },
    { label: "Equipos", desc: "Grúas, cuadrillas, herramientas", color: "#34d399", icon: "🏗️" },
    { label: "Documentación", desc: "Manifiestos y permisos OK", color: "#fbbf24", icon: "📄" },
    { label: "Atraque", desc: "Operación inicia puntual", color: "#f472b6", icon: "⚓" },
  ];
  return (
    <svg viewBox="0 0 360 420" className="w-full h-auto">
      <rect width="360" height="420" rx="16" fill="#0f172a" />
      <text x="180" y="24" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">PROCESO DE PLANIFICACIÓN PRE-ARRIBO</text>
      {pasos.map((p, i) => {
        const y = 46 + i * 60;
        return (
          <g key={i}>
            {i < pasos.length - 1 && (
              <line x1="50" y1={y + 52} x2="50" y2={y + 60} stroke={p.color} strokeOpacity="0.4" strokeWidth="2" />
            )}
            <circle cx="50" cy={y + 28} r="22" fill={p.color} fillOpacity="0.15" stroke={p.color} strokeOpacity="0.4" strokeWidth="1.5" />
            <text x="50" y={y + 34} textAnchor="middle" fontSize="16">{p.icon}</text>
            <rect x="86" y={y + 10} width="252" height="36" rx="10" fill={p.color} fillOpacity="0.08" stroke={p.color} strokeOpacity="0.25" strokeWidth="1" />
            <text x="100" y={y + 26} fill={p.color} fontSize="9" fontWeight="bold">{p.label}</text>
            <text x="100" y={y + 39} fill="#94a3b8" fontSize="8">{p.desc}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* BAROTI — Bay Row Tier */
export function InfografiaBaroti() {
  const bays = [1, 3, 5];
  const rows = [1, 2, 3, 4];
  const tiers = [82, 84, 86];
  return (
    <svg viewBox="0 0 380 340" className="w-full h-auto">
      <defs>
        <linearGradient id="gbay" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <rect width="380" height="340" rx="16" fill="url(#gbay)" />
      <text x="190" y="24" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">SISTEMA BAROTI — BAY / ROW / TIER</text>

      {/* Grid de contenedores */}
      {bays.map((bay, bi) => (
        rows.map((row, ri) => (
          tiers.map((tier, ti) => {
            const x = 28 + bi * 110 + ri * 22;
            const y = 190 - ti * 38;
            const colors = ["#38bdf8", "#a78bfa", "#34d399", "#fbbf24"];
            const c = colors[ri];
            return (
              <g key={`${bi}-${ri}-${ti}`}>
                <rect x={x} y={y} width="18" height="32" rx="3" fill={c} fillOpacity={0.15 + ti * 0.08} stroke={c} strokeOpacity="0.5" strokeWidth="0.8" />
                {ti === 0 && (
                  <text x={x + 9} y={y + 46} textAnchor="middle" fill="#475569" fontSize="6">{bay}{String(row).padStart(2, "0")}{tier}</text>
                )}
              </g>
            );
          })
        ))
      ))}

      {/* Leyenda */}
      <rect x="16" y="230" width="348" height="96" rx="10" fill="#1e293b" fillOpacity="0.6" />
      <text x="190" y="248" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontWeight="bold">POSICIÓN: BAY — ROW — TIER</text>

      {[
        { label: "BAY (par=BB/impar=a bordo)", color: "#38bdf8", y: 262 },
        { label: "ROW (01,02... centro → costados)", color: "#a78bfa", y: 275 },
        { label: "TIER (82=fondo bodega, 86=nivel superior)", color: "#34d399", y: 288 },
        { label: "Ejemplo: 030286 = Bay 03, Row 02, Tier 86", color: "#fbbf24", y: 301 },
        { label: "Reefer conectado en posición par cubierta", color: "#f472b6", y: 314 },
      ].map((l, i) => (
        <g key={i}>
          <circle cx="28" cy={l.y - 2} r="4" fill={l.color} fillOpacity="0.5" />
          <text x="38" y={l.y} fill="#94a3b8" fontSize="7.5">{l.label}</text>
        </g>
      ))}
    </svg>
  );
}

/* Incoterms 2020 */
export function InfografiaIncoterms() {
  const terms = [
    { name: "EXW", risk: "Fábrica vendedor", color: "#ef4444", pct: 5 },
    { name: "FCA", risk: "Carrier designado", color: "#f97316", pct: 20 },
    { name: "CPT", risk: "Destino acordado", color: "#eab308", pct: 35 },
    { name: "CIP", risk: "Destino acordado", color: "#84cc16", pct: 40 },
    { name: "DAP", risk: "Lugar destino", color: "#06b6d4", pct: 65 },
    { name: "DPU", risk: "Descargado destino", color: "#8b5cf6", pct: 75 },
    { name: "DDP", risk: "Entregado pagos", color: "#ec4899", pct: 90 },
    { name: "FAS", risk: "Costado buque", color: "#f59e0b", pct: 25 },
    { name: "FOB", risk: "A bordo buque", color: "#10b981", pct: 30 },
    { name: "CFR", risk: "Puerto destino", color: "#3b82f6", pct: 55 },
    { name: "CIF", risk: "Puerto + seguro", color: "#a855f7", pct: 60 },
  ];
  return (
    <svg viewBox="0 0 380 460" className="w-full h-auto">
      <rect width="380" height="460" rx="16" fill="#0f172a" />
      <text x="190" y="24" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">INCOTERMS 2020 — TRANSFERENCIA DE RIESGO</text>

      {/* Flecha principal */}
      <rect x="28" y="40" width="324" height="8" rx="4" fill="#1e293b" />
      <polygon points="352,36 380,44 352,52" fill="#334155" />
      <text x="28" y="64" fill="#38bdf8" fontSize="7.5">ORIGEN</text>
      <text x="352" y="64" fill="#f472b6" fontSize="7.5" textAnchor="end">DESTINO</text>

      {terms.map((t, i) => {
        const x = 28 + (t.pct / 100) * 324;
        const y = 80 + i * 35;
        return (
          <g key={i}>
            <circle cx={x} cy={44} r="4" fill={t.color} fillOpacity="0.8" />
            <rect x="28" y={y} width={t.pct / 100 * 324} height="22" rx="6" fill={t.color} fillOpacity="0.12" stroke={t.color} strokeOpacity="0.3" strokeWidth="1" />
            <text x="34" y={y + 15} fill={t.color} fontSize="9" fontWeight="black">{t.name}</text>
            <text x={34 + 36} y={y + 15} fill="#94a3b8" fontSize="8">{t.risk}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* Documentos portuarios */
export function InfografiaDocumentos() {
  const fases = [
    {
      fase: "Pre-arribo",
      color: "#38bdf8",
      docs: ["Aviso de arribo (NOA)", "Manifiesto de carga", "Lista de tripulantes", "Declaración marítima"],
    },
    {
      fase: "Atraque y Operación",
      color: "#34d399",
      docs: ["Plan de estiba/desestiba", "Órdenes de trabajo turno", "EIR (entrada/salida)", "Reporte de novedades"],
    },
    {
      fase: "Almacenamiento",
      color: "#fbbf24",
      docs: ["Tiquete de báscula", "Registro de zona asignada", "Reporte reefer/IMO", "Inventario de patio"],
    },
    {
      fase: "Aduana y Entrega",
      color: "#f472b6",
      docs: ["Declaración de importación", "Certificado de origen", "BL / Conocimiento de embarque", "Factura comercial + PL"],
    },
  ];
  return (
    <svg viewBox="0 0 380 440" className="w-full h-auto">
      <rect width="380" height="440" rx="16" fill="#0f172a" />
      <text x="190" y="24" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">DOCUMENTACIÓN POR FASE OPERATIVA</text>
      {fases.map((f, i) => {
        const y = 38 + i * 98;
        return (
          <g key={i}>
            <rect x="16" y={y} width="348" height="88" rx="12" fill={f.color} fillOpacity="0.07" stroke={f.color} strokeOpacity="0.25" strokeWidth="1" />
            <rect x="16" y={y} width="100" height="88" rx="12" fill={f.color} fillOpacity="0.15" />
            <text x="66" y={y + 34} textAnchor="middle" fill={f.color} fontSize="8" fontWeight="bold">{f.fase}</text>
            <text x="66" y={y + 50} textAnchor="middle" fill="#64748b" fontSize="7">Fase {i + 1}/4</text>
            {f.docs.map((d, j) => (
              <g key={j}>
                <circle cx="130" cy={y + 18 + j * 18} r="3" fill={f.color} fillOpacity="0.5" />
                <text x="140" y={y + 22 + j * 18} fill="#cbd5e1" fontSize="8">{d}</text>
              </g>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

/* Trinca y destrinca */
export function InfografiaTrincas() {
  const piezas = [
    { name: "Twistlock", desc: "Une contenedores entre sí o al buque", color: "#38bdf8", icon: "🔩" },
    { name: "Lashing Rod", desc: "Barra de amarre diagonal", color: "#34d399", icon: "📏" },
    { name: "Turnbuckle", desc: "Tensor regulable de tensión", color: "#fbbf24", icon: "🔧" },
    { name: "Bridge Fitting", desc: "Conector entre dos contenedores", color: "#a78bfa", icon: "🔗" },
    { name: "Corner Casting", desc: "Punto de amarre en el contenedor", color: "#f472b6", icon: "🔲" },
    { name: "Stacking Cone", desc: "Cono de apilamiento seguro", color: "#fb923c", icon: "🔺" },
  ];
  return (
    <svg viewBox="0 0 380 400" className="w-full h-auto">
      <rect width="380" height="400" rx="16" fill="#0f172a" />
      <text x="190" y="24" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">EQUIPOS DE TRINCA Y ASEGURAMIENTO</text>
      {piezas.map((p, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 14 + col * 183;
        const y = 40 + row * 110;
        return (
          <g key={i}>
            <rect x={x} y={y} width="170" height="96" rx="12" fill={p.color} fillOpacity="0.09" stroke={p.color} strokeOpacity="0.3" strokeWidth="1" />
            <text x={x + 85} y={y + 30} textAnchor="middle" fontSize="24">{p.icon}</text>
            <text x={x + 85} y={y + 52} textAnchor="middle" fill={p.color} fontSize="9" fontWeight="bold">{p.name}</text>
            <text x={x + 85} y={y + 66} textAnchor="middle" fill="#94a3b8" fontSize="7.5">{p.desc}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* Proceso aduanero */
export function InfografiaAduana() {
  const pasos = [
    { label: "Registro DUA", desc: "Declaración de Importación/Exportación en DIAN", color: "#38bdf8", icon: "📝" },
    { label: "Aforo", desc: "Inspección documental o física de la carga", color: "#818cf8", icon: "🔍" },
    { label: "Liquidación", desc: "Cálculo de tributos aduaneros (arancel+IVA)", color: "#fbbf24", icon: "💰" },
    { label: "Pago", desc: "Cancelación de tributos ante entidad bancaria", color: "#34d399", icon: "✅" },
    { label: "Levante", desc: "DIAN autoriza la disposición de la mercancía", color: "#f472b6", icon: "🔓" },
    { label: "Retiro", desc: "Carga sale del terminal autorizada", color: "#fb923c", icon: "🚛" },
  ];
  return (
    <svg viewBox="0 0 360 400" className="w-full h-auto">
      <rect width="360" height="400" rx="16" fill="#0f172a" />
      <text x="180" y="24" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">PROCESO ADUANERO — COLOMBIA (DIAN)</text>
      {pasos.map((p, i) => {
        const y = 44 + i * 56;
        return (
          <g key={i}>
            {i < pasos.length - 1 && (
              <line x1="46" y1={y + 44} x2="46" y2={y + 56} stroke={p.color} strokeOpacity="0.35" strokeWidth="2" strokeDasharray="3,2" />
            )}
            <circle cx="46" cy={y + 22} r="20" fill={p.color} fillOpacity="0.12" stroke={p.color} strokeOpacity="0.4" strokeWidth="1.5" />
            <text x="46" y={y + 28} textAnchor="middle" fontSize="14">{p.icon}</text>
            <rect x="78" y={y + 6} width="264" height="32" rx="8" fill={p.color} fillOpacity="0.08" stroke={p.color} strokeOpacity="0.2" strokeWidth="1" />
            <text x="90" y={y + 21} fill={p.color} fontSize="9" fontWeight="bold">{p.label}</text>
            <text x="90" y={y + 33} fill="#94a3b8" fontSize="7.5">{p.desc}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* KPIs Portuarios */
export function InfografiaKPIs() {
  const kpis = [
    { name: "Grúas STS", kpi: "MPH", valor: "25 – 45", desc: "Movimientos por hora", color: "#38bdf8" },
    { name: "Dwell Time", kpi: "DÍAS", valor: "3 – 7", desc: "Estadía promedio en patio", color: "#fbbf24" },
    { name: "Berth Time", kpi: "HORAS", valor: "12 – 48", desc: "Estadía media por buque", color: "#f472b6" },
    { name: "Ocupación patio", kpi: "%", valor: "60 – 75", desc: "Uso óptimo del patio", color: "#34d399" },
    { name: "Productividad grúa", kpi: "CONT/TURNO", valor: "200 – 350", desc: "Por turno de 8 horas", color: "#a78bfa" },
    { name: "Tiempo de puerta", kpi: "MIN", valor: "10 – 25", desc: "Gate-in / Gate-out", color: "#fb923c" },
  ];
  return (
    <svg viewBox="0 0 380 360" className="w-full h-auto">
      <rect width="380" height="360" rx="16" fill="#0f172a" />
      <text x="190" y="24" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" letterSpacing="2">KPIs DE DESEMPEÑO PORTUARIO</text>
      {kpis.map((k, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 14 + col * 120;
        const y = 38 + row * 148;
        return (
          <g key={i}>
            <rect x={x} y={y} width="108" height="132" rx="12" fill={k.color} fillOpacity="0.08" stroke={k.color} strokeOpacity="0.3" strokeWidth="1" />
            <text x={x + 54} y={y + 26} textAnchor="middle" fill="#64748b" fontSize="7.5" fontWeight="bold" letterSpacing="1">{k.kpi}</text>
            <text x={x + 54} y={y + 60} textAnchor="middle" fill={k.color} fontSize="22" fontWeight="black">{k.valor}</text>
            <line x1={x + 10} y1={y + 70} x2={x + 98} y2={y + 70} stroke={k.color} strokeOpacity="0.2" strokeWidth="1" />
            <text x={x + 54} y={y + 84} textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="bold">{k.name}</text>
            <text x={x + 54} y={y + 100} textAnchor="middle" fill="#64748b" fontSize="7">{k.desc}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* Mapa selector de infografías por lessonId */
export function LessonInfografia({ lessonId }: { lessonId: string }) {
  const map: Record<string, React.ReactNode> = {
    "estructura-portuaria": <InfografiaLey1 />,
    "autoridades": <InfografiaAutoridades />,
    "tipos-terminales": <InfografiaTerminales />,
    "muelles-equipos": <InfografiaEquipos />,
    "zonas-almacenamiento": <InfografiaZonas />,
    "tipos-carga": <InfografiaCargas />,
    "carga-peligrosa": <InfografiaIMDG />,
    "clasificacion-contenedores": <InfografiaContenedores />,
    "pre-arribo": <InfografiaPreArribo />,
    "puesto-atraque": <InfografiaKPIs />,
    "equipos-herramientas": <InfografiaEquipos />,
    "coordinacion-personal": <InfografiaPreArribo />,
    "estibas-desestibas": <InfografiaBaroti />,
    "documentos-operacion": <InfografiaDocumentos />,
    "tiempos-motonave": <InfografiaKPIs />,
    "zonas-por-carga": <InfografiaZonas />,
    "baroti": <InfografiaBaroti />,
    "trinca": <InfografiaTrincas />,
    "aduanas": <InfografiaAduana />,
    "incoterms-documentos": <InfografiaIncoterms />,
  };

  const infografia = map[lessonId];
  if (!infografia) return null;

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-bold text-white/85">
          <span>📊</span>
          <span>Infografía del Tema</span>
        </div>
        <div className="mt-0.5 text-xs text-white/40">Visualización de referencia para el estudio</div>
      </div>
      <div className="p-3">{infografia}</div>
    </div>
  );
}
