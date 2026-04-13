import React from 'react';

export default function About() {
  return (
    <div className="bg-white min-h-screen pt-12 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Pioneering Rwanda's Digital & Industrial Future.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Established in 2012, K&A Technology & General Business Ltd (Trade License: 102792437) has grown into a premier provider of IT services, electronics, telecommunications, security, and heavy machinery. We align cutting-edge global technology with national business strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To serve and protect the interests of our clients by providing the highest quality, cost-effective Information Technology and industrial solutions. We strive to stimulate awareness of total quality principles while embracing innovation and diversity.
            </p>
          </div>
          <div className="bg-blue-700 p-8 rounded-xl text-white shadow-lg shadow-blue-200">
            <h3 className="text-2xl font-bold mb-4">Our Strategy</h3>
            <p className="text-blue-100 leading-relaxed">
              We achieve continuous development by partnering with highly specialized regional and international organizations. By combining global manufacturing expertise with deep local operational knowledge, we guarantee ultimate client satisfaction.
            </p>
          </div>
        </div>

        {/* Leadership Profile */}
        <div className="border-t border-slate-200 pt-16">
          <h2 className="text-blue-700 font-bold tracking-widest uppercase text-xs mb-3">Executive Leadership</h2>
          <h3 className="text-3xl font-bold text-slate-900 mb-8">KAVUTSE Ananias</h3>
          <p className="text-slate-500 font-medium mb-6">Managing Director & Sole Proprietor</p>
          
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              MSc in Information Technology, Pretoria University (South Africa)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              BCom Honors (Informatics), Pretoria University (South Africa)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              Double Majors: BBA & BSc in Computer Information Systems, La Roche College (USA)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              Former Director of IT & Corporate Services, Magerwa
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              Former Network Administrator, Ministry of Finance (Rwanda)
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}