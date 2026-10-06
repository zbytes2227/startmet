import React, { useState } from 'react';
import { X, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { STARTMET_PHONE, STARTMET_PHONE_CLEAN } from '../../data/startmetData';

interface FounderIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTopic?: string;
}

export const FounderIntakeModal: React.FC<FounderIntakeModalProps> = ({ 
  isOpen, 
  onClose,
  preselectedTopic 
}) => {
  const [founderName, setFounderName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [stage, setStage] = useState('Idea stage');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const stored = JSON.parse(localStorage.getItem('startmet_quick_leads') || '[]');
      stored.push({
        founderName,
        email,
        phone,
        stage,
        note: note || preselectedTopic || 'General Inquiry',
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('startmet_quick_leads', JSON.stringify(stored));
    } catch (err) {
      console.error(err);
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-lg rounded-xl bg-[#090e21] border border-white/[0.12] p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#00DF59]/10 text-[#00DF59] flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h3 className="font-display font-bold text-2xl text-white">
              We have received your details.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              A STARTMET partner will review your inquiry and reach out via phone or WhatsApp within 24 business hours.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#00DF59] text-[#060913] font-bold text-xs rounded-lg hover:bg-[#12e867] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#00DF59] mb-1">
                Founder Intake
              </div>
              <h3 className="font-display font-bold text-2xl text-white">
                Tell us what you're building.
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {preselectedTopic ? `Inquiring about: ${preselectedTopic}` : 'Get candid feedback on your startup scope and roadmap.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Founder Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={founderName}
                  onChange={(e) => setFounderName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060913] border border-white/[0.1] text-white text-xs sm:text-sm focus:outline-none focus:border-[#00DF59]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#060913] border border-white/[0.1] text-white text-xs sm:text-sm focus:outline-none focus:border-[#00DF59]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="founder@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#060913] border border-white/[0.1] text-white text-xs sm:text-sm focus:outline-none focus:border-[#00DF59]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Startup Stage
                </label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060913] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-[#00DF59]"
                >
                  <option value="Idea stage">Idea stage (Validating hypothesis)</option>
                  <option value="MVP stage">MVP stage (Building first version)</option>
                  <option value="Incorporation & Brand">Company Incorporation & Brand needed</option>
                  <option value="Launched / Growth">Launched product seeking users</option>
                  <option value="Fundraising">Preparing for angel / seed round</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Key Question or Requirement
                </label>
                <textarea
                  rows={2}
                  placeholder="Share a brief sentence on what you need help with..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060913] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-[#00DF59]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#00DF59] text-[#060913] font-bold text-xs sm:text-sm rounded-lg hover:bg-[#12e867] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request Discussion</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <span className="text-slate-400">
                Direct Line:
              </span>
              <a
                href={`tel:${STARTMET_PHONE_CLEAN}`}
                className="text-white hover:text-[#00DF59] font-medium flex items-center gap-1 tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-[#00DF59]" />
                <span>{STARTMET_PHONE}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
