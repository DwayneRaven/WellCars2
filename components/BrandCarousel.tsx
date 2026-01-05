import React, { useState } from 'react';

interface Brand {
  name: string;
  domain?: string; // Domain used to fetch the logo via Clearbit
  logoUrl?: string; // Manual override if Clearbit is not sufficient
}

const brands: Brand[] = [
  { name: "Autobazár.EU", domain: "autobazar.eu" },
  { name: "Mobile.de", domain: "mobile.de" },
  { name: "UniCredit Leasing", domain: "unicredit.sk" },
  { name: "ČSOB Leasing", domain: "csobleasing.sk" },
  { name: "QuatroCar", domain: "quatro.sk" },
  { name: "B.O.F. Leasing", domain: "vub.sk" }, 
  { name: "BPT Leasing", domain: "bpt.sk" },
  { name: "OTP Leasing", domain: "otpbank.hu" },
  { name: "Slovenská sporiteľňa", domain: "slsp.sk" },
  { name: "VB Leasing", domain: "volksbank.com" },
  { name: "Tatra Leasing", domain: "tatraleasing.sk" },
  { name: "VW Finančné služby", domain: "vwfs.sk" }
];

const BrandItem: React.FC<{ brand: Brand }> = ({ brand }) => {
  const [imgError, setImgError] = useState(false);

  // If no domain/url is provided, or if image failed to load, show text
  if ((!brand.domain && !brand.logoUrl) || imgError) {
    return (
      <span className="text-xl md:text-2xl font-bold text-gray-500 whitespace-nowrap group-hover:text-white transition-colors duration-300">
        {brand.name}
      </span>
    );
  }

  const src = brand.logoUrl || `https://logo.clearbit.com/${brand.domain}?size=128`;

  return (
    <div className="relative group/item flex items-center justify-center p-2 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-110 cursor-pointer">
      <img 
        src={src}
        alt={`${brand.name} logo`}
        onError={() => setImgError(true)}
        className="h-8 md:h-12 w-auto object-contain transition-all duration-300 
                   filter brightness-0 invert opacity-70 
                   group-hover/item:filter-none group-hover/item:opacity-100"
      />
    </div>
  );
};

const BrandCarousel: React.FC = () => {
  return (
    <section className="bg-gray-900 py-12 border-t border-gray-800 border-b border-gray-800 overflow-hidden relative">
      {/* Gradient Masks for fade effect */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-2">Spolupracujeme s najlepšími</p>
        <div className="h-0.5 w-12 bg-brand-blue mx-auto rounded-full opacity-50"></div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* The Marquee Container */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
          {/* Triple the list to ensure smoother infinite loop on wider screens */}
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`} 
              className="flex items-center justify-center mx-6 md:mx-12"
            >
              <BrandItem brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;