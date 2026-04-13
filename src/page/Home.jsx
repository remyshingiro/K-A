// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import WorkProcess from '../components/WorkProcess';
import FeaturedProjects from '../components/FeaturedProjects';
import PartnersGrid from '../components/PartnersGrid';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <WorkProcess />
      <FeaturedProjects />
      <PartnersGrid />
    </main>
  );
}