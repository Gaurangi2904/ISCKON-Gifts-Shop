import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-orange-50 py-14 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          📞 Contact Us
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Need help with orders, products or worldwide delivery?
          Reach out to us anytime. We are happy to serve devotees globally 🙏
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* WhatsApp */}
          <Link
            href="https://wa.me/919999999999"
            target="_blank"
            className="bg-green-500 text-white px-8 py-4 rounded-full text-lg hover:bg-green-600 transition"
          >
            💬 Chat on WhatsApp
          </Link>

          {/* Email */}
          <Link
            href="mailto:iskcongiftshop@gmail.com"
            className="bg-white border border-orange-500 text-orange-600 px-8 py-4 rounded-full text-lg hover:bg-orange-100 transition"
          >
            ✉️ Email Us
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          ⏰ Available: Mon–Sat | 10 AM – 8 PM (IST)
        </p>
      </div>
    </section>
  );
}
