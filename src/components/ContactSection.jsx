import React, { useState } from 'react';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate an API call (e.g., sending an email via Formspree or an internal backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset the success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 pointer-events-none transform skew-x-12 translate-x-32"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Corporate Trust Signals */}
          <div>
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-3">
              Corporate Consultation
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to modernize your infrastructure?
            </h3>
            <p className="text-slate-400 text-lg mb-12 max-w-lg">
              Contact our engineering and procurement team today. We provide comprehensive architectural audits and hardware deployment strategies for enterprise clients across East Africa.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-blue-500 text-xl border border-slate-700">📍</div>
                <div>
                  <h4 className="font-bold text-white text-lg">Headquarters</h4>
                  <p className="text-slate-400">KG 61 Street, Kimironko Ave.<br/>P.O Box 3811, Gasabo District<br/>Kigali, Rwanda</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-blue-500 text-xl border border-slate-700">📞</div>
                <div>
                  <h4 className="font-bold text-white text-lg">Direct Lines</h4>
                  <p className="text-slate-400">+250 (0)788 483 708<br/>+250 (0)781 160 198</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-blue-500 text-xl border border-slate-700">📧</div>
                <div>
                  <h4 className="font-bold text-white text-lg">Email Protocol</h4>
                  <p className="text-slate-400">katechnology.ltd@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl relative">
            
            {isSuccess ? (
              // Success State UI
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mb-6 shadow-sm">✓</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
                <p className="text-slate-600 max-w-sm">
                  Thank you for reaching out. A dedicated enterprise liaison will review your scope and contact you within 24 hours.
                </p>
              </div>
            ) : (
              // Form UI
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
                  Request a Formal Quote
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Organization <span className="text-red-500">*</span></label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all" placeholder="Ministry of..." />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Corporate Email <span className="text-red-500">*</span></label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all" placeholder="director@organization.gov.rw" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Project Scope / Inquiry <span className="text-red-500">*</span></label>
                  <textarea required rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all resize-none" placeholder="Briefly describe your hardware, software, or maintenance requirements..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full text-white font-bold py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-3 ${
                    isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800 hover:shadow-blue-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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