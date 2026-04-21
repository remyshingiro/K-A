import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    // CHANGED: Background updated to Deep Blue, top border updated to a thick Pale Blue accent line
    <footer className="bg-blue-950 text-blue-100/80 py-16 px-6 lg:px-12 border-t-4 border-blue-400">
      
      {/* CHANGED: Mobile Gridding updated. Uses sm:grid-cols-2 for better tablet layout before dropping to 1 column on phones */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
        
        {/* Brand & Compliance - Takes full width on mobile/tablet, half on desktop */}
        <div className="col-span-1 sm:col-span-2">
          
          {/* CHANGED: Added the official logo lockup used in the Navbar */}
          <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex">
            <div className="bg-white p-1.5 rounded-md shadow-sm">
              <img 
                src="/k&atechnology-and-general.png"
                alt="K&A Technology Solution" 
                className="h-10 md:h-12 object-contain" 
              />
            </div>
            <div className="flex flex-col justify-center">
               <span className="font-extrabold text-white uppercase tracking-tighter text-lg leading-none group-hover:text-blue-300 transition-colors">K&A Technology</span>
               <span className="font-bold text-blue-400 uppercase tracking-widest text-[10px] mt-0.5">& General Business Ltd</span>
            </div>
          </Link>
          
          <p className="text-blue-200/70 mb-8 max-w-md leading-relaxed text-sm">
            Delivering mission-critical IT consultancy, electronic security, telecommunications, and heavy machinery for Rwanda's infrastructure since 2012.
          </p>
          
          {/* CHANGED: Added flex-wrap so these badges stack neatly on tiny mobile screens instead of overflowing */}
          <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-blue-300">
            {/* CHANGED: Removed colored dots, replaced with professional Shield icons */}
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-400" /> RDB Registered</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-400" /> RRA Compliant</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-400" /> RSSB Compliant</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-extrabold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div> Enterprise Solutions
          </h4>
          <ul className="space-y-3 text-sm font-medium text-blue-200/80">
            {/* CHANGED: Added animated Chevron icons for a more interactive hover state */}
            <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform" /> IT & Telecommunications</a></li>
            <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform" /> Security & Surveillance</a></li>
            <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform" /> Industrial Machinery</a></li>
            <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform" /> Agricultural Equipment</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-extrabold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div> Corporate Office
          </h4>
          <ul className="space-y-4 text-sm font-medium text-blue-200/80">
            {/* CHANGED: Emojis replaced with Lucide React icons */}
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">KG 61 Street, Kimironko Ave.<br/>P.O Box 3811, Gasabo District<br/>City of Kigali, Rwanda</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>+250 (0)788 483 708<br/>+250 (0)781 160 198</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a href="mailto:katechnology.ltd@gmail.com" className="hover:text-white transition-colors break-all">katechnology.ltd@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar - CHANGED: Ensures perfect vertical stacking on mobile and side-by-side on desktop */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-blue-900/50 text-sm text-blue-300/60 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <p>© {new Date().getFullYear()} K&A Technology & General Business Ltd. All rights reserved.</p>
        <div className="flex gap-6 font-medium">
          <a href="#" className="hover:text-blue-200 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-200 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}