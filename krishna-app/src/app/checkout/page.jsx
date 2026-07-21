"use client";

import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce(
  (sum, item) => sum + (item.price || 0),
  0
);


  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all required details 🙏");
      return;
    }

    alert("Order placed successfully 🎉 (COD)");
  };

  return (
    <main className="min-h-screen p-6 bg-[#f8f5f0]">
      <h1 className="text-2xl font-bold mb-6">🧾 Checkout</h1>

      {/* Address Form */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="font-semibold mb-4">Shipping Address</h2>

        <input
          name="name"
          placeholder="Full Name"
          className="input"
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          className="input"
          onChange={handleChange}
        />
        <input
          name="address"
          placeholder="Full Address"
          className="input"
          onChange={handleChange}
        />
        <input
          name="city"
          placeholder="City"
          className="input"
          onChange={handleChange}
        />
        <input
          name="country"
          placeholder="Country"
          className="input"
          onChange={handleChange}
        />
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="font-semibold mb-4">Order Summary</h2>

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}

        <hr className="my-3" />

        <p className="font-bold text-lg">Total: ₹{total}</p>

        <button
          onClick={placeOrder}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Place Order (Cash on Delivery)
        </button>
      </div>
    </main>
  );
}
