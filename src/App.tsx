import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import VisionMission from './components/VisionMission';
import CabinetStructure from './components/CabinetStructure';
import ProgramsSection from './components/ProgramsSection';
import CalendarSection from './components/CalendarSection';
import AspirationSection from './components/AspirationSection';
import NewsSection from './components/NewsSection';
import AchievementSection from './components/AchievementSection';
import GallerySection from './components/GallerySection';
import DocumentCenter from './components/DocumentCenter';
import PartnershipSection from './components/PartnershipSection';
import Footer from './components/Footer';
import MinistryDetailPage from './pages/MinistryDetailPage';
import BphDetailPage from './pages/BphDetailPage';

type AppView = 
  | { type: 'home' }
  | { type: 'ministry'; id: string }
  | { type: 'bph' };

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>({ type: 'home' });
  const [highlightToast, setHighlightToast] = useState<string | null>(null);

  // Sync with browser hash on load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#ministry-')) {
        const id = hash.replace('#ministry-', '');
        setCurrentView({ type: 'ministry', id });
      } else if (hash === '#bph') {
        setCurrentView({ type: 'bph' });
      } else if (!hash || hash === '#home') {
        setCurrentView({ type: 'home' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openMinistryPage = (id: string) => {
    setCurrentView({ type: 'ministry', id });
    window.location.hash = `#ministry-${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBphPage = () => {
    setCurrentView({ type: 'bph' });
    window.location.hash = '#bph';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (targetSection?: string) => {
    setCurrentView({ type: 'home' });
    window.location.hash = targetSection ? `#${targetSection}` : '#home';
    
    setTimeout(() => {
      if (targetSection) {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const scrollToAspiration = () => {
    if (currentView.type !== 'home') {
      navigateToHome('aspiration');
      return;
    }
    const el = document.getElementById('aspiration');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    if (currentView.type !== 'home') {
      navigateToHome('about');
      return;
    }
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAspirationCreated = (newId: string) => {
    setHighlightToast(`Aspirasi ${newId} berhasil dikirim! ID siap dilacak.`);
    setTimeout(() => setHighlightToast(null), 4000);
  };

  const isSubPage = currentView.type !== 'home';

  return (
    <div className="min-h-screen bg-[#04040c] text-neutral-100 font-sans selection:bg-violet-600/40 selection:text-white relative">
      {/* Top Floating Notification if aspiration submitted */}
      {highlightToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-violet-600/90 text-white text-xs font-mono backdrop-blur-md border border-violet-400/40 shadow-[0_0_25px_rgba(139,92,246,0.6)] animate-in fade-in slide-in-from-top-4">
          {highlightToast}
        </div>
      )}

      {/* Persistent Sticky Navbar */}
      <Navbar 
        onOpenAspiration={scrollToAspiration}
        onNavigateHome={navigateToHome}
        isSubPage={isSubPage}
      />

      {/* Conditional Rendering Based on Current View */}
      {currentView.type === 'ministry' ? (
        <MinistryDetailPage
          ministryId={currentView.id}
          onBack={() => navigateToHome('cabinet')}
          onSelectMinistry={openMinistryPage}
        />
      ) : currentView.type === 'bph' ? (
        <BphDetailPage
          onBack={() => navigateToHome('cabinet')}
          onOpenMinistry={openMinistryPage}
        />
      ) : (
        <main>
          {/* 1. Hero Section */}
          <Hero
            onExplore={scrollToAbout}
            onSubmitAspiration={scrollToAspiration}
          />

          {/* 2. Introduction & Statistics */}
          <AboutSection />

          {/* 3. Vision & Mission (4 interactive cards) */}
          <VisionMission />

          {/* 4. The Cabinet & Ministries (Now clicking blocks opens next page!) */}
          <CabinetStructure 
            onOpenMinistry={openMinistryPage}
            onOpenBph={openBphPage}
          />

          {/* 5. Program Kerja (Our Movement featuring Sunsetion 2026 & Growbalization) */}
          <ProgramsSection />

          {/* 6. Event Calendar (Aurora Calendar) */}
          <CalendarSection />

          {/* 7. Student Aspiration & Live Tracking */}
          <AspirationSection onAspirationSuccess={handleAspirationCreated} />

          {/* 8. Editorial Newsroom */}
          <NewsSection />

          {/* 9. Student Achievements */}
          <AchievementSection />

          {/* 10. Aurora Moments Gallery */}
          <GallerySection />

          {/* 11. Student Resource & Document Center */}
          <DocumentCenter />

          {/* 12. Strategic Partnership Pathways */}
          <PartnershipSection />
        </main>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
