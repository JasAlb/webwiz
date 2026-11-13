import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactFormData } from '../types';
import { BUDGET_TIERS, SERVICES_DATA } from '../data/agencyData';
import {
  Sparkles,
  Send,
  MessageSquare,
  Mail,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Clock,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    service: SERVICES_DATA[0].title,
    budget: BUDGET_TIERS[1].label,
    description: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDetails, setCopiedDetails] = useState(false);

  // Listen for pre-selection events from other sections
  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({ ...prev, service: customEvent.detail }));
      }
    };

    window.addEventListener('selectService', handleServiceSelect);
    return () => window.removeEventListener('selectService', handleServiceSelect);
  }, []);

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please tell us briefly about your project goals.';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Please provide at least a short sentence about what you want to achieve.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getFormattedEnquiryText = () => {
    return `Client Full Name: ${formData.fullName}
Business Name: ${formData.businessName || 'Not specified'}
Email Address: ${formData.email}
WhatsApp (Optional): ${formData.phone || 'Not specified'}
Service Required: ${formData.service}
Budget Tier: ${formData.budget}

Project Objectives & Details:
${formData.description}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`WebWizards Project Enquiry: ${formData.service} — ${formData.fullName}`);
    const body = encodeURIComponent(
      `Hello WebWizards Studio,\n\nI would like to submit a project enquiry with the following details:\n\n${getFormattedEnquiryText()}\n\nLooking forward to your prompt response.`
    );
    return `mailto:jassimalbin@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Prepare email addressed to jassimalbin@gmail.com and trigger default mail client
    setTimeout(() => {
      const mailtoUrl = getMailtoUrl();
      // Trigger default mail client
      window.location.href = mailtoUrl;

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jassimalbin@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyEnquiryDetails = () => {
    navigator.clipboard.writeText(getFormattedEnquiryText());
    setCopiedDetails(true);
    setTimeout(() => setCopiedDetails(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#08090D] overflow-hidden border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-accent/[0.05] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-accent-soft" />
              <span className="text-xs font-mono uppercase tracking-wider text-accent-soft">
                Start A Conversation
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              Let's Build Your Vision.
            </h2>
          </div>

          <p className="text-text-secondary text-base sm:text-lg max-w-md font-light">
            Share your project details below. We review every submission personally and respond with a strategic plan within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Agency Channels & Guarantees */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-[#11131A]/80 border border-white/[0.08] backdrop-blur-xl space-y-5">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-1">
                  Official Contact Channels
                </h3>
                <p className="text-xs text-text-secondary font-light">
                  Connect directly with our engineering and design leads.
                </p>
              </div>

              {/* OPTION 1: WhatsApp Chat */}
              <div className="p-5 rounded-2xl bg-emerald-500/[0.07] border border-emerald-500/20 hover:border-emerald-500/40 transition-all space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white">WhatsApp Chat</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        Fastest Response
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary mt-1">
                      Have a project in mind? Let's discuss it.
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/qr/5KENGAMJCDTUH1?s=r"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  data-cursor="pointer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#08090D] font-semibold text-xs transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* OPTION 2: Email */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] transition-all space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-white block">Official Email</span>
                    <p className="text-xs text-text-secondary mt-1">
                      Prefer email? Send us your project requirements.
                    </p>
                    <a
                      href="mailto:jassimalbin@gmail.com"
                      className="text-xs font-mono text-accent-soft hover:underline block mt-1"
                    >
                      jassimalbin@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href="mailto:jassimalbin@gmail.com"
                    data-cursor="pointer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(139,92,246,0.25)]"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send an email</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-text-secondary flex items-center gap-1.5 transition-colors border border-white/[0.06]"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Studio Availability & Guarantees */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <div className="text-xs text-text-secondary">
                  <span className="text-white font-semibold block">24-Hour Proposal Turnaround</span>
                  Detailed scope breakdown, timeline estimation, and transparent architecture recommendations.
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/[0.04]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs text-text-secondary">
                  <span className="text-white font-semibold block">Fixed INR Pricing & Milestones</span>
                  Clear contracts in Indian Rupees (₹) with zero hidden fees or surprise billings.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Generation Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#11131A] border border-white/[0.1] p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-8 px-2 sm:px-4 flex flex-col items-center text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                      <Mail className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                        Enquiry Prepared For jassimalbin@gmail.com
                      </h3>
                      <p className="text-text-secondary text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
                        Your default email application was triggered with your pre-filled project enquiry details addressed to <span className="text-white font-medium">jassimalbin@gmail.com</span>. Please click <span className="text-accent-soft font-semibold">Send</span> in your email client to dispatch it directly to our studio inbox.
                      </p>
                    </div>

                    {/* Form summary box */}
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-text-muted max-w-lg w-full text-left space-y-1.5">
                      <div className="flex justify-between py-1 border-b border-white/[0.04]">
                        <span className="text-text-muted">Client:</span>
                        <span className="text-white font-semibold">{formData.fullName} ({formData.email})</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/[0.04]">
                        <span className="text-text-muted">Target Service:</span>
                        <span className="text-accent-soft">{formData.service}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/[0.04]">
                        <span className="text-text-muted">Budget Tier:</span>
                        <span className="text-emerald-400 font-bold">{formData.budget}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-text-muted">Recipient:</span>
                        <span className="text-white font-mono">jassimalbin@gmail.com</span>
                      </div>
                    </div>

                    {/* Fallback Action Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full justify-center">
                      <a
                        href={getMailtoUrl()}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent text-white text-xs sm:text-sm font-semibold hover:bg-accent-hover transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Launch Email App Again</span>
                      </a>

                      <a
                        href="https://wa.me/qr/5KENGAMJCDTUH1?s=r"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold hover:bg-emerald-500/30 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat with us on WhatsApp</span>
                      </a>

                      <button
                        onClick={handleCopyEnquiryDetails}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs sm:text-sm font-medium transition-colors"
                      >
                        {copiedDetails ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span>Details Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy Details</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            businessName: '',
                            email: '',
                            phone: '',
                            service: SERVICES_DATA[0].title,
                            budget: BUDGET_TIERS[1].label,
                            description: ''
                          });
                        }}
                        className="text-xs font-mono text-text-muted hover:text-white underline transition-colors"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white mb-1">
                        Project Enquiry Form
                      </h3>
                      <p className="text-xs font-mono text-text-muted">
                        Submitting prepares an email directly addressed to <a href="mailto:jassimalbin@gmail.com" className="text-accent-soft hover:underline">jassimalbin@gmail.com</a>.
                      </p>
                    </div>

                    {/* Step 1: Client Credentials */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-mono uppercase text-text-muted mb-2">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Albin Jassim"
                          className={`w-full px-4 py-3 rounded-xl bg-[#08090D] border text-white text-sm focus:outline-none transition-colors ${
                            errors.fullName ? 'border-red-500/80' : 'border-white/[0.1] focus:border-accent'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Business Name */}
                      <div>
                        <label className="block text-xs font-mono uppercase text-text-muted mb-2">
                          Business / Organization Name
                        </label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. Digital Studio / Startup"
                          className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-white/[0.1] focus:border-accent text-white text-sm focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-mono uppercase text-text-muted mb-2">
                          Email Address <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="yourname@gmail.com"
                          className={`w-full px-4 py-3 rounded-xl bg-[#08090D] border text-white text-sm focus:outline-none transition-colors ${
                            errors.email ? 'border-red-500/80' : 'border-white/[0.1] focus:border-accent'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>

                      {/* WhatsApp / Preferred Contact (Optional) */}
                      <div>
                        <label className="block text-xs font-mono uppercase text-text-muted mb-2">
                          WhatsApp Number <span className="text-text-muted text-[10px] lowercase">(optional)</span>
                        </label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Your WhatsApp number for quick project follow-up"
                          className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-white/[0.1] focus:border-accent text-white text-sm focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Step 2: Service Interested In */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-text-muted mb-2.5">
                        Service Interested In
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {SERVICES_DATA.map((srv) => {
                          const isSelected = formData.service === srv.title;
                          return (
                            <button
                              key={srv.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, service: srv.title })}
                              data-cursor="pointer"
                              className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                                isSelected
                                  ? 'bg-accent/20 border-accent text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                                  : 'bg-[#08090D] border-white/[0.08] text-text-secondary hover:text-white hover:border-white/[0.2]'
                              }`}
                            >
                              {srv.title}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 3: Estimated Budget (INR / ₹) */}
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <label className="block text-xs font-mono uppercase text-text-muted">
                          Estimated Budget Tier (INR / ₹)
                        </label>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          Indian Rupees (INR)
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {BUDGET_TIERS.map((tier) => {
                          const isSelected = formData.budget === tier.label;
                          return (
                            <button
                              key={tier.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: tier.label })}
                              data-cursor="pointer"
                              className={`p-3 rounded-xl border text-center transition-all ${
                                isSelected
                                  ? 'bg-accent/20 border-accent text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                                  : 'bg-[#08090D] border-white/[0.08] text-text-secondary hover:text-white hover:border-white/[0.2]'
                              }`}
                            >
                              <span className="block text-xs font-bold font-mono">{tier.label}</span>
                              <span className="text-[10px] text-text-muted block mt-0.5">{tier.subtitle}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 4: Project Description */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-text-muted mb-2">
                        Project Description & Objectives <span className="text-accent">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Tell us about your brand, what you need built, design preferences, and expected launch date..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#08090D] border text-white text-sm focus:outline-none transition-colors resize-none ${
                          errors.description ? 'border-red-500/80' : 'border-white/[0.1] focus:border-accent'
                        }`}
                      />
                      {errors.description && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.description}
                        </p>
                      )}
                    </div>

                    {/* Submit CTA Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-cursor="pointer"
                      className="w-full relative group py-4 px-6 rounded-full bg-accent hover:bg-accent-hover disabled:bg-accent/50 text-white font-semibold text-base shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                          <span>Preparing Email To jassimalbin@gmail.com...</span>
                        </div>
                      ) : (
                        <>
                          <span>Send Project Enquiry</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
