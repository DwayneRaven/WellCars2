
import React from 'react';
import { Car } from '../types';
import { Page, NavigateToOptions } from '../App';

interface FeaturedCarsProps {
  navigateTo: (page: Page, options?: NavigateToOptions) => void;
}

const FeaturedCars: React.FC<FeaturedCarsProps> = ({ navigateTo }) => {
  const cars: Car[] = [
    { id: 1, make: 'Audi', model: 'A6 Avant', year: 2021, price: 45000, mileage: 55000, fuelType: 'Diesel', imageUrl: 'https://images.unsplash.com/photo-1606152421811-94fa752700cb?q=80&w=800&auto=format&fit=crop' },
    { id: 2, make: 'BMW', model: 'X5', year: 2022, price: 68000, mileage: 25000, fuelType: 'Benzín', imageUrl: 'https://images.unsplash.com/photo-1556189250-72ba95452242?q=80&w=800&auto=format&fit=crop' },
    { id: 3, make: 'Mercedes-Benz', model: 'C-Class', year: 2020, price: 39500, mileage: 72000, fuelType: 'Diesel', imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop' },
    { id: 4, make: 'Volkswagen', model: 'Passat', year: 2022, price: 34000, mileage: 40000, fuelType: 'Diesel', imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop' },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty('--mouse-x', `${x}px`);
    currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop'; // Backup generic car image
  };

  return (
    <section className="py-12 md:py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Aktuálna ponuka vozidiel</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Vybrané vozidlá, ktoré sme nedávno doviezli pre našich klientov.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <div 
              key={car.id} 
              onMouseMove={handleMouseMove}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg group border border-gray-700/50"
            >
              {/* Spotlight Overlay */}
              <div 
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                  background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%)',
                }}
              />

              <div className="relative z-0 overflow-hidden">
                <img 
                  src={car.imageUrl} 
                  alt={`${car.make} ${car.model}`} 
                  onError={handleImageError}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="relative z-20 p-6 bg-gray-800">
                <h3 className="text-xl font-bold text-white">{car.make} {car.model}</h3>
                <p className="text-sm text-gray-400">{car.year}</p>
                <div className="mt-4 flex justify-between items-center text-sm text-gray-300">
                  <span>{car.mileage.toLocaleString('sk-SK')} km</span>
                  <span>{car.fuelType}</span>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <p className="text-2xl font-extrabold text-brand-blue">{car.price.toLocaleString('sk-SK')} €</p>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('offer'); }} className="text-brand-blue font-semibold hover:text-blue-400 transition">
                    Detail →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
         <div className="text-center mt-12">
          <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('offer'); }} className="px-8 py-3 bg-brand-blue text-white font-bold rounded-md hover:bg-blue-600 transition-all duration-300">
            Zobraziť všetky vozidlá
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
