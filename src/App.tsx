import { useState } from 'react';
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

export default function App() {
  const [highlightToast, setHighlightToast] = useState<string | null>(null);

  const scrollToAspiration = () => {
    const el = document.getElementById('aspiration');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAspirationCreated = (newId: string) => {
    setHighlightToast(`Aspirasi ${newId} berhasil dikirim! ID siap dilacak.`);
    setTimeout(() => setHighlightToast(null), 4000);
  };

  return (
    <div className="min-h-screen bg-[#04040c] text-neutral-100 font-sans selection:bg-violet-600/40 selection:text-white relative">
      {/* Top Floating Notification if aspiration submitted */}
      {highlightToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-violet-600/90 text-white text-xs font-mono backdrop-blur-md border border-violet-400/40 shadow-[0_0_25px_rgba(139,92,246,0.6)] animate-in fade-in slide-in-from-top-4">
          {highlightToast}
        </div>
      )}

      {/* Persistent Sticky Navbar */}
      <Navbar onOpenAspiration={scrollToAspiration} />

      {/* Main Content Sections */}
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

        {/* 4. The Cabinet & Ministries */}
        <CabinetStructure />

        {/* 5. Program Kerja (Our Movement featuring PIB CUP) */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
