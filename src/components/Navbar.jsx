import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Info, Briefcase, Building2, Handshake, Home } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Detection Engine (Threshold increased to 50px for a smoother trigger)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
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

// ADDED: Production-ready Lucide React icons
  const navLinks = [
    { 
      name: 'About Us', 
      href: '/about',
      icon: <Home className="w-4 h-4" />
    },
    { 
      name: 'Services', 
      href: '/services',
      icon: <Briefcase className="w-4 h-4" />
    },
    { 
      name: 'Major Projects', 
      href: '/projects',
      // 'Building2' is perfect for an engineering/infrastructure firm
      icon: <Building2 className="w-4 h-4" /> 
    },
    { 
      name: 'Partners', 
      href: '/partners',
      icon: <Handshake className="w-4 h-4" />
    },
  ];

  return (
    // CHANGED: Replaced "sticky" with "fixed" to permanently fix the shaking/jitter bug
    <header className={`w-full z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${isScrolled && !isOpen ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'}`}>
      
      {/* Top Utility Bar */}
      <div className={`hidden md:flex justify-between items-center bg-blue-950 text-blue-100 px-6 transition-all duration-500 overflow-hidden text-xs font-medium ${isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-10 py-2 opacity-100'}`}>
        <div className="flex gap-6">
          <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> KG 61 Street, Kimironko Ave, Kigali</span>
          <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> katechnology.ltd@gmail.com</span>
        </div>
        <div>
          <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> +250 (0)788483708 / +250 (0)781160198</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`px-4 lg:px-8 flex justify-between items-center max-w-7xl mx-auto relative z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3.5'}`}>
        
        {/* Dynamic Logo + Company Name Lockup */}
        <Link to="/" className="flex items-center gap-3 relative z-50 group" onClick={() => setIsOpen(false)}>
          <div className={`transition-all duration-300 rounded-md ${isOpen ? 'bg-white p-1.5 shadow-md' : 'p-0'}`}>
            <img 
              // FIXED: Root path avoids the broken "public/" routing issue
              src="/k&atechnology-and-general.png"
              alt="K.A Technology Solution" 
              className={`object-contain transition-all duration-500 ${isScrolled ? 'h-10 md:h-12' : 'h-14 md:h-16'}`} 
            />
          </div>
          {/* ADDED: Company Name stacked format for professional scaling */}
          <div className={`flex flex-col justify-center transition-all duration-300`}>
             <span className="font-extrabold text-blue-950 uppercase tracking-tighter text-sm md:text-lg leading-none group-hover:text-blue-700 transition-colors">K&A Technology</span>
             <span className="font-bold text-blue-500 uppercase tracking-widest text-[9px] md:text-[11px] mt-0.5">& General Business Ltd</span>
          </div>
        </Link>

        {/* Desktop Menu - LARGER TEXT & ICONS */}
        <div className="hidden lg:flex gap-8 text-base font-bold text-slate-600">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="flex items-center gap-2 hover:text-blue-700 transition-colors">
              <span className="text-blue-400">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </div>

        <a href="#contact" className="hidden lg:block bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
          Request Quote
        </a>

        {/* Animated Hamburger Button (Mobile) */}
        <button
          className="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center group focus:outline-none bg-slate-50 rounded-md border border-slate-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-5 h-[2px] rounded-full bg-blue-950 transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
          <span className={`block w-5 h-[2px] rounded-full bg-blue-950 transition-all duration-300 ease-out my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-[2px] rounded-full bg-blue-950 transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
        </button>
      </nav>

      {/* Full-Screen Command Overlay (Mobile) */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col px-6 pt-28 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
      >
        <div className="flex-grow flex flex-col justify-center gap-6 mb-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${isOpen ? i * 100 + 150 : 0}ms` }}
              className={`flex items-center gap-4 text-slate-800 text-2xl font-bold tracking-wide transform transition-all duration-500 ease-out hover:text-blue-700 border-b border-slate-100 pb-4 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                {link.icon}
              </div>
              {link.name}
            </Link>
          ))}
        </div>

        <div 
          style={{ transitionDelay: `${isOpen ? 500 : 0}ms` }}
          className={`pb-12 transition-all duration-700 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <p className="text-blue-700 text-xs font-bold uppercase tracking-widest mb-3">Enterprise Contact</p>
            <p className="text-blue-950 text-base font-extrabold mb-1">+250 (0)788 483 708</p>
            <p className="text-slate-600 text-sm mb-5">katechnology.ltd@gmail.com</p>
            
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-blue-700 hover:bg-blue-800 text-white w-full py-3.5 rounded-lg font-bold text-sm transition-colors shadow-lg flex justify-center">
              Request Formal Quote
            </a>
          </div>
        </div>
      </div>

    </header>
  );
}