import React, { useState } from 'react';
import { Service } from '../types';
import CheckCircleIcon from './icons/CheckCircleIcon';
import TruckIcon from './icons/TruckIcon';
import MagnifyingGlassIcon from './icons/MagnifyingGlassIcon';
import DocumentTextIcon from './icons/DocumentTextIcon';
import ShieldCheckIcon from './icons/ShieldCheckIcon';
import BanknotesIcon from './icons/BanknotesIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';

const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services: Service[] = [
    {
      icon: <MagnifyingGlassIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: 'Dôkladné preverenie',
      description: 'Každé vozidlo prechádza detailnou technickou kontrolou a preverením histórie. Zabezpečíme, aby ste poznali skutočný stav auta skôr, ako ho kúpite.'
    },
    {
      icon: <DocumentTextIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: 'Administratíva',
      description: 'Vybavíme za vás všetky potrebné úkony – od kúpnej zmluvy, cez kontrolu originality, STK/EK, až po prihlásenie na dopravnom inšpektoráte.'
    },
    {
      icon: <TruckIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: 'Doprava domov',
      description: 'Zabezpečíme poistenú a bezpečnú prepravu vozidla od predajcu v zahraničí priamo na vašu adresu po celom Slovensku.'
    },
    {
      icon: <BanknotesIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: 'Financovanie',
      description: 'Pomôžeme vám nájsť najvýhodnejší leasing alebo úver a postaráme sa o kompletné vybavenie financovania vášho nového vozidla.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: 'Predĺžená záruka',
      description: 'Pre váš úplný pokoj v duši ponúkame možnosť predĺženej záruky na dovezené vozidlo, ktorá kryje nečakané poruchy.'
    },
    {
      icon: <CheckCircleIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: 'Servis',
      description: 'Naše služby nekončia odovzdaním kľúčov. Poskytujeme aj následný servis a sme vám k dispozícii pre akékoľvek otázky.'
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">S nami je dovoz auta bez starostí</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Kliknite na službu pre viac informácií.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-start">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                onClick={() => toggleService(index)}
                className={`service-card group cursor-pointer ${isOpen ? 'ring-2 ring-brand-blue bg-gray-750' : ''}`}
              >
                <div className="relative z-10 flex flex-col items-center w-full">
                  <div className="icon-container mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110">
                     {service.icon}
                  </div>
                  
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2 text-center leading-tight min-h-[2.5rem] md:min-h-[3.5rem] flex items-center justify-center">
                    {service.title}
                  </h3>

                  {/* Expand Icon */}
                  <div className={`mt-1 mb-2 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-blue' : 'text-gray-500'}`}>
                    <ChevronDownIcon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>

                  {/* Animated Description Wrapper */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out w-full text-center ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed pb-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;