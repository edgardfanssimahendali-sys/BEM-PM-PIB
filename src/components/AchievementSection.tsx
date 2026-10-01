import { useState } from 'react';
import { ACHIEVEMENTS_DATA } from '../data/mockData';
import { Achievement } from '../types';
import AchievementModal from './AchievementModal';
import { Trophy, Plus, Sparkles } from 'lucide-react';

export default function AchievementSection() {
  const [filter, setFilter] = useState<string>('ALL');
  const [achievements, setAchievements] = useState<Achievement[]>(ACHIEVEMENTS_DATA);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = ['ALL', 'Business', 'Creative', 'Academic', 'Sports'];

  const filteredAchievements = achievements.filter((ach) => {
    if (filter === 'ALL') return true;
    return ach.category === filter;
  });

  return (
    <section id="achievements" className="py-28 px-6 relative border-t border-white/5 bg-[#030209]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-2">
              <span>HALL OF EXCELLENCE</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">APRESIASI PRESTASI</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
              Celebrate Our Students
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
              "Every achievement represents the spirit of PIB." Dedikasi dan karya nyata mahasiswa Politeknik Internasional Bali di berbagai panggung kejuaraan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              type="button"
              className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs font-mono tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Plus className="w-4 h-4" />
              SUBMIT YOUR ACHIEVEMENT
            </button>
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white/[0.03] border border-white/10 rounded-xl overflow-x-auto max-w-full mb-10 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              type="button"
              className={`px-3 py-1.5 text-xs font-mono font-bold tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === cat
                  ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-violet-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4">
                  <span className="text-violet-400 font-bold uppercase">{item.category}</span>
                  <span>{item.year}</span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 text-cyan-300 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-violet-500/20 transition-all">
                  <Trophy className="w-5 h-5" />
                </div>

                <div className="text-xs font-bold text-cyan-300 mb-1 font-mono">
                  {item.award}
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-violet-200 transition-colors">
                  {item.title}
                </h3>

                <div className="text-xs text-neutral-400 mb-3 font-mono">
                  {item.recipient} · {item.major}
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-violet-400" /> Terverifikasi BEM
                </span>
                <span>PIB Pride</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AchievementModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmitSuccess={() => {}}
      />
    </section>
  );
}
