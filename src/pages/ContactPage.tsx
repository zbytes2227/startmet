import React, { useState } from 'react';
import { PageRoute, FounderIntakeData } from '../types';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { STARTMET_PHONE, STARTMET_PHONE_CLEAN, STARTMET_EMAIL, STARTMET_LOCATION } from '../data/startmetData';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  preselectedService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, preselectedService }) => {
  const [formData, setFormData] = useState<FounderIntakeData>({
    founderName: '',
    email: '',
    phone: '',
    startupStage: 'Idea stage',
    startupCategory: 'Tech / SaaS',
    primaryNeeds: preselectedService ? [preselectedService] : [],
    deckOrWebsiteLink: '',
    briefDescription: '',
    preferredChannel: 'WhatsApp'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stageOptions = [
    'Idea stage (formulating hypothesis)',
    'MVP building (active development)',
    'Launched (seeking first 100 users)',
    'Looking for growth & distribution',
    'Raising angel or seed funds'
  ];

  const categoryOptions = [
    'Tech / SaaS',
    'B2B Commerce & Services',
    'Fintech & Payments',
    'Healthcare & Healthtech',
    'AI & Automation',
    'D2C & Consumer Brands',
    'Edtech / Community',
    'Other Industry'
  ];

  const needsOptions = [
    'Idea Validation & Customer Discovery',
    'MVP Software Engineering',
    'Pvt Ltd Company Incorporation & Compliance',
    'Brand Identity & UI/UX System',
    'Growth & Distribution Strategy',
    'Pitch Deck & Financial Modeling',
    'Targeted Investor Connections'
  ];

  const toggleNeed = (need: string) => {
    setFormData(prev => {
      const exists = prev.primaryNeeds.includes(need);
      return {
        ...prev,
        primaryNeeds: exists
          ? prev.primaryNeeds.filter(n => n !== need)
          : [...prev.primaryNeeds, need]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('startmet_inquiries') || '[]');
        stored.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem('startmet_inquiries', JSON.stringify(stored));
      } catch (err) {
        console.error(err);
      }
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="pt-32 pb-24 bg-[#060913] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-3">
            Founder Intake · Direct Advisory
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Start a serious founder conversation.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us where you are on your journey. Every submission is reviewed directly by a technical or strategy partner within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Contact Details & SLA (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="p-6 rounded-xl bg-[#090e21] border border-white/[0.08] space-y-4">
              <h3 className="font-display font-bold text-base text-white pb-2 border-b border-white/[0.08]">
                Direct Studio Contacts
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1">Direct Advisory Line</span>
                  <a 
                    href={`tel:${STARTMET_PHONE_CLEAN}`} 
                    className="text-white font-medium hover:text-[#00DF59] transition-colors flex items-center gap-2 tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#00DF59]" />
                    <span>{STARTMET_PHONE}</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1">WhatsApp Founder Line</span>
                  <a 
                    href={`https://wa.me/${STARTMET_PHONE_CLEAN}?text=Hi%20STARTMET%2C%20I%20would%20like%20to%20discuss%20my%20startup.`}
                    target="_blank" 
                    rel="noreferrer noopener"
                    className="text-white font-medium hover:text-[#00DF59] transition-colors flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#00DF59]" />
                    <span>+91 81006 00036</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1">Email Correspondence</span>
                  <a 
                    href={`mailto:${STARTMET_EMAIL}`} 
                    className="text-white font-medium hover:text-[#00DF59] transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#00DF59]" />
                    <span>{STARTMET_EMAIL}</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1">Studio Headquarters</span>
                  <div className="text-slate-300 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#00DF59] shrink-0 mt-0.5" />
                    <span>{STARTMET_LOCATION}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Advisory SLA Notice */}
            <div className="p-5 rounded-xl bg-[#090e21] border border-white/[0.08] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00DF59] uppercase">
                <Clock className="w-3.5 h-3.5" />
                <span>24-Hour Commitment</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We respond to serious founder inquiries within 24 business hours. You will speak with partners who write code, structure cap tables, and build real businesses.
              </p>
            </div>

            {/* Confidentiality Commitment */}
            <div className="p-5 rounded-xl bg-[#090e21] border border-white/[0.08] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00DF59]" />
                <span>Confidentiality Protected</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                All submitted materials, pitch decks, and conversations are handled under mutual non-disclosure ethics.
              </p>
            </div>

          </div>

          {/* Right Column: Founder Intake Form (Span 8) */}
          <div className="lg:col-span-8">
            <div className="rounded-xl bg-[#090e21] border border-white/[0.1] p-6 sm:p-10">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#00DF59]/10 text-[#00DF59] flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    Inquiry Received, {formData.founderName.split(' ')[0] || 'Founder'}.
                  </h2>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Our venture partners are reviewing your submission. You will receive an advisory response via {formData.preferredChannel} within 24 hours.
                  </p>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-lg border border-white/[0.1] text-white text-xs font-semibold hover:border-white/[0.3]"
                    >
                      Submit Another Inquiry
                    </button>
                    <button
                      onClick={() => onNavigate('/')}
                      className="px-5 py-2.5 bg-[#00DF59] text-[#060913] text-xs font-bold rounded-lg hover:bg-[#12e867]"
                    >
                      Return to Homepage
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Founder Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rohan Sharma"
                        value={formData.founderName}
                        onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#060913] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#00DF59]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rohan@yourstartup.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#060913] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#00DF59]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone/WhatsApp & Preferred Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#060913] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#00DF59]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Preferred Response Channel
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['WhatsApp', 'Email', 'Phone'] as const).map((channel) => (
                          <button
                            type="button"
                            key={channel}
                            onClick={() => setFormData({ ...formData, preferredChannel: channel })}
                            className={`py-2.5 rounded-lg text-xs font-medium border transition-colors ${
                              formData.preferredChannel === channel
                                ? 'bg-[#101736] text-white border-[#00DF59]/50'
                                : 'bg-[#060913] border-white/[0.08] text-slate-400 hover:text-white'
                            }`}
                          >
                            {channel}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Startup Stage */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Current Startup Stage *
                    </label>
                    <select
                      value={formData.startupStage}
                      onChange={(e) => setFormData({ ...formData, startupStage: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#060913] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#00DF59]"
                    >
                      {stageOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#060913] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Startup Category */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Startup Sector / Category *
                    </label>
                    <select
                      value={formData.startupCategory}
                      onChange={(e) => setFormData({ ...formData, startupCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#060913] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#00DF59]"
                    >
                      {categoryOptions.map((cat) => (
                        <option key={cat} value={cat} className="bg-[#060913] text-white">
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 5: Primary Needs */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Execution Areas of Focus
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {needsOptions.map((need) => {
                        const isSelected = formData.primaryNeeds.includes(need);
                        return (
                          <div
                            key={need}
                            onClick={() => toggleNeed(need)}
                            className={`cursor-pointer p-2.5 rounded-lg border text-xs transition-colors flex items-center gap-2 select-none ${
                              isSelected
                                ? 'bg-[#0f1738] border-[#00DF59]/50 text-white'
                                : 'bg-[#060913] border-white/[0.08] text-slate-400 hover:text-white'
                            }`}
                          >
                            <div className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 border ${
                              isSelected ? 'bg-[#00DF59] border-[#00DF59] text-[#060913]' : 'border-slate-600'
                            }`}>
                              {isSelected && '✓'}
                            </div>
                            <span className="truncate">{need}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 6: Website or Pitch Deck link */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Website / Figma / Pitch Deck Link (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/... or https://yourstartup.com"
                      value={formData.deckOrWebsiteLink}
                      onChange={(e) => setFormData({ ...formData, deckOrWebsiteLink: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#060913] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#00DF59]"
                    />
                  </div>

                  {/* Row 7: Brief Narrative */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Brief Problem Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe the core customer friction, your hypothesis, and what you aim to achieve over the next 90 days..."
                      value={formData.briefDescription}
                      onChange={(e) => setFormData({ ...formData, briefDescription: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#060913] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#00DF59]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#00DF59] text-[#060913] font-bold text-sm rounded-lg hover:bg-[#12e867] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Submit Advisory Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
