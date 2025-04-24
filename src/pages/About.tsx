
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-lumina-beige">
      <Header />
      <main className="py-24">
        <section className="section-container">
          <h1 className="font-outline text-4xl md:text-5xl font-semibold text-center mb-6">
            Sobre a Lumina Vita
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="font-outline text-3xl text-lumina-brown text-center">Nossa Missão</h2>
              <p className="text-center text-lg">
                Proporcionar experiências de beleza que elevem a autoestima, promovendo autocuidado por meio de produtos de qualidade, acessíveis e cuidadosamente selecionados para valorizar a individualidade de cada pessoa.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-outline text-3xl text-lumina-brown text-center">Nossa Visão</h2>
              <p className="text-center text-lg">
                Ser referência nacional no comércio de produtos de beleza online, reconhecida pela excelência no atendimento, curadoria de marcas e impacto positivo na vida de nossos clientes.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-outline text-3xl text-lumina-brown text-center">Nossos Valores</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Autenticidade',
                  'Qualidade',
                  'Cuidado com o cliente',
                  'Inovação',
                  'Sustentabilidade',
                  'Ética'
                ].map((value) => (
                  <li key={value} className="bg-white p-4 rounded-lg shadow-md text-center">
                    <span className="font-outline text-lumina-green">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="font-outline text-3xl text-lumina-brown text-center">Diferencial</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-center text-lg">
                  Possibilidade de personalização e criação do produto conforme receita farmacêutica.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
