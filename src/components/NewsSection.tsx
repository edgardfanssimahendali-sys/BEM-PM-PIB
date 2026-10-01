import { useState } from 'react';
import { NEWS_ARTICLES } from '../data/mockData';
import { Article } from '../types';
import ArticleModal from './ArticleModal';
import { Calendar, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function NewsSection() {
  const [filter, setFilter] = useState<string>('ALL');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = ['ALL', 'BEM News', 'Announcement', 'Events', 'Achievement'];

  const filteredArticles = NEWS_ARTICLES.filter((art) => {
    if (filter === 'ALL') return true;
    return art.category === filter;
  });

  const featured = NEWS_ARTICLES.find((a) => a.featured) || NEWS_ARTICLES[0];
  const gridArticles = filteredArticles.filter((a) => a.id !== featured.id || filter !== 'ALL');

  return (
    <section id="news" className="py-28 px-6 relative border-t border-white/5 bg-[#04030e]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-2">
              <span>NEWSROOM & EDITORIAL</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">PUBLIKASI KABINET</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Latest from Aurora
            </h2>
          </div>

          {/* Category Filter Controls */}
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

        {/* Featured Marquee Article */}
        {(filter === 'ALL' || filter === featured.category) && (
          <div
            onClick={() => setSelectedArticle(featured)}
            className="mb-12 relative rounded-3xl overflow-hidden border border-white/10 hover:border-violet-500/40 bg-white/[0.025] backdrop-blur-xl transition-all duration-500 cursor-pointer group shadow-[0_15px_45px_rgba(0,0,0,0.4)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-7 relative h-72 sm:h-96 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-violet-600/90 text-white backdrop-blur-md border border-violet-400/30">
                    UTAMA · {featured.category}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
                    <span className="text-cyan-300 font-semibold">{featured.author}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featured.date}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight mb-4 group-hover:text-violet-200 transition-colors leading-snug">
                    {featured.title}
                  </h3>

                  <p className="text-neutral-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-violet-300 group-hover:text-white uppercase transition-colors">
                  <span>BACA SELENGKAPNYA</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="rounded-2xl p-6 bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-violet-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="relative h-44 -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl">
                  <img
                    src={art.image}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04030e] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-black/60 text-violet-300 backdrop-blur-md border border-white/10">
                      {art.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 mb-2">
                  <span>{art.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{art.readTime}</span>
                </div>

                <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-violet-200 transition-colors leading-snug line-clamp-2">
                  {art.title}
                </h4>

                <p className="text-xs text-neutral-300 leading-relaxed mb-6 line-clamp-2">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-bold text-violet-300 group-hover:text-white uppercase transition-colors">
                <span>BACA ARTIKEL</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}
