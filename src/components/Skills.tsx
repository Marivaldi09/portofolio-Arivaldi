import { portfolioData } from "@/data/portfolio";
import { CheckCircle2, Layers, Cpu, Wrench } from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = [
    <Layers key="1" className="w-5 h-5 text-indigo-400" />,
    <Cpu key="2" className="w-5 h-5 text-violet-400" />,
    <Wrench key="3" className="w-5 h-5 text-cyan-400" />,
  ];

  const getLevelBadge = (level: "Dasar" | "Menengah" | "Mahir") => {
    switch (level) {
      case "Mahir":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Menengah":
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
      case "Dasar":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      default:
        return "bg-slate-800 text-slate-300 border-slate-700";
    }
  };

  return (
    <section id="keahlian" className="py-20 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 mb-3 uppercase tracking-wider">
            Keahlian & Teknologi
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tech Stack & Tools yang Dikuasai
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Teknologi yang saya gunakan secara aktif untuk membangun solusi web yang interaktif, scalable, dan modern.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <div
              key={category.category}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all shadow-md flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-800">
                  {categoryIcons[idx % categoryIcons.length]}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3 flex-1">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800/60 hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${getLevelBadge(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

