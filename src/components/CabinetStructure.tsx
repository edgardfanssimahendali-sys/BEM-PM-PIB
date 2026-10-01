import { useState } from 'react';
import { EXECUTIVE_BOARD, MINISTRIES_DATA } from '../data/mockData';
import { Ministry } from '../types';
import MinistryModal from './MinistryModal';
import { Users, ArrowRight, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';

export default function CabinetStructure() {
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);

  return (
    <section id="cabinet" className="py-28 px-6 relative border-t border-white/5 bg-[#04030e]">
      {/* Background glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-3">
            <span>THE CABINET</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">STRUKTUR ORGANISASI</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Meet Aurora Imperium
          </h2>

          <p className="text-neutral-400 text-base max-w-2xl leading-relaxed">
            Dipimpin oleh mahasiswa berdedikasi tinggi untuk menggerakkan inovasi kemahasiswaan Politeknik Internasional Bali secara inklusif dan akuntabel.
          </p>
        </div>

        {/* ORGANIZATIONAL CHART VISUALIZATION */}
        <div className="mb-24 relative flex flex-col items-center">
          {/* Vertical connecting line */}
          <div className="absolute top-12 bottom-12 w-px bg-gradient-to-b from-violet-500/60 via-indigo-500/40 to-transparent pointer-events-none hidden md:block" />

          {/* Level 1: President of Students */}
          <div className="relative z-10 w-full max-w-md mb-8">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-violet-950/70 via-[#0d0a26] to-[#08051a] border border-violet-500/40 shadow-[0_10px_35px_rgba(139,92,246,0.25)] text-center relative group">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-200 text-xs font-mono font-bold tracking-wider uppercase mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                {EXECUTIVE_BOARD.president.role}
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white tracking-wide mb-1">
                {EXECUTIVE_BOARD.president.name}
              </h3>

              <div className="text-xs text-neutral-400 font-medium mb-3">
                {EXECUTIVE_BOARD.president.program}
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto">
                {EXECUTIVE_BOARD.president.bio}
              </p>
            </div>
          </div>

          {/* Connecting arrow/node */}
          <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#0d0a26] border border-violet-500/40 text-violet-400 my-2 z-10">
            <ChevronDown className="w-4 h-4 animate-pulse" />
          </div>

          {/* Level 2: Vice President */}
          <div className="relative z-10 w-full max-w-md mb-8">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-[#0d0a26] to-[#08051a] border border-indigo-500/35 shadow-[0_10px_35px_rgba(99,102,241,0.2)] text-center relative group">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-mono font-bold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                {EXECUTIVE_BOARD.vicePresident.role}
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white tracking-wide mb-1">
                {EXECUTIVE_BOARD.vicePresident.name}
              </h3>

              <div className="text-xs text-neutral-400 font-medium mb-3">
                {EXECUTIVE_BOARD.vicePresident.program}
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto">
                {EXECUTIVE_BOARD.vicePresident.bio}
              </p>
            </div>
          </div>

          {/* Connecting node */}
          <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#0d0a26] border border-violet-500/40 text-violet-400 my-2 z-10">
            <ChevronDown className="w-4 h-4 animate-pulse" />
          </div>

          {/* Level 3: Secretarial Board */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            {/* Secretary 1 */}
            <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-violet-500/30 transition-all text-center">
              <div className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase mb-2">
                {EXECUTIVE_BOARD.secretary1.role}
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-1">
                {EXECUTIVE_BOARD.secretary1.name}
              </h4>
              <div className="text-xs text-neutral-400 mb-3">
                {EXECUTIVE_BOARD.secretary1.program}
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {EXECUTIVE_BOARD.secretary1.bio}
              </p>
            </div>

            {/* Secretary 2 */}
            <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-violet-500/30 transition-all text-center">
              <div className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase mb-2">
                {EXECUTIVE_BOARD.secretary2.role}
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-1">
                {EXECUTIVE_BOARD.secretary2.name}
              </h4>
              <div className="text-xs text-neutral-400 mb-3">
                {EXECUTIVE_BOARD.secretary2.program}
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {EXECUTIVE_BOARD.secretary2.bio}
              </p>
            </div>
          </div>
        </div>

        {/* MINISTRIES SECTION */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                OPERATIONAL BODIES
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                OUR MINISTRIES
              </h3>
            </div>
            <div className="text-xs text-neutral-400">
              5 Unit Kementerian Strategis Kabinet Aurora Imperium
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MINISTRIES_DATA.map((ministry) => (
              <div
                key={ministry.id}
                className="group relative rounded-2xl p-6 sm:p-7 bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-violet-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono tracking-wider text-violet-400 uppercase font-semibold">
                      {ministry.code}
                    </span>
                    <span className="text-[11px] text-neutral-500 font-mono flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-neutral-400" />
                      {ministry.memberCount} Staff
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-white mb-3 group-hover:text-violet-200 transition-colors">
                    {ministry.name}
                  </h4>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                    {ministry.shortDesc}
                  </p>

                  <div className="space-y-2 py-3 border-y border-white/5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400">Menko:</span>
                      <span className="font-semibold text-white truncate ml-2 text-right">{ministry.minister}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400">Sekjen:</span>
                      <span className="font-medium text-neutral-200 truncate ml-2 text-right">{ministry.secretary}</span>
                    </div>
                  </div>

                  {ministry.divisions && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {ministry.divisions.map((div, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-950/50 text-violet-300 border border-violet-500/20">
                          {div}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedMinistry(ministry)}
                  type="button"
                  className="mt-6 w-full py-2.5 px-4 rounded-xl bg-violet-950/40 hover:bg-violet-900/60 border border-violet-500/30 text-violet-200 hover:text-white font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  VIEW TEAM
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal on demand */}
      <MinistryModal
        ministry={selectedMinistry}
        onClose={() => setSelectedMinistry(null)}
      />
    </section>
  );
}
