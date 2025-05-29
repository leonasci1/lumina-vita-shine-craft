
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-lumina-beige to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-lumina-darkBrown">
              Ciência e cuidado para o seu cabelo brilhar
            </h1>
            <p className="text-lg md:text-xl mb-8 text-lumina-brown max-w-xl">
              Produtos capilares personalizados que combinam ingredientes naturais e tecnologia avançada para resultados extraordinários.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/produtos" className="btn-primary">
                Conheça nossos produtos
              </Link>
              <Link to="/sobre" className="btn-outline">
                Sobre a Lumina Vita
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-lumina-green/20 rounded-full blur-xl"></div>
              <video 
              src="/videos/Vídeo_Lumina_Vita_Gerado.mp4"
              autoPlay 
              loop 
              muted
              className="relative z-10 max-w-xs md:max-w-md rounded-xl transform rotate-3  pt-5 md:pt-0 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
