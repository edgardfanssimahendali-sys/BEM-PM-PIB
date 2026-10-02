import { useState, useEffect } from 'react';
import { Ministry } from '../types';
import { MINISTRIES_DATA } from '../data/mockData';
import AuroraLogo from '../components/AuroraLogo';
import { 
  ArrowLeft, 
  Users, 
  Mail, 
  Instagram, 
  CheckCircle2, 
  Calendar, 
  Search, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  UserCheck
} from 'lucide-react';

interface MinistryDetailPageProps {
  ministryId: string;
  onBack: () => void;
  onSelectMinistry: (id: string) => void;
}

export default function MinistryDetailPage({
  ministryId,
  onBack,
  onSelectMinistry,
}: MinistryDetailPageProps) {
  const [searchMember, setSearchMember] = useState('');
  const [selectedMember, setSelectedMember] = useState<{ name: string; role: string } | null>(null);

  const ministry = MINISTRIES_DATA.find((m) => m.id === ministryId) || MINISTRIES_DATA[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSearchMember('');
    setSelectedMember(null);
  }, [ministryId]);

  const filteredMembers = ministry.members.filter((m) =>
    m.name.toLowerCase().includes(searchMember.toLowerCase()) ||
    m.role.toLowerCase().includes(searchMember.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#04030e] text-neutral-100 pt-24 pb-20 px-6 relative selection:bg-violet-600/40">
      {/* Background Aurora Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-10 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[170px]" />
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
            <span className="text-violet-300">{ministry.code}</span>
          </div>
        </div>

        {/* Hero Header Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 mb-12 bg-gradient-to-br from-[#0c0926] via-[#08061c] to-[#040310] border border-violet-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-xs font-mono uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>KABINET AURORA IMPERIUM · {ministry.code}</span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4 leading-tight">
                {ministry.name}
              </h1>

              <p className="text-neutral-300 text-base leading-relaxed mb-6 font-normal">
                {ministry.fullDesc}
              </p>

              {/* Division Badges */}
              {ministry.divisions && ministry.divisions.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-neutral-400">Bidang:</span>
                  {ministry.divisions.map((div, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
                    >
                      {div}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Emblem Seal */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-black/40 border border-white/10 text-center shrink-0">
              <AuroraLogo className="w-24 h-24 mb-3" />
              <div className="font-display font-bold text-sm text-white">{ministry.code}</div>
              <div className="text-[11px] font-mono text-neutral-400">
                {ministry.members.filter(m => m.role === 'Anggota').length + 1} Personel
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Grid (Menko & Sekjen) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>PIMPINAN KEMENTERIAN</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Menko */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-violet-500/40 backdrop-blur-md shadow-[0_10px_30px_rgba(139,92,246,0.15)] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold uppercase text-violet-400 mb-1">
                  {ministry.ministerTitle || 'Menteri Koordinator'}
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white mb-2">
                  {ministry.minister}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Penanggung jawab tertinggi perumusan kebijakan, koordinasi kerja operasional, dan arah strategis {ministry.name}.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span>Status: Aktif Menjabat</span>
                <span className="text-cyan-300 font-semibold">BEM PM PIB 2026</span>
              </div>
            </div>

            {/* Sekjen */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold uppercase text-indigo-400 mb-1">
                  {ministry.secretaryTitle || 'Sekretaris Jendral'}
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white mb-2">
                  {ministry.secretary}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {ministry.secretary.includes('Kosong')
                    ? 'Posisi Sekretaris Jendral sedang dalam penyesuaian administratif kabinet Aurora Imperium.'
                    : `Bertanggung jawab atas administrasi internal, manajemen arsip, dan tata laksana kegiatan ${ministry.name}.`}
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span>Administrasi & Operasional</span>
                <span className="text-neutral-400">Aurora Imperium</span>
              </div>
            </div>
          </div>
        </div>

        {/* Directory of Members */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                <Users className="w-4 h-4" />
                <span>DIREKTORI ANGGOTA RESMI</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                Daftar Staf & Anggota ({ministry.members.filter(m => m.role === 'Anggota').length} Mahasiswa)
              </h2>
            </div>

            {/* Member Search Bar */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama anggota..."
                value={searchMember}
                onChange={(e) => setSearchMember(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>
          </div>

          {/* Members Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMembers
              .filter((m) => m.role === 'Anggota')
              .map((member, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedMember(member)}
                  className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-violet-500/40 transition-all duration-300 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-950/40 border border-violet-500/30 text-violet-300 flex items-center justify-center font-display font-bold text-sm group-hover:scale-105 group-hover:bg-violet-900/40 transition-all">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white group-hover:text-violet-200 transition-colors">
                        {member.name}
                      </div>
                      <div className="text-[11px] font-mono text-neutral-400">
                        Staff {ministry.code}
                      </div>
                    </div>
                  </div>
                  <UserCheck className="w-4 h-4 text-neutral-500 group-hover:text-cyan-400 transition-colors" />
                </div>
              ))}
          </div>

          {filteredMembers.filter((m) => m.role === 'Anggota').length === 0 && (
            <div className="p-8 rounded-2xl bg-white/[0.015] border border-white/5 text-center text-xs text-neutral-400 font-mono">
              Tidak ada anggota dengan nama "{searchMember}".
            </div>
          )}
        </div>

        {/* Programs of the Ministry */}
        <div className="mb-14 p-8 rounded-3xl bg-white/[0.02] border border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <Calendar className="w-4 h-4" />
            <span>FOKUS KERJA & PROGRAM</span>
          </div>
          <h2 className="font-display font-bold text-2xl text-white mb-6">
            Program Kerja {ministry.code}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ministry.programs.map((prog, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sm text-white mb-1">{prog}</div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Inisiatif resmi {ministry.name} untuk kemajuan mahasiswa Politeknik Internasional Bali.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact info & Official Channel */}
        <div className="mb-16 p-6 rounded-2xl bg-gradient-to-r from-violet-950/30 to-indigo-950/30 border border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-violet-600/20 text-violet-300">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase">Kontak Resmi</div>
              <div className="font-mono text-sm text-white font-semibold">{ministry.contactEmail}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-pink-600/20 text-pink-300">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase">Instagram Resmi</div>
              <div className="font-mono text-sm text-white font-semibold">{ministry.instagram}</div>
            </div>
          </div>
        </div>

        {/* Fast Ministry Switcher */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">
            Jelajahi Kementerian Lainnya:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {MINISTRIES_DATA.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectMinistry(item.id)}
                type="button"
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  item.id === ministry.id
                    ? 'bg-violet-600 border-violet-400 text-white font-bold shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                    : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="text-xs font-mono">{item.code}</div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Member Profile Quick Peek Dialog */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-sm bg-[#09071c] border border-violet-500/40 rounded-3xl p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[2px] mx-auto mb-4">
              <div className="w-full h-full bg-[#050412] rounded-[14px] flex items-center justify-center font-display font-black text-2xl text-cyan-300">
                {selectedMember.name.charAt(0)}
              </div>
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-1">
              {selectedMember.name}
            </h3>
            <div className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-3">
              {selectedMember.role} · {ministry.code}
            </div>
            <p className="text-xs text-neutral-300 mb-6 leading-relaxed">
              Anggota aktif BEM PM Politeknik Internasional Bali Kabinet Aurora Imperium periode 2026.
            </p>
            <button
              onClick={() => setSelectedMember(null)}
              type="button"
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              TUTUP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
