import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const about: React.FC = () => {
  return (
    <div className="min-h-screen bg-lumina-beige">
      <Header />
      <main className="py-24 space-y-20">
        {/* Banner superior com título */}
        <section className="bg-lumina-green text-white py-32">
          <div className="section-container text-center">
            <h1 className="text-5xl font-bold">Nosso Grupo e Nossa Visão</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Conheça mais sobre quem somos, nossos valores e como impactamos positivamente o mundo da beleza.
            </p>
          </div>
        </section>

        {/* Sessão do Grupo */}
        <section className="section-container">
          <h2 className="text-3xl font-semibold text-lumina-brown mb-6">Quem Somos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="/images/about-group.jpg"
              alt="Equipe do Grupo Lumina Vita"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-lg text-lumina-brown leading-relaxed">
              Fundada em 2020, a Lumina Vita nasceu com o propósito de oferecer produtos de beleza
              personalizados, combinando inovação e sustentabilidade. Nosso grupo é formado por
              farmacêuticos, cosmetologistas e designers, todos dedicados a criar experiências únicas
              para nossos clientes.
            </p>
          </div>
        </section>

        {/* Sessão Visão e Missão lado a lado */}
        <section className="bg-white py-16">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-lumina-green">Nossa Missão</h3>
              <p className="text-lg text-lumina-brown">
                Proporcionar experiências de beleza que elevem a autoestima, promovendo autocuidado
                por meio de produtos de alta qualidade e receitas personalizadas.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-lumina-green">Nossa Visão</h3>
              <p className="text-lg text-lumina-brown">
                Ser referência nacional em beleza personalizada, reconhecida pela inovação,
                sustentabilidade e impacto positivo na vida das pessoas.
              </p>
            </div>
          </div>
        </section>

        {/* Valores em cards */}
        <section className="section-container">
          <h2 className="text-3xl font-semibold text-lumina-brown text-center mb-8">Nossos Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Autenticidade', desc: 'Valorizamos a singularidade de cada pessoa.' },
              { title: 'Qualidade', desc: 'Materiais e processos rigorosos em cada etapa.' },
              { title: 'Sustentabilidade', desc: 'Práticas eco-friendly e embalagens recicláveis.' },
              { title: 'Inovação', desc: 'Tecnologia e pesquisa voltadas para o futuro.' },
              { title: 'Cuidado com o cliente', desc: 'Atendimento humanizado e suporte contínuo.' },
              { title: 'Ética', desc: 'Transparência e responsabilidade em todas as ações.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h4 className="text-xl font-medium text-lumina-green mb-2">{item.title}</h4>
                <p className="text-lumina-brown">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Diferenciais */}
        <section className="bg-lumina-green text-white py-16">
          <div className="section-container text-center">
            <h2 className="text-3xl font-semibold mb-4">Nosso Diferencial</h2>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed">
              Oferecemos a possibilidade de criar produtos conforme receita farmacêutica e
              personalizar cada detalhe para atender necessidades específicas de cada cliente.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default about;
