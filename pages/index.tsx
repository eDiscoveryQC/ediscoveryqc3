
import Link from 'next/link';
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-blue-50 text-center px-6">
      <img src="/logo.png" alt="eDiscoveryQC Logo" className="w-24 mb-4" />
      <h1 className="text-4xl font-bold text-blue-900">Smarter eDiscovery Starts with Better QC</h1>
      <p className="mt-4 text-lg text-gray-700 max-w-xl">
        eDiscoveryQC is the first quality-control-centric SaaS platform built for legal professionals, review teams, and litigation support.
      </p>
      <Link href="/dashboard" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow hover:bg-blue-700 transition">
        Launch Dashboard
      </Link>
    </main>
  );
}
