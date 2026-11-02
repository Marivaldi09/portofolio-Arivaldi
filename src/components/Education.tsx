import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";

export default function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="edukasi" className="py-20 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
            Pendidikan & Sertifikasi
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Riwayat Pendidikan & Lisensi Profesional
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Landasan akademis dan sertifikasi kredibel yang memperkuat kompetensi teknis saya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-bold text-white">Edukasi Formal</h3>
            </div>

            <div className="relative border-l border-slate-800 pl-6 space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 border-4 border-slate-950 group-hover:scale-125 transition-transform" />

                  <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all">
                    <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                      <span className="text-sm font-semibold text-indigo-400">
                        {edu.degree} - {edu.major}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-2">
                      {edu.institution}
                    </h4>

                    {edu.gpa && (
                      <div className="inline-block px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 mb-3">
                        IPK: {edu.gpa}
                      </div>
                    )}

                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="space-y-1.5 mt-2">
                        {edu.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Sertifikasi & Lisensi</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="text-base font-bold text-white hover:text-indigo-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {cert.issuer} • Diterbitkan {cert.issueDate}
                      </p>
                    </div>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                        title="Lihat Sertifikat"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800/60">
                    {cert.skills.map((s, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

