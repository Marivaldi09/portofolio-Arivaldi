import { portfolioData } from "@/data/portfolio";
import { Zap, Target, Users, ShieldCheck, GraduationCap, Code2, Award, HeartHandshake } from "lucide-react";

export default function About() {
  const { about } = portfolioData;

  const icons = [
    <Zap key="1" className="w-6 h-6 text-indigo-400" />,
    <Target key="2" className="w-6 h-6 text-violet-400" />,
    <Users key="3" className="w-6 h-6 text-cyan-400" />,
    <ShieldCheck key="4" className="w-6 h-6 text-emerald-400" />,
  ];

  return (
    <section id="tentang" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-3 uppercase tracking-wider">
            Tentang Saya
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Mengenal Latar Belakang & Semangat Saya
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Menggabungkan pondasi teori akademis yang solid dengan kebiasaan praktik koding mandiri dan keterbukaan terhadap hal baru.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio text */}
          <div className="lg:col-span-6 space-y-5 text-slate-300 leading-relaxed text-base">
            {about.longBio.map((paragraph, index) => (
              <p key={index} className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                {paragraph}
              </p>
            ))}

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                Teknik Informatika
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Code2 className="w-4 h-4 text-violet-400" />
                Web & Software Dev
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                Siap Belajar & Berkontribusi
              </span>
            </div>
          </div>

          {/* Strengths Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.strengths.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {icons[idx % icons.length]}
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

