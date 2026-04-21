import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function FeaturedProjects() {
  // State to track the currently selected filter
  const [activeCategory, setActiveCategory] = useState('All');

  // Dynamically extract unique categories from your data to future-proof the filter bar
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(projects.map(p => p.category).filter(Boolean))];
    return ['All', ...uniqueCategories.sort()];
  }, []);

  // Filter the projects based on the active category, then take up to 8 for the grid
  const displayedProjects = useMemo(() => {
    const filtered = activeCategory === 'All' 
      ? projects 
      : projects.filter(p => p.category === activeCategory);
    return filtered.slice(0, 8);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            {/* CHANGED: Accent lines shifted to Pale Blue */}
            <div className="h-px w-12 bg-blue-400"></div>
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm">Enterprise Portfolio</h2>
            <div className="h-px w-12 bg-blue-400"></div>
          </div>
          <h3 className="text-2xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">
            National & Enterprise Infrastructure
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            From design to installation, we deliver end-to-end engineering services that meet international standards.
          </p>
        </div>

        {/* Interactive Category Filter Engine */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-900 hover:text-blue-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

{/* Project Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-16 min-h-[400px] items-start">
          {displayedProjects.length > 0 ? (
            // We added the 'index' parameter here to track which card we are rendering
            displayedProjects.map((project, index) => (
              <div 
                key={project.id} 
                // THE FIX: If index is 4 or higher (the 5th-8th projects), hide them on mobile ('hidden'), but show them as a flexbox on medium screens and up ('md:flex')
                className={`group cursor-pointer flex-col h-full bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  index >= 4 ? 'hidden md:flex' : 'flex'
                }`}
              >
                
                {/* Image Container with Zoom Physics */}
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-200 border-b border-slate-100">
                  <img 
                    src={project.image || "https://placehold.co/600x400/cbd5e1/475569?text=Project+Image"} 
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = 'https://placehold.co/600x400/cbd5e1/475569?text=Image+Unavailable'; }}
                  />
                  {/* Floating Category Badge inside image */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded shadow-sm">
                    <span className="text-blue-600 text-xs font-extrabold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Data Layer */}
                <div className="flex flex-col flex-grow p-6">
                  <h4 className="text-lg font-bold text-blue-950 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {project.title}
                  </h4>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Location Footer */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                      <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <span className="truncate max-w-[120px]">{project.location.split(',')[0]}</span>
                    </div>
                    {/* Status Indicator */}
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-600 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      {project.status}
                    </span>
                  </div>
                </div>

              </div>
            ))
          ) : (
            /* Defensive Fallback: Empty State */
            <div className="col-span-full py-12 flex flex-col items-center justify-center text-slate-500 bg-white border border-slate-200 rounded-xl border-dashed">
              <svg className="w-12 h-12 mb-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              <p className="font-medium">No projects found in this category.</p>
            </div>
          )}
        </div>

        {/* Global Call to Action */}
        <div className="flex justify-center">
          <Link 
            to="/projects" 
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            View All 27 Projects
          </Link>
        </div>

      </div>
    </section>
  );
}