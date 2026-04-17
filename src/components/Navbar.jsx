import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 1. IMPORT THE LOGO HERE (Adjust the filename if you used .png)
import logo from '../assets/ka-logo.webp'; 

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
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Major Projects', href: '/projects' },
    { name: 'Partners', href: '/partners' },
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
      <nav className="px-6 lg:px-12 py-3 flex justify-between items-center max-w-7xl mx-auto relative z-50">
        
        {/* ACTUAL COMPANY LOGO */}
        <Link to="/" className="flex items-center relative z-50" onClick={() => setIsOpen(false)}>
          <div className={`transition-all duration-300 rounded-md ${isOpen ? 'bg-white p-1.5 shadow-md' : 'p-0'}`}>
            <img 
              src={logo} 
              alt="K.A Technology Solution" 
              className="h-16 md:h-20 lg:h-24 object-contain transition-all duration-300" 
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="hover:text-blue-700 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <button className="hidden md:block bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors shadow-md">
          Request Quote
        </button>

      {/* Animated Hamburger Button (Mobile) - Now always dark (slate-900) */}
        <button
          className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center group focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-[2px] rounded-full bg-slate-900 transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
          <span className={`block w-6 h-[2px] rounded-full bg-slate-900 transition-all duration-300 ease-out my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-[2px] rounded-full bg-slate-900 transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
        </button>
      </nav>

      {/* Full-Screen Command Overlay (Mobile) - Light Theme */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col px-6 pt-28 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
      >
        {/* Navigation Links Array - Vertically centered and spaced */}
        <div className="flex-grow flex flex-col justify-center gap-8 mb-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${isOpen ? i * 100 + 150 : 0}ms` }}
              className={`text-slate-700 text-2xl font-bold tracking-wide transform transition-all duration-500 ease-out hover:text-blue-700 border-b border-slate-100 pb-2 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Quick Contact B2B Module - Light Theme */}
        <div 
          style={{ transitionDelay: `${isOpen ? 500 : 0}ms` }}
          className={`pb-12 transition-all duration-700 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <p className="text-blue-700 text-xs font-bold uppercase tracking-widest mb-3">Enterprise Contact</p>
            <p className="text-slate-900 text-base font-medium mb-1">+250 (0)788 483 708</p>
            <p className="text-slate-600 text-sm mb-5">katechnology.ltd@gmail.com</p>
            
            <button className="bg-blue-700 hover:bg-blue-800 text-white w-full py-3.5 rounded-lg font-bold text-sm transition-colors shadow-lg">
              Request Formal Quote
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}