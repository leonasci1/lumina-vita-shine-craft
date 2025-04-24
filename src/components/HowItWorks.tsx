
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Escolha o produto base',
    description: 'Selecione entre shampoo, condicionador, máscara ou outro produto para sua base personalizada.',
    icon: '🧴'
  },
  {
    number: '02',
    title: 'Adicione ingredientes ativos',
    description: 'Escolha até 3 ativos especiais para atender às necessidades específicas do seu cabelo.',
    icon: '🌱'
  },
  {
    number: '03',
    title: 'Visualize e confirme',
    description: 'Veja a composição final, o preço e o tempo estimado para entrega do seu produto.',
    icon: '✓'
  },
  {
    number: '04',
    title: 'Receba em casa',
    description: 'Seu produto personalizado será preparado com cuidado e enviado diretamente para você.',
    icon: '📦'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Como Funciona</h2>
        <p className="text-center text-lumina-brown mb-12 max-w-2xl mx-auto">
          Criamos produtos únicos para suas necessidades específicas em apenas alguns passos simples.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="relative flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Number circle */}
              <div className="w-12 h-12 rounded-full bg-lumina-green text-white flex items-center justify-center font-semibold text-lg mb-4">
                {step.number}
              </div>
              
              {/* Step content */}
              <h3 className="text-xl font-serif font-semibold mb-3">{step.title}</h3>
              <p className="text-lumina-brown">{step.description}</p>
              <div className="text-4xl mt-4">{step.icon}</div>
              
              {/* Connector line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[90%] h-[2px] bg-lumina-green/30"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="btn-secondary">
            Personalizar meu produto
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
