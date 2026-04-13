import React from 'react';
import { partners } from '../data/partners';

export default function PartnersGrid() {
  return (
    <section id="partners" className="py-24 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-blue-700 font-semibold tracking-wider uppercase text-sm mb-3">Global Network</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">Our Manufacturing Partners</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We partner with the world's leading manufacturers to bring cutting-edge hardware and software infrastructure to Rwanda.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-white border border-slate-200 p-6 rounded-xl text-center hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-center items-center h-40 group">
              <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{partner.name}</h4>
              <p className="text-xs text-slate-500 uppercase tracking-widest">{partner.location}</p>
              <div className="w-8 h-1 bg-blue-100 group-hover:bg-blue-600 mt-4 rounded-full transition-colors"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}