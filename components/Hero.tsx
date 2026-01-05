
import React, { useState } from 'react';
import { Page, NavigateToOptions } from '../App';

interface HeroProps {
  navigateTo: (page: Page, options?: NavigateToOptions) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  const [adLink, setAdLink] = useState('');
  const [error, setError] = useState('');

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return url.startsWith('http://') || url.startsWith('https://');
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidUrl(adLink)) {
      navigateTo('contact', { data: { adUrl: adLink } });
      setError('');
    } else {
      setError('Prosím, vložte platný link inzerátu (napr. https://...).');
    }
  };

  // SVG Configuration
  const roadColor = "#2D3748"; // gray-800
  const roadLineColor = "#4A5568"; // gray-600

  // Car Definition (Shared)
  const CarDef = () => (
    <defs>
      <g id="car-shape">
        <rect x="-15" y="-8" width="30" height="16" rx="4" fill="currentColor" />
        <rect x="-10" y="-6" width="6" height="12" rx="1" fill="#1a202c" fillOpacity="0.5" />
        <rect x="4" y="-6" width="6" height="12" rx="1" fill="#1a202c" fillOpacity="0.5" />
        <circle cx="15" cy="-5" r="1.5" fill="#F6E05E" />
        <circle cx="15" cy="5" r="1.5" fill="#F6E05E" />
        <circle cx="-15" cy="-5" r="1.5" fill="#F56565" />
        <circle cx="-15" cy="5" r="1.5" fill="#F56565" />
      </g>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2D3748" strokeWidth="1" opacity="0.3"/>
      </pattern>
    </defs>
  );

  return (
    <section className="relative h-[85vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden bg-brand-dark">
      
      {/* ==============================================
          MOBILE VERSION (Vertical Highway) 
          Visible only on small screens (block md:hidden)
         ============================================== */}
      <div className="absolute inset-0 z-0 opacity-40 select-none pointer-events-none block md:hidden">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 360 800" 
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <CarDef />
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Vertical Winding Road Path */}
          <path 
            id="mobileRoad"
            d="M 80,-50 C 80,150 280,300 280,500 C 280,700 100,750 100,900" 
            fill="none" 
            stroke={roadColor} 
            strokeWidth="70" 
            strokeLinecap="round"
          />
           <path 
            d="M 80,-50 C 80,150 280,300 280,500 C 280,700 100,750 100,900" 
            fill="none" 
            stroke={roadLineColor} 
            strokeWidth="3" 
            strokeDasharray="15 15"
          />

          {/* Simple Decor Elements for Mobile */}
           <circle cx="40" cy="200" r="25" fill="#2F855A" opacity="0.6" />
           <circle cx="320" cy="600" r="30" fill="#2F855A" opacity="0.6" />
           
           {/* Mobile Car 1 (Blue) */}
           <g className="text-brand-blue" transform="scale(1.5)">
             <use href="#car-shape" />
             <animateMotion 
               dur="10s" 
               repeatCount="indefinite" 
               rotate="auto"
               path="M 80,-50 C 80,150 280,300 280,500 C 280,700 100,750 100,900"
             />
           </g>

           {/* Mobile Car 2 (White - Delayed) */}
           <g className="text-white" transform="scale(1.5)">
             <use href="#car-shape" />
             <animateMotion 
               dur="10s" 
               begin="5s"
               repeatCount="indefinite" 
               rotate="auto"
               path="M 80,-50 C 80,150 280,300 280,500 C 280,700 100,750 100,900"
             />
           </g>
        </svg>
      </div>


      {/* ==============================================
          DESKTOP VERSION (Clean Infinity Loop)
          Visible only on medium+ screens (hidden md:block)
         ============================================== */}
      <div className="absolute inset-0 z-0 opacity-40 select-none pointer-events-none hidden md:block">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1200 600" 
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <CarDef />
          
          <defs>
             {/* 
               PERFECT ALIGNMENT TRICK:
               Define the paths here with IDs. Use these IDs for both drawing the road AND moving the cars.
               This ensures 100% perfect alignment.
             */}
             
             {/* Path 1: The Infinity Loop (Figure 8 laid down) */}
             <path id="infinityRoad" d="M -100,300 L 200,300 C 400,300 400,100 600,100 C 800,100 800,500 1000,500 L 1300,500" />
             
             {/* Path 2: The Return Road (Secondary connection) */}
             <path id="returnRoad" d="M 1300,100 L 1000,100 C 800,100 800,500 600,500 C 400,500 400,300 200,300 L -100,300" />
             
             {/* Path 3: Vertical Cross (Straight through) */}
             <path id="crossRoad" d="M 600,-100 L 600,700" />
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* --- DRAWING THE ROADS --- */}
          
          {/* Base Road (Dark Gray) */}
          <use href="#infinityRoad" fill="none" stroke={roadColor} strokeWidth="50" strokeLinecap="round" />
          <use href="#returnRoad" fill="none" stroke={roadColor} strokeWidth="50" strokeLinecap="round" />
          <use href="#crossRoad" fill="none" stroke={roadColor} strokeWidth="50" />

          {/* Road Markings (Dashed Lines) */}
          <use href="#infinityRoad" fill="none" stroke={roadLineColor} strokeWidth="2" strokeDasharray="15 15" />
          <use href="#returnRoad" fill="none" stroke={roadLineColor} strokeWidth="2" strokeDasharray="15 15" />
          <use href="#crossRoad" fill="none" stroke={roadLineColor} strokeWidth="2" strokeDasharray="15 15" />


          {/* --- DECORATION (Trees only) --- */}
          <circle cx="300" cy="150" r="20" fill="#2F855A" opacity="0.6" />
          <circle cx="900" cy="400" r="25" fill="#2F855A" opacity="0.6" />
          <circle cx="550" cy="550" r="15" fill="#2F855A" opacity="0.6" />
          <circle cx="650" cy="50" r="18" fill="#2F855A" opacity="0.6" />

          {/* --- MOVING CARS --- */}
          {/* Using <mpath> ensures the car follows exactly the definitions above */}

          {/* 1. Brand Blue Car on Infinity Road */}
          <g className="text-brand-blue">
             <use href="#car-shape" />
             <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
                <mpath href="#infinityRoad" />
             </animateMotion>
          </g>

           {/* 2. White Car on Infinity Road (Delayed) */}
           <g className="text-white">
             <use href="#car-shape" />
             <animateMotion dur="12s" begin="4s" repeatCount="indefinite" rotate="auto">
                <mpath href="#infinityRoad" />
             </animateMotion>
          </g>

           {/* 3. Gray Car on Return Road (Opposite direction essentially) */}
           <g className="text-gray-400">
             <use href="#car-shape" />
             <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                <mpath href="#returnRoad" />
             </animateMotion>
          </g>
           
           {/* 4. Brand Blue Car on Cross Road (Fast) */}
           <g className="text-brand-blue">
             <use href="#car-shape" />
             <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                <mpath href="#crossRoad" />
             </animateMotion>
          </g>

        </svg>
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-10"></div>
      <div className="absolute inset-0 bg-brand-dark/40 z-10"></div>
      
      {/* Content Layer */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down drop-shadow-lg">
          Dovoz vozidiel na mieru
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl animate-fade-in-up drop-shadow-md">
          Jednoducho, bezpečne a za najlepšiu cenu. Nájdeme pre vás ideálne vozidlo z Nemecka a celej EÚ.
        </p>
        <div className="w-full max-w-2xl bg-gray-900/80 backdrop-blur-md p-4 rounded-lg shadow-2xl animate-fade-in-up border border-gray-700/50">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
            <input 
              type="text" 
              value={adLink}
              onChange={(e) => {
                setAdLink(e.target.value);
                if (error) setError('');
              }}
              placeholder="Vložte link na inzerát (napr. z mobile.de)"
              className={`w-full sm:flex-grow px-4 py-3 bg-gray-800 text-white placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 transition ${error ? 'border-red-500 ring-red-500' : 'border-gray-600 focus:ring-brand-blue'}`}
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-brand-blue text-white font-bold rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap shadow-lg shadow-brand-blue/30"
            >
              Naceniť dovoz
            </button>
          </form>
           {error && <p className="text-red-400 text-sm mt-2 text-left">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
