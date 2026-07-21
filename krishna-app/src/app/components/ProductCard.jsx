"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      
      {/* Product Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full h-48 bg-gray-100 cursor-pointer">
          <Image
            src={product.image}       // 🔥 IMPORTANT
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-sm line-clamp-2 hover:text-orange-600">
            {product.name}
          </h3>
        </Link>

        {/* Source */}
        <p className="text-xs text-gray-500 mt-1">
          📍 {product.source}
        </p>

        {/* ⭐ Rating */}
        <div className="flex items-center text-yellow-500 text-sm mt-1">
          {"★".repeat(product.rating || 4)}
          {"☆".repeat(5 - (product.rating || 4))}
        </div>

        {/* Price & Add Button */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-green-700">
            ₹{product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-1.5 rounded-full"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
