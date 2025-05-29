import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

// URL do worker para o @react-pdf-viewer/core
const PDF_WORKER_URL = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

const Certificacao: React.FC = () => {
  return (
    <section className="py-16 bg-lumina-beige/30">
      <div className="section-container">
        <h1 className="section-title text-center">Nossas Certificações 🌿</h1>
        <p className="text-center text-lumina-brown mb-12 max-w-2xl mx-auto">
          Na Lumina Vita, nos orgulhamos de oferecer produtos que respeitam o meio ambiente, promovem a sustentabilidade e garantem a qualidade para nossos clientes. Conheça as certificações que respaldam nosso compromisso.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Certificação Orgânica */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="/images/Gemini_Generated_Image_cpi7gucpi7gucpi7.png"
              alt="Certificação Orgânica"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-lumina-darkBrown">Certificação Orgânica</h3>
            <p className="text-sm text-lumina-brown">
              Garantimos que nossos produtos são feitos com ingredientes 100% orgânicos, livres de agrotóxicos e químicos prejudiciais.
            </p>
          </div>

          {/* Visualizador de PDF - Contrato Social */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-lumina-darkBrown">Contrato Social</h3>
            <Worker workerUrl={PDF_WORKER_URL}>
              <div className="h-96 overflow-hidden border">
                <Viewer fileUrl="/pdfs/Licença_Bombeiros.pdf" />
              </div>
            </Worker>
            <a
              href="/pdfs/Licença_Bombeiros.pdf"
              download
              className="text-lumina-green font-medium hover:underline mt-4 block"
            >
              Baixar Contrato Social
            </a>
          </div>

          {/* Visualizador de PDF - Licença ANVISA */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-lumina-darkBrown">Licença ANVISA</h3>
            <Worker workerUrl={PDF_WORKER_URL}>
              <div className="h-96 overflow-hidden border">
                <Viewer fileUrl="/pdfs/LiCENÇA _ANVISA.pdf" />
              </div>
            </Worker>
            <a
              href="/pdfs/LiCENÇA _ANVISA.pdf"
              download
              className="text-lumina-green font-medium hover:underline mt-4 block"
            >
              Baixar Licença ANVISA
            </a>
          </div>

          {/* Visualizador de PDF - Alvará de Funcionamento */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-lumina-darkBrown">Alvará de Funcionamento</h3>
            <Worker workerUrl={PDF_WORKER_URL}>
              <div className="h-96 overflow-hidden border">
                <Viewer fileUrl="/pdfs/ALVARÁ DE LICENÇA PARA ESTABELECIMENTO.pdf" />
              </div>
            </Worker>
            <a
              href="/pdfs/ALVARÁ DE LICENÇA PARA ESTABELECIMENTO.pdf"
              download
              className="text-lumina-green font-medium hover:underline mt-4 block"
            >
              Baixar Alvará de Funcionamento
            </a>
          </div>

          {/* Visualizador de PDF - Licença dos Bombeiros */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-lumina-darkBrown">Licença dos Bombeiros</h3>
            <Worker workerUrl={PDF_WORKER_URL}>
              <div className="h-96 overflow-hidden border">
                <Viewer fileUrl="/pdfs/Licença_Bombeiros.pdf" />
              </div>
            </Worker>
            <a
              href="/pdfs/Licença_Bombeiros.pdf"
              download
              className="text-lumina-green font-medium hover:underline mt-4 block"
            >
              Baixar Licença dos Bombeiros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificacao;