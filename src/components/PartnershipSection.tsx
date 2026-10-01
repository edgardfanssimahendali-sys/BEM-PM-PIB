import { useState } from 'react';
import CollaborationModal from './CollaborationModal';
import { Users, Building2, Globe2, ArrowRight, Sparkles } from 'lucide-react';

export default function PartnershipSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [partnerType, setPartnerType] = useState<'STUDENT' | 'ORGANIZATION' | 'EXTERNAL'>('EXTERNAL');

  const openForType = (type: 'STUDENT' | 'ORGANIZATION' | 'EXTERNAL') => {
    setPartnerType(type);
    setModalOpen(true);
  };

  return (
    <section id="partnership" className="py-28 px-6 relative border-t border-white/5 bg-[#04030e]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-3">
            <span>STRATEGIC ALLIANCES</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">JARINGAN KOLABORASI</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            LET'S COLLABORATE
          </h2>

          <p className="text-neutral-300 text-lg leading-relaxed">
            "Together, we create more impact." Kami percaya bahwa karya besar selalu lahir dari perpaduan gagasan dan sinergi lintas institusi.
          </p>
        </div>

        {/* 3 Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Pathway 1: Student */}
          <div className="p-8 rounded-3xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-violet-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all">
                <Users className="w-6 h-6" />
              </div>

              <div className="text-xs font-mono text-cyan-400 uppercase font-semibold mb-1">
                JALUR INTERNAL
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white mb-3">
                STUDENT
              </h3>

              <div className="text-xs text-neutral-400 font-semibold mb-4">
                For PIB students
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Punya ide inisiatif sosial, karya inovasi vokasi, atau ingin menyalurkan program pemberdayaan mahasiswa? BEM PM siap memfasilitasi pendampingan dan perizinan.
              </p>
            </div>

            <button
              onClick={() => openForType('STUDENT')}
              type="button"
              className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-violet-300 group-hover:text-white uppercase transition-colors cursor-pointer"
            >
              <span>AJUKAN INISIATIF</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Pathway 2: Organization */}
          <div className="p-8 rounded-3xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-violet-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                <Building2 className="w-6 h-6" />
              </div>

              <div className="text-xs font-mono text-indigo-400 uppercase font-semibold mb-1">
                JALUR ORMAWA
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white mb-3">
                ORGANIZATION
              </h3>

              <div className="text-xs text-neutral-400 font-semibold mb-4">
                For HIMA, UKM, and student organizations
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Bangun program kolaboratif bersama kementerian kabinet, sinkronisasi kalender kegiatan, atau ajukan permohonan joint-event untuk dampak yang lebih luas.
              </p>
            </div>

            <button
              onClick={() => openForType('ORGANIZATION')}
              type="button"
              className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-violet-300 group-hover:text-white uppercase transition-colors cursor-pointer"
            >
              <span>SINERGI ORMAWA</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Pathway 3: External Partner */}
          <div className="p-8 rounded-3xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-violet-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <Globe2 className="w-6 h-6" />
              </div>

              <div className="text-xs font-mono text-cyan-400 uppercase font-semibold mb-1">
                JALUR EKSTERNAL
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white mb-3">
                EXTERNAL PARTNER
              </h3>

              <div className="text-xs text-neutral-400 font-semibold mb-4">
                For companies, communities, brands, and external institutions
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Jalin kemitraan strategis, penawaran sponsorship festival, kuliah tamu industri, hingga rekrutmen magang dengan talenta mahasiswa perhotelan, kuliner, dan pariwisata PIB.
              </p>
            </div>

            <button
              onClick={() => openForType('EXTERNAL')}
              type="button"
              className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-violet-300 group-hover:text-white uppercase transition-colors cursor-pointer"
            >
              <span>MITRA INDUSTRI</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Big Action Call */}
        <div className="text-center">
          <button
            onClick={() => openForType('EXTERNAL')}
            type="button"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_30px_rgba(139,92,246,0.35)] inline-flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>START A COLLABORATION</span>
          </button>
        </div>
      </div>

      <CollaborationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultType={partnerType}
      />
    </section>
  );
}
