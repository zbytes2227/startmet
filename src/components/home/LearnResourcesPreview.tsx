import React from 'react';
import { RESOURCE_GUIDES } from '../../data/startmetData';
import { PageRoute, ResourceGuide } from '../../types';
import { BookOpen, FileText, ArrowUpRight, ArrowRight, Download } from 'lucide-react';

interface LearnResourcesPreviewProps {
  onNavigate: (route: PageRoute) => void;
  onSelectResource?: (resource: ResourceGuide) => void;
}

export const LearnResourcesPreview: React.FC<LearnResourcesPreviewProps> = ({ onNavigate, onSelectResource }) => {
  return (
    <section className="py-24 bg-[#070b24] border-t border-[#16204c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#00DF59] uppercase mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>FOUNDER INTELLIGENCE ARCHIVE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Learn &amp; Grow.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
              Practical checklists, Indian statutory compliance templates, and engineering matrices created for founders navigating real operations.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/learn')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0b1236] border border-[#1b2554] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm hover:border-[#00DF59]/50 transition-all w-fit"
          >
            <span>View All Founder Guides</span>
            <ArrowUpRight className="w-4 h-4 text-[#00DF59]" />
          </button>
        </div>

        {/* Real Content Architecture: 4 Detailed Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESOURCE_GUIDES.map((resource) => (
            <div
              key={resource.id}
              onClick={() => {
                onSelectResource?.(resource);
                onNavigate('/learn');
              }}
              className="group cursor-pointer p-6 sm:p-7 rounded-2xl bg-[#090f30] border border-[#192459] hover:border-[#00DF59]/50 hover:bg-[#0c143e] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#00DF59]/10 text-[#00DF59] border border-[#00DF59]/20 font-bold uppercase">
                    {resource.category}
                  </span>
                  <span>{resource.readTime}</span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#00DF59] transition-colors mb-3 leading-snug">
                  {resource.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {resource.description}
                </p>

                {/* Key Subtopics */}
                <div className="space-y-1.5 pt-3 border-t border-[#141d47] mb-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-bold">Includes:</span>
                  {resource.keyTopics.slice(0, 3).map((topic, i) => (
                    <div key={i} className="text-xs text-slate-300 flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span className="truncate">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#141d47] flex items-center justify-between text-xs">
                <span className="font-mono text-slate-400">Updated {resource.updatedAt}</span>
                <span className="font-bold text-[#00DF59] inline-flex items-center gap-1 group-hover:underline">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
