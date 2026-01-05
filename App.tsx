import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturedCars from './components/FeaturedCars';
import Services from './components/Services';
import AboutUs from './components/Testimonials';
import Footer from './components/Footer';
import OfferPage from './components/OfferPage';
import ContactPage from './components/ContactPage';
import FaqPage from './components/FaqPage';
import './styles.css';

export type Page = 'home' | 'offer' | 'contact' | 'faq';

export interface NavigateToOptions {
  data?: any;
  section?: string;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [contactPageData, setContactPageData] = useState<any>(null);

  const navigateTo = (page: Page, options?: NavigateToOptions) => {
    setContactPageData(options?.data);

    const doScroll = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // If we are already on the target page, just scroll
    if (currentPage === page) {
      if (options?.section) {
        doScroll(options.section);
      } else {
        // If no section, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // If changing pages
      setCurrentPage(page);
      if (page === 'home' && options?.section) {
        // Capture section ID to ensure proper type narrowing inside the closure
        const sectionId = options.section;
        // Wait for the home page to render, then scroll
        setTimeout(() => doScroll(sectionId), 100);
      } else {
        // For other pages or no section, just go to the top
        window.scrollTo(0, 0);
      }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero navigateTo={navigateTo} />
            <HowItWorks />
            <FeaturedCars navigateTo={navigateTo} />
            <Services />
            <AboutUs />
          </>
        );
      case 'offer':
        return <OfferPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage initialData={contactPageData} />;
      case 'faq':
        return <FaqPage />;
      default:
        return <Hero navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="bg-brand-dark text-brand-light font-sans">
      <Header navigateTo={navigateTo} />
      <main>
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo}/>
    </div>
  );
};

export default App;