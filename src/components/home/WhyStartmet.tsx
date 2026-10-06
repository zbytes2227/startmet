import React from 'react';

export const WhyStartmet: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Zero Equity Required',
      description: 'Unlike early-stage incubators that demand 7% to 12% of your company for basic desk space and introductory lectures, STARTMET charges transparent milestone fees. You preserve 100% of your cap table for the capital partners who write real investment checks.',
      detail: 'Retain your equity for true scale capital.'
    },
    {
      num: '02',
      title: '100% Code & Intellectual Property Handover',
      description: 'You own every line of code, every database schema, every design token, and every corporate filing. When our sprint concludes, full admin ownership of your Git repositories and cloud accounts is transferred cleanly to your organization.',
      detail: 'Zero vendor lock-in or proprietary licensing traps.'
    },
    {
      num: '03',
      title: 'Built Around Indian Regulatory Nuance',
      description: 'Building in India demands mastery of the Ministry of Corporate Affairs (MCA), DPIIT Startup India certifications, GST compliance, and domestic payment gateways like Razorpay and UPI. We eliminate the legal friction that stalls first-time founders.',
      detail: 'Fully compliant, audited corporate governance.'
    },
    {
      num: '04',
      title: 'Partner-Level Execution, Not Junior Staff',
      description: 'You collaborate directly with senior software architects and corporate strategists who have built and launched ventures. We do not pass your startup off to junior account managers or unvetted offshore sub-contractors.',
      detail: 'High-velocity accountability on every sprint.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 border-b border-white/[0.08] bg-[#070b18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Quiet Editorial Stance (Span 4) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-3">
              Founder Covenant
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Built on strict founder alignment.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              We started STARTMET because we experienced firsthand how traditional agencies overcharge, build unscalable code, and leave founders stranded before launch.
            </p>
            <div className="mt-8 pt-6 border-t border-white/[0.08] text-xs text-slate-400 font-mono">
              The STARTMET Guarantee: 100% founder ownership. Zero equity obligation.
            </div>
          </div>

          {/* Right Column: Minimalist Numbered Editorial List (Span 8) */}
          <div className="lg:col-span-8 divide-y divide-white/[0.08] border-t border-b lg:border-t-0 border-white/[0.08]">
            {principles.map((item) => (
              <div key={item.num} className="py-8 first:pt-0 last:pb-0 space-y-3">
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-mono font-bold text-[#00DF59]">
                    {item.num}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed pl-8">
                  {item.description}
                </p>

                <div className="pl-8 pt-1 text-xs font-mono text-slate-400">
                  Key Commitment: <span className="text-white">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
