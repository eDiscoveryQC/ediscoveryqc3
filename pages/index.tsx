// pages/index.tsx
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <Head>
        <title>eDiscoveryQC – Smarter eDiscovery QC</title>
      </Head>
      <div className="max-w-4xl w-full text-center py-16">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
          Smarter eDiscovery <br /> Starts With Better QC
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Built for legal teams, litigation support, and document review specialists.
          Start your 7-day free trial and experience a better way to quality-check your data.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="/signup" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition">
            Start Free Trial
          </a>
          <a href="/login" className="text-blue-700 font-medium hover:underline">
            Already have an account? Sign in
          </a>
        </div>
        <div className="mt-12 text-sm text-gray-500">
          <p>Inspired by the simplicity of Everlaw and the power of Relativity</p>
        </div>
      </div>
    </div>
  )
}
