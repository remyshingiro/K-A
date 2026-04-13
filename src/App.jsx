import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import WorkProcess from './components/WorkProcess';
import FeaturedProjects from './components/FeaturedProjects';
import PartnersGrid from './components/PartnersGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-700 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesGrid />
        <WorkProcess />
        <FeaturedProjects />
        <PartnersGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;