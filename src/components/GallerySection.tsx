import { useState } from 'react';
import { GALLERY_DATA } from '../data/mockData';
import { GalleryItem } from '../types';
import GalleryLightbox from './GalleryLightbox';
import { Maximize2, Calendar } from 'lucide-react';

export default function GallerySection() {
  const [filter, setFilter] = useState<string>('ALL');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['ALL', 'Events', 'Programs', 'Internal', 'Collaboration', 'Student Activities'];

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (filter === 'ALL') return true;
    return item.category === filter;
  });

  return (
    <section id="gallery" className="py-28 px-6 relative border-t border-white/5 bg-[#04030e]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-2">
              <span>VISUAL ARCHIVES</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">GALERI DOKUMENTASI</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Aurora Moments
            </h2>
          </div>

          {/* Categories */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white/[0.03] border border-white/10 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                type="button"
                className={`px-3 py-1.5 text-xs font-mono font-bold tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  filter === cat
                    ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isTall = idx === 0 || idx === 3;
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/50 bg-[#070514] cursor-pointer shadow-[0_10px_35px_rgba(0,0,0,0.5)] ${
                  isTall ? 'sm:row-span-2 min-h-[380px]' : 'min-h-[260px]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />

                {/* Dark gradient overlay that deepens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Hover trigger icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Maximize2 className="w-4 h-4 text-cyan-300" />
                </div>

                {/* Bottom Content Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400 mb-1.5">
                    <span>{item.category}</span>
                    <span aria-hidden="true" className="text-neutral-500">·</span>
                    <span className="flex items-center gap-1 text-neutral-300">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-violet-200 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <GalleryLightbox
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </section>
  );
}
