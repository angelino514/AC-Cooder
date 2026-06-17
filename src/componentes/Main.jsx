import React from 'react';
import VantagensSection from './sections/SectionVantagens';
import ServicosSection from './sections/SectionServicos';
import ContactoSection from './sections/ContactoSection';
import PortfolioSection from './sections/SectionPortifolio';


export default function MainContent() {
   return (
      <main className="main-content">
         <VantagensSection />
         <ServicosSection />
         <PortfolioSection />
         <ContactoSection /> 
      </main>
   );
}