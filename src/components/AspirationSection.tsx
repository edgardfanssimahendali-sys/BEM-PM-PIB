import { useState } from 'react';
import { INITIAL_ASPIRATIONS } from '../data/mockData';
import { Aspiration } from '../types';
import { 
  Send, 
  Search, 
  CheckCircle2, 
  Clock, 
  Copy, 
  Paperclip, 
  AlertCircle, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';

interface AspirationSectionProps {
  onAspirationSuccess?: (id: string) => void;
}

export default function AspirationSection({ onAspirationSuccess }: AspirationSectionProps) {
  // Aspirations database state initialized from mock data
  const [aspirations, setAspirations] = useState<Aspiration[]>(INITIAL_ASPIRATIONS);

  // Form State
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [category, setCategory] = useState<Aspiration['category']>('Academic');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [attachmentName, setAttachmentName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedAspiration, setSubmittedAspiration] = useState<Aspiration | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Tracking State
  const [searchId, setSearchId] = useState('ASP-AI-2026-001');
  const [trackedResult, setTrackedResult] = useState<Aspiration | null>(INITIAL_ASPIRATIONS[0]);
  const [searchError, setSearchError] = useState('');

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newCounter = aspirations.length + 1;
      const generatedId = `ASP-AI-2026-${String(newCounter).padStart(3, '0')}`;
      const nowStr = new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });

      const newAspiration: Aspiration = {
        id: generatedId,
        name: name.trim() || 'Anonymous (Mahasiswa PIB)',
        studentId: studentId.trim() || 'PIB-RAHASIA',
        category,
        subject,
        message,
        status: 'SUBMITTED',
        createdAt: `${nowStr} (Baru Saja)`,
        updatedAt: `${nowStr}`,
        responsibleMinistry: category === 'Facilities' 
          ? 'Kementerian Dalam Negeri (Biro Fasilitas)'
          : category === 'Academic'
          ? 'Kementerian Riset dan Kebijakan'
          : 'Badan Pengurus Harian (BPH) BEM PM',
        timeline: [
          {
            status: 'SUBMITTED',
            date: nowStr,
            description: 'Aspirasi resmi tercatat dalam sistem terpadu BEM PM PIB.',
            note: 'Menunggu peninjauan oleh kementerian penanggung jawab.',
          },
        ],
      };

      setAspirations([newAspiration, ...aspirations]);
      setSubmittedAspiration(newAspiration);
      setIsSubmitting(false);

      // Auto-set the tracker to this new aspiration
      setSearchId(generatedId);
      setTrackedResult(newAspiration);
      setSearchError('');

      if (onAspirationSuccess) {
        onAspirationSuccess(generatedId);
      }
    }, 600);
  };

  // Handle Tracking Lookup
  const handleTrackLookup = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = searchId.trim().toUpperCase();

    if (!query) {
      setSearchError('Silakan masukkan ID aspirasi (Contoh: ASP-AI-2026-001)');
      return;
    }

    const found = aspirations.find((item) => item.id.toUpperCase() === query);

    if (found) {
      setTrackedResult(found);
      setSearchError('');
    } else {
      setTrackedResult(null);
      setSearchError(`Aspirasi dengan ID "${query}" tidak ditemukan. Pastikan format ID sudah benar.`);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const statusSteps: Array<'SUBMITTED' | 'REVIEWED' | 'IN PROGRESS' | 'RESOLVED'> = [
    'SUBMITTED',
    'REVIEWED',
    'IN PROGRESS',
    'RESOLVED',
  ];

  const getStepIndex = (status: Aspiration['status']) => {
    return statusSteps.indexOf(status);
  };

  return (
    <section id="aspiration" className="py-28 px-6 relative border-t border-white/5 bg-[#030209]">
      {/* Background aurora glow orbs */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-3">
            <span>STUDENT ADVOCACY</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">KANAL ASPIRASI RESMI</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase mb-6">
            YOUR VOICE MATTERS.
          </h2>

          <p className="text-neutral-300 text-lg leading-relaxed">
            "Suara mahasiswa adalah bagian dari perubahan. Sampaikan aspirasi, ide, kritik, maupun masukan untuk membangun PIB bersama."
          </p>
        </div>

        {/* 2-Column Core Architecture: Form on Left, Tracker on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: SUBMIT ASPIRATION FORM */}
          <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-white/[0.025] backdrop-blur-xl border border-white/10 shadow-[0_15px_45px_rgba(0,0,0,0.5)] relative overflow-hidden">
            {/* Top gradient hairline */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400" />

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Submit Aspiration
                  </h3>
                  <p className="text-xs text-neutral-400">Identitas opsional & privasi terjaga</p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/40">
                TERENKRIPSI
              </span>
            </div>

            {submittedAspiration ? (
              /* Success Confirmation Card */
              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-950/60 to-[#0c0924] border border-violet-500/40 text-center animate-in zoom-in-95 duration-200">
                <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto mb-4 animate-bounce" />
                <h4 className="font-display font-extrabold text-2xl text-white mb-2">
                  Your aspiration has been submitted.
                </h4>
                <p className="text-xs text-neutral-300 max-w-md mx-auto mb-6">
                  Terima kasih atas kontribusi aktifmu! Aspirasi ini telah didistribusikan ke kementerian terkait dan dapat dipantau perkembangannya secara live.
                </p>

                {/* ID Card with Copy Trigger */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between gap-3 mb-6">
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">
                      KODE ASPIRASI UNIK
                    </div>
                    <div className="font-mono font-bold text-lg text-violet-300">
                      {submittedAspiration.id}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(submittedAspiration.id)}
                    type="button"
                    className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono font-semibold"
                    title="Copy ID"
                  >
                    {copiedId ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId ? 'Disalin' : 'Salin'}</span>
                  </button>
                </div>

                <button
                  onClick={() => {
                    setSubmittedAspiration(null);
                    setSubject('');
                    setMessage('');
                    setName('');
                    setStudentId('');
                    setAttachmentName('');
                  }}
                  type="button"
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  KIRIM ASPIRASI BARU
                </button>
              </div>
            ) : (
              /* Aspiration Submission Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-neutral-300 uppercase mb-1.5">
                      Name <span className="text-neutral-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Komang Arya"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-neutral-300 uppercase mb-1.5">
                      Student ID <span className="text-neutral-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. PIB-24-0012"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-neutral-300 uppercase mb-1.5">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as Aspiration['category'])}
                    className="w-full bg-[#0d0b1e] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-violet-500 transition-colors"
                  >
                    <option value="Academic">Academic (Kurikulum, Jadwal, Dosen)</option>
                    <option value="Facilities">Facilities (Lab Praktik, Wi-Fi, Ruang Kuliah)</option>
                    <option value="Student Affairs">Student Affairs (Beasiswa & Kesejahteraan)</option>
                    <option value="Organization">Organization (HIMA, UKM, Koordinasi)</option>
                    <option value="Campus">Campus (Kantin, Parkir, Keamanan)</option>
                    <option value="Other">Other (Gagasan Bebas / Rekomendasi Acara)</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-neutral-300 uppercase mb-1.5">
                    Subject <span className="text-violet-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Usulan Pengadaan Mesin Roasting Kopi Lab F&B"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-neutral-300 uppercase mb-1.5">
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Uraikan gagasan, kronologi kendala, atau saran konstruktifmu dengan jelas..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  />
                </div>

                {/* Attachment Mock Upload */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-neutral-300 uppercase mb-1.5">
                    Attachment <span className="text-neutral-500 font-normal">(Optional Dokumen / Foto Bukti)</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-white/20 hover:border-violet-400/50 bg-white/[0.015] hover:bg-white/[0.04] text-xs text-neutral-400 hover:text-white transition-all cursor-pointer">
                      <Paperclip className="w-4 h-4 text-violet-400" />
                      <span>{attachmentName ? attachmentName : 'Pilih File (PDF, PNG, JPG maks 5MB)'}</span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) setAttachmentName(file.name);
                        }}
                      />
                    </label>
                    {attachmentName && (
                      <button
                        type="button"
                        onClick={() => setAttachmentName('')}
                        className="text-xs text-rose-400 hover:text-rose-300 underline"
                      >
                        Hapus
                      </button>
                    )}
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>MENGIRIMKAN ASPIRASI...</span>
                  ) : (
                    <>
                      <span>SUBMIT ASPIRATION</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: TRACK YOUR ASPIRATION */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Lookup Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-white/[0.025] backdrop-blur-xl border border-white/10 shadow-[0_15px_45px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Track Your Aspiration
                  </h3>
                  <p className="text-xs text-neutral-400">Pantau progres tindak lanjut oleh kabinet</p>
                </div>
              </div>

              {/* Quick sample chips */}
              <div className="flex items-center gap-2 my-4 text-[11px] font-mono text-neutral-400 flex-wrap">
                <span>Coba ID Contoh:</span>
                {['ASP-AI-2026-001', 'ASP-AI-2026-002'].map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setSearchId(id);
                      const item = aspirations.find((a) => a.id === id);
                      if (item) setTrackedResult(item);
                      setSearchError('');
                    }}
                    className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-violet-300 border border-white/10 transition-colors"
                  >
                    {id}
                  </button>
                ))}
              </div>

              <form onSubmit={handleTrackLookup} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Aspiration ID (e.g. ASP-AI-2026-001)"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-black font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
                >
                  TRACK
                </button>
              </form>

              {searchError && (
                <div className="mt-3 p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{searchError}</span>
                </div>
              )}
            </div>

            {/* Glowing Timeline Display */}
            {trackedResult ? (
              <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0a071f] via-[#070517] to-[#04030f] border border-violet-500/30 shadow-[0_15px_45px_rgba(139,92,246,0.15)] relative">
                {/* Header Information */}
                <div className="pb-4 mb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                      ID: {trackedResult.id}
                    </span>
                    <h4 className="font-display font-bold text-lg text-white">
                      {trackedResult.subject}
                    </h4>
                  </div>
                  <div className="text-right sm:text-right">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-violet-600/30 border border-violet-400/40 text-violet-200">
                      {trackedResult.status}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-neutral-400 mb-6 flex flex-wrap gap-x-4 gap-y-1 font-mono">
                  <span>Kategori: <strong className="text-white">{trackedResult.category}</strong></span>
                  <span>·</span>
                  <span>PJ: <strong className="text-violet-300">{trackedResult.responsibleMinistry}</strong></span>
                </div>

                {/* 4-Stage Glowing Timeline Component */}
                <div className="space-y-6 relative before:absolute before:top-3 before:bottom-3 before:left-4 before:w-0.5 before:bg-gradient-to-b before:from-violet-500 before:via-indigo-500 before:to-neutral-800">
                  {statusSteps.map((step, idx) => {
                    const currentIndex = getStepIndex(trackedResult.status);
                    const isPassed = idx <= currentIndex;
                    const isCurrent = idx === currentIndex;
                    const timelineEntry = trackedResult.timeline.find((t) => t.status === step);

                    return (
                      <div key={step} className="relative flex items-start gap-4 group">
                        {/* Status Node Bulb */}
                        <div
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 z-10 transition-all duration-300 ${
                            isPassed
                              ? 'bg-[#08051a] border-violet-400 text-cyan-300 shadow-[0_0_15px_rgba(139,92,246,0.6)]'
                              : 'bg-[#060410] border-neutral-700 text-neutral-600'
                          } ${isCurrent ? 'ring-4 ring-violet-500/20 scale-105' : ''}`}
                        >
                          {isPassed ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <Clock className="w-3.5 h-3.5" />
                          )}
                        </div>

                        {/* Content Box */}
                        <div
                          className={`flex-1 p-4 rounded-2xl border transition-all ${
                            isCurrent
                              ? 'bg-violet-950/40 border-violet-500/40 shadow-[0_0_20px_rgba(139,92,246,0.15)]'
                              : isPassed
                              ? 'bg-white/[0.025] border-white/10'
                              : 'bg-white/[0.005] border-white/5 opacity-50'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className={`font-mono text-xs font-bold uppercase tracking-wider ${isPassed ? 'text-white' : 'text-neutral-500'}`}>
                              {step}
                            </span>
                            {timelineEntry && (
                              <span className="text-[10px] font-mono text-neutral-400">
                                {timelineEntry.date}
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-neutral-300 leading-relaxed">
                            {timelineEntry
                              ? timelineEntry.description
                              : `Tahap ${step.toLowerCase()} akan diproses setelah tahapan sebelumnya tervalidasi.`}
                          </p>

                          {timelineEntry?.note && (
                            <div className="mt-2 text-[11px] text-cyan-300 font-mono">
                              Catatan: {timelineEntry.note}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

        </div>
      </div>
    </section>
  );
}
