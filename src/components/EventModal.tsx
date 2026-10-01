import { useState } from 'react';
import { CalendarEvent } from '../types';
import { X, Calendar, Clock, MapPin, Users, CheckCircle2, Send } from 'lucide-react';

interface EventModalProps {
  event: CalendarEvent | null;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: '', nim: '', email: '' });

  if (!event) return null;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#09071c] border border-violet-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.85)] max-h-[90vh] overflow-y-auto"
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

        {event.image && (
          <div className="relative h-44 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-3xl">
            <img
              src={event.image}
              alt={event.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09071c] via-[#09071c]/30 to-transparent" />
          </div>
        )}

        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
          <span>{event.category}</span>
          <span aria-hidden="true">·</span>
          <span>{event.organizer}</span>
        </div>

        <h3 className="font-display text-2xl font-bold text-white mb-4">
          {event.title}
        </h3>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 text-xs text-neutral-300">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-violet-400" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-indigo-400" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2.5 sm:col-span-2">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>

        <p className="text-neutral-300 text-sm leading-relaxed mb-6">
          {event.desc}
        </p>

        {/* Registration Section */}
        {registered ? (
          <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-in zoom-in-95 duration-200">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <h4 className="font-display font-bold text-white text-base mb-1">
              Pendaftaran Berhasil Dicatat!
            </h4>
            <p className="text-xs text-neutral-300">
              Pengingat dan link koordinasi WhatsApp telah disiapkan untuk agenda {event.title}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleRegister} className="space-y-3 pt-4 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-violet-300 font-bold">
              Konfirmasi Kehadiran / RSVP Acara
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Nama Lengkap"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500"
              />
              <input
                type="text"
                placeholder="NIM / Asal Institusi"
                value={formData.nim}
                onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              DAFTAR SEKARANG
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
