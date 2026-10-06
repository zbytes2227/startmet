import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import { PageRoute } from '../../types';

interface VentureComparisonSectionProps {
  onOpenIntake: () => void;
}

export const VentureComparisonSection: React.FC<VentureComparisonSectionProps> = ({ onOpenIntake }) => {
  const criteria = [
    {
      label: 'Core Focus & Scope',
      startmet: 'Integrated Product + Legal + Brand + Diligence',
      freelance: 'Code only, zero business or compliance context',
      agencies: 'Marketing collateral & ad spend management',
      incubators: 'Mentorship lectures & physical desks'
    },
    {
      label: 'IP & Code Ownership',
      startmet: '100% Founder-Owned (Complete Git & IP transfer)',
      freelance: 'Often disputed, proprietary or hostage code',
      agencies: 'Typically retained or licensed by agency',
      incubators: 'Founder-owned, but no building provided'
    },
    {
      label: 'Equity Dilution',
      startmet: '0% Equity Obligation (Transparent sprint fees)',
      freelance: '0% Equity, but hourly scope creep',
      agencies: '0% Equity, high monthly retainers',
      incubators: '7% – 12% equity grab for basic advice'
    },
    {
      label: 'Accountability & Alignment',
      startmet: 'Single studio partner coordinating all workstreams',
      freelance: 'No coordination; blames other vendors',
      agencies: 'Junior account managers, high churn',
      incubators: 'Volunteer mentors with no operational skin'
    },
    {
      label: 'Indian Regulatory Nuance',
      startmet: 'MCA SPICe+, DPIIT, GST, and India banking native',
      freelance: 'Zero corporate or regulatory capability',
      agencies: 'No legal or corporate compliance support',
      incubators: 'General advice, founder executes filings'
    },
    {
      label: 'Time to Market (MVP)',
      startmet: 'Predictable 4–8 week fixed delivery sprints',
      freelance: 'Commonly 4–9 months with unpredictable delays',
      agencies: 'Months of slide decks and moodboards',
      incubators: 'Cohort schedules tied to batch dates'
    }
  ];

  return (
    <section className="py-20 lg:py-28 border-b border-white/[0.08] bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-3">
            Operational Architecture
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Why unified venture-building wins over fragmented vendors.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Most early-stage startups don't fail from bad ideas. They fail because managing disconnected freelancers, attorneys, and agencies drains the founder's capital and attention.
          </p>
        </div>

        {/* Structured Comparison Table (Hairline Grid: NO repetitive cards!) */}
        <div className="border border-white/[0.1] rounded-xl bg-[#080d1f] overflow-x-auto shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-white/[0.1] bg-[#0c132c]">
                <th className="py-4 px-6 text-xs font-mono text-slate-400 uppercase tracking-wider w-1/4">
                  Evaluation Dimension
                </th>
                <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-[#00DF59] bg-[#00DF59]/5 border-x border-[#00DF59]/20 w-1/4">
                  STARTMET Studio
                </th>
                <th className="py-4 px-6 text-xs font-mono text-slate-400 uppercase tracking-wider w-1/6">
                  Freelancers / Dev Shops
                </th>
                <th className="py-4 px-6 text-xs font-mono text-slate-400 uppercase tracking-wider w-1/6">
                  Traditional Agencies
                </th>
                <th className="py-4 px-6 text-xs font-mono text-slate-400 uppercase tracking-wider w-1/6">
                  Standard Incubators
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
              {criteria.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.015] transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">
                    {row.label}
                  </td>
                  <td className="py-4 px-6 text-slate-100 font-medium bg-[#00DF59]/[0.02] border-x border-[#00DF59]/15">
                    <div className="flex items-start gap-2">
                      <span className="text-[#00DF59] font-bold mt-0.5">✓</span>
                      <span>{row.startmet}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    {row.freelance}
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    {row.agencies}
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    {row.incubators}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-8 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Built specifically to solve the execution bottleneck for Indian and global founders.
          </div>
          <button
            onClick={onOpenIntake}
            className="text-white hover:text-[#00DF59] font-semibold inline-flex items-center gap-1 transition-colors"
          >
            Review your startup scope with a partner &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
