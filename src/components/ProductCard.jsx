import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
    >
      <img
        src={product.images[0]?.src}
        alt={product.name}
        className="w-48 h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold text-nimbus-cocoa">{product.name}</h3>
      <p className="text-nimbus-gold font-medium mt-1">{product.prices?.price / 100} {product.prices?.currency_code}</p>
    </Link>
  )
}