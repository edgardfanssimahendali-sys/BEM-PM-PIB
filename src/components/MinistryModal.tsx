import { Ministry } from '../types';
import { X, Users, Mail, Instagram, CheckCircle2 } from 'lucide-react';

interface MinistryModalProps {
  ministry: Ministry | null;
  onClose: () => void;
}

export default function MinistryModal({ ministry, onClose }: MinistryModalProps) {
  if (!ministry) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#09071c] border border-violet-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Glow orb */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <span>KEMENTERIAN BEM PM PIB</span>
            <span aria-hidden="true">·</span>
            <span>{ministry.code}</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            {ministry.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-neutral-300 text-sm leading-relaxed mb-6">
          {ministry.fullDesc}
        </p>

        {/* Leadership Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-[11px] font-mono uppercase text-violet-400 font-semibold mb-1">
              {ministry.ministerTitle || 'Menteri Koordinator'}
            </div>
            <div className="font-display font-bold text-white text-base">
              {ministry.minister}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-[11px] font-mono uppercase text-indigo-400 font-semibold mb-1">
              {ministry.secretaryTitle || 'Sekretaris Jendral'}
            </div>
            <div className="font-display font-bold text-white text-base">
              {ministry.secretary}
            </div>
          </div>
        </div>

        {/* Divisions / Bidang */}
        {ministry.divisions && ministry.divisions.length > 0 && (
          <div className="mb-6 p-4 rounded-2xl bg-white/[0.015] border border-white/5">
            <div className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider mb-2">
              Bidang & Divisi Kerja
            </div>
            <div className="flex flex-wrap gap-2">
              {ministry.divisions.map((div, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-violet-950/40 border border-violet-500/30 text-xs text-violet-200 font-mono"
                >
                  {div}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Members List */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-display font-bold text-white text-sm tracking-wide flex items-center gap-2">
              <Users className="w-4 h-4 text-violet-400" />
              Daftar Anggota ({ministry.members.filter(m => m.role === 'Anggota').length} Anggota)
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto p-1 pr-2">
            {ministry.members
              .filter((m) => m.role === 'Anggota')
              .map((member, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs"
                >
                  <span className="font-medium text-neutral-200 truncate">{member.name}</span>
                  <span className="text-[10px] text-neutral-400 font-mono shrink-0 ml-2">Anggota</span>
                </div>
              ))}
          </div>
        </div>

        {/* Programs */}
        <div className="mb-6">
          <h4 className="font-display font-bold text-white text-sm tracking-wide mb-3">
            Program Kerja Utama
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ministry.programs.map((prog, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-violet-950/20 border border-violet-500/20 text-xs text-neutral-200"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{prog}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact info */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-violet-400" />
            <span className="font-mono text-neutral-300">{ministry.contactEmail}</span>
          </div>
          <div className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-pink-400" />
            <span className="font-mono text-neutral-300">{ministry.instagram}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
