import type { Module } from "../data/course";
import { Card, CardBody, CardHeader } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { InfografiaFlujoPortuario } from "./Illustrations";

export function ModuleOverview({ module }: { module: Module }) {
  const totalVideos = module.lessons.reduce((s, l) => s + l.videos.length, 0);
  const totalGlossary = module.lessons.reduce((s, l) => s + l.glossary.length, 0);
  const totalActivities = module.lessons.reduce((s, l) => s + l.activities.length, 0);

  return (
    <div className="space-y-6">
      {/* Header del módulo */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="soft">{module.dayLabel}</Badge>
          <Badge variant="outline">{module.schedule}</Badge>
          <Badge variant="soft">👨‍🏫 {module.instructor}</Badge>
        </div>
        <h2 className="mt-4 text-2xl font-black tracking-tight text-white md:text-3xl">{module.theme}</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          Selecciona un tema para ver objetivos, conceptos clave, infografías, actividades, glosario y videos de apoyo.
        </p>

        {/* Stats del módulo */}
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { v: module.lessons.length, l: "Temas", c: "text-sky-400" },
            { v: totalVideos, l: "Videos", c: "text-red-400" },
            { v: totalGlossary, l: "Términos", c: "text-violet-400" },
            { v: totalActivities, l: "Actividades", c: "text-emerald-400" },
          ].map(s => (
            <div key={s.l} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
              <div className={`text-2xl font-black ${s.c}`}>{s.v}</div>
              <div className="mt-1 text-[10px] text-white/45">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards de temas */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {module.lessons.map((l, idx) => (
          <a
            key={l.id}
            href={`#${module.id}/${l.id}`}
            className="group flex flex-col gap-0 rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/8 transition-all duration-200 hover:border-white/20 hover:scale-[1.01]"
          >
            {/* Color bar */}
            <div className={`h-1.5 w-full ${idx%3===0?"bg-gradient-to-r from-sky-500 to-indigo-500":idx%3===1?"bg-gradient-to-r from-emerald-500 to-teal-500":"bg-gradient-to-r from-violet-500 to-purple-500"}`} />

            <div className="p-5 flex-1 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/35">Tema {idx+1}</div>
                  <h3 className="mt-1 text-sm font-bold text-white/90 group-hover:text-white transition leading-snug">{l.title}</h3>
                </div>
                <Badge variant="outline">→</Badge>
              </div>

              <p className="text-xs text-white/55 leading-relaxed line-clamp-3">{l.summary}</p>

              {/* Key concepts preview */}
              <div className="flex flex-wrap gap-1.5">
                {l.keyConcepts.slice(0, 3).map((c, i) => (
                  <span key={i} className="rounded-lg bg-white/5 border border-white/10 px-2 py-1 text-[10px] text-white/55 line-clamp-1 max-w-[140px] truncate">
                    {c.split(":")[0]}
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <div className="mt-auto grid grid-cols-4 gap-2 border-t border-white/10 pt-3">
                {[
                  { label: "Objetivos", val: l.outcomes.length, color: "text-sky-400" },
                  { label: "Conceptos", val: l.keyConcepts.length, color: "text-indigo-400" },
                  { label: "Videos", val: l.videos.length, color: "text-red-400" },
                  { label: "Términos", val: l.glossary.length, color: "text-violet-400" },
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <div className={`text-sm font-black ${s.color}`}>{s.val}</div>
                    <div className="text-[9px] text-white/35">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Flujo portuario como contexto visual del módulo */}
      <div className="rounded-2xl border border-white/10 bg-black/20 p-4 overflow-hidden">
        <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Flujo de la Operación Portuaria — Contexto del Módulo</div>
        <InfografiaFlujoPortuario />
      </div>

      {/* Checklist de estudio del módulo */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 text-sm font-bold text-white/90">
            <span>✅</span>
            <span>Checklist de Estudio del Módulo</span>
          </div>
          <div className="mt-1 text-xs text-white/50">Rutina corta para que el estudiante llegue preparado a clase.</div>
        </CardHeader>
        <CardBody>
          <ul className="grid grid-cols-1 gap-3 text-sm text-white/70 md:grid-cols-2">
            {[
              "📖 Lee el resumen de cada tema y subraya 3 preguntas.",
              "📝 Revisa el glosario y define 5 términos con tus palabras.",
              "🎬 Mira 1 video (10–15 min) y anota el proceso completo.",
              "🔗 Relaciona el tema con un riesgo operativo y un control.",
              "🗺️ Dibuja un mini mapa mental con los conceptos clave.",
              "💬 Prepara al menos una pregunta para el docente.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs leading-relaxed">
                <span className="mt-0.5 flex-none">{t.split(" ")[0]}</span>
                <span className="text-white/65">{t.split(" ").slice(1).join(" ")}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}
