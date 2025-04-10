
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 p-10 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <img src="/logo.png" alt="eDiscoveryQC Logo" className="w-24 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-blue-900">Smarter eDiscovery Starts with Better QC</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          The first QC-centric SaaS platform for legal professionals, built to streamline your review workflows.
        </p>
        <Link href="/dashboard" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg shadow hover:bg-blue-700 transition">
          Launch Dashboard
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left text-gray-700">
          <div className="bg-white rounded-xl shadow p-5 border">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">📤 Upload Files</h2>
            <p>Drag and drop your DAT files to begin QC validation.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 border">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">🔍 Run QC Tools</h2>
            <p>Select from a suite of tools to run consistency, metadata, and file extension checks.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 border">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">📄 Export Reports</h2>
            <p>Download summary reports for client review or internal audit.</p>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/suggest-tool" className="text-blue-600 hover:underline text-md">
            💡 Have an idea? Suggest a tool.
          </Link>
        </div>
      </div>
    </main>
  );
}
