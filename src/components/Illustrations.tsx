/* ─────────────────────────────────────────────
   ILLUSTRATIONS — Logística Portuaria
   Pure SVG infographics — no foreignObject
   ───────────────────────────────────────────── */

/* helper: wrap text into tspan lines */
function Txt({ x, y, text, fill = "#94a3b8", size = 9, anchor = "middle", weight = "400", dy = 12 }:
  { x: number; y: number; text: string; fill?: string; size?: number; anchor?: string; weight?: string; dy?: number }) {
  const words = text.split(" ");
  const lines: string[] = [];
  let cur = "";
  const maxChars = Math.floor(120 / size);
  words.forEach(w => {
    if ((cur + " " + w).trim().length > maxChars) { lines.push(cur.trim()); cur = w; }
    else cur = (cur + " " + w).trim();
  });
  if (cur) lines.push(cur.trim());
  return (
    <text x={x} y={y} textAnchor={anchor as "middle" | "start" | "end"} fill={fill} fontSize={size} fontWeight={weight}>
      {lines.map((l, i) => <tspan key={i} x={x} dy={i === 0 ? 0 : dy}>{l}</tspan>)}
    </text>
  );
}

/* ── Hero Art ── */
export function HarborHeroArt() {
  return (
    <svg viewBox="0 0 1200 600" className="h-full w-full" role="img" aria-label="Ilustración: puerto y logística">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0ea5e9" stopOpacity="0.35" /><stop offset="0.55" stopColor="#6366f1" stopOpacity="0.25" /><stop offset="1" stopColor="#0b1020" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22c55e" stopOpacity="0.12" /><stop offset="1" stopColor="#0ea5e9" stopOpacity="0.14" />
        </linearGradient>
        <linearGradient id="ship" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#94a3b8" stopOpacity="0.45" /><stop offset="1" stopColor="#e2e8f0" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1200" height="600" fill="url(#sky)" />
      <path d="M0,410 C180,380 330,440 520,420 C700,400 820,360 1000,390 C1100,407 1160,430 1200,448 L1200,600 L0,600 Z" fill="url(#sea)" />
      <g opacity="0.55" stroke="#e2e8f0" strokeOpacity="0.35" fill="none" strokeWidth="6">
        <path d="M160 190 L160 410"/><path d="M160 190 L300 240"/><path d="M300 240 L300 410"/><path d="M250 260 L250 330"/>
        <path d="M420 170 L420 410"/><path d="M420 170 L600 235"/><path d="M600 235 L600 410"/><path d="M540 255 L540 340"/>
      </g>
      <g opacity="0.6">
        {Array.from({ length: 14 }).map((_, i) => {
          const x = 90 + (i % 7) * 95; const y = 420 + Math.floor(i / 7) * 55;
          return <rect key={i} x={x} y={y} width={80} height={40} rx={8} fill={i%3===0?"#60a5fa":i%3===1?"#a78bfa":"#34d399"} fillOpacity="0.14" stroke="#e2e8f0" strokeOpacity="0.15" />;
        })}
      </g>
      <g opacity="0.65">
        <path d="M760 390 L1030 390 L1085 430 L735 430 Z" fill="url(#ship)" stroke="#e2e8f0" strokeOpacity="0.15" />
        <rect x="820" y="325" width="130" height="65" rx="12" fill="#e2e8f0" fillOpacity="0.10" />
        <rect x="785" y="345" width="60" height="45" rx="10" fill="#e2e8f0" fillOpacity="0.08" />
        <circle cx="790" cy="425" r="10" fill="#0ea5e9" fillOpacity="0.25" />
        <circle cx="1015" cy="425" r="10" fill="#0ea5e9" fillOpacity="0.25" />
      </g>
      <g opacity="0.15" stroke="#e2e8f0" strokeWidth="1">
        {Array.from({ length: 16 }).map((_, i) => <line key={`v${i}`} x1={i*80} y1="0" x2={i*80} y2="600" />)}
        {Array.from({ length: 10 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i*60} x2="1200" y2={i*60} />)}
      </g>
    </svg>
  );
}

