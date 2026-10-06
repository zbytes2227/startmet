import React, { useState } from 'react';
import { ArrowRight, Check, Code2, Scale, Compass, TrendingUp } from 'lucide-react';
import { PageRoute } from '../../types';

interface WhatStartmetDoesProps {
  onNavigate: (route: PageRoute) => void;
  onOpenIntake: () => void;
}

export const WhatStartmetDoes: React.FC<WhatStartmetDoesProps> = ({ onNavigate, onOpenIntake }) => {
  const [activeTab, setActiveTab] = useState<'eng' | 'legal' | 'brand' | 'capital'>('eng');

  const capabilities = {
    eng: {
      id: '01',
      title: 'Full-Stack Product & Software Engineering',
      tagline: 'Production-grade software, not throwaway prototypes.',
      desc: 'We design and engineer resilient web and mobile applications with scalable database architectures, type-safe APIs, and automated cloud deployments. When the sprint is complete, 100% of the repository, credentials, and intellectual property are handed over to the founder.',
      deliverables: [
        'Web and mobile applications built with React, Next.js, React Native, and Node.js',
        'Relational PostgreSQL / SQL databases with indexed schemas and migrations',
        'Secure authentication, session management, and payment integrations (Razorpay / Stripe)',
        'CI/CD deployment pipelines on AWS / GCP with zero vendor lock-in'
      ],
      insight: 'Full IP & Code Handover. You own every line of code from day one.'
    },
    legal: {
      id: '02',
      title: 'Company Formation & Regulatory Compliance',
      tagline: 'Clean corporate standing from day one.',
      desc: 'Too many promising startups fail investor due diligence because of sloppy incorporation, missing founder vesting agreements, or unregistered trademarks. We manage end-to-end legal registration under Indian corporate law (MCA) and secure Startup India recognitions.',
      deliverables: [
        'Private Limited Company (Pvt Ltd) or LLP incorporation via MCA SPICe+',
        'PAN, TAN, GST, and professional tax statutory registrations',
        'Startup India DPIIT recognition (unlocking tax exemptions and tender eligibility)',
        'Founder agreements with 4-year vesting schedules and IP assignment deeds',
        'Trademark filing and brand class protection'
      ],
      insight: 'Institutional Diligence Ready. No cap table disputes or hidden liabilities.'
    },
    brand: {
      id: '03',
      title: 'Brand Creation & Go-To-Market Launch',
      tagline: 'Positioning that earns instant customer conviction.',
      desc: 'A great product without clear positioning struggles to acquire users. We craft your visual identity system, product messaging hierarchy, and high-converting launch website to turn early visitors into active, paying customers.',
      deliverables: [
        'Comprehensive visual identity: logo system, typography, color tokens, and asset library',
        'Core brand narrative, customer value proposition, and messaging guidelines',
        'Fast, accessible, search-optimized marketing website built for conversion',
        'Onboarding workflow design and user activation funnel optimization'
      ],
      insight: 'High-Conversion Architecture. Designed to turn early visits into cohort retention.'
    },
    capital: {
      id: '04',
      title: 'Diligence Data Room & Investor Readiness',
      tagline: 'Present defensible metrics, not empty pitch hype.',
      desc: 'We do not sell guaranteed investment or spam angel networks. Instead, we prepare founders for real institutional diligence with audited financial models, defensible unit economics, and clean data rooms that answer tough investor questions.',
      deliverables: [
        '10-slide institutional pitch deck focusing on unit economics and customer retention',
        '3-year financial model with conservative, base, and aggressive growth scenarios',
        'Diligence data room structure: corporate filings, contracts, and IP documentation',
        'Targeted investor thesis mapping for angel syndicates and early-stage seed funds'
      ],
      insight: 'Uncompromising Rigor. Built around verified unit economics, not vanity metrics.'
    }
  };

  const current = capabilities[activeTab];

  return (
    <section id="what-startmet-does" className="py-20 lg:py-28 border-b border-white/[0.08] bg-[#070b18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: Authoritative Editorial */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-3">
            Core Studio Capabilities
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            The four disciplines every startup needs to succeed.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Rather than coordinating five separate freelancers and agencies who blame each other when systems fail, founders work with STARTMET as a unified co-builder.
          </p>
        </div>

        {/* Segmented Discipline Switcher (Editorial Tab Navigation) */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] mb-12">
          {[
            { key: 'eng', num: '01', title: 'Engineering & Code' },
            { key: 'legal', num: '02', title: 'Company Formation' },
            { key: 'brand', num: '03', title: 'Brand & Launch' },
            { key: 'capital', num: '04', title: 'Investor Diligence' }
          ].map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`py-5 px-6 text-left transition-colors relative focus:outline-none ${
                  isActive
                    ? 'bg-[#0e1633] text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                <div className={`text-xs font-mono font-bold mb-1 ${isActive ? 'text-[#00DF59]' : 'text-slate-500'}`}>
                  {tab.num}
                </div>
                <div className="font-display font-bold text-sm sm:text-base">
                  {tab.title}
                </div>
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#00DF59]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Editorial Deep Dive (Split Layout: Prose + Deliverable Matrix) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Thesis & Description (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00DF59]">
              <span>CAPABILITY {current.id}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">{current.tagline}</span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              {current.title}
            </h3>

            <p className="text-base text-slate-300 leading-relaxed">
              {current.desc}
            </p>

            <div className="p-4 rounded-lg bg-[#0b122c] border border-white/[0.08] text-xs text-slate-300 flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#00DF59] mt-1.5 shrink-0" />
              <div>
                <strong className="text-white block mb-0.5">Founding Principle:</strong>
                {current.insight}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenIntake}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#00DF59] text-[#060913] font-bold text-xs sm:text-sm rounded-lg hover:bg-[#12e867] transition-colors"
              >
                <span>Engage for this Discipline</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/services')}
                className="text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                View all 11 services &rarr;
              </button>
            </div>
          </div>

          {/* Right Column: Concrete Deliverables Checklist (Span 6) */}
          <div className="lg:col-span-6 border border-white/[0.08] bg-[#090e21] rounded-xl p-6 sm:p-8">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 pb-3 border-b border-white/[0.08] mb-5 flex items-center justify-between">
              <span>Verified Studio Deliverables</span>
              <span className="text-[#00DF59]">Standard Spec</span>
            </div>

            <div className="space-y-4">
              {current.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded border border-[#00DF59]/30 bg-[#00DF59]/10 text-[#00DF59] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <span>Backed by dedicated studio partners</span>
              <span className="font-mono text-white">Full IP Transfer</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
