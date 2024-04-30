import { useState } from 'react';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import data from '../data.json';

export default function HomePage() {
  // the dummy data for the products in ./data.json
  const [products] = useState(data.products);

  return (
    <main className="container max-w-6xl pb-10">
      <Banner />

      <section>
        <h2 className="font-semibold text-xl mb-5">Products For You</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
