
import React from 'react';
import Accordion from './Accordion';

const faqData = [
    {
      question: 'Prečo by som mal zvážiť dovoz auta z Nemecka?',
      answer: 'Nemecký trh s automobilmi je najväčší v Európe, čo znamená obrovský výber vozidiel s lepšou výbavou a v lepšom technickom stave. Autá sú často po prvom majiteľovi, pravidelne servisované v autorizovaných servisoch a jazdené na kvalitnejších cestách.'
    },
    {
      question: 'Ako dlho trvá celý proces dovozu?',
      answer: 'Celý proces, od nájdenia a preverenia vozidla až po jeho prihlásenie a odovzdanie vám, zvyčajne trvá od 7 do 14 pracovných dní. Dĺžka závisí od lokality vozidla v zahraničí a rýchlosti úradných postupov.'
    },
    {
      question: 'Aké sú všetky poplatky spojené s dovozom?',
      answer: 'Naša cenová ponuka je vždy transparentná. Zahŕňa cenu vozidla, našu províziu za služby, náklady na dopravu, poplatky za kontrolu originality, STK/EK a registračný poplatok na dopravnom inšpektoráte. Všetko vám vopred jasne rozpíšeme.'
    },
    {
      question: 'Preverujete históriu a technický stav vozidla?',
      answer: 'Áno, je to kľúčová súčasť našej práce. Dôkladne preverujeme servisnú históriu, počet predchádzajúcich majiteľov, overujeme reálnosť najazdených kilometrov a zisťujeme, či vozidlo nebolo v minulosti vážnejšie havarované.'
    },
    {
      question: 'Je možné auto financovať cez leasing alebo úver?',
      answer: 'Samozrejme. Spolupracujeme s viacerými renomovanými finančnými inštitúciami a radi vám pomôžeme s vybavením výhodného financovania na mieru vašim potrebám.'
    },
    {
      question: 'Čo ak si nájdem vozidlo sám na internete?',
      answer: 'Výborne! V takom prípade nám stačí poslať link na inzerát. My sa postaráme o všetko ostatné – preveríme predajcu aj vozidlo, zabezpečíme administratívu, dopravu a prihlásenie.'
    },
    {
      question: 'Aká je výška zálohy a kedy sa platí?',
      answer: 'Výška zálohy sa zvyčajne pohybuje od 10% do 20% z ceny vozidla a platí sa po našom dôkladnom preverení a vašom odsúhlasení kúpy. Zvyšok sumy sa dopláca pri odovzdaní vozidla.'
    },
    {
      question: 'Poskytujete na dovezené autá aj záruku?',
      answer: 'Áno, pre váš maximálny pokoj v duši vieme zabezpečiť predĺženú záruku na väčšinu dovezených vozidiel, ktorá kryje prípadné nečakané poruchy dôležitých komponentov až na 36 mesiacov.'
    },
];

const FaqPage: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Často kladené otázky</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Nájdite odpovede na všetko, čo vás zaujíma o procese dovozu vášho vysnívaného auta.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <Accordion key={index} title={item.question}>
              <p className="text-gray-300">
                {item.answer}
              </p>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
