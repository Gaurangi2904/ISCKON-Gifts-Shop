"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0),
    0
  );

  return (
    <main className="p-6 min-h-screen bg-[#f8f5f0]">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty 🙏</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded shadow mb-3"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-orange-600 font-medium">
                  ₹{item.price}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="mt-6 bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">
              Total: ₹{total}
            </h2>

            {/* Checkout Button */}
            <Link
              href="/checkout"
              className="inline-block mt-4 bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
            >
              Proceed to Checkout →
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
