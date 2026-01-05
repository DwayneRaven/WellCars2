import React from 'react';

interface HowItWorksStepProps {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
}

const HowItWorksStep: React.FC<HowItWorksStepProps> = ({ id, title, description, isActive }) => {
  return (
    <div
      className={`group relative z-10 flex flex-col items-center text-center transition-transform duration-700 ease-out ${
        isActive ? 'translate-y-0' : ''
      }`}
    >
      {/* Circle container */}
      <div className="relative mb-8 w-32 h-32">
        {/* Solid background circle to hide the connecting line. This is stacked behind the main circle. */}
        <div className="absolute inset-0 rounded-full bg-gray-900 z-10"></div>
        
        {/* Main Visible Circle with transparent background */}
        <div 
          className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-500 ease-out relative z-20 ${
            isActive 
              ? 'border-2 border-brand-blue shadow-[0_0_30px_rgba(0,122,255,0.5)] scale-105' 
              : 'border-2 border-dashed border-gray-600'
          } md:group-hover:border-solid md:group-hover:border-brand-blue md:group-hover:shadow-[0_0_30px_rgba(0,122,255,0.5)] md:group-hover:scale-105`}
        >
          <span 
            className={`text-4xl font-mono font-bold transition-colors duration-500 ${
              isActive ? 'text-white' : 'text-gray-500'
            } md:group-hover:text-white`}
          >
            {id}
          </span>
        </div>
      </div>

      {/* Content */}
      <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'} md:group-hover:text-white`}>
        {title}
      </h3>
      <p className={`text-gray-400 leading-relaxed max-w-xs mx-auto transition-colors duration-300 ${isActive ? 'text-gray-300' : 'text-gray-500'} md:group-hover:text-gray-300`}>
        {description}
      </p>
    </div>
  );
};

export default HowItWorksStep;