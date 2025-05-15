import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const contato: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrar com API de envio
    console.log('Form data:', formState);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-lumina-beige">
      <Header />
      <main className="py-24">
        <section className="section-container max-w-xl mx-auto">
          <h1 className="text-4xl font-semibold text-lumina-brown text-center mb-8">Contato</h1>
          {submitted ? (
            <p className="text-center text-lumina-green">Obrigado pela mensagem! Retornaremos em breve.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-lumina-brown mb-1">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-lumina-brown rounded-lg p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-lumina-brown mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-lumina-brown rounded-lg p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-lumina-brown mb-1">Mensagem</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-lumina-brown rounded-lg p-3"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-lumina-green text-white py-3 rounded-lg font-medium hover:bg-green-600 transition"
              >
                Enviar Mensagem
              </button>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default contato;
