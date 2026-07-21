export default function AdminPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-orange-50">
      <h1 className="text-4xl font-bold text-orange-600 mb-4">
        Admin Dashboard
      </h1>

      <p className="text-gray-600 text-lg">
        Welcome to the ISKCON Gifts Shop Admin Panel.
      </p>

      <div className="mt-8 bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Coming Soon 🚀</h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Add Products</li>
          <li>Edit Products</li>
          <li>Delete Products</li>
          <li>Manage Orders</li>
          <li>Manage Users</li>
        </ul>
      </div>
    </main>
  );
}