/* ── Sistema Portuario Colombiano ── */
export function InfografiaPortuaria() {
  const nodes = [
    { x: 300, y: 80,  label: "Estado / Gobierno",        sub: "MinTransporte · SuperPuertos", color: "#6366f1" },
    { x: 300, y: 200, label: "DIMAR",                    sub: "Autoridad Marítima Nacional", color: "#0ea5e9" },
    { x: 100, y: 330, label: "Sociedades Portuarias",    sub: "Concesionarias privadas", color: "#22c55e" },
    { x: 300, y: 330, label: "Operadores Portuarios",    sub: "Empresas de servicios", color: "#f59e0b" },
    { x: 500, y: 330, label: "Usuarios del Puerto",      sub: "Importadores / Exportadores", color: "#f43f5e" },
    { x: 300, y: 460, label: "Terminales Portuarias",    sub: "Infraestructura operativa", color: "#a855f7" },
  ];
  const edges: [number,number][] = [[0,1],[1,2],[1,3],[1,4],[2,5],[3,5],[4,5]];
  return (
    <svg viewBox="0 0 600 530" className="w-full" role="img" aria-label="Sistema portuario colombiano">
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#64748b" />
        </marker>
      </defs>
      <rect width="600" height="530" rx="20" fill="#0d1117" fillOpacity="0.8" />
      <text x="300" y="24" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="700">Sistema Portuario Colombiano</text>
      <text x="300" y="40" textAnchor="middle" fill="#64748b" fontSize="10">Marco Normativo — Ley 1ª de 1991</text>
      {edges.map(([a,b],i) => (
        <line key={i}
          x1={nodes[a].x} y1={nodes[a].y+26} x2={nodes[b].x} y2={nodes[b].y-26}
          stroke="#334155" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arr)" />
      ))}
      {nodes.map((n,i) => (
        <g key={i}>
          <rect x={n.x-90} y={n.y-26} width="180" height="52" rx="12"
            fill={n.color} fillOpacity="0.12" stroke={n.color} strokeOpacity="0.5" strokeWidth="1.5" />
          <text x={n.x} y={n.y+4} textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="700">{n.label}</text>
          <text x={n.x} y={n.y+20} textAnchor="middle" fill="#94a3b8" fontSize="10">{n.sub}</text>
        </g>
      ))}
      <text x="300" y="520" textAnchor="middle" fill="#475569" fontSize="9">Estructura jerárquica del Sistema Portuario Colombiano — Ley 1ª/1991</text>
    </svg>
  );
}

/* ── Autoridades Portuarias ── */
export function InfografiaAutoridades() {
  const items = [
    { label: "DIMAR", rol: "Autoridad Marítima", color: "#0ea5e9", desc: "Naves, tripulación, seguridad marítima y puertos" },
    { label: "Migración CO", rol: "Control Migratorio", color: "#6366f1", desc: "Tripulación, pasajeros, visas y permanencia" },
    { label: "Salud Pública", rol: "Control Sanitario", color: "#22c55e", desc: "Sanidad nave y carga. INVIMA / INS" },
    { label: "DIAN", rol: "Aduana y Tributos", color: "#f59e0b", desc: "Declaraciones, aforo, levante de mercancías" },
    { label: "ICA / ANLA", rol: "Fitosanitario / Ambiental", color: "#34d399", desc: "Plagas, residuos, cumplimiento ambiental" },
    { label: "Policía / Armada", rol: "Seguridad Portuaria", color: "#f43f5e", desc: "Control PBIP, antinarcóticos y vigilancia" },
  ];
  const W = 170; const H = 105; const cols = 3; const padX = 35; const padY = 65;
  const gapX = 10; const gapY = 14;
  return (
    <svg viewBox="0 0 620 380" className="w-full" role="img" aria-label="Autoridades portuarias">
      <rect width="620" height="380" rx="20" fill="#0d1117" fillOpacity="0.8" />
      <text x="310" y="28" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="700">Autoridades de Control Portuario</text>
      <text x="310" y="46" textAnchor="middle" fill="#64748b" fontSize="10">Intervienen en arribo, operación y zarpe de la motonave</text>
      {items.map((it, i) => {
        const col = i % cols; const row = Math.floor(i / cols);
        const x = padX + col * (W + gapX); const y = padY + row * (H + gapY);
        return (
          <g key={i}>
            <rect x={x} y={y} width={W} height={H} rx="14"
              fill={it.color} fillOpacity="0.10" stroke={it.color} strokeOpacity="0.45" strokeWidth="1.5" />
            <text x={x+W/2} y={y+24} textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="800">{it.label}</text>
            <text x={x+W/2} y={y+40} textAnchor="middle" fill={it.color} fontSize="10" fontWeight="600">{it.rol}</text>
            <line x1={x+20} y1={y+48} x2={x+W-20} y2={y+48} stroke={it.color} strokeOpacity="0.25" strokeWidth="1" />
            <Txt x={x+W/2} y={y+60} text={it.desc} fill="#94a3b8" size={9} anchor="middle" dy={11} />
          </g>
        );
      })}
      <text x="310" y="370" textAnchor="middle" fill="#475569" fontSize="9">Cada autoridad valida documentación específica — su aprobación habilita la siguiente etapa.</text>
    </svg>
  );
}

