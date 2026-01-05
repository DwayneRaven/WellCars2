
import React from 'react';
import { cars } from '../data/cars';
import CarCard from './CarCard';
import { Page, NavigateToOptions } from '../App';

interface OfferPageProps {
  navigateTo: (page: Page, options?: NavigateToOptions) => void;
}

const OfferPage: React.FC<OfferPageProps> = ({ navigateTo }) => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Naša ponuka vozidiel</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Prezrite si aktuálnu ponuku preverených vozidiel pripravených na dovoz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map(car => (
            <CarCard key={car.id} car={car} navigateTo={navigateTo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
