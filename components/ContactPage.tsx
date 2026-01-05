import React, { useState, useEffect } from 'react';
import { Car } from '../types';

interface ContactPageProps {
  initialData?: {
    adUrl?: string;
    car?: Car;
  };
}

const ContactPage: React.FC<ContactPageProps> = ({ initialData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    let initialMessage = '';
    if (initialData?.adUrl) {
      initialMessage = `Dobrý deň, mám záujem o cenovú ponuku na dovoz vozidla z nasledujúceho inzerátu:\n${initialData.adUrl}`;
    } else if (initialData?.car) {
      const { make, model, year, price } = initialData.car;
      initialMessage = `Dobrý deň, mám záujem o vozidlo:\n\n${make} ${model}\nRok výroby: ${year}\nCena: ${price.toLocaleString('sk-SK')} €\n\nProsím o viac informácií.`;
    }
    setMessage(initialMessage);
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Prosím, vyplňte všetky povinné polia.');
      return;
    }

    const recipientEmail = 'wellcarsautocentrum@gmail.com';
    const subject = initialData?.car 
      ? `Dopyt na vozidlo: ${initialData.car.make} ${initialData.car.model}`
      : `Dopyt na cenovú ponuku`;

    const body = `
Kontaktné údaje:
Meno a priezvisko: ${name}
Email: ${email}
Telefón: ${phone}
-----------------------------------------

Správa:
${message}
    `;

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
  };

  return (
    <div className="bg-brand-dark py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold scroll-gradient-text pb-1">Kontaktujte nás</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Máte otázky alebo záujem o naše služby? Neváhajte nám napísať.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl p-8 md:p-12">
            {isSubmitted ? (
                 <div className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-4 text-brand-blue">Ďakujeme!</h2>
                    <p className="text-lg">Váš dopyt bol pripravený na odoslanie.</p>
                    <p>Prosím, dokončite odoslanie vo vašom e-mailovom klientovi, ktorý by sa mal teraz otvoriť.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Vaše meno a priezvisko*</label>
                            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Telefón*</label>
                            <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email*</label>
                        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="napr. priklad@vasadomena.com" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Vaša správa / Link na inzerát</label>
                        <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={6} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="w-full md:w-auto py-3 px-10 bg-brand-blue text-white font-bold rounded-md hover:bg-blue-600 transition-all duration-300 text-lg">
                            Odoslať dopyt
                        </button>
                    </div>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;