/* ── Tipos de Terminales ── */
export function InfografiaTerminales() {
  const items = [
    { label: "Contenedores", kpi: "MPH / Dwell Time", color: "#0ea5e9", desc: "STS, RTG, Reach Stacker. Alta automatización." },
    { label: "Granel Sólido", kpi: "t/hora / Stockpile", color: "#f59e0b", desc: "Carbón, cereales. Tolvas, fajas, silos." },
    { label: "Granel Líquido", kpi: "m³/hora / Tanques", color: "#6366f1", desc: "Petróleo, químicos. Tuberías y brazos." },
    { label: "Carga General", kpi: "t/hora / Rotación", color: "#22c55e", desc: "Pallets, sacos. Flexibilidad operativa." },
    { label: "Ro-Ro", kpi: "Veh/hora / LEU", color: "#a855f7", desc: "Vehículos y maquinaria. Rampa propia." },
    { label: "Multipropósito", kpi: "Variable", color: "#f43f5e", desc: "Combinación de cargas. Alta versatilidad." },
  ];
  const W = 182; const H = 118; const cols = 3; const padX = 20; const padY = 60;
  return (
    <svg viewBox="0 0 640 360" className="w-full" role="img" aria-label="Tipos de terminales portuarias">
      <rect width="640" height="360" rx="20" fill="#0d1117" fillOpacity="0.8" />
      <text x="320" y="28" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="700">Tipos de Terminales Portuarias</text>
      <text x="320" y="46" textAnchor="middle" fill="#64748b" fontSize="10">Clasificación por tipo de carga · KPI indicativo por terminal</text>
      {items.map((it, i) => {
        const col = i % cols; const row = Math.floor(i / cols);
        const x = padX + col * (W + 10); const y = padY + row * (H + 12);
        return (
          <g key={i}>
            <rect x={x} y={y} width={W} height={H} rx="14"
              fill={it.color} fillOpacity="0.10" stroke={it.color} strokeOpacity="0.45" strokeWidth="1.5" />
            <text x={x+W/2} y={y+24} textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="800">{it.label}</text>
            <rect x={x+24} y={y+30} width={W-48} height="16" rx="6" fill={it.color} fillOpacity="0.2" />
            <text x={x+W/2} y={y+42} textAnchor="middle" fill={it.color} fontSize="9" fontWeight="700">{it.kpi}</text>
            <line x1={x+20} y1={y+52} x2={x+W-20} y2={y+52} stroke={it.color} strokeOpacity="0.2" strokeWidth="1" />
            <Txt x={x+W/2} y={y+65} text={it.desc} fill="#94a3b8" size={9} anchor="middle" dy={12} />
          </g>
        );
      })}
      <text x="320" y="352" textAnchor="middle" fill="#475569" fontSize="9">La elección del terminal depende del tipo de carga, volumen y requerimientos especiales.</text>
    </svg>
  );
}

