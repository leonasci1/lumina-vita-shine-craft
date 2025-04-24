
import React from 'react';

const monthlyEvents = [
  { month: 'Janeiro', description: 'Lançamento da linha básica', icon: '✨' },
  { month: 'Fevereiro', description: 'Novos óleos essenciais', icon: '🌿' },
  { month: 'Março', description: 'Produtos para cabelos cacheados', icon: '💫' },
  { month: 'Abril', description: 'Kit tratamento intensivo', icon: '💎' },
  { month: 'Maio', description: 'Linha infantil hipoalergênica', icon: '👶' },
  { month: 'Junho', description: 'Proteção solar capilar', icon: '☀️' },
  { month: 'Julho', description: 'Máscaras de hidratação profunda', icon: '💦' },
  { month: 'Agosto', description: 'Produtos veganos', icon: '🌱' },
  { month: 'Setembro', description: 'Kit viagem tamanho travel', icon: '✈️' },
  { month: 'Outubro', description: 'Linha para cabelos coloridos', icon: '🌈' },
  { month: 'Novembro', description: 'Kits para presente', icon: '🎁' },
  { month: 'Dezembro', description: 'Edição limitada festas', icon: '🎄' },
];

const Roadmap = () => {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Roadmap de Lançamentos</h2>
        <p className="text-center text-lumina-brown mb-12 max-w-2xl mx-auto">
          Acompanhe nosso calendário de lançamentos durante o ano e fique por dentro das novidades da Lumina Vita.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {monthlyEvents.map((event, index) => (
            <div 
              key={event.month} 
              className="card border-t-4 border-lumina-green animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{event.icon}</span>
                <h3 className="text-xl font-serif font-semibold text-lumina-brown">
                  {event.month}
                </h3>
              </div>
              <p className="text-lumina-darkBrown">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
