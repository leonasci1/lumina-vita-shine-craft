// Arquivos separados corretamente:

// --- src/data/products.ts ---
// Contém apenas dados, sem JSX

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  basePrice: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Shampoo Revitalizante',
    description: 'Limpeza suave e hidratação intensa para cabelos opacos e danificados.',
    image: '/images/WhatsApp Image 2025-05-08 at 16.27.06 (1).jpeg',
    basePrice: 49.9,
  },
  {
    id: '2',
    name: 'Condicionador Hidratante',
    description: 'Condicionador rico em nutrientes para fortalecimento e brilho.',
    image: '/images/WhatsApp Image 2025-05-08 at 16.28.47.jpeg',
    basePrice: 79.9,
  },
  {
    id: '3',
    name: 'Máscara Nutritiva',
    description: 'Máscara rica em nutrientes para fortalecimento e brilho.',
    image: '/images/WhatsApp Image 2025-05-08 at 16.30.32.jpeg',
    basePrice: 79.9,
  },
  {
    id: '4',
    name: 'SHAMPOO LUMINA VITA',
    description: 'Shampoo rico em nutrientes para fortalecimento e brilho.',
    image: '/images/20250507_2049_Produtos Sustentáveis Lumina Vita_simple_compose_01jtpjd7n4fpjtv6jygddzvbfc.png',
    basePrice: 79.9,
  },
  // Adicione outros produtos aqui
];


