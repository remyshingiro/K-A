import React, { useState } from 'react';
import { projects } from '../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Enterprise categorization logic based on the client name
  const getCategory = (client) => {
    const name = client.toLowerCase();
    if (name.includes('hospital')) return 'Healthcare';
    if (name.includes('agricultural') || name.includes('tea') || name.includes('agro') || name.includes('sosoma')) return 'Agriculture & Industry';
    return 'Government & Finance'; 
  };

  const categories = ['All', 'Government & Finance', 'Agriculture & Industry', 'Healthcare'];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' || getCategory(project.client) === activeFilter
  );

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Major National Projects
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            A comprehensive track record of our enterprise installations, hardware deployments, and maintenance SLAs across Rwanda and the East African Community.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-200 pb-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category 
                  ? 'bg-blue-700 text-white shadow-md' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between">
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-100">
                    {getCategory(project.client)}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                    <span className={`w-2 h-2 rounded-full ${project.status.toLowerCase().includes('commissioned') || project.status.toLowerCase().includes('done') ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
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

              <div className="border-t border-slate-100 pt-4 mt-auto">
                <div className="flex justify-between items-center text-sm font-medium text-slate-900">
                  <span className="truncate max-w-[60%]">{project.client}</span>
                  <span className="text-slate-500 flex items-center gap-1">
                    📍 {project.location.split(',')[0]}
                  </span>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500 text-lg">No projects found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}