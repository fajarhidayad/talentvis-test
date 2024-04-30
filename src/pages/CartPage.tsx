import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContextProvider';
import { formatCurrency } from '../utils/formatCurrency';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <main className="container max-w-6xl pb-10 flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-5">
      <section className="px-5 pt-10 flex-1 flex flex-col">
        <h1 className="font-semibold text-2xl mb-3">Shopping Cart</h1>
        <hr />
        {cart.length > 0 ? (
          <ul className="my-5">
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </ul>
        ) : (
          <div className="flex-1 flex items-center justify-center my-5">
            <h3 className="text-2xl text-gray-500 font-semibold">
              Your cart is empty
            </h3>
          </div>
        )}
      </section>

      <section className="bg-gray-50 px-5 py-10 self-start w-full lg:w-[350px]">
        <h2 className="text-xl mb-5 font-medium">Order Summary (0 items)</h2>
        <div className="flex items-center justify-between mb-3 text-gray-600">
          <p>Subtotal</p>
          <p>{formatCurrency.format(950000)}</p>
        </div>
        <div className="flex items-center justify-between mb-3 text-gray-600">
          <p>Discount</p>
          <p>{formatCurrency.format(0)}</p>
        </div>
        <hr />

        <div className="flex items-center justify-between mb-3 text-gray-600 font-semibold text-xl my-8">
          <h3>Total</h3>
          <p>{formatCurrency.format(950000)}</p>
        </div>

        <button className="bg-orange-500 rounded-full py-4 text-white font-medium text-lg w-full">
          Checkout
        </button>
      </section>
    </main>
  );
}
