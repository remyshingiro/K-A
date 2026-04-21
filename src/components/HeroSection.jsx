import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  // Define your 3 image URLs here (placeholders provided, replace with your actual images)
  const imageUrls = [
    "/electrical-solution-services-in-k&a technology.webp", // Existing image, referenced correctly from public
    "/cctv-installation.webp", // Example placeholder image 2
    "/grain-dryer-k&a-technology-solutions.jpeg", // Example placeholder image 3
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image shuffling logic within useEffect
  useEffect(() => {
    // Set up an interval to change the image index periodically
    const intervalId = setInterval(() => {
      // Increment index, looping back to 0 using the modulo operator
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); // Change image every 5 seconds (5000 milliseconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [imageUrls.length]); // Re-run effect only if imageUrls array length changes

  return (
    // OPTIMIZED SIZING: Replaced min-h-[90vh] with a responsive height and a max-height cap (max-h-[850px])
    <section className="relative flex items-center min-h-[75vh] lg:min-h-[80vh] max-h-[850px] pt-24 pb-32 px-6 lg:px-12 overflow-hidden border-b border-blue-950">
      
      {/* 1. The Shuffling Cinematic Backdrops */}
      <div className="absolute inset-0 z-0 bg-blue-950">
        <img 
          // Dynamically source the image based on the current state index
          src={imageUrls[currentImageIndex]} 
          alt="Critical Infrastructure Backdrop" 
          // Keys are used to force React to re-render the image element on change, re-triggering the fade-in animation
          key={imageUrls[currentImageIndex]}
          // ADDED object-center: Ensures the browser crops equally from the edges, keeping the main subject in view.
          className="w-full h-full object-cover object-center animate-fade-in"
        />
      </div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content - The Hook */}
        <div className="animate-fade-in-up">
          <div className="inline-block bg-blue-100/10 text-blue-200 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 border border-blue-200/20 backdrop-blur-sm">
            Certified Engineering & IT Consultants
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-md">
            Powering Rwanda's <br/>
            <span className="text-blue-300">Critical Infrastructure.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-lg leading-relaxed drop-shadow-sm">
            Delivering cutting-edge IT consultancy, high-grade security systems, and industrial machinery for national institutions and the private sector since 2012.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services"
              className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-blue-300/25 text-center flex items-center justify-center gap-2"
            >
              Explore Capabilities
            </a>
            <a 
              href="#projects"
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
            <p className="text-4xl md:text-5xl font-extrabold text-white">10<span className="text-blue-300">+</span></p>
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
          <div className="bg-blue-300/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-blue-400 text-white transform hover:-translate-y-1 transition-transform duration-300">
            <p className="text-4xl md:text-5xl font-extrabold">100<span className="text-blue-950">%</span></p>
            <p className="text-sm text-blue-950 font-bold mt-2 uppercase tracking-wide">Compliance & SLA</p>
          </div>
        </div>

      </div>
    </section>
  );
}