
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Ingredient = {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
};

export type ProductBase = {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  image: string;
};

export type CustomProduct = {
  base: ProductBase | null;
  selectedIngredients: string[];
};

type ProductContextType = {
  customProduct: CustomProduct;
  setProductBase: (base: ProductBase) => void;
  addIngredient: (ingredientId: string) => void;
  removeIngredient: (ingredientId: string) => void;
  clearCustomProduct: () => void;
  calculateTotalPrice: () => number;
  getEstimatedPreparationDays: () => number;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customProduct, setCustomProduct] = useState<CustomProduct>({
    base: null,
    selectedIngredients: [],
  });

  const setProductBase = (base: ProductBase) => {
    setCustomProduct(prev => ({ ...prev, base }));
  };

  const addIngredient = (ingredientId: string) => {
    if (customProduct.selectedIngredients.length < 3 && !customProduct.selectedIngredients.includes(ingredientId)) {
      setCustomProduct(prev => ({
        ...prev,
        selectedIngredients: [...prev.selectedIngredients, ingredientId],
      }));
    }
  };

  const removeIngredient = (ingredientId: string) => {
    setCustomProduct(prev => ({
      ...prev,
      selectedIngredients: prev.selectedIngredients.filter(id => id !== ingredientId),
    }));
  };

  const clearCustomProduct = () => {
    setCustomProduct({
      base: null,
      selectedIngredients: [],
    });
  };

  const calculateTotalPrice = () => {
    if (!customProduct.base) return 0;
    
    // In a real app, we would fetch ingredient prices from API
    // This is a placeholder calculation
    const basePrice = customProduct.base.basePrice;
    const ingredientsPrice = customProduct.selectedIngredients.length * 10; // assume each ingredient costs R$10
    
    return basePrice + ingredientsPrice;
  };

  const getEstimatedPreparationDays = () => {
    // Base preparation time + additional time per ingredient
    return 3 + customProduct.selectedIngredients.length;
  };

  return (
    <ProductContext.Provider
      value={{
        customProduct,
        setProductBase,
        addIngredient,
        removeIngredient,
        clearCustomProduct,
        calculateTotalPrice,
        getEstimatedPreparationDays,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};
