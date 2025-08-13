
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuoteSection from './components/QuoteSection';
import InfoCardsSection from './components/InfoCardsSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-neutral-light">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <QuoteSection />
        <InfoCardsSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;