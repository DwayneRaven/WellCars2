
import React, { useState, useEffect } from 'react';

// Tiny Car Icon Component for the animation
const TinyCarIcon: React.FC<{ style?: React.CSSProperties, className?: string }> = ({ style, className }) => (
  <svg style={style} className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
  </svg>
);

// Star Icon
const StarIcon: React.FC<{ style?: React.CSSProperties, className?: string }> = ({ style, className }) => (
  <svg style={style} className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

// Smiley Icon (Updated for symmetry)
const SmileyIcon: React.FC<{ style?: React.CSSProperties, className?: string }> = ({ style, className }) => (
  <svg style={style} className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM9.75 9.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-9 4.37a.75.75 0 0 1 .98-.22c.628.435 2.06 1.35 4.27 1.35s3.642-.915 4.27-1.35a.75.75 0 0 1 .86 1.228C16.32 15.7 14.545 17 12 17c-2.546 0-4.32-1.3-5.13-1.872a.75.75 0 0 1-.22-.98Z" clipRule="evenodd" />
  </svg>
);

const AboutUs: React.FC = () => {
  // Generate random items for the effects
  const [fallingCars, setFallingCars] = useState<any[]>([]);
  const [fallingReviews, setFallingReviews] = useState<any[]>([]);

  useEffect(() => {
    // 1. Cars
    const cars = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 3}s`,
      delay: `-${Math.random() * 5}s`,
      size: 14 + Math.random() * 14,
      opacity: 0.05 + Math.random() * 0.15
    }));
    setFallingCars(cars);

    // 2. Reviews (Stars and Smileys)
    const reviews = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      type: Math.random() > 0.5 ? 'star' : 'smiley', // 50/50 chance
      left: `${Math.random() * 100}%`,
      duration: `${2.5 + Math.random() * 3}s`, // Slightly slower than cars maybe?
      delay: `-${Math.random() * 5}s`,
      size: 12 + Math.random() * 12,
      opacity: 0.05 + Math.random() * 0.15
    }));
    setFallingReviews(reviews);
  }, []);

  return (
    <section id="about" className="py-20 bg-brand-dark">
      <style>{`
        @keyframes carRain {
          0% { transform: translateY(-120%); }
          100% { transform: translateY(350%); }
        }
        .animate-car-rain {
          animation-name: carRain;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">O nás</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Sme vaším spoľahlivým partnerom pre dovoz vozidiel od roku 2020. Naša vášeň pre autá a odhodlanie poskytovať prvotriedne služby nám pomohli splniť sen o novom aute už tisíckam spokojných klientov.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Naša misia: Váš komfort a istota</h3>
            <p className="text-gray-300 mb-6">
                Našou misiou je zjednodušiť proces dovozu vozidiel a priniesť vám radosť z jazdy bez zbytočných starostí. Veríme v transparentnosť, profesionalitu a individuálny prístup ku každému klientovi.
            </p>
            <p className="text-gray-300 mb-8">
                Okrem dovozu a preverenia vozidiel vám pomôžeme aj s výhodným financovaním na mieru. Spolupracujeme s poprednými finančnými inštitúciami, aby sme vám zabezpečili tie najlepšie podmienky.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
                {/* 10 000+ Card with Animated Raindrop Cars */}
                <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden border border-gray-700/50">
                    {/* Animation Layer */}
                    <div className="absolute inset-0 pointer-events-none select-none">
                      {fallingCars.map((car) => (
                        <TinyCarIcon 
                          key={car.id}
                          className="absolute text-brand-blue animate-car-rain"
                          style={{
                            left: car.left,
                            width: car.size,
                            height: car.size,
                            opacity: car.opacity,
                            animationDuration: car.duration,
                            animationDelay: car.delay,
                          }}
                        />
                      ))}
                    </div>

                    {/* Content Layer (z-10 to stay on top) */}
                    <div className="relative z-10">
                      <p className="text-4xl font-extrabold text-brand-blue drop-shadow-md">10 000+</p>
                      <p className="text-gray-300 mt-2 font-medium">Dovezených vozidiel</p>
                    </div>
                </div>

                 {/* 98% Satisfied Clients Card with Stars/Smileys */}
                 <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden border border-gray-700/50 flex flex-col justify-center">
                    {/* Animation Layer */}
                    <div className="absolute inset-0 pointer-events-none select-none">
                      {fallingReviews.map((item) => (
                         item.type === 'star' ? (
                            <StarIcon 
                              key={item.id}
                              className="absolute text-yellow-400 animate-car-rain"
                              style={{
                                left: item.left,
                                width: item.size,
                                height: item.size,
                                opacity: item.opacity,
                                animationDuration: item.duration,
                                animationDelay: item.delay,
                              }}
                            />
                         ) : (
                            <SmileyIcon 
                              key={item.id}
                              className="absolute text-brand-blue animate-car-rain"
                              style={{
                                left: item.left,
                                width: item.size,
                                height: item.size,
                                opacity: item.opacity,
                                animationDuration: item.duration,
                                animationDelay: item.delay,
                              }}
                            />
                         )
                      ))}
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10">
                        <p className="text-4xl font-extrabold text-brand-blue drop-shadow-md">98%</p>
                        <p className="text-gray-300 mt-2 font-medium">Spokojných klientov</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
