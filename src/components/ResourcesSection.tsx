import type { ResourceLink } from "../data/course";

const TAG_STYLES: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  "Norma oficial": {
    bg: "bg-sky-500/15", text: "text-sky-300", border: "border-sky-500/30", icon: "⚖️",
  },
  "Entidad oficial": {
    bg: "bg-indigo-500/15", text: "text-indigo-300", border: "border-indigo-500/30", icon: "🏛️",
  },
  "Norma internacional": {
    bg: "bg-violet-500/15", text: "text-violet-300", border: "border-violet-500/30", icon: "🌐",
  },
  "Organismo internacional": {
    bg: "bg-emerald-500/15", text: "text-emerald-300", border: "border-emerald-500/30", icon: "🌍",
  },
  "Referencia técnica": {
    bg: "bg-amber-500/15", text: "text-amber-300", border: "border-amber-500/30", icon: "🔧",
  },
  "Referencia operacional": {
    bg: "bg-orange-500/15", text: "text-orange-300", border: "border-orange-500/30", icon: "📊",
  },
  "Herramienta de gestión": {
    bg: "bg-teal-500/15", text: "text-teal-300", border: "border-teal-500/30", icon: "🛠️",
  },
  "Referencia documental": {
    bg: "bg-cyan-500/15", text: "text-cyan-300", border: "border-cyan-500/30", icon: "📄",
  },
};

const DEFAULT_STYLE = {
  bg: "bg-white/10", text: "text-white/60", border: "border-white/20", icon: "🔗",
};

function getDomainLabel(url: string): string {
  try {
    const host = new URL(url).hostname.replace("www.", "");
    const map: Record<string, string> = {
      "funcionpublica.gov.co": "Función Pública – Colombia",
      "dimar.mil.co": "DIMAR – Colombia",
      "migracioncolombia.gov.co": "Migración Colombia",
      "invima.gov.co": "INVIMA – Colombia",
      "unctad.org": "UNCTAD – Naciones Unidas",
      "imo.org": "OMI – Organización Marítima Internacional",
      "iccwbo.org": "CCI – Cámara de Comercio Internacional",
      "iso.org": "ISO – Organización de Normalización",
      "fiata.org": "FIATA – Transitarios Internacionales",
      "ilo.org": "OIT – Organización Internacional del Trabajo",
      "pmi.org": "PMI – Gestión de Proyectos",
      "liebherr.com": "Liebherr – Equipos Portuarios",
      "macgregor.com": "MacGregor – Equipos Navales",
      "alphaliner.axsmarine.com": "Alphaliner – Estadísticas Marítimas",
      "dian.gov.co": "DIAN – Aduanas Colombia",
    };
    return map[host] ?? host;
  } catch {
    return url;
  }
}

export function ResourcesSection({ resources }: { resources: ResourceLink[] }) {
  if (!resources || resources.length === 0) return null;

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/30 to-indigo-500/30 text-lg">
          📚
        </div>
        <div>
          <div className="text-sm font-bold text-white/90">Lecturas y Recursos de Apoyo</div>
          <div className="text-xs text-white/45">
            Fuentes oficiales, normativas y referencias académicas en español
          </div>
        </div>
        <div className="ml-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/20 text-xs font-bold text-white/60">
          {resources.length}
        </div>
      </div>

      {/* Lista de recursos */}
      <div className="divide-y divide-white/5">
        {resources.map((r, idx) => {
          const style = r.tag ? (TAG_STYLES[r.tag] ?? DEFAULT_STYLE) : DEFAULT_STYLE;
          const domainLabel = getDomainLabel(r.url);

          return (
            <a
              key={idx}
              href={r.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-start gap-4 px-5 py-4 hover:bg-white/4 transition-all duration-200"
            >
              {/* Ícono de tipo */}
              <div
                className={`mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-xl border text-lg ${style.bg} ${style.border}`}
              >
                {style.icon}
              </div>

              {/* Contenido */}
              <div className="min-w-0 flex-1">
                {/* Etiqueta + dominio */}
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  {r.tag && (
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${style.bg} ${style.text} ${style.border}`}
                    >
                      {r.tag}
                    </span>
                  )}
                  <span className="text-[10px] text-white/30 font-mono">{domainLabel}</span>
                </div>

                {/* Título en español */}
                <div className="text-sm font-bold text-white/85 group-hover:text-white transition-colors leading-snug mb-1.5">
                  {r.title}
                </div>

                {/* Descripción */}
                {r.description && (
                  <div className="text-xs leading-relaxed text-white/50 mb-2">
                    {r.description}
                  </div>
                )}

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-sky-400/70 group-hover:text-sky-400 transition-colors">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Abrir recurso en nueva pestaña →
                </div>
              </div>

              {/* Flecha hover */}
              <svg
                className="h-4 w-4 flex-none text-white/20 group-hover:text-sky-400/70 transition-colors mt-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-white/8 bg-black/10 px-5 py-3">
        <p className="text-[10px] text-white/30 leading-relaxed">
          💡 Todos los enlaces se abren en una nueva pestaña. Se recomienda explorar primero las fuentes oficiales antes de ver los videos.
        </p>
      </div>
    </div>
  );
}
