import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-white relative overflow-hidden pt-16 pb-24 px-6 lg:px-12 border-b border-slate-100">
      {/* Subtle background decoration for depth */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 transform skew-x-12 translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="relative z-10">
          <div className="inline-block bg-blue-50 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 border border-blue-100">
            Certified Engineering & IT Consultants
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            Powering Rwanda's <br/>
            <span className="text-blue-700">Critical Infrastructure.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Delivering cutting-edge IT consultancy, high-grade security systems, and industrial machinery for national institutions and the private sector since 2012.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3.5 px-8 rounded-md transition-colors shadow-lg shadow-blue-200 text-center">
              Explore Our Services
            </button>
            <button className="bg-white border border-slate-300 hover:border-blue-700 hover:text-blue-700 text-slate-700 font-semibold py-3.5 px-8 rounded-md transition-colors text-center">
              View Major Projects
            </button>
          </div>
        </div>

        {/* Right Content - Enterprise Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6 relative z-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <p className="text-4xl font-extrabold text-slate-900">10+</p>
            <p className="text-sm text-slate-500 font-medium mt-2">Years of Excellence</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <p className="text-4xl font-extrabold text-blue-700">27</p>
            <p className="text-sm text-slate-500 font-medium mt-2">Major National Projects</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <p className="text-4xl font-extrabold text-slate-900">15</p>
            <p className="text-sm text-slate-500 font-medium mt-2">Global Manufacturing Partners</p>
          </div>
          <div className="bg-blue-700 p-6 rounded-xl shadow-md border border-blue-600 text-white">
            <p className="text-4xl font-extrabold">100%</p>
            <p className="text-sm text-blue-100 font-medium mt-2">Compliance & Delivery</p>
          </div>
        </div>

      </div>
    </section>
  );
}