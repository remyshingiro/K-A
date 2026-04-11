// src/components/ServicesGrid.jsx
import React from 'react';

const services = [
  {
    title: "IT & Telecommunications",
    description: "Datacenter cooling, systems security, network audits, and enterprise Single Sign-On (SSO) infrastructure.",
    icon: "💻" // You can replace these with SVG icons later
  },
  {
    title: "Security & Surveillance",
    description: "Explosive detection, electronic key management systems, and advanced corporate security hardware.",
    icon: "🛡️"
  },
  {
    title: "Industrial & Financial Machinery",
    description: "National chequebook printers, vehicle number plate production, and point-of-sale (POS) systems.",
    icon: "⚙️"
  },
  {
    title: "Agricultural & Specialized",
    description: "Mobile grain dryers, industrial tea dryers, GIS equipment, and hospital oxygen piping systems.",
    icon: "🌾"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-brand-light font-semibold tracking-wider uppercase text-sm mb-2">Our Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-dark">Enterprise Solutions Architecture</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-slate-200 rounded-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h4 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}