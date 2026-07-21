"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "../../data/products";

export default function CategoryPage() {
  const { slug } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === slug
  );

  return (
    <main className="min-h-screen p-6 bg-[#f8f5f0]">
      <h1 className="text-3xl font-bold mb-6 text-center capitalize">
        {slug.replace("-", " ")}
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">
          No products available in this category 🙏
        </p>
      ) : (
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded"
              />
              <h2 className="mt-2 font-semibold">{product.name}</h2>
              <p className="text-orange-600 font-bold">
                ₹{product.price}
              </p>
            </Link>
          ))}
        </section>
      )}

      <div className="text-center mt-10">
        <Link href="/" className="text-orange-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
