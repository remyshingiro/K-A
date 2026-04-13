import React from 'react';
import ServicesGrid from '../components/ServicesGrid';
import WorkProcess from '../components/WorkProcess';

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50 pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Enterprise Solutions Architecture
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          From high-fidelity telepresence systems to industrial grain dryers, we supply, install, and maintain critical infrastructure.
        </p>
      </div>
      
      {/* We reuse the highly polished components we already built */}
      <ServicesGrid />
      <WorkProcess />
    </div>
  );
}