/* ── Clasificación de Contenedores ── */
export function InfografiaContenedores() {
  const tipos = [
    { label: "Dry Van 20'",  payload:"~21.7t", color:"#0ea5e9", uso:"Carga general seca" },
    { label: "Dry Van 40'",  payload:"~26.5t", color:"#6366f1", uso:"Mayor volumen seco" },
    { label: "High Cube 40'",payload:"~26.5t", color:"#a855f7", uso:"Cargas voluminosas" },
    { label: "Reefer 40'",   payload:"~27t",   color:"#22c55e", uso:"Refrigerado -30/+30C" },
    { label: "Open Top 20'", payload:"~21.5t", color:"#f59e0b", uso:"Sobredimensionado alto" },
    { label: "Flat Rack 20'",payload:"~24t",   color:"#f43f5e", uso:"Maquinaria y proyectos" },
    { label: "Tank Container",payload:"~26t",  color:"#0d9488", uso:"Líquidos y químicos" },
    { label: "Ventilated 20'",payload:"~21t",  color:"#84cc16", uso:"Café, cacao, frutas" },
  ];
  const W = 142; const H = 150; const cols = 4; const padX = 18; const padY = 56;
  return (
    <svg viewBox="0 0 640 420" className="w-full" role="img" aria-label="Clasificación de contenedores ISO">
      <rect width="640" height="420" rx="20" fill="#0d1117" fillOpacity="0.8" />
      <text x="320" y="28" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="700">Clasificación de Contenedores ISO</text>
      <text x="320" y="46" textAnchor="middle" fill="#64748b" fontSize="10">Payload máximo indicativo · Uso operativo típico</text>
      {tipos.map((t, i) => {
        const col = i % cols; const row = Math.floor(i / cols);
        const x = padX + col*(W+10); const y = padY + row*(H+12);
        return (
          <g key={i}>
            <rect x={x} y={y} width={W} height={H} rx="14"
              fill={t.color} fillOpacity="0.11" stroke={t.color} strokeOpacity="0.45" strokeWidth="1.5" />
            <rect x={x} y={y} width={W} height="34" rx="14" fill={t.color} fillOpacity="0.22" />
            <rect x={x} y={y+22} width={W} height="12" fill={t.color} fillOpacity="0.22" />
            <text x={x+W/2} y={y+22} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800">{t.label}</text>
            <text x={x+W/2} y={y+52} textAnchor="middle" fill="#f1f5f9" fontSize="10" fontWeight="700">{t.payload}</text>
            <text x={x+W/2} y={y+66} textAnchor="middle" fill="#64748b" fontSize="8">payload máximo</text>
            <line x1={x+16} y1={y+74} x2={x+W-16} y2={y+74} stroke={t.color} strokeOpacity="0.25" strokeWidth="1" />
            <Txt x={x+W/2} y={y+88} text={t.uso} fill="#94a3b8" size={9} anchor="middle" dy={12} />
          </g>
        );
      })}
      <text x="320" y="412" textAnchor="middle" fill="#475569" fontSize="9">Selección: tipo de carga + temperatura + dimensiones + regulación IMO</text>
    </svg>
  );
}

/* ── 9 Clases IMO ── */
export function InfografiaIMO() {
  const clases = [
    { n:"1", label:"Explosivos",           color:"#f43f5e" },
    { n:"2", label:"Gases",               color:"#f97316" },
    { n:"3", label:"Líquidos inflamables", color:"#fb923c" },
    { n:"4", label:"Sólidos inflamables",  color:"#facc15" },
    { n:"5", label:"Oxidantes",            color:"#a3e635" },
    { n:"6", label:"Tóxicos",             color:"#4ade80" },
    { n:"7", label:"Radiactivos",          color:"#fbbf24" },
    { n:"8", label:"Corrosivos",           color:"#67e8f9" },
    { n:"9", label:"Misceláneos",          color:"#c084fc" },
  ];
  const W = 95; const H = 95;
  return (
    <svg viewBox="0 0 590 260" className="w-full" role="img" aria-label="9 clases IMO">
      <rect width="590" height="260" rx="20" fill="#0d1117" fillOpacity="0.8" />
      <text x="295" y="26" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="700">9 Clases IMO — Código IMDG</text>
      <text x="295" y="44" textAnchor="middle" fill="#64748b" fontSize="10">Mercancías Peligrosas: clasificación internacional para transporte marítimo</text>
      {clases.map((c, i) => {
        const x = 12 + i*(W+8); const y = 52;
        return (
          <g key={i}>
            <rect x={x} y={y} width={W} height={H} rx="14"
              fill={c.color} fillOpacity="0.12" stroke={c.color} strokeOpacity="0.55" strokeWidth="2" />
            <rect x={x+10} y={y+10} width={W-20} height="28" rx="8" fill={c.color} fillOpacity="0.25" />
            <text x={x+W/2} y={y+30} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="900">Cl. {c.n}</text>
            <Txt x={x+W/2} y={y+58} text={c.label} fill="#e2e8f0" size={9} anchor="middle" dy={11} />
          </g>
        );
      })}
      <text x="295" y="172" textAnchor="middle" fill="#64748b" fontSize="9">Cada clase requiere placard específico, UN Number, segregación y controles operativos.</text>
      {/* Legend row */}
      {[
        {color:"#f43f5e",label:"Requiere segregación especial"},
        {color:"#fbbf24",label:"Señalización obligatoria"},
        {color:"#67e8f9",label:"EPP específico por clase"},
      ].map((l,i)=>(
        <g key={i}>
          <rect x={20+i*185} y={185} width="12" height="12" rx="3" fill={l.color} fillOpacity="0.3" stroke={l.color} strokeWidth="1.5" />
          <text x={38+i*185} y={195} fill="#94a3b8" fontSize="9">{l.label}</text>
        </g>
      ))}
      <text x="295" y="220" textAnchor="middle" fill="#475569" fontSize="9">Fuente: IMO — International Maritime Dangerous Goods Code (IMDG Code)</text>
    </svg>
  );
}

