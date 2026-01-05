
// FIX: Import React to use React.ReactNode type.
import React from 'react';

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  imageUrl: string;
  power?: string;
  transmission?: string;
  status?: 'Na predaj' | 'Predané' | 'Rezervované';
  features?: string[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
}