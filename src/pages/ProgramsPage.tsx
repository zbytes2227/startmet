import React from 'react';
import { VENTURE_PROGRAMS } from '../data/startmetData';
import { PageRoute, VentureProgram } from '../types';
import { ArrowRight, Check } from 'lucide-react';

interface ProgramsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenIntake: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate, onOpenIntake }) => {
  return (
    <div className="pt-32 pb-24 bg-[#060913] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-3">
            Venture Co-Building Tracks
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Structured programs built around founder reality.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Rather than generic lectures or open-ended consulting, our venture programs are time-boxed, deliverable-driven sprints designed to reach definitive milestones.
          </p>
        </div>

        {/* Program Blocks */}
        <div className="space-y-8 mb-20">
          {VENTURE_PROGRAMS.map((prog, index) => (
            <div 
              key={prog.id}
              className="rounded-xl bg-[#090e21] border border-white/[0.08] p-6 sm:p-10 transition-colors hover:border-white/[0.2]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column (Span 5) */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                    <span className="text-[#00DF59] font-bold">{prog.badge}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{prog.duration}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{prog.stage}</span>
                  </div>

                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                    {prog.name}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {prog.summary}
                  </p>

                  <div className="p-3.5 rounded-lg bg-[#060913] border border-white/[0.06] text-xs text-slate-300">
                    <strong className="text-white block mb-0.5">Designed For:</strong>
                    <span>{prog.idealFor}</span>
                  </div>
                </div>

                {/* Right Column: Focus Areas & Deliverables (Span 7) */}
                <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#00DF59] mb-3">
                        Curriculum &amp; Sprint Focus
                      </div>
                      <div className="space-y-2">
                        {prog.focus.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                            <span className="text-[#00DF59] font-bold">·</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-[#060913] border border-white/[0.06]">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Verified Sprint Deliverables
                      </div>
                      <div className="space-y-1.5">
                        {prog.deliverables.map((deliv, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-white">
                            <span className="text-[#00DF59]">✓</span>
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="text-xs font-mono text-slate-400">
                      Zero equity required
                    </div>

                    <button
                      onClick={onOpenIntake}
                      className="px-5 py-2.5 bg-[#00DF59] text-[#060913] font-bold text-xs sm:text-sm rounded-lg hover:bg-[#12e867] transition-colors inline-flex items-center gap-2"
                    >
                      <span>Inquire About Track</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-10 rounded-xl bg-[#090e21] border border-white/[0.1] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-2xl text-white mb-2">
              Unsure which program fits your current stage?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              We can assess your current traction and recommend either a focused service sprint or a comprehensive incubation track.
            </p>
          </div>

          <button
            onClick={onOpenIntake}
            className="px-6 py-3.5 bg-[#00DF59] text-[#060913] font-bold text-sm rounded-lg hover:bg-[#12e867] transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>Request Diagnostic</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
