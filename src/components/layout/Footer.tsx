import React from 'react';
import { StartmetLogo } from '../common/StartmetLogo';
import { PageRoute } from '../../types';
import { Phone, Mail, Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { STARTMET_PHONE, STARTMET_PHONE_CLEAN, STARTMET_EMAIL, STARTMET_URL, STARTMET_LOCATION } from '../../data/startmetData';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenIntake: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenIntake }) => {
  const currentYear = 2026;

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050711] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Column (Span 5) */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="mb-4">
                <StartmetLogo variant="compact" showSubtitle={true} />
              </div>
              <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                An integrated startup-building ecosystem. We partner with founders from validation and software engineering to company formation, brand creation, and investor readiness.
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <span className="text-slate-400">Advisory Line:</span>
                <a 
                  href={`tel:${STARTMET_PHONE_CLEAN}`} 
                  className="text-white hover:text-[#00DF59] font-medium transition-colors tabular-nums"
                >
                  {STARTMET_PHONE}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-slate-400">Direct Inquiries:</span>
                <a 
                  href={`mailto:${STARTMET_EMAIL}`} 
                  className="text-white hover:text-[#00DF59] font-medium transition-colors"
                >
                  {STARTMET_EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-slate-400">Location:</span>
                <span className="text-white font-medium">{STARTMET_LOCATION}</span>
              </div>
            </div>
          </div>

          {/* Navigation Column (Span 3) */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-4">
              Ecosystem
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('/about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About STARTMET
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/programs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Venture Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Services Directory
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/talks')}
                  className="hover:text-white transition-colors text-left"
                >
                  Startmet Talks
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/learn')}
                  className="hover:text-white transition-colors text-left"
                >
                  Founder Resources
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/funding')}
                  className="hover:text-white transition-colors text-left"
                >
                  Investor Readiness
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact &amp; Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Founder Access (Span 4) */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-4">
              Founder Engagement
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              Have an idea or need an MVP engineered? We review every founder submission within 24 business hours.
            </p>

            <div className="p-4 rounded-lg bg-[#080d1e] border border-white/[0.08] space-y-3">
              <div className="text-xs text-slate-300">
                <span className="text-white font-semibold block mb-0.5">Zero Equity Obligation</span>
                Keep 100% of your cap table. Transparent milestone sprint fees.
              </div>

              <button
                id="footer-intake-btn"
                onClick={onOpenIntake}
                className="w-full py-2.5 px-3 bg-[#00DF59] text-[#060913] font-bold text-xs rounded-md hover:bg-[#12e867] transition-colors text-center"
              >
                Submit Your Idea
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} STARTMET. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00DF59]" />
              <span>MCA &amp; DPIIT Startup Ecosystem Alignment</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
