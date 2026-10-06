import React, { useState, useEffect } from 'react';
import { StartmetLogo } from '../common/StartmetLogo';
import { PageRoute } from '../../types';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { STARTMET_PHONE, STARTMET_PHONE_CLEAN } from '../../data/startmetData';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenIntake: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate, onOpenIntake }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'About', route: '/about' },
    { label: 'Programs', route: '/programs' },
    { label: 'Services', route: '/services' },
    { label: 'Talks', route: '/talks' },
    { label: 'Learn', route: '/learn' },
    { label: 'Funding', route: '/funding' },
    { label: 'Contact', route: '/contact' }
  ];

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled 
          ? 'bg-[#060913]/95 backdrop-blur-sm border-b border-white/[0.08] py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Zone 1: Brand Wordmark */}
          <button 
            id="nav-logo-btn"
            onClick={() => handleLinkClick('/')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00DF59] rounded p-0.5"
            aria-label="STARTMET Home"
          >
            <StartmetLogo variant="compact" showSubtitle={!isScrolled} />
          </button>

          {/* Zone 2: Clean Editorial Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  onClick={() => handleLinkClick(link.route)}
                  className={`text-sm tracking-wide transition-colors relative py-1 ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00DF59]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Zone 3: Direct Advisory Phone & Action */}
          <div className="hidden sm:flex items-center gap-5">
            <a 
              href={`tel:${STARTMET_PHONE_CLEAN}`}
              className="hidden xl:flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              title="Call STARTMET Advisory"
            >
              <Phone className="w-3.5 h-3.5 text-[#00DF59]" />
              <span className="tabular-nums">{STARTMET_PHONE}</span>
            </a>

            <button
              id="nav-cta-start-journey"
              onClick={() => {
                onOpenIntake();
                setMobileMenuOpen(false);
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#00DF59] text-[#060913] font-bold text-xs sm:text-sm tracking-wide rounded-lg transition-colors hover:bg-[#12e867] active:scale-[0.99] whitespace-nowrap"
            >
              <span>Submit Idea</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenIntake}
              className="sm:hidden px-3 py-1.5 bg-[#00DF59] text-[#060913] font-bold text-xs rounded-md"
            >
              Submit Idea
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00DF59] rounded-md"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#060913] px-4 pt-4 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/[0.08]">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => handleLinkClick(link.route)}
                className={`text-left px-3 py-2 rounded text-sm font-medium transition-colors ${
                  currentRoute === link.route 
                    ? 'text-[#00DF59] font-bold bg-[#00DF59]/10' 
                    : 'text-slate-200 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                onOpenIntake();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#00DF59] text-[#060913] font-bold text-sm rounded-lg flex items-center justify-center gap-2"
            >
              <span>Submit Your Idea</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${STARTMET_PHONE_CLEAN}`}
              className="w-full py-2.5 text-center text-xs font-semibold text-slate-300 border border-white/[0.08] rounded-lg hover:text-white"
            >
              Call Partner Advisory: {STARTMET_PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
