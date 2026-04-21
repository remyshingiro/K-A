import React from 'react';

export default function HeroSection() {
  return (
    // Increased minimum height (min-h-[90vh]) to make the backdrop truly massive
    <section className="relative flex items-center min-h-[90vh] pt-24 pb-32 px-6 lg:px-12 overflow-hidden border-b border-blue-950">
      
      {/* 1. The Giant Cinematic Backdrop */}
      <div className="absolute inset-0 z-0">
        <img 
          src="public/electrical-solution-services-in-k&a technology.webp" 
          alt="Critical Infrastructure Backdrop" 
          className="w-full h-full object-cover animate-fade-in"
        />
        {/* Deep Blue Gradient Overlay: Ensures the text is readable while letting the right side of the image show through */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/40 mix-blend-multiply"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content - The Hook */}
        <div className="animate-fade-in-up">
          <div className="inline-block bg-amber-500/10 text-amber-500 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 border border-amber-500/20 backdrop-blur-sm">
            Certified Engineering & IT Consultants
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-md">
            Powering Rwanda's <br/>
            <span className="text-amber-500">Critical Infrastructure.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-lg leading-relaxed">
            Delivering cutting-edge IT consultancy, high-grade security systems, and industrial machinery for national institutions and the private sector since 2012.
          </p>
          
          {/* FIXED: Replaced <button> with functional <a> anchor links */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" // Routes to the ServicesGrid section
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-amber-500/25 text-center flex items-center justify-center gap-2"
            >
              Explore Capabilities
            </a>
            <a 
              href="#projects" // Routes to the FeaturedProjects section
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-8 rounded-lg transition-all backdrop-blur-sm text-center flex items-center justify-center gap-2"
            >
              View Major Projects
            </a>
          </div>
        </div>

        {/* Right Content - Glassmorphic Enterprise Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6 relative z-10">
          {/* Glass Card 1 */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 hover:bg-white/10 transition-colors">
            <p className="text-4xl md:text-5xl font-extrabold text-white">10<span className="text-amber-500">+</span></p>
            <p className="text-sm text-blue-200 font-medium mt-2 uppercase tracking-wide">Years of Excellence</p>
          </div>
          
          {/* Glass Card 2 */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 hover:bg-white/10 transition-colors">
            <p className="text-4xl md:text-5xl font-extrabold text-white">27</p>
            <p className="text-sm text-blue-200 font-medium mt-2 uppercase tracking-wide">National Projects</p>
          </div>
          
          {/* Glass Card 3 */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 hover:bg-white/10 transition-colors">
            <p className="text-4xl md:text-5xl font-extrabold text-white">15</p>
            <p className="text-sm text-blue-200 font-medium mt-2 uppercase tracking-wide">Global Partners</p>
          </div>
          
          {/* Highlighted Metric Card */}
          <div className="bg-amber-500/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-amber-400 text-white transform hover:-translate-y-1 transition-transform duration-300">
            <p className="text-4xl md:text-5xl font-extrabold">100<span className="text-blue-950">%</span></p>
            <p className="text-sm text-amber-100 font-bold mt-2 uppercase tracking-wide">Compliance & SLA</p>
          </div>
        </div>

      </div>
    </section>
  );
}