/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ServicesPage } from './pages/ServicesPage';
import { TalksPage } from './pages/TalksPage';
import { LearnPage } from './pages/LearnPage';
import { FundingPage } from './pages/FundingPage';
import { ContactPage } from './pages/ContactPage';
import { FounderIntakeModal } from './components/common/FounderIntakeModal';
import { PageRoute, TalkEpisode, ResourceGuide } from './types';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('/');
  const [isIntakeOpen, setIsIntakeOpen] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);
  const [selectedEpisode, setSelectedEpisode] = useState<TalkEpisode | null>(null);
  const [selectedResource, setSelectedResource] = useState<ResourceGuide | null>(null);

  // Synchronize browser history / URL hash if desired, and scroll to top on route change
  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenIntakeWithTopic = (topic?: string) => {
    setSelectedTopic(topic);
    setIsIntakeOpen(true);
  };

  const handleEpisodeSelect = (episode: TalkEpisode) => {
    setSelectedEpisode(episode);
    navigateTo('/talks');
  };

  const handleResourceSelect = (resource: ResourceGuide) => {
    setSelectedResource(resource);
    navigateTo('/learn');
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans selection:bg-[#00DF59] selection:text-[#060913]">
      
      {/* Primary Sticky Ecosystem Navigation */}
      <Navbar 
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenIntake={() => handleOpenIntakeWithTopic()}
      />

      {/* Main View Router */}
      <div className="flex-1">
        {currentRoute === '/' && (
          <HomePage 
            onNavigate={navigateTo}
            onOpenIntake={() => handleOpenIntakeWithTopic()}
            onSelectEpisode={handleEpisodeSelect}
            onSelectResource={handleResourceSelect}
          />
        )}

        {currentRoute === '/about' && (
          <AboutPage 
            onNavigate={navigateTo}
            onOpenIntake={() => handleOpenIntakeWithTopic('About / Studio Scope')}
          />
        )}

        {currentRoute === '/programs' && (
          <ProgramsPage 
            onNavigate={navigateTo}
            onOpenIntake={() => handleOpenIntakeWithTopic('Venture Track Application')}
          />
        )}

        {currentRoute === '/services' && (
          <ServicesPage 
            onNavigate={navigateTo}
            onOpenIntake={(serviceName) => handleOpenIntakeWithTopic(serviceName)}
          />
        )}

        {currentRoute === '/talks' && (
          <TalksPage 
            onNavigate={navigateTo}
            selectedEpisode={selectedEpisode}
          />
        )}

        {currentRoute === '/learn' && (
          <LearnPage 
            onNavigate={navigateTo}
            selectedResource={selectedResource}
            onOpenIntake={() => handleOpenIntakeWithTopic('Roadmap Review')}
          />
        )}

        {currentRoute === '/funding' && (
          <FundingPage 
            onNavigate={navigateTo}
            onOpenIntake={() => handleOpenIntakeWithTopic('Investor Diligence Review')}
          />
        )}

        {currentRoute === '/contact' && (
          <ContactPage 
            onNavigate={navigateTo}
            preselectedService={selectedTopic}
          />
        )}
      </div>

      {/* Ecosystem Footer */}
      <Footer 
        onNavigate={navigateTo}
        onOpenIntake={() => handleOpenIntakeWithTopic()}
      />

      {/* Global Founder Intake Modal */}
      <FounderIntakeModal 
        isOpen={isIntakeOpen}
        onClose={() => setIsIntakeOpen(false)}
        preselectedTopic={selectedTopic}
      />

    </div>
  );
}
