export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-8">
      <img src="/logo.png" alt="eDiscoveryQC Logo" className="mx-auto mb-6 w-40" />
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to eDiscoveryQC</h1>
      <p className="text-gray-600 mb-6">A suite of tools to streamline eDiscovery quality control.</p>
      <a href="/dashboard" className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
        🔍 Launch Dashboard
      </a>
    </main>
  );
}