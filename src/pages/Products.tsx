
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductConfigurator from '@/components/ProductConfigurator';

const products = [
  {
    id: 1,
    name: "Shampoo Vitalizante",
    description: "Um shampoo suave enriquecido com proteínas e vitaminas que limpa profundamente sem ressecar. Ideal para todos os tipos de cabelo, sua fórmula exclusiva fortalece os fios desde a primeira aplicação.",
    basePrice: 49.90,
    image: "/placeholder.svg",
    ingredients: ["Proteínas de Seda", "Pantenol", "Vitamina E"]
  },
  {
    id: 2,
    name: "Condicionador Hidratante",
    description: "Condicionador rico em óleos naturais que restaura a maciez e o brilho dos cabelos. Com fórmula livre de parabenos, deixa os fios sedosos e fáceis de pentear.",
    basePrice: 55.90,
    image: "/placeholder.svg",
    ingredients: ["Óleo de Argan", "Queratina", "Aloe Vera"]
  },
  {
    id: 3,
    name: "Máscara Reparadora",
    description: "Tratamento intensivo semanal que recupera os fios danificados. Sua fórmula concentrada penetra profundamente na fibra capilar, devolvendo força e vitalidade aos cabelos.",
    basePrice: 65.90,
    image: "/placeholder.svg",
    ingredients: ["Colágeno", "Óleos Essenciais", "Proteínas de Trigo"]
  },
  {
    id: 4,
    name: "Óleo Capilar Multibenefícios",
    description: "Óleo finalizador que proporciona brilho intenso e proteção térmica. Sua fórmula leve não deixa os fios pesados e protege contra os danos do dia a dia.",
    basePrice: 72.90,
    image: "/placeholder.svg",
    ingredients: ["Óleo de Coco", "Vitamina D", "Óleo de Macadâmia"]
  }
];

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card group relative">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-outfit text-xl font-medium mb-2">{product.name}</h3>
                  <p className="text-lumina-brown mb-4 text-sm">{product.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-outfit text-sm font-medium">Ingredientes principais:</h4>
                    <ul className="text-sm text-lumina-brown space-y-1">
                      {product.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-lumina-green">•</span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-outfit font-medium text-lg">
                      R$ {product.basePrice.toFixed(2)}
                    </span>
                    <button 
                      className="btn-primary text-sm"
                      onClick={() => {
                        const configElement = document.getElementById('configurator');
                        configElement?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Personalizar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
