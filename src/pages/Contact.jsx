import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, wire this to an API or email service (like Formspree)
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pt-12 pb-24 px-6 lg:px-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Contact Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Request a Corporate Consultation.
          </h1>
          <p className="text-lg text-slate-600 mb-12">
            Whether you are issuing a government tender or upgrading your enterprise infrastructure, our engineering team is ready to blueprint your solution.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 text-xl">📍</div>
              <div>
                <h4 className="font-bold text-slate-900">Headquarters</h4>
                <p className="text-slate-600">KG 61 Street, Kimironko Ave.<br/>P.O Box 3811, Gasabo District<br/>City of Kigali, Rwanda</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 text-xl">📞</div>
              <div>
                <h4 className="font-bold text-slate-900">Direct Lines</h4>
                <p className="text-slate-600">+250 (0)788 483 708<br/>+250 (0)781 160 198</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 text-xl">📧</div>
              <div>
                <h4 className="font-bold text-slate-900">Email</h4>
                <p className="text-slate-600">katechnology.ltd@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quote Form */}
        <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mb-2">✓</div>
              <h3 className="text-2xl font-bold text-slate-900">Request Received</h3>
              <p className="text-slate-600">Our enterprise team will contact you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="text-blue-700 font-semibold mt-4">Submit another request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Organization</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all" placeholder="Ministry of..." />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all" placeholder="jane@organization.rw" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Project Scope / Inquiry</label>
                <textarea required rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all resize-none" placeholder="Describe your hardware, software, or maintenance needs..."></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-lg transition-colors shadow-lg">
                Submit Formal Request
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}