/* ── Sistema BAROTI ── */
export function InfografiaBAROTI() {
  const colors = ["#0ea5e9","#22c55e","#f59e0b","#a855f7","#f43f5e","#34d399","#60a5fa","#fb923c","#4ade80","#c084fc","#67e8f9","#fbbf24"];
  const rows = 3; const cols = 4;
  const CW = 80; const CH = 52; const startX = 80; const startY = 90;
  return (
    <svg viewBox="0 0 620 380" className="w-full" role="img" aria-label="Sistema BAROTI de estiba">
      <rect width="620" height="380" rx="20" fill="#0f172a" />
      <text x="310" y="28" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="700">Sistema BAROTI — Plan de Estiba</text>
      <text x="310" y="46" textAnchor="middle" fill="#64748b" fontSize="10">BAY (proa→popa) · ROW (babor↔estribor) · TIER (fondo→cubierta)</text>
      {/* BAY labels */}
      {Array.from({length:cols}).map((_,bi)=>(
        <text key={bi} x={startX+bi*CW+CW/2} y={78} textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="700">
          {`Bay ${String(bi*2+1).padStart(2,'0')}`}
        </text>
      ))}
      {/* TIER labels */}
      {Array.from({length:rows}).map((_,ri)=>(
        <text key={ri} x={startX-8} y={startY+ri*CH+CH/2+4} textAnchor="end" fill="#94a3b8" fontSize="9">
          {`T${String(86-ri*2).padStart(2,'0')}`}
        </text>
      ))}
      {/* Grid */}
      {Array.from({length:rows}).map((_,ri)=>
        Array.from({length:cols}).map((_,bi)=>{
          const idx = ri*cols+bi;
          const fill = colors[idx%colors.length];
          const isIMO = ri===1 && bi===2;
          const isReefer = ri===0 && bi===3;
          const x = startX+bi*CW; const y = startY+ri*CH;
          return (
            <g key={`${ri}-${bi}`}>
              <rect x={x+2} y={y+2} width={CW-4} height={CH-4} rx="10"
                fill={fill} fillOpacity={isIMO||isReefer?0.28:0.13}
                stroke={isIMO?"#f43f5e":isReefer?"#22c55e":fill}
                strokeOpacity={isIMO||isReefer?0.9:0.4}
                strokeWidth={isIMO||isReefer?2:1.5}
              />
              <text x={x+CW/2} y={y+22} textAnchor="middle" fill="#f1f5f9" fontSize="9" fontWeight="700">
                {`B${String(bi*2+1).padStart(2,'0')} R${String(ri*2).padStart(2,'0')}`}
              </text>
              {isIMO   && <text x={x+CW/2} y={y+38} textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="800">⚠ IMO</text>}
              {isReefer && <text x={x+CW/2} y={y+38} textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="800">❄ REEFER</text>}
              {!isIMO && !isReefer && <text x={x+CW/2} y={y+38} textAnchor="middle" fill="#64748b" fontSize="8">DRY</text>}
            </g>
          );
        })
      )}
      {/* PROA / POPA labels */}
      <text x={startX} y={startY+rows*CH+20} fill="#64748b" fontSize="9">← PROA</text>
      <text x={startX+cols*CW} y={startY+rows*CH+20} textAnchor="end" fill="#64748b" fontSize="9">POPA →</text>
      {/* Legend */}
      {[
        {color:"#f43f5e", label:"IMO / Mercancía peligrosa"},
        {color:"#22c55e", label:"REEFER / Refrigerado"},
        {color:"#0ea5e9", label:"DRY / Seco general"},
      ].map((l,i)=>(
        <g key={i}>
          <rect x={36+i*185} y={310} width="14" height="14" rx="4" fill={l.color} fillOpacity="0.25" stroke={l.color} strokeWidth="1.5" />
          <text x={56+i*185} y={322} fill="#94a3b8" fontSize="10">{l.label}</text>
        </g>
      ))}
      <text x="310" y="354" textAnchor="middle" fill="#64748b" fontSize="10">Las coordenadas BAROTI identifican unívocamente cada posición en el buque.</text>
      <text x="310" y="368" textAnchor="middle" fill="#475569" fontSize="9">Bay impar = posición de 20' · Bay par = centro de posición de 40'</text>
    </svg>
  );
}

