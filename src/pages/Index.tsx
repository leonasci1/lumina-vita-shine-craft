
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Roadmap from '@/components/Roadmap';
import ProductCarousel from '@/components/ProductCarousel';
import HowItWorks from '@/components/HowItWorks';
import ProductConfigurator from '@/components/ProductConfigurator';
import IngredientsTable from '@/components/IngredientsTable';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-lumina-beige">
      <Header />
      <Hero />
      <ProductCarousel />
      <HowItWorks />
      <ProductConfigurator />
      <Roadmap />
      <IngredientsTable />
      <Footer />
    </div>
  );
};

export default Index;
