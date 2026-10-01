import { HERO_IMAGE } from '../data/mockData';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import AuroraLogo from './AuroraLogo';

interface HeroProps {
  onExplore: () => void;
  onSubmitAspiration: () => void;
}

export default function Hero({ onExplore, onSubmitAspiration }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Background Graphic Layer: Generated Hero Architectural Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Politeknik Internasional Bali Aurora Imperium"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 opacity-35 mix-blend-luminosity filter blur-[1px]"
        />
        {/* Deep dark navy aurora gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04040c]/85 via-[#04040c]/90 to-[#04040c]" />
        
        {/* Animated Aurora Glow Orbs */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-violet-600/25 rounded-full blur-[140px] pointer-events-none animate-aurora-shift" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none animate-aurora-pulse" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-indigo-700/20 rounded-full blur-[130px] pointer-events-none" />

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Core Typographic Hero Statement */}
        <div className="lg:col-span-8 flex flex-col items-start">
          {/* Institutional Trust Kicker (Natural, unboxed text according to Zero-Pill rule) */}
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider text-violet-300/90 uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
            <span>Badan Eksekutif Mahasiswa</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">Politeknik Internasional Bali</span>
          </div>

          {/* Marquee Title */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-white mb-6">
            AURORA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
              IMPERIUM
            </span>
          </h1>

          {/* Official Tagline */}
          <div className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-neutral-200 tracking-wide mb-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 hidden sm:inline-block" />
            "Bergerak Bersama, Berkarya Bersama"
          </div>

          {/* Supporting Text */}
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-10 font-normal">
            Menjadi ruang kolaborasi, aspirasi, dan aksi nyata bagi mahasiswa Politeknik Internasional Bali. 
            Membangun kepemimpinan progresif dan karya berdampak untuk kampus dan masyarakat.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onExplore}
              type="button"
              className="px-8 py-4 bg-white text-neutral-950 hover:bg-neutral-200 font-bold text-sm tracking-wider uppercase rounded-xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              EXPLORE AURORA
              <ArrowRight className="w-4 h-4 text-violet-700" />
            </button>

            <button
              onClick={onSubmitAspiration}
              type="button"
              className="px-8 py-4 bg-violet-950/40 hover:bg-violet-900/50 text-white font-bold text-sm tracking-wider uppercase rounded-xl border border-violet-500/40 hover:border-violet-400 transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
            >
              SUBMIT ASPIRATION
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Right Column: Emblem & Visual Identity Seal */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Glowing Backdrop Ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-600/30 via-indigo-600/20 to-cyan-500/30 blur-2xl group-hover:blur-3xl transition-all duration-700" />
            
            {/* Emblem Glass Card */}
            <div className="relative w-72 sm:w-80 p-8 rounded-3xl bg-[#09081c]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] text-center flex flex-col items-center">
              {/* Official Aurora Imperium Logo */}
              <div className="mb-4 group-hover:scale-105 transition-transform duration-500">
                <AuroraLogo className="w-32 h-32" />
              </div>

              <div className="font-display font-extrabold text-xl text-white tracking-wider mb-0.5">
                AURORA IMPERIUM
              </div>
              <div className="text-xs text-neutral-400 font-medium mb-5">
                BEM PM Politeknik Internasional Bali
              </div>

              <div className="w-full pt-4 border-t border-white/10 flex items-center justify-around text-xs text-neutral-300">
                <div>
                  <div className="font-bold text-white text-sm">5</div>
                  <div className="text-[10px] text-neutral-400 uppercase">Kementerian</div>
                </div>
                <div className="h-6 w-px bg-white/10" />
                <div>
                  <div className="font-bold text-white text-sm">39</div>
                  <div className="text-[10px] text-neutral-400 uppercase">Pengurus</div>
                </div>
                <div className="h-6 w-px bg-white/10" />
                <div>
                  <div className="font-bold text-white text-sm">24+</div>
                  <div className="text-[10px] text-neutral-400 uppercase">Proker</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <button
          onClick={onExplore}
          type="button"
          className="group flex flex-col items-center gap-1.5 text-[11px] font-mono tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-violet-400 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
