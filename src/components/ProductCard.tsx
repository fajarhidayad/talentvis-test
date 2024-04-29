interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-100 h-[250px] mb-2">
        <img src={props.imgUrl} alt={props.name} />
      </div>
      <div className="p-3">
        <h1 className="font-medium mb-1">{props.name}</h1>
        <h3 className="font-semibold mb-2">Rp {props.price}</h3>
        <button className="rounded-full px-4 py-2 border-2 border-slate-800 text-sm font-semibold hover:bg-orange-400 hover:text-white duration-200 hover:border-slate-100">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
