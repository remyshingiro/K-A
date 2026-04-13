import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6 lg:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Brand & Compliance */}
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">K</div>
            <div className="font-bold text-xl text-white tracking-tight">
              K & A Technology
            </div>
          </div>
          <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
            Leading providers of IT consultancy, electronic security, telecommunications, and heavy machinery for Rwanda's critical infrastructure.
          </p>
          <div className="flex gap-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> RDB Registered</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> RRA Compliant</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> RSSB Compliant</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Enterprise Solutions</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">IT & Telecommunications</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Security & Surveillance</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Industrial Machinery</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Agricultural Equipment</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-bold mb-6">Corporate Office</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <span>📍</span>
              <span>KG 61 Street, Kimironko Ave.<br/>P.O Box 3811, Gasabo District<br/>City of Kigali, Rwanda</span>
            </li>
            <li className="flex items-center gap-3">
              <span>📞</span>
              <span>+250 (0)788483708<br/>+250 (0)781160198</span>
            </li>
            <li className="flex items-center gap-3">
              <span>📧</span>
              <a href="mailto:katechnology.ltd@gmail.com" className="hover:text-blue-400 transition-colors">katechnology.ltd@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} K & A Technology & General Business Ltd. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}