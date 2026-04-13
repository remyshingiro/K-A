import React from 'react';

export default function WorkProcess() {
  const steps = [
    {
      id: "01",
      phase: "Procurement & Tender",
      title: "Strategic Alignment",
      description: "We analyze technical requirements and deliver competitive, realistic proposals that align your institutional needs with our global manufacturing partners.",
    },
    {
      id: "02",
      phase: "Architecture & Design",
      title: "System Blueprinting",
      description: "Our certified engineers design highly scalable architectures, ensuring all security, electrical, and structural systems meet international compliance standards.",
    },
    {
      id: "03",
      phase: "Deployment & Integration",
      title: "Precision Execution",
      description: "We deploy enterprise-grade hardware and software infrastructure with zero-downtime tolerance, accompanied by rigorous on-site installation protocols.",
    },
    {
      id: "04",
      phase: "Handover & Support",
      title: "SLA Maintenance",
      description: "Final quality checks ensure 100% compliance. We then transition seamlessly into long-term Service Level Agreements (SLAs) and preventive maintenance.",
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-blue-700 font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-blue-700"></span> Operational Excellence
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            The K&A Execution Matrix
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            From the initial government tender to long-term hardware maintenance, our execution is predictable, transparent, and strictly compliant.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          
          {/* Background Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-6 left-6 right-6 h-0.5 bg-slate-200 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              
              {/* Step Indicator Node */}
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 font-bold text-lg mb-8 group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 group-hover:-translate-y-1 transition-all duration-300">
                {step.id}
              </div>
              
              {/* Content */}
              <div className="pr-4">
                <p className="text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                  {step.phase}
                </p>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}