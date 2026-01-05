
import React, { useState } from 'react';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center text-left p-6 bg-gray-800 hover:bg-gray-700 focus:outline-none transition-colors duration-300"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <ChevronDownIcon
          className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-6 bg-brand-dark text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
