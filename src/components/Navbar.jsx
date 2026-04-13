import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Major Projects', href: '#projects' },
    { name: 'Partners', href: '#partners' },
  ];

  return (
    <div className="w-full shadow-sm z-50 bg-white relative">
      {/* Top Utility Bar (Desktop Only) */}
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
      <nav className="px-6 lg:px-12 py-4 flex justify-between items-center max-w-7xl mx-auto relative z-50">
        
        {/* Dynamic Logo */}
        <div className="flex items-center gap-3 relative z-50">
          <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl transition-colors duration-300">
            K
          </div>
          <div className={`font-bold text-xl tracking-tight leading-none transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-900'}`}>
            K & A <br />
            <span className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${isOpen ? 'text-blue-400' : 'text-blue-700'}`}>
              Technology
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-700 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <button className="hidden md:block bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors shadow-md">
          Request Quote
        </button>

        {/* Animated Hamburger Button (Mobile) */}
        <button
          className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center group focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1.5 bg-white' : '-translate-y-1 bg-slate-900'}`}></span>
          <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ease-out my-0.5 ${isOpen ? 'opacity-0 bg-white' : 'opacity-100 bg-slate-900'}`}></span>
          <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1.5 bg-white' : 'translate-y-1 bg-slate-900'}`}></span>
        </button>
      </nav>

      {/* Full-Screen Command Overlay (Mobile) */}
      <div 
        className={`fixed inset-0 bg-slate-900 z-40 flex flex-col justify-center px-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
      >
        {/* Navigation Links Array */}
        <div className="flex flex-col gap-6 mt-16">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${isOpen ? i * 100 + 150 : 0}ms` }}
              className={`text-white text-4xl font-extrabold tracking-tight transform transition-all duration-500 ease-out hover:text-blue-400 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Quick Contact B2B Module */}
        <div 
          style={{ transitionDelay: `${isOpen ? 500 : 0}ms` }}
          className={`mt-auto mb-12 border-t border-slate-700 pt-8 transition-all duration-700 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Enterprise Contact</p>
          <p className="text-white text-lg font-medium mb-1">+250 (0)788 483 708</p>
          <p className="text-slate-300 mb-6">katechnology.ltd@gmail.com</p>
          
          <button className="bg-blue-700 hover:bg-blue-600 text-white w-full py-4 rounded-md font-bold text-lg transition-colors shadow-lg">
            Request Formal Quote
          </button>
        </div>
      </div>

    </div>
  );
}