import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-blue-950 text-slate-300 border-t border-blue-900 relative overflow-hidden">
      
      {/* --- BACKGROUND ACCENTS & SYMBOLS --- */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/10 pointer-events-none transform skew-x-12 translate-x-32"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
      {/* ---------------------------------- */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column: Corporate Trust Signals */}
          <div>
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-3">
              Corporate Consultation
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to modernize your infrastructure?
            </h3>
            <p className="text-blue-100/70 text-base mb-10 max-w-lg">
              Contact our engineering and procurement team today. We provide comprehensive architectural audits and hardware deployment strategies for enterprise clients across East Africa.
            </p>

            {/* CHANGED: Replaced emojis with crisp Lucide React icons */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-400 border border-blue-800/50 backdrop-blur-sm shadow-inner">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Headquarters</h4>
                  <p className="text-blue-100/60 text-sm">KG 61 Street, Kimironko Ave.<br/>P.O Box 3811, Gasabo District<br/>Kigali, Rwanda</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-400 border border-blue-800/50 backdrop-blur-sm shadow-inner">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Direct Lines</h4>
                  <p className="text-blue-100/60 text-sm">+250 (0)788 483 708<br/>+250 (0)781 160 198</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-400 border border-blue-800/50 backdrop-blur-sm shadow-inner">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Email Protocol</h4>
                  <p className="text-blue-100/60 text-sm">katechnology.ltd@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl relative">
            
            {isSuccess ? (
              <div className="h-full min-h-[350px] flex flex-col items-center justify-center text-center animate-fade-in">
                {/* CHANGED: Replaced string text with Lucide icon for the success state */}
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-5 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request Received</h3>
                <p className="text-slate-600 text-sm max-w-sm">
                  Thank you for reaching out. A dedicated enterprise liaison will review your scope and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">
                  Request a Formal Quote
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" required className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all text-sm" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Organization <span className="text-red-500">*</span></label>
                    <input type="text" required className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all text-sm" placeholder="Ministry of..." />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Corporate Email <span className="text-red-500">*</span></label>
                  <input type="email" required className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all text-sm" placeholder="director@organization.gov.rw" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Project Scope / Inquiry <span className="text-red-500">*</span></label>
                  <textarea required rows="3" className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all resize-none text-sm" placeholder="Briefly describe your hardware, software, or maintenance requirements..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full text-white font-bold py-3 rounded-lg transition-all shadow-lg flex items-center justify-center gap-3 mt-2 text-sm ${
                    isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800 hover:shadow-blue-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Transmitting...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}