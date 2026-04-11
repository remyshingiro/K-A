import React from "react";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";



export default function App(){
  return(
    <div className="min-h-screen bg-brand-gray font-sans selection:bg-brand-light selection:text-white">
      {/* Placeholder for a Navigation Component */}
      <header className="bg-brand-dark text-white p-6 flex justify-between items-center border-b border-slate-800">
        <div className="font-bold text-xl tracking-wider">K&A TECHNOLOGY</div>
        <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-300">
          <span className="hover:text-white cursor-pointer">Services</span>
          <span className="hover:text-white cursor-pointer">Projects</span>
          <span className="hover:text-white cursor-pointer">Partners</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
        </div>
      </header>

      <main>
        <HeroSection />
        <ServicesGrid />
      </main>
      
      {/* More sections coming soon... */}
    </div>
  )
}