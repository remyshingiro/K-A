import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import FeaturedProjects from './components/FeaturedProjects';
import PartnersGrid from './components/PartnersGrid';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-700 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesGrid />
        <FeaturedProjects />
        <PartnersGrid />
      </main>
      
      {/* Footer coming next */}
    </div>
  );
}

export default App;