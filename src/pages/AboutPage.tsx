import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, ShieldCheck, Code2, Scale, Compass } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenIntake: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenIntake }) => {
  return (
    <div className="pt-32 pb-24 bg-[#060913] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-3">
            About STARTMET · Venture Studio
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            We exist to help founders turn ideas into real businesses.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            STARTMET was founded on a simple observation: ambitious founders in India are forced to navigate fragmented ecosystems. They spend half their mental energy managing disconnected vendors instead of talking to customers.
          </p>
        </div>

        {/* The Brand Core: IDEA | DEVELOPMENT | LAUNCH */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          
          <div className="border border-white/[0.08] bg-[#090e21] rounded-xl p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-[#00DF59] mb-4">
                PILLAR 01
              </div>
              <h2 className="font-display font-bold text-2xl text-white mb-2">
                IDEA
              </h2>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                Hypothesis · Customer Discovery
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every venture begins with an observation. We help founders deconstruct that observation, interview target users, test willingness to pay, and eliminate vanity assumptions before code is written.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] text-xs text-slate-400">
              Outcome: Validated problem thesis & prioritized MVP scope.
            </div>
          </div>

          <div className="border border-white/[0.08] bg-[#090e21] rounded-xl p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-purple-400 mb-4">
                PILLAR 02
              </div>
              <h2 className="font-display font-bold text-2xl text-white mb-2">
                DEVELOPMENT
              </h2>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                Software · Corporate Formation
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Development at STARTMET is both technical and corporate. While our engineering team crafts production-grade applications with clean databases, our legal team incorporates the Pvt Ltd entity and files trademarks.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] text-xs text-slate-400">
              Outcome: Live functional software with clean MCA legal standing.
            </div>
          </div>

          <div className="border border-white/[0.08] bg-[#090e21] rounded-xl p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-[#00DF59] mb-4">
                PILLAR 03
              </div>
              <h2 className="font-display font-bold text-2xl text-white mb-2">
                LAUNCH
              </h2>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                Distribution · Diligence Readiness
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Launching is acquiring initial cohorts, testing customer onboarding, analyzing retention telemetry, and preparing the startup's data room for serious angel and seed diligence.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] text-xs text-slate-400">
              Outcome: Active user cohorts, verified unit metrics & investor deck.
            </div>
          </div>

        </div>

        {/* Operating Principles */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-2">
              Ethos &amp; Standards
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white">
              How we hold ourselves accountable to founders.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#080d1f] border border-white/[0.08] space-y-3">
              <h3 className="font-display font-bold text-lg text-white">
                Engineering Craft Over Disposable MVPs
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We write maintainable, tested TypeScript, deploy scalable PostgreSQL databases, integrate secure authentication, and hand over 100% of the repository to the founder.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#080d1f] border border-white/[0.08] space-y-3">
              <h3 className="font-display font-bold text-lg text-white">
                Founder Cap Table Protection
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Unlike incubators that demand 10% equity for basic desk space, STARTMET operates on transparent milestone fees. You retain your equity for the investors who write real checks.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#080d1f] border border-white/[0.08] space-y-3">
              <h3 className="font-display font-bold text-lg text-white">
                Grounded in Indian Market Realities
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Building in India requires understanding UPI payments, WhatsApp communication channels, GST invoicing, MCA compliance, and pricing sensitivity across Tier 1, 2, and 3 cities.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#080d1f] border border-white/[0.08] space-y-3">
              <h3 className="font-display font-bold text-lg text-white">
                Radical Candor in Advisory
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                If an idea has structural unit economics flaws, we tell you before you spend your savings. Saving a founder 12 months of dead-end execution is just as valuable as building an MVP.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="p-8 sm:p-10 rounded-xl bg-[#090e21] border border-white/[0.1] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Ready to build something real?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Schedule an exploratory review of your startup concept with our engineering and strategy partners.
            </p>
          </div>

          <button
            onClick={onOpenIntake}
            className="px-6 py-3.5 bg-[#00DF59] text-[#060913] font-bold text-sm rounded-lg hover:bg-[#12e867] transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
