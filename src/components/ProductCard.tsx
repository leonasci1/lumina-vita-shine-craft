
import { type Product } from '@/data/products';

type ProductCardProps = {
  product: Product;
  onPersonalize: () => void;
};

const ProductCard = ({ product, onPersonalize }: ProductCardProps) => {
  return (
    <div className="card group relative">
      <div className="overflow-hidden rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-outfit text-xl font-medium mb-2">{product.name}</h3>
        <p className="text-lumina-brown mb-4 text-sm">{product.description}</p>
        <div className="space-y-2">
          <h4 className="font-outfit text-sm font-medium">Ingredientes principais:</h4>
          <ul className="text-sm text-lumina-brown space-y-1">
            {product.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-lumina-green">•</span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-outfit font-medium text-lg">
            R$ {product.basePrice.toFixed(2)}
          </span>
          <button 
            className="btn-primary text-sm"
            onClick={onPersonalize}
          >
            Personalizar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

