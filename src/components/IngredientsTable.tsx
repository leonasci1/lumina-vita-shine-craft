
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Ingredient = {
  name: string;
  function: string;
  description: string;
};

const baseIngredients: Ingredient[] = [
  { name: 'Água', function: 'Solvente', description: 'Base principal para dissolver outros ingredientes' },
  { name: 'Lauril Sulfato de Sódio', function: 'Tensioativo', description: 'Agente de limpeza suave derivado do coco' },
  { name: 'Glicerina', function: 'Emoliente', description: 'Retém umidade na pele e cabelo' },
  { name: 'Pantenol', function: 'Hidratante', description: 'Vitamina B5 que fortalece e hidrata' },
  { name: 'Óleo de Jojoba', function: 'Condicionador', description: 'Óleo natural que nutre sem pesar' },
  { name: 'Estearato de Glicerila', function: 'Emulsificante', description: 'Mantém ingredientes oleosos e aquosos unidos' },
  { name: 'Cetil Álcool', function: 'Estabilizante', description: 'Ajuda na textura e estabilidade' },
  { name: 'Extrato de Aloe Vera', function: 'Calmante', description: 'Acalma o couro cabeludo e hidrata' },
  { name: 'Ácido Cítrico', function: 'Ajustador de pH', description: 'Mantém o produto no pH ideal para o cabelo' },
];

const activeIngredients: Ingredient[] = [
  { name: 'Proteína de Trigo', function: 'Reparador', description: 'Reconstrói fios danificados e previne quebra' },
  { name: 'Óleo de Argan', function: 'Nutritivo', description: 'Rico em antioxidantes e ácidos graxos essenciais' },
  { name: 'Manteiga de Karité', function: 'Hidratante', description: 'Nutrição profunda para cabelos ressecados' },
  { name: 'Extrato de Ginseng', function: 'Estimulante', description: 'Estimula a circulação no couro cabeludo' },
  { name: 'Vitamina E', function: 'Antioxidante', description: 'Protege contra danos ambientais' },
  { name: 'Óleo de Coco', function: 'Condicionante', description: 'Penetra no fio para nutrição interna' },
  { name: 'Biotina', function: 'Fortalecedor', description: 'Vitamina que fortalece os fios desde a raiz' },
  { name: 'Colágeno Vegetal', function: 'Volumizador', description: 'Dá corpo e volume aos fios finos' },
  { name: 'Queratina Vegetal', function: 'Reparador', description: 'Reconstrói a estrutura capilar' },
  { name: 'Ácido Hialurônico', function: 'Hidratante', description: 'Retém umidade proporcionando hidratação profunda' },
  { name: 'Aminoácidos de Seda', function: 'Suavizante', description: 'Suaviza a cutícula e reduz o frizz' },
  { name: 'Ceramidas', function: 'Selante', description: 'Selam a cutícula e protegem a estrutura interna' },
];

const IngredientsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterIngredients = (ingredients: Ingredient[]) => {
    return ingredients.filter(ingredient => 
      ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ingredient.function.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ingredient.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Nossos Ingredientes</h2>
        <p className="text-center text-lumina-brown mb-8 max-w-2xl mx-auto">
          Conheça todos os ingredientes que usamos em nossas fórmulas e como cada um contribui para a saúde e beleza do seu cabelo.
        </p>
        
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Buscar ingrediente ou função..."
              className="w-full px-4 py-2 border border-lumina-taupe/30 rounded-md focus:outline-none focus:ring-2 focus:ring-lumina-green/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-3 top-2.5 text-lumina-taupe">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="base" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="base">Ingredientes Base</TabsTrigger>
            <TabsTrigger value="active">Ativos Opcionais</TabsTrigger>
          </TabsList>
          
          <TabsContent value="base">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-lumina-green text-white">
                    <th className="text-left p-3 rounded-tl-lg">Ingrediente</th>
                    <th className="text-left p-3">Função</th>
                    <th className="text-left p-3 rounded-tr-lg">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {filterIngredients(baseIngredients).map((ingredient, index) => (
                    <tr 
                      key={ingredient.name} 
                      className={index % 2 === 0 ? 'bg-white' : 'bg-lumina-beige/30'}
                    >
                      <td className="p-3 border-b border-lumina-taupe/20 font-medium">{ingredient.name}</td>
                      <td className="p-3 border-b border-lumina-taupe/20">{ingredient.function}</td>
                      <td className="p-3 border-b border-lumina-taupe/20">{ingredient.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="active">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-lumina-brown text-white">
                    <th className="text-left p-3 rounded-tl-lg">Ativo</th>
                    <th className="text-left p-3">Função</th>
                    <th className="text-left p-3 rounded-tr-lg">Benefícios</th>
                  </tr>
                </thead>
                <tbody>
                  {filterIngredients(activeIngredients).map((ingredient, index) => (
                    <tr 
                      key={ingredient.name} 
                      className={index % 2 === 0 ? 'bg-white' : 'bg-lumina-beige/30'}
                    >
                      <td className="p-3 border-b border-lumina-taupe/20 font-medium">{ingredient.name}</td>
                      <td className="p-3 border-b border-lumina-taupe/20">{ingredient.function}</td>
                      <td className="p-3 border-b border-lumina-taupe/20">{ingredient.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default IngredientsTable;
