import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { ForWhom } from './components/ForWhom';
import { Methodology } from './components/Methodology';
import { ServicesDetailed } from './components/ServicesDetailed';
import { WhyTrust } from './components/WhyTrust';
import { Bio } from './components/Bio';
import { FAQ } from './components/FAQ';
import { Locations } from './components/Locations';
import { Footer } from './components/Footer';
import { IcpFilter } from './components/IcpFilter';

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-gold/30">
      <Hero onOpenFilter={() => setIsFilterOpen(true)} />
      
      <main>
        <IcpFilter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
        <PainPoints onOpenFilter={() => setIsFilterOpen(true)} />
        <ForWhom />
        <Methodology onOpenFilter={() => setIsFilterOpen(true)} />
        <ServicesDetailed onOpenFilter={() => setIsFilterOpen(true)} />
        <WhyTrust />
        <Bio />
        <FAQ />
        <Locations onOpenFilter={() => setIsFilterOpen(true)} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
