"use client";

import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p className="p-6">Product not found</p>;
  }

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="rounded shadow"
      />

      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">₹{product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
        >
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}
