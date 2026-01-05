
import React from 'react';
import { Page, NavigateToOptions } from '../App';

interface FooterProps {
  navigateTo: (page: Page, options?: NavigateToOptions) => void;
}


const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-white">
              Well<span className="text-brand-blue">Cars</span>
            </h3>
            <p className="mt-4 text-sm">
              Váš spoľahlivý partner pre dovoz kvalitných a preverených vozidiel z celej Európskej únie.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Služby</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }} className="hover:text-white transition">Dovoz na objednávku</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', { section: 'services' }); }} className="hover:text-white transition">Preverenie vozidla</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', { section: 'services' }); }} className="hover:text-white transition">Prihlásenie vozidla</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', { section: 'services' }); }} className="hover:text-white transition">Financovanie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Spoločnosť</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', { section: 'about' }); }} className="hover:text-white transition">O nás</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }} className="hover:text-white transition">Kontakt</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('faq'); }} className="hover:text-white transition">Často kladené otázky</a></li>
              <li><a href="#" className="hover:text-white transition">Ochrana osobných údajov</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Kontakt</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Email: info@wellcars.sk</li>
              <li>Telefón: +421 123 456 789</li>
              <li>Adresa: Ulica 123, 811 01 Bratislava</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} WellCars. Všetky práva vyhradené.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             <a href="#" className="text-gray-500 hover:text-brand-blue transition"><span className="sr-only">Facebook</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
             <a href="#" className="text-gray-500 hover:text-brand-blue transition"><span className="sr-only">Instagram</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.398 1.363.444 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.046 1.064-.207 1.791-.444 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.398-2.427.444-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.046-1.791-.207-2.427-.444a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.398-1.363-.444-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.046-1.064.207-1.791.444-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.398 2.427-.444C9.531 2.013 9.885 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
