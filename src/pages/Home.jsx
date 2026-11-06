import { useEffect, useState } from 'react'
import client from '../api/client'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    client.get('/wc/store/v1/products').then((res) => setProducts(res.data))
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />

      {/* Product showcase - unchanged from before */}
      <section className="py-16 px-8 bg-nimbus-cream">
        <h2 className="text-3xl font-bold text-center text-nimbus-cocoa mb-10">
          Our Flavors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand story - unchanged */}
      <section className="py-16 px-8 text-center bg-white">
        <h2 className="text-2xl font-semibold text-nimbus-cocoa mb-4">
          Why Nimbus?
        </h2>
        <p className="text-nimbus-cocoa/70 max-w-xl mx-auto">
          Every pint is made in small batches with real ingredients — no
          stabilizers, no shortcuts, just honest ice cream.
        </p>
      </section>
    </div>
  )
}