/* ── Incoterms 2020 ── */
export function InfografiaIncoterms() {
  const terms = [
    { code:"EXW", resp:"Vendedor mínimo",      color:"#f43f5e" },
    { code:"FCA", resp:"Al transportista",      color:"#f97316" },
    { code:"FAS", resp:"Junto al buque",        color:"#f59e0b" },
    { code:"FOB", resp:"A bordo del buque",     color:"#84cc16" },
    { code:"CFR", resp:"Flete incluido",        color:"#22c55e" },
    { code:"CIF", resp:"Flete + seguro",        color:"#0ea5e9" },
    { code:"DAP", resp:"Lugar destino",         color:"#6366f1" },
    { code:"DPU", resp:"Descargado destino",    color:"#a855f7" },
    { code:"DDP", resp:"Vendedor máximo",       color:"#ec4899" },
  ];
  const W = 62; const H = 160;
  return (
    <svg viewBox="0 0 640 300" className="w-full" role="img" aria-label="Incoterms 2020">
      <rect width="640" height="300" rx="20" fill="#0d1117" fillOpacity="0.8" />
      <text x="320" y="26" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="700">Incoterms® 2020 — Transferencia de Riesgo y Costo</text>
      {/* arrow */}
      <line x1="28" y1="44" x2="612" y2="44" stroke="#334155" strokeWidth="2" />
      <polygon points="612,39 622,44 612,49" fill="#334155" />
      <text x="28" y="38" fill="#64748b" fontSize="9">Vendedor asume más →</text>
      <text x="612" y="38" textAnchor="end" fill="#64748b" fontSize="9">← Comprador asume más</text>
      {terms.map((t, i) => {
        const x = 14 + i*(W+6); const y = 54;
        return (
          <g key={t.code}>
            <rect x={x} y={y} width={W} height={H} rx="10"
              fill={t.color} fillOpacity="0.12" stroke={t.color} strokeOpacity="0.5" strokeWidth="1.5" />
            <rect x={x} y={y} width={W} height="26" rx="10" fill={t.color} fillOpacity="0.3" />
            <rect x={x} y={y+16} width={W} height="10" fill={t.color} fillOpacity="0.3" />
            <text x={x+W/2} y={y+18} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="900">{t.code}</text>
            <Txt x={x+W/2} y={y+40} text={t.resp} fill="#e2e8f0" size={9} anchor="middle" dy={12} />
          </g>
        );
      })}
      <text x="320" y="238" textAnchor="middle" fill="#64748b" fontSize="9">FOB, CFR y CIF: exclusivos transporte marítimo y fluvial.</text>
      <text x="320" y="252" textAnchor="middle" fill="#64748b" fontSize="9">FCA, CPT, CIP, DAP, DPU, DDP: todos los modos de transporte.</text>
      <text x="320" y="270" textAnchor="middle" fill="#475569" fontSize="9">Fuente: Cámara de Comercio Internacional (ICC) — Incoterms® 2020</text>
    </svg>
  );
}

