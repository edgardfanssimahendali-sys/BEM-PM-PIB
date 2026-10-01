import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import AuroraLogo from './AuroraLogo';

interface NavbarProps {
  onOpenAspiration: () => void;
}

export default function Navbar({ onOpenAspiration }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'vision', 'cabinet', 'programs', 'calendar', 'aspiration', 'news'];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'CABINET', href: '#cabinet', id: 'cabinet' },
    { label: 'PROGRAMS', href: '#programs', id: 'programs' },
    { label: 'CALENDAR', href: '#calendar', id: 'calendar' },
    { label: 'ASPIRATION', href: '#aspiration', id: 'aspiration' },
    { label: 'NEWS', href: '#news', id: 'news' },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#04040c]/85 backdrop-blur-xl border-b border-purple-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element according to Top Bar Contract) */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-md"
        >
          <AuroraLogo className="w-9 h-9" />
          <div className="flex flex-col">
            <span className="font-display font-black tracking-widest text-base sm:text-lg text-white group-hover:text-violet-300 transition-colors leading-none">
              AURORA IMPERIUM
            </span>
            <span className="text-[10px] font-mono text-cyan-300 tracking-wider">
              BEM PM PIB
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider text-neutral-300" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`transition-colors whitespace-nowrap py-1 relative hover:text-white ${
                  isActive ? 'text-violet-300 font-bold' : 'text-neutral-400'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAspiration}
            type="button"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wider text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border border-violet-400/30 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            SUBMIT ASPIRATION
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
            className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-[#060512]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto z-40 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            <div className="text-xs uppercase font-mono tracking-widest text-violet-400 mb-2">
              BEM PM Politeknik Internasional Bali
            </div>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block py-3 text-lg font-display font-bold tracking-wider text-neutral-200 hover:text-violet-300 border-b border-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-8">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenAspiration();
              }}
              type="button"
              className="w-full py-3.5 px-4 text-center font-bold tracking-wider text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all"
            >
              SUBMIT ASPIRATION
            </button>
            <div className="mt-4 text-center text-xs text-neutral-500">
              © 2026 BEM PM PIB • Aurora Imperium
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
