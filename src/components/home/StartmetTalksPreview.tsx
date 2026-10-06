import React from 'react';
import { TALKS_EPISODES } from '../../data/startmetData';
import { PageRoute, TalkEpisode } from '../../types';
import { ArrowUpRight, ArrowRight, Play } from 'lucide-react';

interface StartmetTalksPreviewProps {
  onNavigate: (route: PageRoute) => void;
  onSelectEpisode?: (episode: TalkEpisode) => void;
}

export const StartmetTalksPreview: React.FC<StartmetTalksPreviewProps> = ({ onNavigate, onSelectEpisode }) => {
  const featured = TALKS_EPISODES[0];
  const recentEpisodes = TALKS_EPISODES.slice(1, 4);

  return (
    <section className="py-20 lg:py-28 border-b border-white/[0.08] bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08] mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-2">
              Founder Media &amp; Field Notes
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              STARTMET Talks.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-slate-400 max-w-sm hidden sm:block">
              Unfiltered conversations on early-stage building, painful pivots, and real unit economics across the Indian ecosystem.
            </p>
            <button
              onClick={() => onNavigate('/talks')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-[#00DF59] transition-colors whitespace-nowrap"
            >
              <span>View all episodes</span>
              <ArrowUpRight className="w-4 h-4 text-[#00DF59]" />
            </button>
          </div>
        </div>

        {/* Magazine Editorial Split (Lead Feature + Recent Briefs) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Featured Episode (Span 7) */}
          <div 
            onClick={() => {
              onSelectEpisode?.(featured);
              onNavigate('/talks');
            }}
            className="lg:col-span-7 group cursor-pointer border border-white/[0.1] bg-[#090e21] rounded-xl p-7 sm:p-9 hover:border-white/[0.25] transition-all"
          >
            {/* Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
              <span className="text-[#00DF59] font-bold">Featured Dialogue</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{featured.duration}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{featured.topicCategory}</span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#00DF59] transition-colors leading-snug mb-4">
              "{featured.title}"
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {featured.summary}
            </p>

            {/* Guest Info (Quiet text) */}
            <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white">
                  Speaker Profile
                </div>
                <div className="text-xs text-slate-400">
                  {featured.speakerRole}
                </div>
              </div>

              <div className="w-10 h-10 rounded-full bg-white/[0.06] group-hover:bg-[#00DF59] group-hover:text-[#060913] text-white flex items-center justify-center transition-colors">
                <Play className="w-4 h-4 ml-0.5 fill-current" />
              </div>
            </div>
          </div>

          {/* Recent Dialogues List (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 pb-3 border-b border-white/[0.08]">
              Recent Conversations
            </div>

            <div className="divide-y divide-white/[0.08]">
              {recentEpisodes.map((ep) => (
                <div
                  key={ep.id}
                  onClick={() => {
                    onSelectEpisode?.(ep);
                    onNavigate('/talks');
                  }}
                  className="py-5 first:pt-0 last:pb-0 group cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1.5">
                    <span>{ep.number}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-[#00DF59]">{ep.topicCategory}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{ep.duration}</span>
                  </div>

                  <h4 className="font-display font-bold text-base text-white group-hover:text-[#00DF59] transition-colors leading-snug">
                    {ep.title}
                  </h4>

                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {ep.summary}
                  </p>

                  <div className="mt-2 text-xs text-slate-300 font-medium">
                    {ep.speakerRole}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.08]">
              <button
                onClick={() => onNavigate('/talks')}
                className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Browse the full archive of conversations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
