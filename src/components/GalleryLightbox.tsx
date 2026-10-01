import { GalleryItem } from '../types';
import { X, Calendar, Tag } from 'lucide-react';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function GalleryLightbox({ item, onClose }: GalleryLightboxProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#09071c] border border-violet-500/30 rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.9)] max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full text-white bg-black/60 hover:bg-black/80 backdrop-blur-md transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative flex-1 min-h-[300px] sm:min-h-[440px] max-h-[65vh] bg-black overflow-hidden flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6 sm:p-8 bg-[#070614] border-t border-white/10">
          <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-2">
            <span className="flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              {item.category}
            </span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="flex items-center gap-1 text-neutral-400">
              <Calendar className="w-3.5 h-3.5" />
              {item.date}
            </span>
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
