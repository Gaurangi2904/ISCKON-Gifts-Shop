"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart(); // ✅ correct name

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-orange-600">
        🛕 ISKCON Shop
      </Link>

      <div className="flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/categories/deities">Categories</Link>

        <Link href="/cart" className="relative">
          🛒 Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
        <Link href="/about" className="hover:text-orange-500">
           About Us
      </Link>

      </div>
    </nav>
  );
}
