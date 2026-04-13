import React from 'react';
import { partners } from '../data/partners';

export default function PartnersGrid() {
  return (
    <section id="partners" className="py-24 px-6 lg:px-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-3">Global Network</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Our Manufacturing Partners</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We partner with the world's leading manufacturers to bring cutting-edge hardware and software infrastructure to Rwanda.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-slate-800 border border-slate-700 p-6 rounded-lg text-center hover:bg-slate-700 transition-colors flex flex-col justify-center items-center h-40">
              {/* Note: In production, swap this text for actual SVG partner logos */}
              <h4 className="font-bold text-lg text-slate-200 mb-2">{partner.name}</h4>
              <p className="text-xs text-slate-400 uppercase tracking-widest">{partner.location}</p>
              <div className="w-8 h-1 bg-blue-500 mt-4 rounded-full opacity-50"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}