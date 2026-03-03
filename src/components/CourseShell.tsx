import { useEffect, useMemo, useState } from "react";
import { modules, type Lesson, type Module } from "../data/course";
import { cn } from "../utils/cn";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash.replace("#", ""));

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash.replace("#", ""));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hash;
}

export function CourseShell({
  header,
  content,
  selectedModule,
  selectedLesson,
  onSelect,
}: {
  header: React.ReactNode;
  content: React.ReactNode;
  selectedModule?: Module;
  selectedLesson?: Lesson;
  onSelect: (moduleId: string, lessonId?: string) => void;
}) {
  const hash = useHashRoute();

  useEffect(() => {
    if (!hash) return;
    const [m, l] = hash.split("/");
    if (m) onSelect(m, l);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  const [open, setOpen] = useState(false);

  const menu = useMemo(() => {
    return modules.map((m) => ({
      ...m,
      lessonsCount: m.lessons.length,
    }));
  }, []);

  return (
    <div className="min-h-screen bg-[#070A12] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute -right-24 top-16 h-[520px] w-[520px] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute left-1/3 top-2/3 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]">
          <aside className="lg:sticky lg:top-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="flex items-center justify-between px-5 py-4 md:px-6">
                <div className="text-sm font-semibold tracking-wide text-white/85">Módulos</div>
                <button
                  className="lg:hidden rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
                  onClick={() => setOpen((v) => !v)}
                >
                  {open ? "Cerrar" : "Abrir"}
                </button>
              </div>

              <div className={cn("px-3 pb-3", open ? "block" : "hidden lg:block")}>
                <div className="space-y-2">
                  {menu.map((m) => {
                    const active = selectedModule?.id === m.id;
                    return (
                      <div key={m.id} className="rounded-2xl border border-white/10 bg-black/20">
                        <button
                          className={cn(
                            "flex w-full items-center justify-between gap-3 px-4 py-3 text-left",
                            active ? "bg-white/5" : "hover:bg-white/5",
                          )}
                          onClick={() => {
                            setOpen(false);
                            window.location.hash = `${m.id}`;
                          }}
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-white/90">{m.dayLabel}</span>
                              <Badge variant="soft">{m.schedule}</Badge>
                            </div>
                            <div className="mt-1 truncate text-xs text-white/60">{m.theme}</div>
                          </div>
                          <Badge variant="outline">{m.lessonsCount}</Badge>
                        </button>

                        {active && (
                          <div className="border-t border-white/10 p-3">
                            <div className="space-y-1">
                              {m.lessons.map((l) => {
                                const la = selectedLesson?.id === l.id;
                                return (
                                  <button
                                    key={l.id}
                                    className={cn(
                                      "w-full rounded-xl px-3 py-2 text-left text-sm",
                                      la
                                        ? "bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-white/10"
                                        : "hover:bg-white/5 text-white/80",
                                    )}
                                    onClick={() => {
                                      setOpen(false);
                                      window.location.hash = `${m.id}/${l.id}`;
                                    }}
                                  >
                                    <div className="line-clamp-2 text-[13px] font-medium">{l.title}</div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold text-white/80">Atajo didáctico</div>
                  <div className="mt-1 text-xs text-white/60">
                    Usa el menú para navegar por <span className="text-white/80">días/secciones</span> y abrir cada
                    tema con objetivos, actividades, glosario y videos de apoyo.
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button
                      variant="soft"
                      size="sm"
                      onClick={() => {
                        setOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Ir al inicio
                    </Button>
                    <a
                      className="inline-flex h-9 items-center justify-center rounded-xl border border-white/10 bg-transparent px-3 text-sm font-semibold text-white/85 hover:bg-white/10"
                      href="#dia-1/estructura-portuaria"
                    >
                      Empezar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="min-w-0">
            {header}
            <div className="mt-6">{content}</div>
            <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
              Material de apoyo: enlaces externos (YouTube/organismos). Verifica siempre políticas y versiones vigentes.
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
