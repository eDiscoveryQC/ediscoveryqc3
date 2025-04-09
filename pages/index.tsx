import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 p-10 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <img src="/logo.png" alt="eDiscoveryQC Logo" className="w-24 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-blue-900">Smarter eDiscovery Starts with Better QC</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          eDiscoveryQC is the first QC-centric SaaS platform built exclusively for legal teams, litigation support, and document review workflows.
        </p>
        <Link href="/dashboard" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg shadow hover:bg-blue-700 transition">
          Launch Dashboard
        </Link>
      </div>
    </main>
  );
}