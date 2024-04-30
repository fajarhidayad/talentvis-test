import { ShoppingCartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="container max-w-6xl flex items-center py-5">
      <Link to="/" className="font-bold text-xl mr-5 lg:mr-16">
        Shopcart
      </Link>
      <ul className="hidden md:flex items-center space-x-7 mr-auto">
        <li className="font-medium">Brands</li>
        <li className="font-medium">Categories</li>
        <li className="font-medium">Sale</li>
      </ul>

      <SearchBox />

      <Link
        to="/cart"
        className="flex items-center space-x-2 ml-auto md:ml-5 rounded-full px-4 py-2 hover:bg-slate-100"
      >
        <ShoppingCartIcon />
        <span>Cart</span>
      </Link>
    </nav>
  );
}

function SearchBox() {
  return (
    <input
      type="text"
      className="hidden md:block bg-gray-100 rounded-full px-5 py-2 w-[300px]"
      placeholder="Search product"
    />
  );
}
