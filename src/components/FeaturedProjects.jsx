import React from 'react';
import { projects } from '../data/projects';

export default function FeaturedProjects() {
  // Take the first 6 high-impact projects for the homepage
  const featured = projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-blue-700 font-semibold tracking-wider uppercase text-sm mb-2">Track Record</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Major National Projects</h3>
          </div>
          <button className="text-blue-700 font-semibold hover:text-blue-900 flex items-center gap-2 transition-colors">
            View All 27 Projects 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div key={project.id} className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between">
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.client.includes("RRA") || project.client.includes("BNR") ? "Government" : "Enterprise"}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {project.status.split(',')[0]}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-slate-200 pt-4 mt-auto">
                <div className="flex justify-between items-center text-sm font-medium text-slate-900">
                  <span className="truncate max-w-[60%]">{project.client}</span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {project.location}
                  </span>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}