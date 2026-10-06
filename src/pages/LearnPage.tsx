import React, { useState } from 'react';
import { RESOURCE_GUIDES } from '../data/startmetData';
import { PageRoute, ResourceGuide } from '../types';
import { Download } from 'lucide-react';

interface LearnPageProps {
  onNavigate: (route: PageRoute) => void;
  selectedResource?: ResourceGuide | null;
  onOpenIntake: () => void;
}

export const LearnPage: React.FC<LearnPageProps> = ({ onNavigate, selectedResource: initialResource, onOpenIntake }) => {
  const [activeGuide, setActiveGuide] = useState<ResourceGuide>(initialResource || RESOURCE_GUIDES[0]);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Founder Milestone Checklist
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    'c1': true,
    'c2': true,
    'c3': false,
    'c4': false,
    'c5': false,
    'c6': false,
    'c7': false,
    'c8': false,
  });

  const auditCriteria = [
    { id: 'c1', label: 'Conducted at least 20 customer interviews without pitching the solution prematurely.' },
    { id: 'c2', label: 'Defined a single core loop metric that validates customer willingness to use/pay.' },
    { id: 'c3', label: 'Scoped MVP features down to essential value delivery (shippable in under 60 days).' },
    { id: 'c4', label: 'Incorporated Private Limited entity on MCA with registered MoA/AoA.' },
    { id: 'c5', label: 'Executed formal Founder Vesting Agreement with reverse-vesting schedule.' },
    { id: 'c6', label: 'Obtained DPIIT Startup India recognition for tax & patent eligibility.' },
    { id: 'c7', label: 'Acquired first 50 active users with measurable day-14 retention telemetry.' },
    { id: 'c8', label: 'Built 3-year dynamic financial model with defensible gross margins and payback period.' }
  ];

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDownload = (guide: ResourceGuide) => {
    setDownloadSuccess(guide.downloadName || 'startmet-guide.pdf');
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <div className="pt-32 pb-24 bg-[#060913] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-3">
            Founder Field Manuals · Frameworks
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Pragmatic resources for the 0-to-1 journey.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Zero-fluff frameworks, legal checklists, and MVP scoping templates battle-tested across Indian startup corporate and product launches.
          </p>
        </div>

        {/* Featured Guide Deep Dive */}
        <div className="rounded-xl bg-[#090e21] border border-white/[0.1] p-6 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-[#00DF59] font-bold">Featured Guide</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>{activeGuide.category}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>{activeGuide.readTime}</span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white leading-tight">
                {activeGuide.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeGuide.description}
              </p>

              {/* Core Syllabus / Sections */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#00DF59] mb-3">
                  Guide Sections &amp; Checkpoints:
                </div>
                <div className="space-y-2">
                  {activeGuide.keyTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <span className="text-[#00DF59] font-mono font-bold text-xs">0{idx + 1}.</span>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Download & File Info (Span 4) */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-6 lg:pt-0 lg:pl-8 space-y-5">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Document Package
                </div>
                <div className="text-base font-bold text-white">
                  {activeGuide.downloadName || 'Field Guide PDF'}
                </div>
                <div className="text-xs text-slate-400">
                  Includes templates, worksheets &amp; legal clauses
                </div>
              </div>

              <button
                onClick={() => handleDownload(activeGuide)}
                className="w-full py-3 bg-[#00DF59] text-[#060913] font-bold text-xs rounded-lg hover:bg-[#12e867] transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Framework</span>
              </button>

              {downloadSuccess && (
                <div className="p-3 rounded-lg bg-[#00DF59]/10 border border-[#00DF59]/30 text-xs text-[#00DF59]">
                  ✓ Download ready: {downloadSuccess}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Guides Directory */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 pb-3 border-b border-white/[0.08] mb-8">
            Complete Framework Library
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCE_GUIDES.map((guide) => {
              const isSelected = activeGuide.id === guide.id;
              return (
                <div
                  key={guide.id}
                  onClick={() => {
                    setActiveGuide(guide);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className={`p-6 rounded-xl border cursor-pointer transition-colors flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0f1636] border-[#00DF59]/50'
                      : 'bg-[#090e21] border-white/[0.08] hover:border-white/[0.2]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3 pb-2 border-b border-white/[0.06]">
                      <span className="text-[#00DF59] font-bold">{guide.category}</span>
                      <span>{guide.readTime}</span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug">
                      {guide.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                      {guide.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-slate-400">{guide.keyTopics.length} Checkpoints</span>
                    <span className="text-[#00DF59] font-medium">Inspect &rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Founder Milestone Self-Audit Matrix */}
        <div className="border border-white/[0.08] bg-[#090e21] rounded-xl p-6 sm:p-10 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] mb-8 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-1">
                Milestone Verification
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                Early-Stage Founder Milestone Check
              </h2>
            </div>
            <div className="text-xs font-mono text-slate-400">
              <span className="text-white font-bold">{completedCount}</span> of {auditCriteria.length} Milestones Verified
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {auditCriteria.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-4 rounded-lg border cursor-pointer transition-colors flex items-start gap-3 ${
                  checkedItems[item.id]
                    ? 'bg-[#060913] border-[#00DF59]/40 text-white'
                    : 'bg-[#060913] border-white/[0.06] text-slate-400 hover:border-white/[0.2]'
                }`}
              >
                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                  checkedItems[item.id]
                    ? 'bg-[#00DF59] border-[#00DF59] text-[#060913]'
                    : 'border-slate-600'
                }`}>
                  {checkedItems[item.id] && '✓'}
                </div>
                <span className="text-xs sm:text-sm leading-relaxed">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Need assistance completing these milestones?
            </span>
            <button
              onClick={onOpenIntake}
              className="px-5 py-2.5 bg-[#00DF59] text-[#060913] font-bold text-xs rounded-lg hover:bg-[#12e867] transition-colors"
            >
              Discuss Milestone Support
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
