import React from 'react';
import { partners } from '../data/partners';

export default function PartnersGrid() {
  // Duplicate the array to create a seamless infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-16 bg-white border-t border-slate-100 relative overflow-hidden">
      
      {/* Custom CSS for the infinite marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Heading Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 text-center flex flex-col items-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-8 bg-blue-400"></div>
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-xs">Our Network</h2>
          <div className="h-px w-8 bg-blue-400"></div>
        </div>
        <h3 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight">
          Trusted Global Partners
        </h3>
      </div>

      {/* Full-width Marquee Container */}
      <div className="relative w-full flex items-center">
        
        {/* Vignette Overlay: Left & Right Fades for a premium look */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* The Scrolling Track */}
        <div className="flex w-max animate-marquee items-center gap-16 pr-16 py-4">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="group relative flex items-center justify-center w-32 md:w-48 h-20 cursor-pointer flex-shrink-0"
            >
              {/* Tooltip for context on hover */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-blue-950 text-white text-xs py-1.5 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20 shadow-md">
                {partner.name} • {partner.location}
              </div>

              {/* The Logo Image - CHANGED: Removed grayscale and opacity limits. Added a subtle scale effect on hover. */}
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}