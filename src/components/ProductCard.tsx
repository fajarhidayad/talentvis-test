import toast from 'react-hot-toast';
import { useCart } from '../context/CartContextProvider';
import { formatCurrency } from '../utils/formatCurrency';

type Product = { id: number; name: string; price: number; imgUrl: string };

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: ProductCardProps) {
  const { addCartItem } = useCart();

  const price = formatCurrency.format(props.product.price);

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-100 h-[250px] mb-2">
        <img src={props.product.imgUrl} alt={props.product.name} />
      </div>
      <div className="p-3">
        <h1 className="font-medium mb-1">{props.product.name}</h1>
        <h3 className="font-semibold mb-2">{price}</h3>
        <button
          onClick={() => {
            addCartItem({ ...props.product, quantity: 1 });
            // when an item successfully added to cart, then the toast wil pop up with message
            toast.success('Added to cart');
          }}
          className="rounded-full px-4 py-2 border-2 border-slate-800 text-sm font-semibold hover:bg-orange-400 hover:text-white duration-200 hover:border-slate-100"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
