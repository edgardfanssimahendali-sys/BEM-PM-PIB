import { ArrowUp, Instagram, Youtube, Linkedin, Music2, Mail, MapPin } from 'lucide-react';
import AuroraLogo from './AuroraLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Cabinet', href: '#cabinet' },
    { label: 'Programs', href: '#programs' },
    { label: 'Events', href: '#calendar' },
    { label: 'Aspirations', href: '#aspiration' },
    { label: 'News', href: '#news' },
    { label: 'Documents', href: '#documents' },
    { label: 'Partnership', href: '#partnership' },
  ];

  return (
    <footer className="relative z-10 bg-[#020108] pt-20 pb-12 px-6 border-t border-white/10 text-neutral-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Main Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AuroraLogo className="w-10 h-10" />
                <h3 className="font-display font-extrabold text-2xl tracking-wider text-white">
                  AURORA IMPERIUM
                </h3>
              </div>

              <div className="font-display font-semibold text-neutral-200 text-sm mb-1">
                BEM PM PIB
              </div>
              <div className="text-xs text-neutral-400 mb-4 font-mono">
                Politeknik Internasional Bali
              </div>

              <p className="text-base text-violet-300/90 font-display italic font-semibold mb-6">
                "Bergerak Bersama, Berkarya Bersama"
              </p>

              <div className="space-y-2 text-xs text-neutral-400 font-mono">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <span>Kawasan Pantai Nyanyi, Beraban, Tabanan, Bali 82121</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>bem.pm@pib.ac.id</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-violet-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Social Links (Respecting Rule 21: placeholders for unknown URLs) */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Kanal Resmi & Media Sosial
            </h4>
            <p className="text-xs text-neutral-400 mb-6">
              Ikuti publikasi kegiatan, siaran langsung sidang himpunan, dan update agenda kemahasiswaan.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <a
                href="[INSTAGRAM URL]"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-violet-600/30 border border-white/10 hover:border-violet-400/50 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="[TIKTOK URL]"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-cyan-600/30 border border-white/10 hover:border-cyan-400/50 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
                title="TikTok"
              >
                <Music2 className="w-4 h-4" />
              </a>

              <a
                href="[YOUTUBE URL]"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-rose-600/30 border border-white/10 hover:border-rose-400/50 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href="[LINKEDIN URL]"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-blue-600/30 border border-white/10 hover:border-blue-400/50 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>KEMBALI KE ATAS</span>
              <ArrowUp className="w-3.5 h-3.5 text-violet-400" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono gap-3">
          <p>© 2026 BEM PM PIB — Aurora Imperium. All rights reserved.</p>
          <p>Politeknik Internasional Bali</p>
        </div>
      </div>
    </footer>
  );
}
