import React, { useState } from 'react';

const services = [
  {
    id: "it-telecom",
    title: "IT & Telecommunications",
    description: "Datacenter cooling, systems security, network audits, and enterprise Single Sign-On (SSO) infrastructure.",
    // Enterprise Server/Network Icon
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
  },
  {
    id: "security",
    title: "Security & Surveillance",
    description: "Explosive detection, electronic key management systems, and advanced corporate security hardware.",
    // Enterprise Shield/Security Icon
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  },
  {
    id: "machinery",
    title: "Industrial Machinery",
    description: "National chequebook printers, vehicle number plate production, and point-of-sale (POS) systems.",
    // Industrial Cogs Icon
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  },
  {
    id: "agricultural",
    title: "Agricultural & Specialized",
    description: "Mobile grain dryers, industrial tea dryers, GIS equipment, and hospital oxygen piping systems.",
    // Specialized/Agri Icon (Leaf & Data)
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  }
];

export default function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="py-16 px-6 lg:px-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* CHANGED: Header is now perfectly centered */}
        <div className="mb-12 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            {/* CHANGED: Accent lines shifted to Pale Blue */}
            <div className="h-px w-8 bg-blue-400"></div>
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-xs">Our Capabilities</h2>
            <div className="h-px w-8 bg-blue-400"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight">
            Enterprise Solutions Architecture
          </h3>
        </div>

        {/* The Space-Saving Tab System */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Tab Controls / Interactive Service Cards */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-4 w-full px-5 py-4 rounded-lg text-left transition-all duration-300 border ${
                    isActive 
                      ? 'bg-blue-950 text-white border-blue-950 shadow-md' 
                      : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:bg-slate-50'
                  }`}
                >
                  {/* CHANGED: Active icon color shifted from Amber to Pale Blue */}
                  <div className={`${isActive ? 'text-blue-300' : 'text-slate-400'}`}>
                    {service.icon}
                  </div>
                  <span className="font-bold text-sm tracking-wide">
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Display Area */}
          <div className="w-full lg:w-2/3 h-full">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden group">
              
              {/* Subtle background icon for texture */}
              <div className="absolute -right-8 -bottom-8 text-slate-200 opacity-50 w-64 h-64 pointer-events-none transform group-hover:scale-110 transition-transform duration-700">
                {services[activeIndex].icon}
              </div>

              {/* Text Content */}
              <div key={activeIndex} className="relative z-10 animate-fade-in-up">
                <h4 className="text-2xl md:text-3xl font-extrabold text-blue-950 mb-4">
                  {services[activeIndex].title}
                </h4>
                <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                  {services[activeIndex].description}
                </p>
                
                {/* CHANGED: Link text and hover colors shifted to Pale Blue/Blue theme */}
                <a href="#contact" className="inline-flex items-center gap-2 mt-8 text-blue-600 font-bold text-sm uppercase tracking-wider hover:text-blue-700 transition-colors">
                  Discuss Requirements 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}