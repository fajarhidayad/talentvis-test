export default function CartPage() {
  return (
    <main className="container max-w-6xl pb-10 flex space-x-5">
      <section className="px-5 pt-10 flex-1 flex flex-col">
        <h1 className="font-semibold text-2xl mb-3">Shopping Cart</h1>
        <hr />
        <div className="flex-1 flex items-center justify-center">
          <h3 className="text-2xl text-gray-500 font-semibold">
            Your cart is empty
          </h3>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-10 w-[350px] self-start">
        <h2 className="text-xl mb-5 font-medium">Order Summary (0 items)</h2>
        <div className="flex items-center justify-between mb-3 text-gray-600">
          <p>Subtotal</p>
          <p>Rp 950000</p>
        </div>
        <div className="flex items-center justify-between mb-3 text-gray-600">
          <p>Discount</p>
          <p>Rp 0</p>
        </div>
        <hr />

        <div className="flex items-center justify-between mb-3 text-gray-600 font-semibold text-xl my-8">
          <h3>Total</h3>
          <p>Rp 0</p>
        </div>

        <button className="bg-orange-500 rounded-full py-4 text-white font-medium text-lg w-full">
          Checkout
        </button>
      </section>
    </main>
  );
}
