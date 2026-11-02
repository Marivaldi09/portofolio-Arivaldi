import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "Magang":
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
      case "Organisasi":
        return "bg-violet-500/10 text-violet-400 border-violet-500/20";
      case "Freelance":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      default:
        return "bg-slate-800 text-slate-300 border-slate-700";
    }
  };

  return (
    <section id="pengalaman" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 mb-3 uppercase tracking-wider">
            Pengalaman & Kepemimpinan
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pengalaman Kerja, Magang & Organisasi
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Aktivitas yang telah membentuk kedisiplinan kerja tim, komunikasi interpersonal, dan kebiasaan profesional saya.
          </p>
        </div>

        {/* Experience List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all shadow-md group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {item.role}
                    </h3>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${getTypeBadge(
                        item.type
                      )}`}
                    >
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-300 mt-1">
                    {item.companyOrOrg}
                  </p>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-3 sm:gap-1 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {item.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mt-4 pt-4 border-t border-slate-800/60">
                {item.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

