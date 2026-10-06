import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../data/startmetData';
import { PageRoute, ServiceItem } from '../types';
import { ArrowRight, Check } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenIntake: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenIntake }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'build' | 'establish' | 'grow'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = SERVICE_CATEGORIES.flatMap(cat => cat.services).filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.deliverables.some(d => d.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-[#060913] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-3">
            Venture Services Directory
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Comprehensive startup execution capabilities.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            All 11 specialized offerings designed to take founders through product engineering, corporate governance, brand creation, distribution, and capital readiness.
          </p>
        </div>

        {/* Filter Controls (Segmented Bar) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 rounded-xl bg-[#080d1f] border border-white/[0.08] mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1">
            {[
              { id: 'all', label: 'All Services (11)' },
              { id: 'build', label: 'BUILD (4)' },
              { id: 'establish', label: 'ESTABLISH (3)' },
              { id: 'grow', label: 'GROW (4)' }
            ].map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as any)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#101736] text-white border border-white/[0.1]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="px-2">
            <input
              type="text"
              placeholder="Filter by keyword or deliverable..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 px-3.5 py-1.5 text-xs rounded-lg bg-[#060913] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-[#00DF59]"
            />
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="rounded-xl bg-[#090e21] border border-white/[0.08] hover:border-white/[0.2] transition-colors p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Quiet Unboxed Metadata */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-white/[0.06]">
                  <span className="text-[#00DF59] font-bold uppercase">
                    {service.category}
                  </span>
                  <span>{service.timeline}</span>
                </div>

                <h2 className="font-display font-bold text-xl text-white mb-2.5">
                  {service.name}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Core Deliverables:
                  </div>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-[#00DF59] font-bold">·</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {service.timeline}
                </span>

                <button
                  onClick={() => onOpenIntake(service.name)}
                  className="text-xs font-bold text-[#00DF59] hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
