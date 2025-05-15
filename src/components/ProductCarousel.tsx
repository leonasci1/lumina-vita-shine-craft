import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { products } from '@/data/products';

const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Update slidesToShow based on window width for responsiveness
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width < 640) setSlidesToShow(1);
      else if (width < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const totalSlides = products.length;
  const maxIndex = totalSlides - slidesToShow;

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1));
  }, [maxIndex]);

  const slideWidthPercent = 100 / slidesToShow;

  return (
    <section className="py-16 bg-lumina-beige/30">
      <div className="section-container">
        <h2 className="section-title">Produtos em Destaque</h2>
        <p className="text-center text-lumina-brown mb-12 max-w-2xl mx-auto">
          Conheça nossa linha principal de produtos desenvolvidos para transformar a saúde e a beleza do seu cabelo.
        </p>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * slideWidthPercent}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 p-4"
                  style={{ width: `${slideWidthPercent}%` }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                    <div className="overflow-hidden h-48 flex items-center justify-center bg-lumina-beige/20">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-serif font-medium text-xl mb-2">{product.name}</h3>
                      <p className="text-sm text-lumina-brown mb-3">
                        {product.description.substring(0, 100)}...
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lumina-darkBrown">
                          R$ {product.basePrice.toFixed(2).replace('.', ',')}
                        </span>
                        <button className="text-sm text-lumina-green font-medium hover:underline">
                          Personalizar
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors z-10"
            onClick={prevSlide}
            aria-label="Slide anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-lumina-darkBrown">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors z-10"
            onClick={nextSlide}
            aria-label="Próximo slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-lumina-darkBrown">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/produtos" className="btn-primary">
            Ver todos os produtos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
