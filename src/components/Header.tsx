
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-lumina-beige/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/e9f5c5a4-3c81-4f36-aa07-d1c403991542.png" 
            alt="Lumina Vita" 
            className="h-12 md:h-16"
          />
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-lumina-darkBrown"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Produtos', 'Roadmap', 'Sobre', 'Contato'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="font-outline text-lg text-lumina-darkBrown hover:text-lumina-green transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-lumina-green after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-lumina-beige shadow-lg transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-60 py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4">
          {['Home', 'Produtos', 'Roadmap', 'Sobre', 'Contato'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="font-outline text-lg text-lumina-darkBrown hover:text-lumina-green transition-colors py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
