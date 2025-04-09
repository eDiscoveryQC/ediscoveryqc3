
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to eDiscoveryQC</h1>
      <p className="text-lg text-gray-700">
        Smarter eDiscovery starts with better QC.
      </p>
      <div className="mt-8">
        <a href="/dashboard" className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">
          Enter Dashboard
        </a>
      </div>
    </main>
  );
}
