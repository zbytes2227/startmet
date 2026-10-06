import React from 'react';
import { Phone, ArrowUpRight, MessageSquare, Clock } from 'lucide-react';
import { STARTMET_PHONE, STARTMET_PHONE_CLEAN } from '../../data/startmetData';

interface FounderCTAProps {
  onOpenIntake: () => void;
}

export const FounderCTA: React.FC<FounderCTAProps> = ({ onOpenIntake }) => {
  return (
    <section className="py-20 lg:py-28 border-b border-white/[0.08] bg-[#060913]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Kicker */}
        <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-4">
          Direct Founder Intake
        </div>

        {/* Headline */}
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
          Have an idea worth building?
        </h2>

        {/* Subhead */}
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          Tell us where you are. We’ll help you figure out what comes next. Honest feedback, zero sales pressure.
        </p>

        {/* Action Group (Clean, single-line buttons, no capsules) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="founder-cta-start-btn"
            onClick={onOpenIntake}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#00DF59] text-[#060913] font-bold text-sm sm:text-base rounded-lg hover:bg-[#12e867] transition-colors inline-flex items-center justify-center gap-2 active:scale-[0.99]"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${STARTMET_PHONE_CLEAN}`}
            className="w-full sm:w-auto px-6 py-3.5 border border-white/[0.12] rounded-lg text-white hover:border-white/[0.3] font-semibold text-sm sm:text-base transition-colors inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#00DF59]" />
            <span className="tabular-nums">Call {STARTMET_PHONE}</span>
          </a>

          <a
            href={`https://wa.me/${STARTMET_PHONE_CLEAN}?text=Hi%20STARTMET%2C%20I%20have%20an%20idea%20worth%20building.`}
            target="_blank"
            rel="noreferrer noopener"
            className="w-full sm:w-auto px-5 py-3.5 border border-white/[0.12] rounded-lg text-slate-300 hover:text-white hover:border-white/[0.3] font-medium text-sm sm:text-base transition-colors inline-flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#00DF59]" />
            <span>WhatsApp Direct</span>
          </a>
        </div>

        {/* Advisory SLA */}
        <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
          <Clock className="w-3.5 h-3.5 text-[#00DF59]" />
          <span>Every founder inquiry is reviewed by a partner within 24 business hours.</span>
        </div>

      </div>
    </section>
  );
};
