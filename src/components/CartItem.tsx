import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import { useCart } from '../context/CartContextProvider';
import { formatCurrency } from '../utils/formatCurrency';
import type { CartItemType } from '../types';

export default function CartItem(props: CartItemType) {
  const { addCartItem, deleteCartItem, reduceCartItem } = useCart();

  return (
    <li className="flex border-b last:border-b-0 py-3">
      <div className="rounded w-24 h-24 bg-gray-100 mr-5">
        <img src={props.imgUrl} alt={props.name} />
      </div>

      <div className="flex flex-col">
        <h3 className="font-medium text-lg">{props.name}</h3>

        <button
          onClick={() => deleteCartItem(props.id)}
          className="mt-auto text-gray-700"
        >
          <Trash2Icon size={18} />
        </button>
      </div>

      <div className="ml-auto flex flex-col">
        <p className="mb-auto font-medium">
          {formatCurrency.format(props.price)}
        </p>
        <div className="flex border rounded-full items-center self-start px-3 py-1 hover:border-orange-500 duration-100">
          <button
            onClick={() => reduceCartItem(props.id)}
            disabled={props.quantity < 2}
            className="disabled:cursor-not-allowed"
          >
            <MinusIcon size={15} />
          </button>
          <span className="w-3 mx-5">{props.quantity}</span>
          <button onClick={() => addCartItem(props)}>
            <PlusIcon size={15} />
          </button>
        </div>
      </div>
    </li>
  );
}
