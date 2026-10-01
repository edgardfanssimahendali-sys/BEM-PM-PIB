import { Article } from '../types';
import { X, Calendar, Clock, Share2, Check } from 'lucide-react';
import { useState } from 'react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#09071c] border border-violet-500/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.85)] max-h-[90vh] overflow-y-auto"
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

        {/* Featured Image */}
        <div className="relative h-64 sm:h-80 -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-8 overflow-hidden rounded-t-3xl">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09071c] via-[#09071c]/30 to-transparent" />
          
          <div className="absolute bottom-4 left-6 sm:left-10">
            <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-violet-600/80 text-white backdrop-blur-md border border-violet-400/40">
              {article.category}
            </span>
          </div>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400 mb-4">
          <span className="text-cyan-300">{article.author}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-6 leading-tight">
          {article.title}
        </h3>

        {/* Article Body */}
        <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
          <p className="text-lg font-medium text-white/90 leading-relaxed italic border-l-2 border-violet-500 pl-4">
            {article.excerpt}
          </p>
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-neutral-500 font-mono">
            Redaksi Resmi Aurora Imperium PIB
          </span>

          <button
            onClick={handleShare}
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Tautan Disalin!' : 'Bagikan Artikel'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
