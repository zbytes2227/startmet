import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface FundingPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenIntake: () => void;
}

export const FundingPage: React.FC<FundingPageProps> = ({ onNavigate, onOpenIntake }) => {
  const [activeSlideTab, setActiveSlideTab] = useState<number>(0);

  const pitchDeckSlides = [
    { num: '01', title: 'Problem & Root Friction', desc: 'Identify the exact core problem rather than a minor inconvenience. Quantify the financial or operational cost to the buyer.' },
    { num: '02', title: 'Solution & Product Architecture', desc: 'Clear explanation of how the software solves the root friction. Screenshots or interactive flow demonstrating simplicity.' },
    { num: '03', title: 'Market Size & Addressable Demand', desc: 'Bottom-up TAM, SAM, and SOM calculation specifically tailored to Indian and regional market dynamics.' },
    { num: '04', title: 'Traction & Cohort Telemetry', desc: 'Active users, cohort retention (Day 1, 7, 30), GMV, or verified willingness-to-pay deposits from early adopters.' },
    { num: '05', title: 'Unit Economics & Margins', desc: 'Defensible Customer Acquisition Cost (CAC), Lifetime Value (LTV), Payback Period, and Gross Margins.' },
    { num: '06', title: 'Distribution & GTM Engine', desc: 'How you acquire customers predictably without burning endless capital on generic ad campaigns.' },
    { num: '07', title: 'Defensibility & Moats', desc: 'Network effects, proprietary data assets, regulatory licenses, or high switching barriers against incumbents.' },
    { num: '08', title: 'Technology & Architecture', desc: 'Scalability of codebase, cloud infrastructure costs, API reliability, and complete IP ownership.' },
    { num: '09', title: 'Founding Team & Unfair Insight', desc: 'Why this specific team has the domain authority, engineering capability, and resilience to execute.' },
    { num: '10', title: '3-Year Financial Model', desc: 'Scenario modeling under base, conservative, and aggressive growth, detailing monthly cash burn and hiring plan.' },
    { num: '11', title: 'The Capital Ask & Deployment', desc: 'Exact round size, target milestone runway (18–24 months), and allocation between engineering and distribution.' },
    { num: '12', title: 'Milestone Roadmap', desc: 'What key commercial achievements will unlock the subsequent Series A or profitable sustainability.' }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#060913] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-3">
            Investor Readiness · Capital Advisory
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Build a business investors can understand.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Institutional angels and seed funds review hundreds of startup summaries weekly. We help you eliminate structural vulnerabilities, articulate undeniable unit economics, and prepare a professional data room.
          </p>
        </div>

        {/* Candid Anti-Hype Guarantee */}
        <div className="p-6 rounded-xl bg-[#080d1f] border border-white/[0.08] mb-16 space-y-2">
          <strong className="text-white block text-sm">Our Transparent Position on Fundraising:</strong>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            STARTMET is an execution and advisory partner. We do not promise guaranteed funding, nor do we blast indiscriminate cold pitch emails to generic investor lists. We believe true investor interest is earned by building a solid product with verifiable traction, defensible margins, and clean legal corporate governance.
          </p>
        </div>

        {/* 4 Pillars of Investor Readiness */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="p-6 sm:p-8 rounded-xl bg-[#090e21] border border-white/[0.08] space-y-3">
            <div className="text-xs font-mono text-[#00DF59] font-bold">
              01 · GOVERNANCE
            </div>
            <h2 className="font-display font-bold text-xl text-white">
              Cap Table &amp; Corporate Health
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Auditing shareholder agreements, founder vesting schedules, MCA filings, and IP assignment deeds to ensure zero deal-killing flags during legal due diligence.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-xl bg-[#090e21] border border-white/[0.08] space-y-3">
            <div className="text-xs font-mono text-[#00DF59] font-bold">
              02 · ECONOMICS
            </div>
            <h2 className="font-display font-bold text-xl text-white">
              Unit Economics &amp; Margin Rigor
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Replacing vanity metrics (downloads, impressions) with concrete unit economics: true CAC, customer payback period, net revenue retention, and gross margins.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-xl bg-[#090e21] border border-white/[0.08] space-y-3">
            <div className="text-xs font-mono text-[#00DF59] font-bold">
              03 · NARRATIVE
            </div>
            <h2 className="font-display font-bold text-xl text-white">
              10-Slide Institutional Pitch Deck
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Crafting an executive narrative structured around the 10 core questions institutional investors evaluate, backed by demonstrable product workflows.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-xl bg-[#090e21] border border-white/[0.08] space-y-3">
            <div className="text-xs font-mono text-[#00DF59] font-bold">
              04 · DATA ROOM
            </div>
            <h2 className="font-display font-bold text-xl text-white">
              Diligence Data Room Architecture
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Structuring a secure virtual data room with complete documentation: incorporation certificates, GST/PAN filings, customer contracts, and audited models.
            </p>
          </div>
        </div>

        {/* 12-Slide Pitch Deck Framework */}
        <div className="border border-white/[0.08] bg-[#090e21] rounded-xl p-6 sm:p-10 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] mb-8 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-1">
                Pitch Architecture
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                The Institutional 12-Slide Framework
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Slide {activeSlideTab + 1} of 12
            </span>
          </div>

          {/* Slide selector pills -> clean segmented list */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 mb-8">
            {pitchDeckSlides.map((slide, idx) => (
              <button
                key={slide.num}
                onClick={() => setActiveSlideTab(idx)}
                className={`py-2 px-3 text-left rounded-lg text-xs font-mono transition-colors ${
                  activeSlideTab === idx
                    ? 'bg-[#121c3d] text-white font-bold border border-[#00DF59]/40'
                    : 'text-slate-400 hover:text-white bg-[#060913] border border-white/[0.06]'
                }`}
              >
                <span className="text-[#00DF59] mr-1.5">{slide.num}</span>
                <span className="truncate">{slide.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Slide Details */}
          <div className="p-6 rounded-lg bg-[#060913] border border-white/[0.06] space-y-2">
            <div className="text-xs font-mono text-[#00DF59]">
              SLIDE {pitchDeckSlides[activeSlideTab].num}
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              {pitchDeckSlides[activeSlideTab].title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {pitchDeckSlides[activeSlideTab].desc}
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-10 rounded-xl bg-[#090e21] border border-white/[0.1] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-2xl text-white mb-2">
              Ready to audit your pitch readiness?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              Connect with our venture team for a structured evaluation of your startup metrics and deck narrative.
            </p>
          </div>

          <button
            onClick={onOpenIntake}
            className="px-6 py-3.5 bg-[#00DF59] text-[#060913] font-bold text-sm rounded-lg hover:bg-[#12e867] transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>Request Pitch Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
