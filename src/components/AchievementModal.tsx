import { useState } from 'react';
import { X, Award, CheckCircle2, Send, Upload } from 'lucide-react';

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess?: () => void;
}

export default function AchievementModal({ isOpen, onClose, onSubmitSuccess }: AchievementModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    nim: '',
    title: '',
    award: '',
    category: 'Business',
    year: '2026',
    proofName: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmitSuccess) onSubmitSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#09071c] border border-violet-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.85)] max-h-[90vh] overflow-y-auto"
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
          <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-white">
              Submit Your Achievement
            </h3>
            <p className="text-xs text-neutral-400">
              Laporkan prestasi akademik maupun non-akademikmu
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-in zoom-in-95 duration-200">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <h4 className="font-display font-bold text-white text-lg mb-1">
              Data Prestasi Diterima!
            </h4>
            <p className="text-xs text-neutral-300 mb-6">
              Biro Pengembangan Prestasi Mahasiswa BEM PM PIB akan memverifikasi berkas sertifikat dan mempublikasikannya di portal resmi serta media kampus.
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
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-neutral-300 font-mono uppercase mb-1">Nama Mahasiswa / Tim *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Putu Wira"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500"
                />
              </div>
              <div>
                <label className="block text-neutral-300 font-mono uppercase mb-1">NIM *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. PIB-24-001"
                  value={formData.nim}
                  onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-neutral-300 font-mono uppercase mb-1">Nama Kompetisi / Event *</label>
              <input
                type="text"
                required
                placeholder="e.g. International Culinary Olympiad 2026"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-neutral-300 font-mono uppercase mb-1">Peringkat / Capaian *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Juara 1 / Gold Medal"
                  value={formData.award}
                  onChange={(e) => setFormData({ ...formData, award: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500"
                />
              </div>
              <div>
                <label className="block text-neutral-300 font-mono uppercase mb-1">Kategori *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-[#0d0b1e] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500"
                >
                  <option value="Academic">Academic</option>
                  <option value="Business">Business</option>
                  <option value="Creative">Creative</option>
                  <option value="Sports">Sports</option>
                  <option value="National">National</option>
                  <option value="International">International</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-neutral-300 font-mono uppercase mb-1">Unggah Sertifikat / Bukti Kemenangan</label>
              <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-white/20 bg-white/[0.02] hover:bg-white/[0.04] text-neutral-400 hover:text-white cursor-pointer transition-colors">
                <Upload className="w-4 h-4 text-violet-400" />
                <span>{formData.proofName ? formData.proofName : 'Pilih File Sertifikat (PDF / JPG)'}</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) setFormData({ ...formData, proofName: f.name });
                  }}
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2 cursor-pointer"
            >
              KIRIM LAPORAN PRESTASI
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
