import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  ArrowRight,
  Download,
  MapPin,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/20 to-cyan-400/10 blur-[120px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 blur-[90px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-6 backdrop-blur-sm shadow-sm hover:border-slate-700 transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{personal.status}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Halo, saya{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">
              {personal.name}
            </span>{" "}
            👋
          </h1>

          {/* Headline / Subtitle */}
          <p className="text-lg sm:text-xl font-medium text-indigo-200/90 mb-4 max-w-2xl">
            {personal.headline}
          </p>

          {/* Short Bio */}
          <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl">
            {personal.shortBio}
          </p>

          {/* Location info */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <MapPin className="w-4 h-4 text-indigo-400" />
            <span>{personal.location}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#proyek"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all text-sm sm:text-base"
            >
              <span>Lihat Karya & Proyek</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personal.resumeUrl}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-md hover:-translate-y-0.5 transition-all text-sm sm:text-base"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Unduh CV / Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400 mb-16">
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white hover:scale-110 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white hover:scale-110 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white hover:scale-110 transition-all"
              aria-label="Email Me"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Stats Bar */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
            {stats.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-2 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
