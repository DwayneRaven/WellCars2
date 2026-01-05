
import React from 'react';
import { Car } from '../types';
import { Page, NavigateToOptions } from '../App';

interface CarCardProps {
  car: Car;
  navigateTo: (page: Page, options?: NavigateToOptions) => void;
}

const statusStyles = {
  'Na predaj': 'bg-green-500/20 text-green-300 border-green-400',
  'Rezervované': 'bg-yellow-500/20 text-yellow-300 border-yellow-400',
  'Predané': 'bg-red-500/20 text-red-300 border-red-400',
};

const CarCard: React.FC<CarCardProps> = ({ car, navigateTo }) => {
  const status = car.status || 'Na predaj';

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
    <div 
      onMouseMove={handleMouseMove}
      className="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl flex flex-col group border border-gray-700/50"
    >
      {/* Spotlight Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%)',
        }}
      />

      <div className="relative overflow-hidden z-0">
        <img 
          src={car.imageUrl} 
          alt={`${car.make} ${car.model}`} 
          onError={handleImageError}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full border ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow bg-gray-800 relative z-20">
        <h3 className="text-xl font-bold text-white">{car.make}</h3>
        <p className="text-lg text-gray-300 mb-4">{car.model}</p>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-400 mb-4">
          <p><strong>Rok:</strong> {car.year}</p>
          <p><strong>Motor:</strong> {car.power}</p>
          <p><strong>KM:</strong> {car.mileage.toLocaleString('sk-SK')}</p>
          <p><strong>Prevodovka:</strong> {car.transmission}</p>
          <p><strong>Palivo:</strong> {car.fuelType}</p>
        </div>

        <div className="mt-auto">
          <p className="text-2xl font-extrabold text-brand-blue mb-4">{car.price.toLocaleString('sk-SK')} €</p>
          <button 
            onClick={() => navigateTo('contact', { data: { car: car } })}
            className="w-full py-2.5 px-4 bg-brand-blue text-white font-bold rounded-md hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-brand-blue/20 relative z-30"
          >
            Mám záujem
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
