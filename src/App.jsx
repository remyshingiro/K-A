// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
// We will build these placeholder pages next
const PlaceholderPage = ({ title }) => (
  <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
    <h1 className="text-4xl font-bold text-slate-300">{title} Page Coming Soon</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-700 selection:text-white">
        
        {/* Navbar stays fixed on all pages */}
        <Navbar />

        {/* Dynamic Page Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<PlaceholderPage title="About Us" />} />
            <Route path="/services" element={<PlaceholderPage title="Services" />} />
            <Route path="/projects" element={<PlaceholderPage title="Major Projects" />} />
            <Route path="/partners" element={<PlaceholderPage title="Partners" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
          </Routes>
        </div>

        {/* Footer stays fixed on all pages */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;