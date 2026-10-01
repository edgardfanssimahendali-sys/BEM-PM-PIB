import { Program } from '../types';
import { X, Calendar, MapPin, Users, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onRegisterInterest?: (prog: Program) => void;
}

export default function ProgramModal({ program, onClose, onRegisterInterest }: ProgramModalProps) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#080718] border border-violet-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.85)] max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image header banner */}
        <div className="relative h-52 sm:h-64 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-3xl">
          <img
            src={program.image}
            alt={program.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080718] via-[#080718]/40 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-violet-600/80 text-white backdrop-blur-sm border border-violet-400/40">
              {program.status}
            </span>
            <span className="text-xs text-neutral-300 font-mono">
              {program.category}
            </span>
          </div>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">
          {program.title}
        </h3>

        {/* Metadata row (Zero-pill discipline: unboxed text with separators) */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 mb-6 font-mono">
          <div className="flex items-center gap-1.5 text-cyan-300">
            <Calendar className="w-3.5 h-3.5" />
            <span>{program.date}</span>
          </div>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5 text-neutral-300">
            <MapPin className="w-3.5 h-3.5 text-violet-400" />
            <span>{program.location}</span>
          </div>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5 text-neutral-300">
            <Users className="w-3.5 h-3.5 text-indigo-400" />
            <span>{program.leadMinistry}</span>
          </div>
        </div>

        <div className="space-y-4 text-sm text-neutral-300 leading-relaxed mb-6">
          <p>{program.desc}</p>
          {program.fullContent && (
            <p className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-neutral-400 text-xs leading-relaxed">
              {program.fullContent}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="text-xs text-neutral-400">
            Inisiatif resmi Kabinet Aurora Imperium
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {program.registrationOpen ? (
              <button
                onClick={() => {
                  onClose();
                  if (onRegisterInterest) onRegisterInterest(program);
                }}
                type="button"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.4)]"
              >
                DAFTAR / INFO LEBIH LANJUT
                <ArrowUpRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="text-xs font-mono text-neutral-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Registrasi Ditutup / Terjadwal
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
