import React, { useState } from 'react';

const steps = [
  {
    id: "01",
    phase: "Procurement & Tender",
    title: "Strategic Alignment",
    description: "We analyze technical requirements and deliver competitive, realistic proposals that align your institutional needs with our global manufacturing partners.",
    image: "https://placehold.co/800x400/1e293b/ffffff?text=Strategic+Alignment",
  },
  {
    id: "02",
    phase: "Architecture & Design",
    title: "System Blueprinting",
    description: "Our certified engineers design highly scalable architectures, ensuring all security, electrical, and structural systems meet international compliance standards.",
    image: "https://placehold.co/800x400/334155/ffffff?text=Architecture+%26+Design",
  },
  {
    id: "03",
    phase: "Deployment & Integration",
    title: "Precision Execution",
    description: "We deploy enterprise-grade hardware and software infrastructure with zero-downtime tolerance, accompanied by rigorous on-site installation protocols.",
    image: "https://placehold.co/800x400/0f172a/ffffff?text=Deployment+%26+Execution",
  },
  {
    id: "04",
    phase: "Handover & Support",
    title: "SLA Maintenance",
    description: "Final quality checks ensure 100% compliance. We then transition seamlessly into long-term Service Level Agreements (SLAs) and preventive maintenance.",
    image: "https://placehold.co/800x400/475569/ffffff?text=Handover+%26+Support",
  }
];

export default function WorkProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* CHANGED: Section Header is now fully centered */}
        <div className="mb-12 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            {/* CHANGED: Accent color shifted to Pale Blue */}
            <div className="h-px w-8 bg-blue-400"></div>
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-xs">
              Operational Excellence
            </h2>
            <div className="h-px w-8 bg-blue-400"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight mb-4">
            The K&A Execution Matrix
          </h3>
          <p className="text-slate-500 text-base leading-relaxed max-w-2xl text-center">
            From initial government tender to long-term hardware maintenance, our execution is predictable, transparent, and strictly compliant.
          </p>
        </div>

        {/* Two-Column Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Interactive Timeline Index */}
          <div className="lg:w-4/12 flex flex-col relative space-y-2">
            <div className="hidden lg:block absolute left-5 top-5 bottom-5 w-[2px] bg-slate-200 z-0"></div>

            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`relative z-10 flex gap-4 cursor-pointer p-3 rounded-lg transition-all duration-300 group ${
                    isActive ? 'bg-white shadow-sm border border-slate-200' : 'hover:bg-slate-100/50 border border-transparent'
                  }`}
                >
                  {/* Step Node */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base border-2 transition-all duration-500 flex-shrink-0 bg-white ${
                    isActive 
                      ? 'border-blue-700 text-blue-700 shadow-[0_0_10px_rgba(29,78,216,0.15)]' 
                      : 'border-slate-200 text-slate-400 group-hover:border-blue-400 group-hover:text-blue-500'
                  }`}>
                    {step.id}
                  </div>

                  {/* Step Titles */}
                  <div className="flex flex-col justify-center">
                    {/* CHANGED: Active phase text color shifted to Pale Blue */}
                    <p className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 transition-colors ${isActive ? 'text-blue-400' : 'text-slate-400'}`}>
                      {step.phase}
                    </p>
                    <h4 className={`text-lg font-bold transition-colors duration-300 ${isActive ? 'text-blue-950' : 'text-slate-700'}`}>
                      {step.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content Display */}
          <div className="lg:w-8/12">
            <div className="bg-white rounded-xl p-5 md:p-6 border border-slate-200 shadow-md relative overflow-hidden h-full flex flex-col">
              
              <div className="w-full h-48 sm:h-56 lg:h-64 bg-slate-100 rounded-lg overflow-hidden mb-6">
                <img 
                  key={steps[activeStep].image}
                  src={steps[activeStep].image} 
                  alt={steps[activeStep].title} 
                  className="w-full h-full object-cover animate-fade-in"
                />
              </div>

              <div key={steps[activeStep].id} className="animate-fade-in flex-grow">
                <h4 className="text-xl md:text-2xl font-extrabold text-blue-950 mb-3 flex items-center gap-2">
                  {/* CHANGED: Number accent color shifted to Pale Blue */}
                  <span className="text-blue-400">{steps[activeStep].id}.</span> {steps[activeStep].title}
                </h4>
                <p className="text-slate-600 text-base leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}