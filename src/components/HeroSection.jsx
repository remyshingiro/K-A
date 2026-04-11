// src/components/HeroSection.jsx
import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-brand-dark text-white py-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Abstract background shape for enterprise feel */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-blue opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Powering Rwanda's <br className="hidden md:block" />
          <span className="text-brand-light">Critical Infrastructure.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-10">
          Delivering enterprise IT, specialized security, and industrial machinery for national institutions and private sectors for over 10 years.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-brand-light hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded transition-colors shadow-lg">
            Request Corporate Consultation
          </button>
          <button className="bg-transparent border border-slate-500 hover:border-white text-white font-semibold py-4 px-8 rounded transition-colors">
            Explore Major Projects
          </button>
        </div>

        {/* Quick Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-700 pt-8">
          <div>
            <p className="text-4xl font-bold text-white">10+</p>
            <p className="text-sm text-slate-400 mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">25+</p>
            <p className="text-sm text-slate-400 mt-1">Major Enterprise Projects</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">15</p>
            <p className="text-sm text-slate-400 mt-1">Global Partners</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">100%</p>
            <p className="text-sm text-slate-400 mt-1">Compliance & Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}