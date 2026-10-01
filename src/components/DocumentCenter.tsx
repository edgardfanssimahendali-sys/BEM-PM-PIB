import { useState } from 'react';
import { DOCUMENTS_DATA } from '../data/mockData';
import { ResourceDocument } from '../types';
import { Search, Download, FileText, CheckCircle2 } from 'lucide-react';

export default function DocumentCenter() {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'ORGANIZATION' | 'REPORTS' | 'STUDENT'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const filteredDocs = DOCUMENTS_DATA.filter((doc) => {
    const matchesCategory = activeCategory === 'ALL' || doc.category === activeCategory;
    const matchesQuery =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handleDownload = (doc: ResourceDocument) => {
    setDownloadToast(`Mengunduh file "${doc.title}.${doc.format.toLowerCase()}" (${doc.fileSize})...`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3500);
  };

  return (
    <section id="documents" className="py-28 px-6 relative border-t border-white/5 bg-[#030209]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-2">
              <span>DOCUMENT CENTER</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">ARSIP & PANDUAN RESMI</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Student Resource Center
            </h2>
          </div>

          <p className="text-neutral-400 text-xs sm:text-sm max-w-md">
            Pusat unduhan arsip legalitas organisasi, laporan pertanggungjawaban, serta formulir resmi kegiatan kemahasiswaan Politeknik Internasional Bali.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari dokumen, SOP, atau regulasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="md:col-span-6 flex items-center gap-1.5 p-1 bg-white/[0.025] border border-white/10 rounded-xl overflow-x-auto">
            {(['ALL', 'ORGANIZATION', 'REPORTS', 'STUDENT'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                className={`flex-1 px-3 py-2 text-xs font-mono font-bold tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap text-center ${
                  activeCategory === cat
                    ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-violet-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-violet-950/40 border border-violet-500/30 text-cyan-300 group-hover:scale-105 group-hover:bg-violet-900/40 transition-all">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5">
                    {doc.format} · {doc.fileSize}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-violet-400 mb-1">
                  {doc.subcategory}
                </div>

                <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-violet-200 transition-colors leading-snug">
                  {doc.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {doc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-500">
                  Update: {doc.date}
                </span>

                <button
                  onClick={() => handleDownload(doc)}
                  type="button"
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>UNDUH</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDocs.length === 0 && (
          <div className="text-center py-16 rounded-2xl bg-white/[0.015] border border-white/5">
            <FileText className="w-8 h-8 text-neutral-600 mx-auto mb-3" />
            <div className="font-display font-bold text-white text-base mb-1">
              Dokumen Tidak Ditemukan
            </div>
            <p className="text-xs text-neutral-400">
              Coba kata kunci lain atau pilih kategori dokumen yang berbeda.
            </p>
          </div>
        )}
      </div>

      {/* Download Floating Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[#09081f] border border-violet-500/50 shadow-[0_10px_35px_rgba(0,0,0,0.8)] text-white text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 animate-pulse" />
          <span className="font-mono">{downloadToast}</span>
        </div>
      )}
    </section>
  );
}
