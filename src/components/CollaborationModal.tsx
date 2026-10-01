import { useState } from 'react';
import { X, Handshake, CheckCircle2, Send } from 'lucide-react';

interface CollaborationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'STUDENT' | 'ORGANIZATION' | 'EXTERNAL';
}

export default function CollaborationModal({ isOpen, onClose, defaultType = 'EXTERNAL' }: CollaborationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    type: defaultType,
    orgName: '',
    contactPerson: '',
    email: '',
    phone: '',
    proposalTitle: '',
    brief: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-violet-500/10 text-cyan-300">
            <Handshake className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-white">
              Start a Collaboration
            </h3>
            <p className="text-xs text-neutral-400">
              Kementerian Luar Negeri & Hubungan Kemitraan BEM PM PIB
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-in zoom-in-95 duration-200">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <h4 className="font-display font-bold text-white text-lg mb-1">
              Proposal Kemitraan Diterima!
            </h4>
            <p className="text-xs text-neutral-300 mb-6">
              Tim Kementerian Luar Negeri BEM PM PIB akan meninjau inisiatif kolaborasi ini dan menghubungi Anda melalui email/WhatsApp dalam kurun 2x24 jam kerja.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              type="button"
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase"
            >
              TUTUP
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-neutral-300 font-mono uppercase mb-1">Jalur Kemitraan *</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                className="w-full bg-[#0d0b1e] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500"
              >
                <option value="STUDENT">Mahasiswa PIB (Student Initiative / Project)</option>
                <option value="ORGANIZATION">Organisasi Mahasiswa (HIMA / UKM / BEM Eksternal)</option>
                <option value="EXTERNAL">Mitra Eksternal (Perusahaan, Komunitas, Brand, Media)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-neutral-300 font-mono uppercase mb-1">Nama Organisasi / Brand *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. PT Hospitality Kreatif Bali"
                  value={formData.orgName}
                  onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500"
                />
              </div>
              <div>
                <label className="block text-neutral-300 font-mono uppercase mb-1">Narahubung (Person In Charge) *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Made Satria"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-neutral-300 font-mono uppercase mb-1">Alamat Email Resmi *</label>
                <input
                  type="email"
                  required
                  placeholder="partner@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500"
                />
              </div>
              <div>
                <label className="block text-neutral-300 font-mono uppercase mb-1">Nomor WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="+62 812-xxxx-xxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-neutral-300 font-mono uppercase mb-1">Judul / Bentuk Kerjasama *</label>
              <input
                type="text"
                required
                placeholder="e.g. Sponsorship PIB CUP 2026 / Media Partner Workshop"
                value={formData.proposalTitle}
                onChange={(e) => setFormData({ ...formData, proposalTitle: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-mono uppercase mb-1">Ringkasan Tawaran Kolaborasi *</label>
              <textarea
                required
                rows={3}
                placeholder="Deskripsikan bentuk sinergi yang diharapkan, timeline, dan benefit bagi mahasiswa Politeknik Internasional Bali..."
                value={formData.brief}
                onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-violet-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2 cursor-pointer"
            >
              KIRIM PENGAJUAN KERJASAMA
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
