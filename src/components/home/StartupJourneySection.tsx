import React, { useState } from 'react';
import { JOURNEY_STAGES } from '../../data/startmetData';
import { JourneyStage } from '../../types';
import { ArrowRight, CheckCircle2, Flag, Compass } from 'lucide-react';

interface StartupJourneySectionProps {
  onOpenIntake: () => void;
}

export const StartupJourneySection: React.FC<StartupJourneySectionProps> = ({ onOpenIntake }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const currentStage: JourneyStage = JOURNEY_STAGES[activeStep];

  return (
    <section id="journey-section" className="py-24 bg-[#050819] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#00DF59] uppercase mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>THE 7-STAGE VENTURE PATHWAY</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            How we take an idea from hypothesis to real business.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A structured, de-risked methodology designed to prevent the common execution pitfalls that sink early-stage founders.
          </p>
        </div>

        {/* Milestone Indicator Bar */}
        <div className="overflow-x-auto pb-4 mb-8">
          <div className="flex items-center gap-2 min-w-[720px] p-2 rounded-2xl bg-[#080d28] border border-[#1a2456]">
            {JOURNEY_STAGES.map((stage, idx) => {
              const isSelected = activeStep === idx;
              const isPast = activeStep > idx;
              return (
                <button
                  key={stage.step}
                  id={`journey-step-${stage.step}`}
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 py-3 px-3 rounded-xl text-left transition-all duration-200 relative ${
                    isSelected
                      ? 'bg-[#101948] text-white border border-[#00DF59]/40 shadow-[0_0_15px_rgba(0,223,89,0.15)]'
                      : isPast
                        ? 'text-slate-300 hover:bg-[#0c1236]'
                        : 'text-slate-500 hover:text-slate-300 hover:bg-[#0c1236]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-mono font-bold ${
                      isSelected ? 'text-[#00DF59]' : isPast ? 'text-purple-400' : 'text-slate-600'
                    }`}>
                      {stage.step}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00DF59]" />
                    )}
                  </div>
                  <div className="font-display font-bold text-xs sm:text-sm tracking-wider">
                    {stage.title}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate mt-0.5">
                    {stage.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Editorial Deep-Dive */}
        <div className="rounded-2xl bg-[#080e2d] border border-[#1c285e] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Stage Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#141e4a] gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#050819] border border-[#00DF59]/50 flex items-center justify-center font-display font-black text-2xl text-[#00DF59] shrink-0">
                {currentStage.step}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  STAGE {currentStage.step} &bull; {currentStage.typicalDuration}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  {currentStage.title}: {currentStage.label}
                </h3>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-mono bg-[#050819] px-4 py-2 rounded-lg border border-[#172152] w-fit">
              Tagline: <span className="text-slate-200">{currentStage.tagline}</span>
            </div>
          </div>

          {/* Three Key Pillars: What happens / What STARTMET helps with / What founder gets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Column 1: What Happens */}
            <div className="p-5 rounded-xl bg-[#0b1236] border border-[#182352]">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                01 &bull; The Context
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                What happens at this stage:
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentStage.whatHappens}
              </p>
            </div>

            {/* Column 2: What STARTMET helps with */}
            <div className="p-5 rounded-xl bg-[#0b1236] border border-[#182352]">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00DF59] mb-2">
                02 &bull; Execution
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                What STARTMET helps with:
              </h4>
              <ul className="space-y-2.5">
                {currentStage.whatStartmetHelpsWith.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00DF59] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: What Founder Gets */}
            <div className="p-5 rounded-xl bg-gradient-to-b from-[#0f1847] to-[#0a1033] border border-[#212d6a] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-2 flex items-center gap-1.5">
                  <Flag className="w-3.5 h-3.5" />
                  <span>03 &bull; Deliverable</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  What the founder gets:
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {currentStage.founderOutcome}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1a2559]">
                <button
                  onClick={onOpenIntake}
                  className="w-full py-2.5 px-4 bg-[#00DF59] text-[#050819] font-bold text-xs sm:text-sm rounded-lg hover:bg-[#10e665] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Discuss Stage {currentStage.step} with Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Navigation between steps */}
          <div className="mt-8 pt-6 border-t border-[#141e4a] flex items-center justify-between text-xs">
            <button
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="px-3.5 py-2 rounded-lg bg-[#0b1236] border border-[#182352] text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:text-white"
            >
              &larr; Previous Stage
            </button>

            <span className="text-slate-400 font-mono">
              Stage {activeStep + 1} of {JOURNEY_STAGES.length}
            </span>

            <button
              onClick={() => setActiveStep(prev => Math.min(JOURNEY_STAGES.length - 1, prev + 1))}
              disabled={activeStep === JOURNEY_STAGES.length - 1}
              className="px-3.5 py-2 rounded-lg bg-[#0b1236] border border-[#182352] text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:text-white"
            >
              Next Stage &rarr;
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
