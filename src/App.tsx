import { useMemo, useState } from "react";
import { courseSubtitle, courseTitle, modules, type Lesson, type Module } from "./data/course";
import { CourseShell } from "./components/CourseShell";
import { Card, CardBody, CardHeader } from "./components/ui/Card";
import { Badge } from "./components/ui/Badge";
import { HarborHeroArt } from "./components/Illustrations";
import { ModuleOverview } from "./components/ModuleOverview";
import { LessonView } from "./components/LessonView";
import { EnfoqueCards } from "./components/EnfoqueModal";

function findSelection(moduleId?: string, lessonId?: string) {
  const m = moduleId ? modules.find((x) => x.id === moduleId) : undefined;
  if (!m) return { module: undefined, lesson: undefined };
  const l = lessonId ? m.lessons.find((x) => x.id === lessonId) : undefined;
  return { module: m, lesson: l };
}

/* ── Stat badge ── */
function StatCard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-black/20 p-4 text-center`}>
      <div className={`text-2xl font-black ${color}`}>{value}</div>
      <div className="mt-1 text-[10px] text-white/50 leading-tight">{label}</div>
    </div>
  );
}

export function App() {
  const initial = useMemo(() => {
    const raw = window.location.hash.replace("#", "");
    if (!raw) return { module: undefined, lesson: undefined };
    const [m, l] = raw.split("/");
    return findSelection(m, l);
  }, []);

  const [selectedModule, setSelectedModule] = useState<Module | undefined>(initial.module);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | undefined>(initial.lesson);

  const onSelect = (moduleId: string, lessonId?: string) => {
    const sel = findSelection(moduleId, lessonId);
    setSelectedModule(sel.module);
    setSelectedLesson(sel.lesson);
  };

  /* ── Hero header ── */
  const header = (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="grid grid-cols-1 gap-6 p-6 md:p-8 xl:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="soft">Curso Profesional</Badge>
            <Badge variant="outline">Modalidad Modular · 12 sesiones</Badge>
            <Badge variant="soft">19:00 – 21:30</Badge>
          </div>

          <h1 className="mt-4 text-balance text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
            {courseTitle}
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-white/65">
            {courseSubtitle}
          </p>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-4 gap-3">
            <StatCard value="12" label="Sesiones" color="text-sky-400" />
            <StatCard value="23" label="Temas" color="text-indigo-400" />
            <StatCard value="40+" label="Videos" color="text-emerald-400" />
            <StatCard value="8" label="Infografías" color="text-violet-400" />
          </div>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href="#dia-1/estructura-portuaria"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-5 text-sm font-bold text-white shadow-lg shadow-sky-500/20 hover:from-sky-400 hover:to-indigo-400 transition-all"
            >
              🚀 Comenzar curso
            </a>
            <a
              href="#dia-1"
              className="inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
            >
              📋 Ver módulos
            </a>
            <a
              href="https://iccwbo.org/business-solutions/incoterms-rules/"
              target="_blank" rel="noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white/60 hover:text-white/85 hover:bg-white/10 transition"
            >
              🌐 ICC Incoterms
            </a>
          </div>

          {/* Instructor */}
          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-lg font-black text-white">
              MM
            </div>
            <div>
              <div className="text-sm font-bold text-white/90">Maikol Mell Ferrer</div>
              <div className="text-xs text-white/50">Docente · Especialista en Logística Portuaria · Todas las sesiones</div>
            </div>
          </div>
        </div>

        {/* RIGHT — Illustration + Ruta */}
        <div className="flex flex-col gap-4">
          <div className="relative min-h-[200px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/30 to-white/5 flex-1">
            <div className="absolute inset-0 opacity-90">
              <HarborHeroArt />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#070A12]/10 via-[#070A12]/40 to-[#070A12]" />
            <div className="relative p-5 h-full flex flex-col justify-end">
              <div className="text-xs font-bold text-white/60 uppercase tracking-widest">Ruta recomendada</div>
              <ol className="mt-2 space-y-1.5 text-xs text-white/65">
                {[
                  "1. Introducción · Normativa y Autoridades",
                  "2. Terminales · Muelles · Almacenamiento",
                  "3. Cargas · IMO · Contenedores",
                  "4. Planificación · Pre-arribo · Atraque",
                  "5. Coordinación · Estibas · Rendimientos",
                  "6. BAROTI · Trinca · Incoterms · Aduana",
                ].map((s, i) => (
                  <li key={i} className="rounded-lg bg-black/30 px-3 py-1.5 backdrop-blur-sm">{s}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* ── Enfoques expandibles ── */}
      <div className="border-t border-white/10 px-6 pb-6 pt-4 md:px-8">
        <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Tres ejes del curso</div>
        <div className="text-sm text-white/60">Haz clic en cada enfoque para leer el resumen completo con infografía y puntos clave.</div>
        <EnfoqueCards />
      </div>
    </div>
  );

  const content = selectedModule ? (
    selectedLesson ? (
      <LessonView module={selectedModule} lesson={selectedLesson} />
    ) : (
      <ModuleOverview module={selectedModule} />
    )
  ) : (
    /* Welcome card when nothing is selected */
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-white">Bienvenido al curso de Logística Portuaria</h2>
        <p className="mt-2 text-sm text-white/60">
          Selecciona un módulo en el menú lateral para comenzar a estudiar. Cada módulo contiene temas con
          objetivos, conceptos clave, infografías, actividades, glosario y videos de apoyo.
        </p>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {modules.map(m => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-white/5 transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white/85 group-hover:text-white transition">{m.dayLabel}</span>
                <Badge variant="outline">{m.lessons.length} temas</Badge>
              </div>
              <div className="text-xs text-white/55 leading-relaxed">{m.theme}</div>
              <div className="text-[10px] text-white/35">{m.schedule} · {m.instructor}</div>
            </a>
          ))}
        </div>
      </CardBody>
    </Card>
  );

  return (
    <CourseShell
      header={header}
      content={content}
      selectedModule={selectedModule}
      selectedLesson={selectedLesson}
      onSelect={onSelect}
    />
  );
}
