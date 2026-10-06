import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Code2, Scale, Rocket, Check } from 'lucide-react';
import { PageRoute } from '../../types';

interface HeroProps {
  onNavigate: (route: PageRoute) => void;
  onOpenIntake: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenIntake, onExploreClick }) => {
  const [activeTrack, setActiveTrack] = useState<'tech' | 'legal' | 'market'>('tech');

  const tracks = {
    tech: {
      name: 'Engineering & Code',
      icon: Code2,
      tagline: 'Production-ready software with 100% IP handover.',
      milestones: [
        { phase: 'Weeks 1–2', deliverable: 'System architecture, API specifications & schema design' },
        { phase: 'Weeks 3–6', deliverable: 'Full-stack MVP sprint (React/Next.js, Node/Postgres, secure auth)' },
        { phase: 'Weeks 7–8', deliverable: 'End-to-end testing, cloud deployment & complete repository transfer' }
      ]
    },
    legal: {
      name: 'Corporate & Legal',
      icon: Scale,
      tagline: 'Clean corporate governance ready for institutional diligence.',
      milestones: [
        { phase: 'Week 1', deliverable: 'Founder covenants, IP assignment contracts & cap table structuring' },
        { phase: 'Weeks 2–3', deliverable: 'Ministry of Corporate Affairs (MCA) Pvt Ltd or LLP incorporation' },
        { phase: 'Weeks 4–5', deliverable: 'Startup India DPIIT recognition, GST/PAN filings & Trademark protection' }
      ]
    },
    market: {
      name: 'Brand & Launch',
      icon: Rocket,
      tagline: 'Positioning and distribution that converts early adopters.',
      milestones: [
        { phase: 'Weeks 2–3', deliverable: 'Distinctive visual identity system, design tokens & brand narrative' },
        { phase: 'Weeks 4–5', deliverable: 'High-conversion marketing website & onboarding funnel rollout' },
        { phase: 'Weeks 6–8', deliverable: 'Go-to-market execution, pilot telemetry & 10-slide investor pitch deck' }
      ]
    }
  };

  const currentTrack = tracks[activeTrack];

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authoritative Editorial Statement (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs text-slate-400 uppercase tracking-widest font-mono mb-6">
              <span>VENTURE STUDIO</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>FOUNDER PLATFORM</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-[#00DF59]">INDIA</span>
            </div>

            {/* Headline: Clean, authoritative, balanced, NO gradient fill */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl text-white tracking-tight leading-[1.06] text-balance max-w-2xl">
              We help founders turn ideas into real businesses.
            </h1>

            {/* Clear, credible description without empty clichés */}
            <p className="mt-6 text-base sm:text-lg xl:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
              STARTMET is an integrated venture-building ecosystem. We partner with founders to validate concepts, engineer production-grade MVPs, incorporate compliant companies, and execute market launches.
            </p>

            {/* Action Group */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                onClick={onOpenIntake}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00DF59] text-[#060913] font-bold text-sm sm:text-base rounded-lg transition-colors hover:bg-[#12e867] active:scale-[0.99]"
              >
                <span>Submit Your Idea</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-white/[0.12] text-slate-200 hover:text-white hover:border-white/[0.3] font-medium text-sm sm:text-base transition-colors"
              >
                <span>Explore How We Work</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Micro-guarantees as clean typography with separators */}
            <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-400 font-medium">
              <span className="text-white">100% Code & IP Ownership</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-white">MCA & DPIIT Compliant</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-white">Zero Equity Required for Services</span>
            </div>

          </div>

          {/* Right Column: Architectural Co-Building Engine (Span 5) */}
          <div className="lg:col-span-5 w-full">
            <div className="border border-white/[0.1] bg-[#090e21] rounded-xl p-6 sm:p-7 shadow-xl">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-5">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Execution Blueprint
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Coordinated Venture Workstreams
                  </div>
                </div>
                <span className="text-xs font-mono text-[#00DF59] border border-[#00DF59]/30 px-2 py-0.5 rounded">
                  Parallel Sprints
                </span>
              </div>

              {/* Functional Track Switcher (Interactive controls) */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-[#060913] rounded-lg border border-white/[0.08] mb-5">
                {(['tech', 'legal', 'market'] as const).map((key) => {
                  const item = tracks[key];
                  const isActive = activeTrack === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTrack(key)}
                      className={`py-2 px-2 text-xs font-medium rounded transition-colors text-center truncate ${
                        isActive
                          ? 'bg-[#121a3a] text-white font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {item.name.split(' ')[0]}
                    </button>
                  );
                })}
              </div>

              {/* Active Track Focus */}
              <div className="space-y-4">
                <div className="text-xs text-slate-300 font-medium pb-2 border-b border-white/[0.06]">
                  {currentTrack.tagline}
                </div>

                {/* Milestone Progression */}
                <div className="space-y-3">
                  {currentTrack.milestones.map((m, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-lg bg-[#0c1432] border border-white/[0.06] flex items-start gap-3"
                    >
                      <div className="text-[11px] font-mono text-[#00DF59] font-bold shrink-0 mt-0.5 w-16">
                        {m.phase}
                      </div>
                      <div className="text-xs text-slate-200 leading-relaxed">
                        {m.deliverable}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Insight */}
              <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <span>All streams executed simultaneously</span>
                <button
                  onClick={onOpenIntake}
                  className="text-white hover:text-[#00DF59] font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Start your track &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
