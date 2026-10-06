import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../../data/startmetData';
import { ServiceItem, PageRoute } from '../../types';
import { ArrowRight, Clock, CheckCircle, Sparkles, ChevronRight } from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenIntake: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate, onOpenIntake }) => {
  const [activeCategory, setActiveCategory] = useState<'build' | 'establish' | 'grow'>('build');
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICE_CATEGORIES[0].services[0]);

  const currentCategoryData = SERVICE_CATEGORIES.find(c => c.id === activeCategory)!;

  const handleCategoryChange = (catId: 'build' | 'establish' | 'grow') => {
    setActiveCategory(catId);
    const cat = SERVICE_CATEGORIES.find(c => c.id === catId)!;
    setSelectedService(cat.services[0]);
  };

  return (
    <section id="services-section" className="py-24 bg-[#070b24] border-t border-[#16204c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#00DF59] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRACTICAL EXECUTION SERVICES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Specialized execution for every startup milestone.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Choose a focused sprint or combine services across disciplines into a unified build engagement.
          </p>
        </div>

        {/* Category Switcher: BUILD | ESTABLISH | GROW */}
        <div className="flex flex-wrap items-center gap-3 p-1.5 rounded-2xl bg-[#050819] border border-[#1b2554] w-fit mb-10">
          {SERVICE_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                id={`services-tab-${category.id}`}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-sm tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0e1742] text-white border border-[#2b3a82] shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <span 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: category.id === 'establish' ? '#6e24fc' : '#00DF59' }} 
                />
                <span>{category.title}</span>
                <span className="text-[11px] font-mono opacity-60">({category.services.length})</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Service Selector List (Span 5) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-xl bg-[#0a1033] border border-[#192357] mb-4">
              <div className="text-xs font-bold text-[#00DF59] uppercase tracking-wider font-mono">
                {currentCategoryData.title} PILLAR
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {currentCategoryData.description}
              </p>
            </div>

            {currentCategoryData.services.map((service) => {
              const isCurrent = selectedService.id === service.id;
              return (
                <div
                  key={service.id}
                  id={`service-item-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  onMouseEnter={() => setSelectedService(service)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 text-left ${
                    isCurrent
                      ? 'bg-[#0f1740] border-[#00DF59]/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)] ring-1 ring-[#00DF59]/30'
                      : 'bg-[#080d28] border-[#182352] hover:border-slate-600 hover:bg-[#0c1236]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`font-display font-bold text-base transition-colors ${
                      isCurrent ? 'text-white' : 'text-slate-200'
                    }`}>
                      {service.name}
                    </h3>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isCurrent ? 'text-[#00DF59] translate-x-1' : 'text-slate-600'
                    }`} />
                  </div>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Service Spec Panel (Span 7) */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-2xl bg-[#090f33] border border-[#212d6a] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                
                {/* Header Tag + Duration */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#162152] mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#00DF59]/10 text-[#00DF59] border border-[#00DF59]/20 font-bold uppercase">
                      {selectedService.category} Focus
                    </span>
                    <span className="text-xs font-bold text-white font-display">
                      {selectedService.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-[#00DF59]" />
                    <span>Typical Sprint: <strong className="text-white">{selectedService.timeline}</strong></span>
                  </div>
                </div>

                {/* Detailed Narrative */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-normal">
                  {selectedService.detailedDesc}
                </p>

                {/* Core Deliverables Breakdown */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00DF59] mb-3">
                    Concrete Sprint Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#060a22] border border-[#141d47] text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00DF59] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Who Needs This */}
                <div className="p-3.5 rounded-xl bg-[#060a20] border border-[#162152] text-xs text-slate-300 mb-6">
                  <strong className="text-white font-semibold block mb-0.5">Who this is designed for:</strong>
                  <span>{selectedService.whoNeedsThis}</span>
                </div>

              </div>

              {/* Action Strip */}
              <div className="pt-4 border-t border-[#162152] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  onClick={onOpenIntake}
                  className="px-5 py-2.5 bg-[#00DF59] text-[#050819] font-bold text-xs sm:text-sm rounded-lg hover:bg-[#10e665] transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>Inquire for {selectedService.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('/services')}
                  className="text-xs font-semibold text-slate-400 hover:text-white transition-colors text-center sm:text-right"
                >
                  View full specifications &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
