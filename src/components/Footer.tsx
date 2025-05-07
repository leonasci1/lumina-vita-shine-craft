
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas novidades em breve.",
      });
      setEmail('');
    } else {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-lumina-darkBrown text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and about */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/lumina-vita-logo.png" alt="Lumina Vita" className="h-16 invert brightness-0 opacity-80 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-lumina-beige/80 mb-6">
              Ciência e cuidado para o seu cabelo brilhar. Produtos personalizados para necessidades únicas.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Home', 'Produtos', 'Roadmap', 'Sobre', 'Contato'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-lumina-beige/80 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-lumina-beige/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contato@luminavita.com" className="hover:text-white transition-colors">contato@luminavita.com</a>
              </li>
              <li className="flex items-center text-lumina-beige/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+552199999999" className="hover:text-white transition-colors">(21) 9999-9999</a>
              </li>
              <li className="flex items-center text-lumina-beige/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Rio de Janeiro, RJ - Brasil</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif mb-4">Newsletter</h3>
            <p className="text-lumina-beige/80 mb-4">
              Inscreva-se para receber novidades, lançamentos e promoções exclusivas.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-4 py-2 bg-white/10 text-white placeholder-white/50 rounded-l-md focus:outline-none focus:ring-1 focus:ring-lumina-green flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit" 
                className="bg-lumina-green hover:bg-opacity-90 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
            <a 
              key={social} 
              href={`https://www.${social}.com`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-lumina-green transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </a>
          ))}
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-lumina-beige/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Lumina Vita. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
