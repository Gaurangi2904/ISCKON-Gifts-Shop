import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50 px-6 py-16">

      {/* 🌸 HEADER */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">
          🛕 About ISKCON Online Gifts Shop
        </h1>

        <p className="text-gray-600 text-lg">
          A devotional initiative to serve devotees worldwide with authentic,
          spiritually uplifting products.
        </p>
      </section>

      {/* 🌼 CONTENT */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow">
          <Image
            src="/radha-krishna.jpg"
            alt="Radha Krishna"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Our Mission 🙏
          </h2>

          <p className="text-gray-600 mb-4">
            ISKCON Online Gifts Shop is dedicated to providing authentic
            devotional products sourced directly from holy places like
            <span className="font-semibold"> Vrindavan</span> and
            <span className="font-semibold"> Mayapur</span>.
          </p>

          <p className="text-gray-600 mb-4">
            From deity worship items and japa malas to devotional clothing,
            books, and ayurvedic products — every item is chosen with purity,
            devotion, and care.
          </p>

          <p className="text-gray-600">
            🌍 We proudly serve devotees across India and worldwide through
            safe online shopping and reliable delivery.
          </p>
        </div>
      </section>

      {/* 🌍 WHY TRUST US */}
      <section className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Why Choose Us? ✨
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            🪷<p className="font-semibold mt-2">Authentic Products</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            📦<p className="font-semibold mt-2">Secure Packaging</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            🚚<p className="font-semibold mt-2">Worldwide Shipping</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            🙏<p className="font-semibold mt-2">Devotional Service</p>
          </div>
        </div>
      </section>

  

    </main>
  );
}
