import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface TrustStripProps {
  onStageSelect?: (stageIndex: number) => void;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ onStageSelect }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      num: '01',
      name: 'IDEA',
      title: 'Problem Deconstruction',
      timeline: 'Weeks 1–2',
      summary: 'Stress-testing the core problem, customer archetypes, and unit commercial feasibility before writing code.',
      deliverables: [
        'Problem-solution hypothesis mapping',
        'Direct competitor vulnerability matrix',
        'Target customer interview protocol'
      ]
    },
    {
      num: '02',
      name: 'VALIDATE',
      title: 'Market Demand Testing',
      timeline: 'Weeks 2–3',
      summary: 'Conducting structured customer interviews, demand smoke tests, and verified willingness-to-pay experiments.',
      deliverables: [
        'Quantitative demand verification report',
        'Pre-launch waitlist & intent data',
        'Refined MVP scope & feature specification'
      ]
    },
    {
      num: '03',
      name: 'BUILD',
      title: 'Full-Stack MVP Engineering',
      timeline: 'Weeks 4–8',
      summary: 'Architecting scalable web and mobile software with clean code, secure authentication, and robust cloud infrastructure.',
      deliverables: [
        'Production-ready Web/Mobile MVP application',
        'Database architecture & authenticated APIs',
        'Complete repository & 100% IP handover'
      ]
    },
    {
      num: '04',
      name: 'BRAND',
      title: 'Identity & Corporate Entity',
      timeline: 'Weeks 5–8',
      summary: 'Establishing the corporate entity with MCA while designing a memorable, high-trust brand system and marketing surface.',
      deliverables: [
        'Pvt Ltd / LLP incorporation & PAN/TAN/GST',
        'Distinctive visual identity & design tokens',
        'High-converting marketing website'
      ]
    },
    {
      num: '05',
      name: 'LAUNCH',
      title: 'Go-To-Market Execution',
      timeline: 'Weeks 8–10',
      summary: 'Rolling out to early adopters, monitoring retention telemetry, and removing friction from customer onboarding.',
      deliverables: [
        'Onboarding & activation funnel deployment',
        'First 100 customer acquisition sprint',
        'Cohort retention analytics setup'
      ]
    },
    {
      num: '06',
      name: 'GROW',
      title: 'Diligence & Capital Readiness',
      timeline: 'Ongoing',
      summary: 'Structuring clean unit economics, preparing compliance data rooms, and aligning with institutional investors.',
      deliverables: [
        '10-slide institutional pitch deck',
        '3-year financial model & unit economics',
        'Cap table & legal diligence data room'
      ]
    }
  ];

  const current = stages[activeStage];

  const handleSelect = (idx: number) => {
    setActiveStage(idx);
    onStageSelect?.(idx);
  };

  return (
    <section className="py-20 lg:py-24 border-b border-white/[0.08] bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Quiet Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08] mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-2">
              The Founder Arc
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              From raw concept to sustainable growth.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Startups fail from fragmented execution and broken sequence. We guide founders through every milestone with dedicated sprint disciplines.
          </p>
        </div>

        {/* Editorial Timeline Track: NOT generic cards! */}
        <div className="overflow-x-auto pb-4 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[700px] grid grid-cols-6 border-b border-white/[0.12] relative">
            {stages.map((st, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={st.name}
                  onClick={() => handleSelect(idx)}
                  className={`text-left pb-4 pt-2 pr-4 transition-colors relative group focus:outline-none ${
                    isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-mono font-bold transition-colors ${
                      isActive ? 'text-[#00DF59]' : 'text-slate-500 group-hover:text-slate-400'
                    }`}>
                      {st.num}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {st.timeline}
                    </span>
                  </div>

                  <div className="font-display font-bold text-base sm:text-lg tracking-wide">
                    {st.name}
                  </div>

                  {/* Active Indicator Line */}
                  {isActive && (
                    <div className="absolute -bottom-[2px] left-0 right-4 h-[3px] bg-[#00DF59]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Milestone Detail Pane: Clean, spacious, split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Left: Summary (Span 6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-xs font-mono text-[#00DF59] font-bold">
                STAGE {current.num}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Duration: {current.timeline}
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {current.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              {current.summary}
            </p>
          </div>

          {/* Right: Deliverables List (Span 6) */}
          <div className="lg:col-span-6 border-l border-white/[0.08] lg:pl-8 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Concrete Outputs
            </div>

            <div className="space-y-3">
              {current.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00DF59] mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
              <span>Sprint accountability with direct partner reviews</span>
              <span className="font-mono text-slate-400">
                0{activeStage + 1} of 06
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
