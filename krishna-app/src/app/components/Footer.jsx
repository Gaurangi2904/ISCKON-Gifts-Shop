export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            🛕 ISKCON Gifts Shop
          </h3>
          <p className="text-sm">
            Authentic devotional products sourced from  
            Vrindavan & Mayapur with devotion.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-white mb-2">Services</h4>
          <ul className="text-sm space-y-1">
            <li>🌍 Worldwide Shipping</li>
            <li>🛒 Online Orders</li>
            <li>📦 Secure Packaging</li>
            <li>🙏 Authentic Products</li>
          </ul>
        </div>

        {/* Credit */}
        <div>
          <h4 className="font-semibold text-white mb-2">Created By</h4>
          <p className="text-sm">
            Designed & Developed by  
            <span className="block font-semibold text-orange-400">
              Gaurangi Kapare
            </span>
          </p>
          <p className="text-xs mt-2 text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
