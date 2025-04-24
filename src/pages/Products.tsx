
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductConfigurator from '@/components/ProductConfigurator';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';

const Products = () => {
  return (
    <div className="min-h-screen bg-lumina-beige">
      <Header />
      <main className="py-24">
        <section className="section-container">
          <h1 className="font-outfit text-4xl md:text-5xl font-semibold text-center mb-6">
            Nossos Produtos
          </h1>
          <p className="text-center text-lumina-brown mb-12 max-w-2xl mx-auto font-outfit">
            Descubra nossa linha completa de produtos desenvolvidos com ingredientes naturais e tecnologia avançada para transformar seus cabelos.
          </p>
          
          <ProductGrid 
            products={products} 
            onPersonalize={(productId) => {
              const configElement = document.getElementById('configurator');
              configElement?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </section>
        
        <section id="configurator" className="mt-16">
          <ProductConfigurator />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;

