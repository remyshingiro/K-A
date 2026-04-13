import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow-sm z-50 bg-white">
      {/* Top Utility Bar */}
      <div className="hidden md:flex justify-between items-center bg-slate-900 text-slate-300 px-6 py-2 text-xs font-medium">
        <div className="flex gap-6">
          <span>📍 KG 61 Street, Kimironko Ave, Kigali</span>
          <span>📧 katechnology.ltd@gmail.com</span>
        </div>
        <div>
          <span>📞 +250 (0)788483708 / +250 (0)781160198</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-6 lg:px-12 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">K</div>
          <div className="font-bold text-xl text-slate-900 tracking-tight leading-none">
            K & A <br/><span className="text-sm text-blue-700 font-semibold uppercase tracking-widest">Technology</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <a href="#about" className="hover:text-blue-700 transition-colors">About Us</a>
          <a href="#services" className="hover:text-blue-700 transition-colors">Services</a>
          <a href="#projects" className="hover:text-blue-700 transition-colors">Major Projects</a>
          <a href="#partners" className="hover:text-blue-700 transition-colors">Partners</a>
        </div>

        <button className="hidden md:block bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors shadow-md">
          Request Quote
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </nav>
    </div>
  );
}