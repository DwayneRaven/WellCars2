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
    // Toggle only on mobile
    if (window.innerWidth < 768) {
        setOpenIndex(openIndex === index ? null : index);
    }
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
          <h2 className="text-3xl md:text-4xl font-extrabold scroll-gradient-text pb-1">S nami je dovoz auta bez starostí</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto md:hidden">
            Kliknite na službu pre viac informácií.
          </p>
           <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto hidden md:block">
            Komplexné služby pod jednou strechou.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-start md:items-stretch">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                onClick={() => toggleService(index)}
                className={`service-card group cursor-pointer md:cursor-default ${
                    isOpen ? 'ring-2 ring-brand-blue bg-gray-700 md:ring-0 md:bg-[#1a202c]' : ''
                }`}
              >
                <div className="relative z-10 flex flex-col items-center w-full h-full justify-between">
                  <div className="flex flex-col items-center w-full">
                    <div className="icon-container mb-3 md:mb-6 transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                    </div>
                    
                    <h3 className="text-base md:text-xl font-semibold text-white mb-2 text-center leading-tight min-h-[2.5rem] md:min-h-[3.5rem] flex items-center justify-center">
                        {service.title}
                    </h3>

                    {/* Expand Icon - Mobile Only */}
                    <div className={`mt-1 mb-2 transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180 text-brand-blue' : 'text-gray-500'}`}>
                        <ChevronDownIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Animated Description Wrapper - Always expanded on Desktop */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out w-full text-center ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    } md:grid-rows-[1fr] md:opacity-100 md:block`}
                  >
                    <div className="overflow-hidden h-full flex items-center justify-center">
                      <p className="text-xs md:text-base text-gray-300 leading-relaxed pb-2 md:pb-0">
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