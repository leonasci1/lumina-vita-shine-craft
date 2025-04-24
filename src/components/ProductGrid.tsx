
import { type Product } from '@/data/products';
import ProductCard from './ProductCard';

type ProductGridProps = {
  products: Product[];
  onPersonalize: (productId: number) => void;
};

const ProductGrid = ({ products, onPersonalize }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onPersonalize={() => onPersonalize(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;