/* ── Flujo Operación Portuaria ── */
export function InfografiaFlujoPortuario() {
  const steps = [
    { label:"Pre-arribo",      sub:"ETA, Docs, Plan",        color:"#0ea5e9" },
    { label:"Arribo/Fondeo",   sub:"DIMAR, Migración",       color:"#6366f1" },
    { label:"Atraque",         sub:"Muelle, Amarre",         color:"#a855f7" },
    { label:"Operación",       sub:"Carga/Descarga",         color:"#22c55e" },
    { label:"Almacenamiento",  sub:"Patio, Zonas IMO",       color:"#f59e0b" },
    { label:"Aduana/DIAN",     sub:"Aforo, Levante",         color:"#f43f5e" },
    { label:"Entrega/Gate",    sub:"EIR, Camión",            color:"#34d399" },
  ];
  const W = 86; const H = 95;
  return (
    <svg viewBox="0 0 690 140" className="w-full" role="img" aria-label="Flujo operación portuaria">
      <rect width="690" height="140" rx="16" fill="#0d1117" fillOpacity="0.8" />
      <text x="345" y="20" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="700">Flujo Completo de la Operación Portuaria</text>
      {steps.map((s, i) => {
        const x = 8 + i*(W+6); const y = 28;
        return (
          <g key={i}>
            <rect x={x} y={y} width={W} height={H} rx="12"
              fill={s.color} fillOpacity="0.11" stroke={s.color} strokeOpacity="0.45" strokeWidth="1.5" />
            <text x={x+W/2} y={y+22} textAnchor="middle" fill="#f1f5f9" fontSize="10" fontWeight="700">{s.label}</text>
            <line x1={x+14} y1={y+28} x2={x+W-14} y2={y+28} stroke={s.color} strokeOpacity="0.25" strokeWidth="1" />
            <Txt x={x+W/2} y={y+40} text={s.sub} fill="#94a3b8" size={8.5} anchor="middle" dy={11} />
            {i < steps.length-1 && (
              <polygon points={`${x+W+2},${y+H/2-4} ${x+W+7},${y+H/2} ${x+W+2},${y+H/2+4}`}
                fill={s.color} fillOpacity="0.6" />
            )}
          </g>
        );
      })}
      <text x="345" y="133" textAnchor="middle" fill="#475569" fontSize="8.5">Cada paso genera documentos y KPIs que alimentan el siguiente eslabón de la cadena.</text>
    </svg>
  );
}

/* ── KPIs Portuarios ── */
export function InfografiaKPIs() {
  const kpis = [
    { label:"MPH",         full:"Moves per Hour",        valor:"25–35", unidad:"mov/h",  color:"#0ea5e9", desc:"Productividad de grúa STS. Referencia mundial." },
    { label:"Dwell Time",  full:"Tiempo en patio",       valor:"3–7",   unidad:"días",   color:"#22c55e", desc:"Días de permanencia promedio en patio." },
    { label:"Berth Time",  full:"Tiempo en muelle",      valor:"12–36", unidad:"horas",  color:"#6366f1", desc:"Duración del atraque. Afecta costo de escala." },
    { label:"GCH",         full:"Gross Crane Hours",     valor:">20",   unidad:"mov/h",  color:"#f59e0b", desc:"Productividad bruta incluyendo demoras." },
    { label:"TAT Gate",    full:"Turn-Around Time",      valor:"<30",   unidad:"min",    color:"#a855f7", desc:"Tiempo de camión: entrada a salida del gate." },
    { label:"BERT. OCC.", full:"Ocupación de muelle",    valor:"65–80", unidad:"%",      color:"#f43f5e", desc:"Sobre 85%: congestión crítica en muelle." },
  ];
  const W = 182; const H = 90; const cols = 3;
  return (
    <svg viewBox="0 0 620 270" className="w-full" role="img" aria-label="KPIs portuarios">
      <rect width="620" height="270" rx="20" fill="#0d1117" fillOpacity="0.8" />
      <text x="310" y="26" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="700">KPIs Clave de Productividad Portuaria</text>
      <text x="310" y="44" textAnchor="middle" fill="#64748b" fontSize="10">Indicadores estándar para medir y controlar operaciones en terminales</text>
      {kpis.map((k, i) => {
        const col = i % cols; const row = Math.floor(i / cols);
        const x = 14 + col*(W+8); const y = 54 + row*(H+10);
        return (
          <g key={i}>
            <rect x={x} y={y} width={W} height={H} rx="14"
              fill={k.color} fillOpacity="0.10" stroke={k.color} strokeOpacity="0.4" strokeWidth="1.5" />
            <text x={x+14} y={y+26} fill={k.color} fontSize="16" fontWeight="900">{k.label}</text>
            <text x={x+14} y={y+40} fill="#64748b" fontSize="9">{k.full}</text>
            <text x={x+W-10} y={y+28} textAnchor="end" fill="#f1f5f9" fontSize="18" fontWeight="900">{k.valor}</text>
            <text x={x+W-10} y={y+42} textAnchor="end" fill={k.color} fontSize="9">{k.unidad}</text>
            <line x1={x+10} y1={y+50} x2={x+W-10} y2={y+50} stroke={k.color} strokeOpacity="0.2" strokeWidth="1" />
            <Txt x={x+14} y={y+62} text={k.desc} fill="#94a3b8" size={9} anchor="start" dy={11} />
          </g>
        );
      })}
      <text x="310" y="260" textAnchor="middle" fill="#475569" fontSize="9">KPIs = base para decisiones operativas, contratos y benchmarking internacional</text>
    </svg>
  );
}

