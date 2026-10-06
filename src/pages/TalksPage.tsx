import React, { useState } from 'react';
import { TALKS_EPISODES } from '../data/startmetData';
import { PageRoute, TalkEpisode } from '../types';
import { Play, Pause } from 'lucide-react';

interface TalksPageProps {
  onNavigate: (route: PageRoute) => void;
  selectedEpisode?: TalkEpisode | null;
}

export const TalksPage: React.FC<TalksPageProps> = ({ onNavigate, selectedEpisode: initialEpisode }) => {
  const [activeEpisode, setActiveEpisode] = useState<TalkEpisode>(initialEpisode || TALKS_EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Founder Failures', 'Product & MVP', 'India Market GTM', 'Fundraising Realities'];

  const filteredEpisodes = selectedFilter === 'All'
    ? TALKS_EPISODES
    : TALKS_EPISODES.filter(ep => ep.topicCategory === selectedFilter);

  return (
    <div className="pt-32 pb-24 bg-[#060913] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-3">
            STARTMET Talks · Founder Media
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Raw conversations from the startup trenches.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Deconstructing painful failures, early distribution breakthroughs, compliance mistakes, and institutional fundraising realities across India’s venture landscape.
          </p>
        </div>

        {/* Category Filters (Segmented) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/[0.08]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedFilter === cat
                  ? 'bg-[#101736] text-white border border-white/[0.1]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Episode Player Stage */}
        <div className="rounded-xl bg-[#090e21] border border-white/[0.1] p-6 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-[#00DF59] font-bold">{activeEpisode.number}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>{activeEpisode.topicCategory}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>{activeEpisode.duration}</span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white leading-tight">
                "{activeEpisode.title}"
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeEpisode.summary}
              </p>

              {/* Founder quote */}
              {activeEpisode.featuredQuote && (
                <div className="p-4 rounded-lg bg-[#060913] border-l-2 border-[#00DF59] text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{activeEpisode.featuredQuote}"
                </div>
              )}

              {/* Takeaways */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Key Strategic Lessons:
                </div>
                <div className="space-y-1.5">
                  {activeEpisode.keyTakeaways.map((lesson, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-[#00DF59]">·</span>
                      <span>{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Guest & Player Box (Span 4) */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-6 lg:pt-0 lg:pl-8 space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Speaker Profile
                </div>
                <div className="text-lg font-bold text-white">
                  {activeEpisode.speakerRole}
                </div>
                <div className="text-xs text-[#00DF59] font-mono mt-0.5">
                  Recorded: {activeEpisode.date}
                </div>
              </div>

              {/* Audio Controls */}
              <div className="p-4 rounded-lg bg-[#060913] border border-white/[0.06] space-y-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-full py-3 bg-[#00DF59] text-[#060913] font-bold text-xs rounded-lg hover:bg-[#12e867] transition-colors flex items-center justify-center gap-2"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isPlaying ? 'Pause Episode' : 'Listen to Full Dialogue'}</span>
                </button>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Audio format</span>
                  <span>{activeEpisode.duration} stream</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Episode Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredEpisodes.map((ep) => {
            const isSelected = activeEpisode.id === ep.id;
            return (
              <div
                key={ep.id}
                onClick={() => {
                  setActiveEpisode(ep);
                  setIsPlaying(false);
                  window.scrollTo({ top: 320, behavior: 'smooth' });
                }}
                className={`p-6 rounded-xl border cursor-pointer transition-colors flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0f1636] border-[#00DF59]/50'
                    : 'bg-[#090e21] border-white/[0.08] hover:border-white/[0.2]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3 pb-2 border-b border-white/[0.06]">
                    <span className="text-[#00DF59] font-bold">{ep.number}</span>
                    <span>{ep.duration}</span>
                  </div>

                  <h3 className="font-display font-bold text-base text-white mb-2 leading-snug">
                    {ep.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {ep.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-white font-medium">{ep.speakerRole}</span>
                  <span className="text-[#00DF59] font-medium">Select &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
