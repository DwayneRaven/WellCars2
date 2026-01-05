import React, { useRef, useState, useEffect } from 'react';
import HowItWorksStep from './HowItWorksStep';
import useIntersectionObserver from '../useIntersectionObserver';

const HowItWorks: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const steps = [
    {
      id: '01',
      title: 'Vyberiete si auto',
      description: 'Pomôžeme vám nájsť ideálne vozidlo podľa vašich požiadaviek z overených zdrojov v zahraničí.',
    },
    {
      id: '02',
      title: 'Preveríme a dovezieme',
      description: 'Každé auto dôkladne preveríme, vybavíme všetku administratívu a bezpečne ho dopravíme na Slovensko.',
    },
    {
      id: '03',
      title: 'Odovzdáme vám kľúče',
      description: 'Po prihlásení a príprave vám vozidlo odovzdáme priamo do vašich rúk, pripravené na jazdu.',
    },
  ];

  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  
  const observerOptions = { threshold: 0.5 };
  const isStep1Visible = useIntersectionObserver(stepRefs[0], observerOptions);
  const isStep2Visible = useIntersectionObserver(stepRefs[1], observerOptions);
  const isStep3Visible = useIntersectionObserver(stepRefs[2], observerOptions);
  const stepVisibilities = [isStep1Visible, isStep2Visible, isStep3Visible];

  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold scroll-gradient-text mb-4 pb-1">Ako to funguje?</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Náš proces dovozu je transparentný a jednoduchý.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-600 z-0" aria-hidden="true"></div>
          
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 z-0" aria-hidden="true">
             <svg width="2px" height="100%" preserveAspectRatio="none" className="h-full">
              <path
                d="M 1 128 L 1 340"
                stroke="#718096"
                strokeWidth="2"
                strokeDasharray="8 8"
                strokeDashoffset={(isMobile && isStep2Visible) ? 0 : 212}
                style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
              />
               <path
                d="M 1 404 L 1 616"
                stroke="#718096"
                strokeWidth="2"
                strokeDasharray="8 8"
                strokeDashoffset={(isMobile && isStep3Visible) ? 0 : 212}
                style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {steps.map((step, index) => (
              <div ref={stepRefs[index]} key={step.id}>
                <HowItWorksStep
                  id={step.id}
                  title={step.title}
                  description={step.description}
                  isActive={isMobile && stepVisibilities[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;