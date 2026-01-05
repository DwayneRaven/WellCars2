
import React, { useState, useEffect } from 'react';
import { Page, NavigateToOptions } from '../App';
import WheelIcon from './icons/WheelIcon';

interface HeaderProps {
  navigateTo: (page: Page, options?: NavigateToOptions) => void;
}

interface NavLink {
  name: string;
  page: Page;
  section?: string;
}

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rotation, setRotation] = useState(0);

  const navLinks: NavLink[] = [
    { name: 'Služby', page: 'home' as Page, section: 'services' },
    { name: 'O nás', page: 'home' as Page, section: 'about' },
    { name: 'Často kladené otázky', page: 'faq' as Page },
    { name: 'Kontakt', page: 'contact' as Page },
  ];
  
  // Handle Scroll for Wheel Rotation
  useEffect(() => {
    const handleScroll = () => {
      // Rotate based on scroll Y position. dividing by 2 controls the speed.
      const newRotation = window.scrollY / 2; 
      setRotation(newRotation);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink) => {
      e.preventDefault();
      navigateTo(link.page, { section: link.section });
      setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-brand-dark bg-opacity-90 backdrop-blur-md shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Group: Logo + Navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0 group cursor-pointer" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>
              <a href="#" className="flex items-center gap-3">
                {/* Rotating Wheel Icon */}
                <div 
                  style={{ transform: `rotate(${rotation}deg)` }}
                  className="text-brand-blue transition-transform duration-75 ease-linear will-change-transform"
                >
                  <WheelIcon className="h-8 w-8 md:h-9 md:w-9" />
                </div>
                
                {/* Text Logo */}
                <span className="text-2xl font-bold text-white tracking-tight">
                  Well<span className="text-brand-blue">Cars</span>
                </span>
              </a>
            </div>
            
            <nav className="hidden md:flex items-center ml-10 space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Group: Buttons for Desktop, Toggle for Mobile */}
          <div className="flex items-center">
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); navigateTo('offer'); }}
                className="px-5 py-2.5 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 border border-gray-700 transition-all duration-300 hover:shadow-brand-blue/10"
              >
                Ponuka vozidiel
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}
                className="px-5 py-2.5 bg-brand-blue text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 shadow-brand-blue/20"
              >
                Vložiť Link Inzerátu
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark border-b border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                onClick={(e) => handleNavClick(e, link)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-gray-700 my-3 pt-3 space-y-3">
                <a
                href="#"
                onClick={(e) => { e.preventDefault(); navigateTo('offer'); setIsMenuOpen(false); }}
                className="text-white bg-gray-700 hover:bg-gray-600 block px-3 py-3 rounded-md text-base font-medium text-center"
                >
                Ponuka vozidiel
                </a>
                <a
                href="#"
                onClick={(e) => { e.preventDefault(); navigateTo('contact'); setIsMenuOpen(false); }}
                className="text-white bg-brand-blue hover:bg-blue-600 block px-3 py-3 rounded-md text-base font-medium text-center shadow-lg"
                >
                Vložiť Link Inzerátu
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
