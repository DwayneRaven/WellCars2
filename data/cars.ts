
import { Car } from '../types';

export const cars: Car[] = [
  {
    id: 1,
    make: 'Audi',
    model: 'A6 Avant 40 TDI Sport',
    year: 2020,
    price: 33990,
    mileage: 149000,
    fuelType: 'Diesel',
    imageUrl: 'https://images.unsplash.com/photo-1606152421811-94fa752700cb?q=80&w=800&auto=format&fit=crop',
    power: '150 kW (204 PS)',
    transmission: 'Automatická',
    status: 'Na predaj',
    features: ['Virtual cockpit', 'LED svetlomety', 'Navigácia', 'Adaptívny tempomat', 'Vyhrievané sedadlá']
  },
  {
    id: 2,
    make: 'BMW',
    model: 'Rad 5 530d xDrive M-Packet',
    year: 2019,
    price: 35900,
    mileage: 135000,
    fuelType: 'Diesel',
    imageUrl: 'https://images.unsplash.com/photo-1556189250-72ba95452242?q=80&w=800&auto=format&fit=crop',
    power: '195 kW (265 PS)',
    transmission: 'Automatická',
    status: 'Na predaj',
    features: ['M-Packet exteriér/interiér', 'Head-up displej', 'Harman/Kardon audio', '360° kamera']
  },
  {
    id: 3,
    make: 'Volkswagen',
    model: 'Passat Variant 2.0 TDI R-Line',
    year: 2021,
    price: 31500,
    mileage: 98000,
    fuelType: 'Diesel',
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop',
    power: '147 kW (200 PS)',
    transmission: 'Automatická',
    status: 'Predané',
    features: ['R-Line', 'IQ.Light LED Matrix', 'Panoramatická strecha', 'Travel Assist']
  },
  {
    id: 4,
    make: 'Mercedes-Benz',
    model: 'Trieda E 220d 4MATIC',
    year: 2019,
    price: 34800,
    mileage: 155000,
    fuelType: 'Diesel',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop',
    power: '143 kW (194 PS)',
    transmission: 'Automatická',
    status: 'Na predaj',
    features: ['Pohon 4MATIC', 'Widescreen Cockpit', 'MULTIBEAM LED', 'Sada AMG']
  },
  {
    id: 5,
    make: 'Škoda',
    model: 'Superb Combi 2.0 TDI Style',
    year: 2022,
    price: 36500,
    mileage: 45000,
    fuelType: 'Diesel',
    imageUrl: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=800&auto=format&fit=crop',
    power: '147 kW (200 PS)',
    transmission: 'Automatická',
    status: 'Rezervované',
    features: ['Matrix-LED svetlomety', 'Virtuálny kokpit', 'Kožený interiér', 'Area View 360°']
  },
];