/* ── Documentos Portuarios por Fase ── */
export function InfografiaDocumentos() {
  const fases = [
    { fase:"Pre-arribo",          color:"#0ea5e9", docs:["Aviso ETA","Manifiesto previo","Lista tripulación","Notificación IMO"] },
    { fase:"Atraque / Operación", color:"#22c55e", docs:["Orden de trabajo","Bay plan","EIR contenedor","Tally / Reporte turno"] },
    { fase:"Almacenamiento",      color:"#f59e0b", docs:["Recibo almacenaje","Acta inspección","Control reefer","Registro IMO patio"] },
    { fase:"Aduana / Entrega",    color:"#a855f7", docs:["DUA importación","Bill of Lading","Packing List + Fact.","Cert. origen + Seguro"] },
  ];
  const W = 142; const cols = 4;
  return (
    <svg viewBox="0 0 640 320" className="w-full" role="img" aria-label="Documentos portuarios por fase">
      <rect width="640" height="320" rx="20" fill="#0d1117" fillOpacity="0.8" />
      <text x="320" y="26" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="700">Documentación Portuaria por Fase</text>
      <text x="320" y="44" textAnchor="middle" fill="#64748b" fontSize="10">Cada documento tiene función, responsable y consecuencia si está incompleto</text>
      {fases.map((f, i) => {
        const col = i % cols;
        const x = 14 + col*(W+8); const y = 54;
        return (
          <g key={i}>
            <rect x={x} y={y} width={W} height="250" rx="14"
              fill={f.color} fillOpacity="0.09" stroke={f.color} strokeOpacity="0.4" strokeWidth="1.5" />
            <rect x={x} y={y} width={W} height="28" rx="14" fill={f.color} fillOpacity="0.28" />
            <rect x={x} y={y+18} width={W} height="10" fill={f.color} fillOpacity="0.28" />
            <text x={x+W/2} y={y+18} textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800">{f.fase}</text>
            {f.docs.map((doc, j) => (
              <g key={j}>
                <rect x={x+8} y={y+34+j*52} width={W-16} height="44" rx="10"
                  fill={f.color} fillOpacity="0.08" stroke={f.color} strokeOpacity="0.2" strokeWidth="1" />
                <text x={x+20} y={y+58+j*52} fill="#f1f5f9" fontSize="16">📄</text>
                <Txt x={x+36} y={y+42+j*52} text={doc} fill="#e2e8f0" size={8.5} anchor="start" dy={11} />
              </g>
            ))}
          </g>
        );
      })}
      <text x="320" y="312" textAnchor="middle" fill="#475569" fontSize="9">La trazabilidad documental es clave: cada documento es evidencia y control operativo.</text>
    </svg>
  );
}

/* ── Mini diagrama genérico ── */
export function MiniDiagram({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-400/20 blur-2xl" />
      <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-2xl" />
      <div className="relative">
        <div className="text-sm font-semibold text-white/85">{title}</div>
        <div className="mt-1 text-xs text-white/60">{subtitle}</div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k:"Plan",    v:"Antes del arribo" },
            { k:"Coord",   v:"Turnos y recursos" },
            { k:"Control", v:"Docs y KPIs" },
          ].map((item) => (
            <div key={item.k} className="rounded-xl border border-white/10 bg-black/20 p-3">
              <div className="text-[11px] font-semibold text-white/70">{item.k}</div>
              <div className="mt-1 text-xs text-white/55">{item.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
