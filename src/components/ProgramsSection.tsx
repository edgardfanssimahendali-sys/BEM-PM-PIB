import { useState } from 'react';
import { PROGRAMS_DATA } from '../data/mockData';
import { Program } from '../types';
import ProgramModal from './ProgramModal';
import { Calendar, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';

export default function ProgramsSection() {
  const [filter, setFilter] = useState<'ALL' | 'FEATURED' | 'ONGOING' | 'UPCOMING' | 'COMPLETED'>('ALL');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const featuredProgram = PROGRAMS_DATA.find((p) => p.id === 'prog-sunsetion') || PROGRAMS_DATA[0];
  const growbalizationProgram = PROGRAMS_DATA.find((p) => p.id === 'prog-growbalization');

  const filteredPrograms = PROGRAMS_DATA.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'FEATURED') return p.category === 'Featured';
    return p.status === filter;
  });

  return (
    <section id="programs" className="py-28 px-6 relative border-t border-white/5 bg-[#030209]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-2">
              <span>OUR MOVEMENT</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">PROGRAM KERJA KABINET</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Programs that turn ideas into action.
            </h2>
          </div>

          {/* Interactive Filter Tabs (Buttons allowed according to Section 1.A) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white/[0.03] border border-white/10 rounded-xl overflow-x-auto max-w-full">
            {(['ALL', 'FEATURED', 'ONGOING', 'UPCOMING', 'COMPLETED'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                type="button"
                className={`px-3 py-1.5 text-xs font-mono font-bold tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  filter === tab
                    ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Program Showcase: PIB CUP (Marquee Layout) */}
        {(filter === 'ALL' || filter === 'FEATURED' || filter === featuredProgram.status) && (
          <div className="mb-12 relative rounded-3xl overflow-hidden border border-violet-500/40 bg-gradient-to-br from-[#0c0822] via-[#070517] to-[#04030f] shadow-[0_15px_50px_rgba(139,92,246,0.18)] group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              {/* Image side */}
              <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[320px] overflow-hidden">
                <img
                  src={featuredProgram.image}
                  alt={featuredProgram.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
                
                {/* Status indicator unboxed with subtle glow */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-violet-600/90 text-white backdrop-blur-md border border-violet-400/30 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    {featuredProgram.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-950/80 text-cyan-300 backdrop-blur-md border border-cyan-500/30">
                    FEATURED FLAGSHIP
                  </span>
                </div>
              </div>

              {/* Text side */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>INISIATIF KOLABORATIF UNGGULAN</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                    {featuredProgram.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono mb-6">
                    <span className="text-violet-300 font-semibold">{featuredProgram.leadMinistry}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredProgram.date}
                    </span>
                  </div>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
                    {featuredProgram.desc}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setSelectedProgram(featuredProgram)}
                    type="button"
                    className="px-6 py-3.5 rounded-xl bg-white text-neutral-950 hover:bg-neutral-200 font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    DETAIL SUNSETION 2026
                    <ArrowUpRight className="w-4 h-4 text-violet-700" />
                  </button>
                  <span className="text-xs font-mono text-cyan-300">
                    30 Oktober 2026 · Pesisir Pantai Nyanyi Bali
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COMING SOON HIGHLIGHT: Growbalization (Ulang Tahun Kampus PIB) */}
        {growbalizationProgram && (filter === 'ALL' || filter === 'FEATURED' || filter === 'UPCOMING') && (
          <div
            onClick={() => setSelectedProgram(growbalizationProgram)}
            className="mb-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-amber-500/10 via-purple-600/10 to-indigo-600/10 border border-amber-500/30 hover:border-amber-400/50 backdrop-blur-xl transition-all duration-300 cursor-pointer group shadow-[0_10px_35px_rgba(245,158,11,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0 text-xl font-black font-display group-hover:scale-105 transition-transform">
                  🎉
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/20 border border-amber-400/40 text-amber-300">
                      COMING SOON
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      DIES NATALIS KAMPUS PIB · NOVEMBER 2026
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-white group-hover:text-amber-200 transition-colors">
                    Growbalization — Ulang Tahun Kampus Politeknik Internasional Bali
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-3xl mt-1.5 leading-relaxed">
                    Perayaan akbar hari ulang tahun kampus PIB: Global Vocational Symposium, Career Expo, Culinary Showcase, dan Awarding Night.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  LIHAT TEASER
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms
            .filter((p) => p.id !== 'prog-sunsetion' && p.id !== 'prog-growbalization')
            .map((program) => (
              <div
                key={program.id}
                className="rounded-2xl p-6 bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-violet-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Metadata Row (Zero-pill text styling) */}
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
                    <span className={`font-bold uppercase tracking-wider ${
                      program.status === 'UPCOMING' ? 'text-cyan-400' :
                      program.status === 'ONGOING' ? 'text-violet-400' : 'text-emerald-400'
                    }`}>
                      {program.status}
                    </span>
                    <span className="text-neutral-500">{program.date}</span>
                  </div>

                  <h4 className="font-display font-bold text-xl text-white mb-2 group-hover:text-violet-200 transition-colors">
                    {program.title}
                  </h4>

                  <div className="text-xs text-violet-400/90 font-mono mb-3">
                    {program.leadMinistry}
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-6 line-clamp-3">
                    {program.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProgram(program)}
                    type="button"
                    className="text-xs font-bold tracking-wider text-violet-300 hover:text-white uppercase flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-1"
                  >
                    DETAIL PROGRAM
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                  <span className="text-[11px] font-mono text-neutral-500">
                    {program.category}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </section>
  );
}
