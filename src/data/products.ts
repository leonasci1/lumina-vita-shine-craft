
export type Product = {
  id: number;
  name: string;
  description: string;
  basePrice: number;
  image: string;
  ingredients: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Shampoo Vitalizante",
    description: "Um shampoo suave enriquecido com proteínas e vitaminas que limpa profundamente sem ressecar. Ideal para todos os tipos de cabelo, sua fórmula exclusiva fortalece os fios desde a primeira aplicação.",
    basePrice: 49.90,
    image: "/images/shampoo.png",
    ingredients: ["Proteínas de Seda", "Pantenol", "Vitamina E"]
  },
  {
    id: 2,
    name: "Condicionador Hidratante",
    description: "Condicionador rico em óleos naturais que restaura a maciez e o brilho dos cabelos. Com fórmula livre de parabenos, deixa os fios sedosos e fáceis de pentear.",
    basePrice: 55.90,
    image: "/images/conditioner.png",
    ingredients: ["Óleo de Argan", "Queratina", "Aloe Vera"]
  },
  {
    id: 3,
    name: "Máscara Reparadora",
    description: "Tratamento intensivo semanal que recupera os fios danificados. Sua fórmula concentrada penetra profundamente na fibra capilar, devolvendo força e vitalidade aos cabelos.",
    basePrice: 65.90,
    image: "/images/mask.png",
    ingredients: ["Colágeno", "Óleos Essenciais", "Proteínas de Trigo"]
  },
  {
    id: 4,
    name: "Óleo Capilar Multibenefícios",
    description: "Óleo finalizador que proporciona brilho intenso e proteção térmica. Sua fórmula leve não deixa os fios pesados e protege contra os danos do dia a dia.",
    basePrice: 72.90,
    image: "/images/oil.png",
    ingredients: ["Óleo de Coco", "Vitamina D", "Óleo de Macadâmia"]
  }
];
