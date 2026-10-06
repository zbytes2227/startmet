import React from 'react';
import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { WhatStartmetDoes } from '../components/home/WhatStartmetDoes';
import { VentureComparisonSection } from '../components/home/VentureComparisonSection';
import { WhyStartmet } from '../components/home/WhyStartmet';
import { FundingSection } from '../components/home/FundingSection';
import { StartmetTalksPreview } from '../components/home/StartmetTalksPreview';
import { FounderCTA } from '../components/home/FounderCTA';
import { PageRoute, TalkEpisode, ResourceGuide } from '../types';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenIntake: () => void;
  onSelectEpisode?: (episode: TalkEpisode) => void;
  onSelectResource?: (resource: ResourceGuide) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigate, 
  onOpenIntake, 
  onSelectEpisode, 
  onSelectResource 
}) => {
  const handleScrollToCapabilities = () => {
    const el = document.getElementById('what-startmet-does');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('/services');
    }
  };

  return (
    <main id="home-main-content">
      {/* 1. Asymmetric Split Hero: Authoritative Value Proposition + Multi-Stream Blueprint */}
      <Hero 
        onNavigate={onNavigate} 
        onOpenIntake={onOpenIntake} 
        onExploreClick={handleScrollToCapabilities} 
      />

      {/* 2. Interactive Editorial Timeline: The 6-Stage Founder Arc (NOT cards!) */}
      <TrustStrip />

      {/* 3. Capability Split Deep Dive: Product, Legal, Brand, Diligence */}
      <WhatStartmetDoes 
        onNavigate={onNavigate} 
        onOpenIntake={onOpenIntake} 
      />

      {/* 4. Structured Comparison Table: Studio Model vs. Fragmented Alternatives */}
      <VentureComparisonSection 
        onOpenIntake={onOpenIntake} 
      />

      {/* 5. Minimalist Numbered Editorial List: 4 Core Alignments & Principles */}
      <WhyStartmet />

      {/* 6. Institutional Diligence & Capital Readiness (Data Room Blueprint) */}
      <FundingSection 
        onNavigate={onNavigate} 
        onOpenIntake={onOpenIntake} 
      />

      {/* 7. Magazine / Publication Layout: STARTMET Talks & Founder Insights */}
      <StartmetTalksPreview 
        onNavigate={onNavigate} 
        onSelectEpisode={onSelectEpisode} 
      />

      {/* 8. Direct Founder Contact & Intake */}
      <FounderCTA 
        onOpenIntake={onOpenIntake} 
      />
    </main>
  );
};
