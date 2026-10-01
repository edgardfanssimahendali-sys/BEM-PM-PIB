import { useState } from 'react';
import { MISSIONS_DATA } from '../data/mockData';
import { Target, Users, Zap, ShieldAlert, ArrowRight } from 'lucide-react';

export default function VisionMission() {
  const [activeMission, setActiveMission] = useState<string | null>(null);

  const getMissionIcon = (code: string) => {
    switch (code) {
      case 'ASPIRASI':
        return <Target className="w-5 h-5" />;
      case 'KOLABORASI':
        return <Users className="w-5 h-5" />;
      case 'AKSI':
        return <Zap className="w-5 h-5" />;
      case 'SINERGI':
        return <ShieldAlert className="w-5 h-5" />;
      default:
        return <Target className="w-5 h-5" />;
    }
  };

  return (
    <section id="vision" className="py-28 px-6 relative border-t border-white/5 bg-[#03020a]">
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-3">
            <span>DIRECTION & PURPOSE</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">PONDASI ORGANISASI</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            VISION & MISSION
          </h2>
        </div>

        {/* Vision Hero Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 mb-16 overflow-hidden border border-violet-500/30 bg-gradient-to-br from-violet-950/40 via-[#070518]/90 to-[#040310] shadow-[0_10px_50px_rgba(139,92,246,0.15)] group">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-500/30 transition-all duration-700" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase tracking-wider mb-6">
              VISI UTAMA KABINET
            </div>

            <p className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
              “Mewujudkan kepemimpinan mahasiswa yang progresif, kolaboratif, dan inklusif dalam menggerakkan kemajuan melalui keterhubungan aspirasi dan aksi nyata.”
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-400 font-medium tracking-wide">
              <span>BEM PM POLITEKNIK INTERNASIONAL BALI</span>
              <span aria-hidden="true">·</span>
              <span>2026-2027</span>
            </div>
          </div>
        </div>

        {/* 4 Interactive Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MISSIONS_DATA.map((mission) => {
            const isHovered = activeMission === mission.id;
            return (
              <div
                key={mission.id}
                onMouseEnter={() => setActiveMission(mission.id)}
                onMouseLeave={() => setActiveMission(null)}
                className={`relative rounded-2xl p-8 transition-all duration-300 cursor-default border ${
                  isHovered
                    ? 'bg-white/[0.06] border-violet-400/50 shadow-[0_12px_40px_rgba(139,92,246,0.2)] -translate-y-1.5'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                {/* Large Background Identifier Number */}
                <div
                  className={`absolute top-4 right-6 font-display font-black text-6xl sm:text-7xl transition-all duration-300 pointer-events-none select-none ${
                    isHovered ? 'text-violet-400/25 scale-110' : 'text-white/[0.04]'
                  }`}
                >
                  {mission.id}
                </div>

                {/* Top Bar of Card */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border ${
                      isHovered
                        ? 'bg-violet-600 text-white border-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                        : 'bg-white/5 text-violet-300 border-white/10'
                    }`}
                  >
                    {getMissionIcon(mission.code)}
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
                      MISI {mission.id}
                    </div>
                    <div className="font-display font-bold text-lg text-white tracking-wide">
                      {mission.code}
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-bold text-base text-neutral-100 mb-3 relative z-10">
                  {mission.title}
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed relative z-10">
                  {mission.desc}
                </p>

                {/* Bottom micro-interaction */}
                <div
                  className={`mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold tracking-wider transition-colors ${
                    isHovered ? 'text-violet-300' : 'text-neutral-500'
                  }`}
                >
                  <span>PILAR STRATEGIS AURORA</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isHovered ? 'translate-x-1 text-cyan-400' : ''
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
