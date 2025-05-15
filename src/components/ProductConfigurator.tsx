import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { products } from '@/data/products';

type Ingredient = {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
};

type ProductBase = {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  image: string;
};

const activeIngredients: Ingredient[] = [
  { id: 'protein', name: 'Proteína de Queratina', description: 'Fortalece e repara a fibra capilar', price: 12.90, icon: '💪' },
  { id: 'argan', name: 'Óleo de Argan', description: 'Nutrição intensa e brilho', price: 15.90, icon: '✨' },
  { id: 'aloe', name: 'Aloe Vera', description: 'Hidratação e alívio para o couro cabeludo', price: 8.90, icon: '🌵' },
  { id: 'biotin', name: 'Biotina', description: 'Estimula o crescimento saudável', price: 14.90, icon: '📈' },
  { id: 'collagen', name: 'Colágeno Vegetal', description: 'Elasticidade e maciez', price: 13.90, icon: '🌱' },
  { id: 'panthenol', name: 'Pantenol', description: 'Hidratação profunda e retenção de umidade', price: 9.90, icon: '💧' },
  { id: 'coconut', name: 'Óleo de Coco', description: 'Nutrição e proteção natural', price: 10.90, icon: '🥥' },
  { id: 'shea', name: 'Manteiga de Karité', description: 'Condicionamento intenso para cabelos secos', price: 11.90, icon: '🧴' },
];

const productBases: ProductBase[] = [
  { id: 'shampoo', name: 'Shampoo Nutritivo', description: 'Base suave para limpeza diária', basePrice: 39.90, image: '/public/images/WhatsApp Image 2025-05-08 at 16.27.06 (1).jpeg' },
  { id: 'conditioner', name: 'Condicionador Hidratante', description: 'Base cremosa para condicionamento', basePrice: 45.90, image: '/images/WhatsApp Image 2025-05-08 at 16.28.47.jpeg' },
  { id: 'mask', name: 'Máscara de Tratamento', description: 'Base intensiva para tratamentos semanais', basePrice: 55.90, image: '/images/WhatsApp Image 2025-05-08 at 16.30.32.jpeg' },
];

const ProductConfigurator = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductBase | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  
  const toggleIngredient = (ingredientId: string) => {
    if (selectedIngredients.includes(ingredientId)) {
      setSelectedIngredients(selectedIngredients.filter(id => id !== ingredientId));
    } else {
      if (selectedIngredients.length < 3) {
        setSelectedIngredients([...selectedIngredients, ingredientId]);
      }
    }
  };
  
  const calculateTotalPrice = () => {
    if (!selectedProduct) return 0;
    
    const ingredientsPrice = selectedIngredients.reduce((total, ingredientId) => {
      const ingredient = activeIngredients.find(ing => ing.id === ingredientId);
      return total + (ingredient?.price || 0);
    }, 0);
    
    return selectedProduct.basePrice + ingredientsPrice;
  };
  
  const openConfigurator = (product: ProductBase) => {
    setSelectedProduct(product);
    setSelectedIngredients([]);
    setIsConfiguratorOpen(true);
  };
  
  const handleAddToCart = () => {
    // Aqui seria implementada a lógica para adicionar ao carrinho
    alert(`Produto adicionado ao carrinho: ${selectedProduct?.name} com ${selectedIngredients.length} ativos`);
    setIsConfiguratorOpen(false);
  };

  return (
    <section id="configurator" className="py-16 bg-gradient-to-b from-lumina-beige/50 to-white">
      <div className="section-container">
        <h2 className="section-title">Configure Seu Produto</h2>
        <p className="text-center text-lumina-brown mb-12 max-w-2xl mx-auto">
          Escolha a base do seu produto e adicione até 3 ativos para criar uma fórmula personalizada que atenda às necessidades específicas do seu cabelo.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {productBases.map((product) => (
            <div key={product.id} className="card flex flex-col">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover object-center mb-4 rounded-t-lg"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-serif font-semibold mb-2">{product.name}</h3>
                <p className="text-lumina-brown mb-4">{product.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-semibold text-lumina-darkBrown">
                    A partir de R$ {product.basePrice.toFixed(2)}
                  </span>
                  <button 
                    className="btn-primary text-sm px-4"
                    onClick={() => openConfigurator(product)}
                  >
                    Personalizar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Dialog open={isConfiguratorOpen} onOpenChange={setIsConfiguratorOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">
                Personalize seu {selectedProduct?.name}
              </DialogTitle>
            </DialogHeader>
            
            {selectedProduct && (
              <div className="mt-4">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Product preview */}
                  <div className="md:w-1/3">
                    <div className="bg-lumina-beige/20 p-4 rounded-lg">
                      <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.name} 
                        className="w-full h-auto mb-4 rounded-lg"
                      />
                      <h3 className="font-serif font-semibold mb-1">
                        {selectedProduct.name}
                      </h3>
                      <p className="text-sm text-lumina-brown mb-4">
                        {selectedProduct.description}
                      </p>
                      <div className="border-t border-lumina-taupe/30 pt-4 mt-4">
                        <div className="flex justify-between mb-2">
                          <span>Preço base:</span>
                          <span>R$ {selectedProduct.basePrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span>Ativos ({selectedIngredients.length}/3):</span>
                          <span>R$ {(calculateTotalPrice() - selectedProduct.basePrice).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total:</span>
                          <span>R$ {calculateTotalPrice().toFixed(2)}</span>
                        </div>
                        <div className="mt-4">
                          <span className="text-sm text-lumina-brown">
                            Tempo de preparo: {3 + selectedIngredients.length} dias úteis
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <button 
                        className="btn-primary w-full"
                        onClick={handleAddToCart}
                      >
                        Adicionar ao carrinho
                      </button>
                      <button 
                        className="btn-outline w-full"
                        onClick={() => setIsConfiguratorOpen(false)}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                  
                  {/* Ingredients selection */}
                  <div className="md:w-2/3">
                    <h4 className="font-serif text-lg mb-4">
                      Selecione até 3 ingredientes ativos:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeIngredients.map((ingredient) => {
                        const isSelected = selectedIngredients.includes(ingredient.id);
                        return (
                          <div 
                            key={ingredient.id} 
                            className={`p-3 rounded-lg border-2 transition-all cursor-pointer ${
                              isSelected 
                              ? 'border-lumina-green bg-lumina-green/10' 
                              : 'border-gray-200 hover:border-lumina-green/50'
                            } ${selectedIngredients.length >= 3 && !isSelected ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={() => selectedIngredients.length < 3 || isSelected ? toggleIngredient(ingredient.id) : null}
                          >
                            <div className="flex items-center">
                              <div className="text-2xl mr-3">{ingredient.icon}</div>
                              <div className="flex-1">
                                <h5 className="font-medium">{ingredient.name}</h5>
                                <p className="text-xs text-lumina-brown">{ingredient.description}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium">+R$ {ingredient.price.toFixed(2)}</div>
                                <div className="h-5 w-5 rounded border flex items-center justify-center mt-1">
                                  {isSelected && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-lumina-green" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProductConfigurator;
