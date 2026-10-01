import { useState, useEffect } from 'react';
import { STATS_DATA, COLLAB_IMAGE } from '../data/mockData';
import { ShieldCheck, Compass, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    // Simple smooth animation for the numeric counters
    const targets = [1, 5, 24, 1200];
    const duration = 1600;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(targets.map((target) => Math.round(target * easeProgress)));

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-28 px-6 relative border-t border-white/5 bg-[#050410]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Lead */}
        <div className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-3">
          <span>WHO WE ARE</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-neutral-500">PROFIL LEMBAGA</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Aurora Imperium
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6 font-normal">
              Kabinet Aurora Imperium merupakan Badan Eksekutif Mahasiswa Politeknik Internasional Bali yang hadir sebagai wadah kolaborasi, aspirasi, dan pengembangan mahasiswa.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              Mengambil inspirasi dari fenomena alam Aurora yang melambangkan cahaya fajar yang bersinar megah di kegelapan, dan Imperium yang melambangkan kekuatan kepemimpinan berwibawa, kami mendedikasikan seluruh daya untuk menyatukan potensi mahasiswa PIB agar mampu bersaing di kancah nasional maupun global.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Integritas & Akuntabilitas</h4>
                  <p className="text-xs text-neutral-400">Setiap alokasi program dan transparansi anggaran dapat diakses terbuka oleh mahasiswa.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Orientasi Aksi Nyata</h4>
                  <p className="text-xs text-neutral-400">Fokus pada luaran nyata dan kemanfaatan langsung bagi kemajuan akademik dan non-akademik.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Card with Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <img
                src={COLLAB_IMAGE}
                alt="Kolaborasi BEM PM Politeknik Internasional Bali"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050410] via-[#050410]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>KOLABORASI CIVITAS AKADEMIKA</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  Menjembatani Suara Mahasiswa Menuju Perubahan Konkret
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Statistics Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={stat.label}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-violet-500/40 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-violet-600/15 rounded-full blur-2xl group-hover:bg-violet-600/30 transition-colors" />

              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight tabular-nums mb-2 flex items-baseline">
                <span>{counts[idx]}</span>
                <span className="text-violet-400 text-2xl sm:text-3xl ml-0.5">{stat.suffix}</span>
              </div>

              <div className="text-xs sm:text-sm font-bold tracking-widest text-neutral-300 uppercase mb-1">
                {stat.label}
              </div>

              <div className="text-xs text-neutral-500">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
