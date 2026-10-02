import { EXECUTIVE_BOARD } from '../data/mockData';
import AuroraLogo from '../components/AuroraLogo';
import { ArrowLeft, ShieldCheck, Sparkles, ChevronRight, Award, UserCheck } from 'lucide-react';

interface BphDetailPageProps {
  onBack: () => void;
  onOpenMinistry: (id: string) => void;
}

export default function BphDetailPage({ onBack, onOpenMinistry }: BphDetailPageProps) {
  const leaders = [
    {
      key: 'president',
      data: EXECUTIVE_BOARD.president,
      borderClass: 'border-violet-500/50',
      bgGlow: 'from-violet-950/60 to-purple-950/30',
      tag: 'PRESIDEN MAHASISWA',
    },
    {
      key: 'vicePresident',
      data: EXECUTIVE_BOARD.vicePresident,
      borderClass: 'border-indigo-500/50',
      bgGlow: 'from-indigo-950/60 to-blue-950/30',
      tag: 'WAKIL PRESIDEN MAHASISWA',
    },
    {
      key: 'secretary1',
      data: EXECUTIVE_BOARD.secretary1,
      borderClass: 'border-cyan-500/40',
      bgGlow: 'from-cyan-950/40 to-blue-950/20',
      tag: 'SEKRETARIS KABINET 1',
    },
    {
      key: 'secretary2',
      data: EXECUTIVE_BOARD.secretary2,
      borderClass: 'border-pink-500/40',
      bgGlow: 'from-pink-950/40 to-purple-950/20',
      tag: 'SEKRETARIS KABINET 2',
    },
  ];

  return (
    <div className="min-h-screen bg-[#04030e] text-neutral-100 pt-24 pb-20 px-6 relative selection:bg-violet-600/40">
      {/* Background Aurora Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <button
            onClick={onBack}
            type="button"
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono font-semibold text-neutral-300 hover:text-white transition-all cursor-pointer border border-white/10 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-violet-400 group-hover:-translate-x-1 transition-transform" />
            <span>KEMBALI KE BERANDA</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span>Struktur Kabinet</span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-violet-300">Badan Pengurus Harian (BPH)</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-3xl p-8 sm:p-12 mb-12 bg-gradient-to-br from-[#0c0926] via-[#08061c] to-[#040310] border border-violet-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-xs font-mono uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>EXECUTIVE LEADERSHIP</span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4 leading-tight">
                Badan Pengurus Harian (BPH)
              </h1>

              <p className="text-neutral-300 text-base leading-relaxed font-normal">
                Pimpinan utama Badan Eksekutif Mahasiswa Politeknik Internasional Bali Kabinet Aurora Imperium periode 2026. Menahkodai arah gerak kebijakan, integritas kelembagaan, serta representasi mahasiswa.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-black/40 border border-white/10 text-center shrink-0">
              <AuroraLogo className="w-24 h-24 mb-3" />
              <div className="font-display font-bold text-sm text-white">BPH 2026</div>
              <div className="text-[11px] font-mono text-neutral-400">Aurora Imperium</div>
            </div>
          </div>
        </div>

        {/* 4 Leaders Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {leaders.map((leader) => (
            <div
              key={leader.key}
              className={`p-8 rounded-3xl bg-gradient-to-br ${leader.bgGlow} border ${leader.borderClass} backdrop-blur-md shadow-[0_15px_45px_rgba(0,0,0,0.5)] flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">
                    {leader.tag}
                  </span>
                  <Award className="w-4 h-4 text-violet-400" />
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-wide mb-2">
                  {leader.data.name}
                </h3>

                <div className="text-xs font-mono text-neutral-400 mb-6 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-violet-400" />
                  <span>{leader.data.program}</span>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                  {leader.data.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Status: Terpilih & Dilantik</span>
                <span className="text-violet-300">Periode 2026</span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Ministries Banner */}
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 text-center">
          <h3 className="font-display font-bold text-xl text-white mb-2">
            Koordinasi 5 Kementerian Kabinet Aurora Imperium
          </h3>
          <p className="text-xs text-neutral-400 max-w-xl mx-auto mb-6">
            BPH menaungi 5 kementerian aktif yang bergerak dalam bidang advokasi internal, diplomasi eksternal, tata kelola keuangan, media digital, dan riset pengembangan mahasiswa.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { id: 'kemendagri', name: 'Kemendagri' },
              { id: 'kemenlu', name: 'Kemenlu' },
              { id: 'kemenkeu', name: 'Kemenkeu' },
              { id: 'infokom', name: 'Infokom' },
              { id: 'kemenrisbang', name: 'Kemenrisbang' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => onOpenMinistry(m.id)}
                type="button"
                className="px-4 py-2 rounded-xl bg-violet-600/30 hover:bg-violet-600 border border-violet-400/40 text-xs font-mono text-white transition-all cursor-pointer"
              >
                Kunjungi {m.name} →
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
