import React from 'react';
import { Service } from '../types';
import CheckCircleIcon from './icons/CheckCircleIcon';
import TruckIcon from './icons/TruckIcon';
import MagnifyingGlassIcon from './icons/MagnifyingGlassIcon';
import DocumentTextIcon from './icons/DocumentTextIcon';
import ShieldCheckIcon from './icons/ShieldCheckIcon';
import BanknotesIcon from './icons/BanknotesIcon';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <MagnifyingGlassIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: 'Dôkladné preverenie',
      description: 'Každé vozidlo prechádza detailnou technickou kontrolou a preverením histórie.'
    },
    {
      icon: <DocumentTextIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: 'Administratíva',
      description: 'Vybavíme kúpnu zmluvu, kontrolu originality, STK/EK aj prihlásenie.'
    },
    {
      icon: <TruckIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: 'Doprava domov',
      description: 'Bezpečná a poistená preprava vozidla priamo na vašu adresu.'
    },
    {
      icon: <BanknotesIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: 'Financovanie',
      description: 'Pomôžeme vám nájsť najvýhodnejší leasing alebo úver na mieru.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: 'Predĺžená záruka',
      description: 'Možnosť záruky na dovezené vozidlo, ktorá kryje nečakané poruchy.'
    },
    {
      icon: <CheckCircleIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: 'Servis',
      description: 'Poskytujeme následný servis a sme k dispozícii pre otázky.'
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">S nami je dovoz auta bez starostí</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Poskytujeme komplexné služby od výberu až po odovzdanie.</p>
        </div>

        {/* 
            Grid layout configuration:
            grid-cols-2: Mobile default (creates the 3x2 layout requested)
            lg:grid-cols-3: Desktop default (creates 2x3 layout)
        */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="relative z-10 flex flex-col items-center h-full">
                <div className="icon-container mb-4 md:mb-6">
                   {service.icon}
                </div>
                <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">{service.title}</h3>
                <p className="text-xs md:text-base opacity-80 flex-grow leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;