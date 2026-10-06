import React from 'react';
import { PageRoute } from '../../types';
import { ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface FundingSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenIntake: () => void;
}

export const FundingSection: React.FC<FundingSectionProps> = ({ onNavigate, onOpenIntake }) => {
  return (
    <section className="py-20 lg:py-28 border-b border-white/[0.08] bg-[#070b18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authoritative Stance (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59]">
              Capital &amp; Diligence Advisory
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Build a business investors can understand.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Institutional investors don't fund pitch decks; they back founders who have engineered undeniable problem-solution fit, disciplined unit economics, and clean legal foundations.
            </p>

            {/* Frank Anti-Hype Guarantee */}
            <div className="p-5 rounded-lg bg-[#0b122c] border border-white/[0.08] text-xs text-slate-300 space-y-1.5">
              <strong className="text-white block text-sm">Our Transparent Position on Fundraising:</strong>
              <p className="leading-relaxed">
                We do not promise guaranteed capital or blast cold spam emails to investor databases. We remove the structural red flags, amateur cap table errors, and narrative flaws that cause 90% of early-stage pitches to fail.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="explore-funding-cta"
                onClick={() => onNavigate('/funding')}
                className="px-6 py-3.5 bg-[#00DF59] text-[#060913] font-bold text-xs sm:text-sm rounded-lg hover:bg-[#12e867] transition-colors inline-flex items-center gap-2"
              >
                <span>Explore Investor Readiness</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenIntake}
                className="px-5 py-3.5 border border-white/[0.12] text-slate-200 hover:text-white rounded-lg font-medium text-xs sm:text-sm transition-colors"
              >
                Audit Pitch Readiness
              </button>
            </div>
          </div>

          {/* Right Column: Institutional Diligence Blueprint (Span 6) */}
          <div className="lg:col-span-6 border border-white/[0.1] bg-[#090e21] rounded-xl p-6 sm:p-8">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 pb-3 border-b border-white/[0.08] mb-6 flex items-center justify-between">
              <span>Standard Due Diligence Data Room</span>
              <span className="text-[#00DF59]">Audit Checklist</span>
            </div>

            <div className="space-y-5">
              <div className="space-y-1.5">
                <div className="text-xs font-mono text-[#00DF59] font-bold">
                  01. CORPORATE &amp; LEGAL GOVERNANCE
                </div>
                <div className="text-sm text-white font-medium">
                  MCA Certificate of Incorporation, Cap Table &amp; 4-Year Vesting
                </div>
                <p className="text-xs text-slate-400">
                  Clean shareholding ledger, IP assignment agreements, and DPIIT recognition.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                <div className="text-xs font-mono text-[#00DF59] font-bold">
                  02. TECHNICAL ARCHITECTURE &amp; IP
                </div>
                <div className="text-sm text-white font-medium">
                  Independent Git Repositories, System Schema &amp; Infrastructure
                </div>
                <p className="text-xs text-slate-400">
                  Zero proprietary agency locks. Founder owns 100% of codebase and cloud root keys.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                <div className="text-xs font-mono text-[#00DF59] font-bold">
                  03. TRACTION TELEMETRY &amp; UNIT ECONOMICS
                </div>
                <div className="text-sm text-white font-medium">
                  Cohort Retention, CAC/LTV &amp; Verified Customer Deposits
                </div>
                <p className="text-xs text-slate-400">
                  Measurable user engagement data and defensible gross margins.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                <div className="text-xs font-mono text-[#00DF59] font-bold">
                  04. 10-SLIDE INSTITUTIONAL PITCH DECK
                </div>
                <div className="text-sm text-white font-medium">
                  Executive Narrative &amp; 3-Year Capital Allocation Roadmap
                </div>
                <p className="text-xs text-slate-400">
                  Target milestone runway (18–24 months) and disciplined hiring plan.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <span>Prepared for angel syndicates &amp; seed VCs</span>
              <span className="font-mono text-white">Institutional Grade</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
