import Image from "next/image";
import Link from "next/link";
import Products from "@/app/components/Products";



const categories = [
  { name: "Deities", image: "/deities.jpg", slug: "deities" },
  { name: "Dresses", image: "/dresses.jpg", slug: "dresses" },
  { name: "Kids Wear", image: "/kids.jpg", slug: "kids" },
  { name: "Bags & Purses", image: "/bags.jpg", slug: "bags" },
  { name: "Musical", image: "/musical.jpg", slug: "musical" },
  { name: "Home Decor", image: "/homedecor.jpg", slug: "home-decor" },
  { name: "Ayurveda", image: "/ayurveda1.jpg", slug: "ayurveda" },
  { name: "Japa Mala", image: "/japa.jpg", slug: "japa" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">

      {/* 🌸 HERO SECTION */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🛕 ISKCON Online Gifts Shop
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Authentic devotional products sourced directly from
          <span className="font-semibold text-orange-600"> Vrindavan</span> &
          <span className="font-semibold text-pink-600"> Mayapur</span>
        </p>

        <p className="mt-3 text-sm text-gray-500">
          🌍 Worldwide Shipping • 🛒 Online Shopping • 🙏 Devotional Products
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#categories"
            className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600"
          >
            Shop Now
          </a>
          <a
            href="#categories"
            className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-50"
          >
            Explore Categories
          </a>
        </div>
      </section>

      {/* 🌼 CATEGORY SECTION */}
      <section id="categories" className="px-6 pb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Explore Devotional Categories ✨
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/5] bg-gray-100">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg mb-3">
                  {cat.name}
                </h3>

                <Link
                  href={`/categories/${cat.slug}`}
                  className="inline-block px-5 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
                >
                  View Products
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌍 WORLDWIDE TRUST SECTION */}
      <section className="bg-white py-8 px-6 text-center border-t">

        <h2 className="text-2xl font-bold mb-4">
          Trusted by Devotees Worldwide 🙏
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto">
          We deliver authentic ISKCON devotional products across India,
          USA, UK, Europe & many more countries with care and devotion.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>📦 Secure Packaging</span>
          <span>🚚 Global Shipping</span>
          <span>💳 Safe Payments</span>
          <span>🪷 Pure Devotion</span>
        </div>
      </section>
       {/* Products from backend */}
      <Products />

    </main>
    
  );
} 

