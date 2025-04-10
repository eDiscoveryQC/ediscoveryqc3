// pages/index.tsx
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-12">
      <Head>
        <title>eDiscoveryQC – Smarter eDiscovery QC</title>
      </Head>
      {/* Modal for development notice */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full bg-blue-900 text-white py-3 text-center z-50">
          <p>
            We’re still in development and will be launching soon! Stay tuned for exciting features.
            <button onClick={closeModal} className="ml-4 text-blue-200 underline">Close</button>
          </p>
        </div>
      )}

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center py-12 lg:py-24">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
          Smarter eDiscovery Starts With Better QC
        </h1>
        <p className="text-lg text-gray-700 mb-8 px-4">
          Ensure your data is accurate and defensible. Run extension audits, validate metadata, and leverage AI insights all in one place.
        </p>
        <div className="flex justify-center gap-6">
          <a href="/signup" className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105">
            Start Free Trial
          </a>
          <a href="/login" className="text-blue-700 font-medium hover:underline">
            Already have an account? Sign in
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Automated DAT File Validation</h3>
          <p className="text-gray-600">
            Easily validate DAT files for integrity, ensuring all metadata, hash values, and file extensions are correct.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Parent-Child Relationship Checks</h3>
          <p className="text-gray-600">
            Automatically verify parent-child relationships in your data to avoid errors in document review.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">AI-Powered Summaries</h3>
          <p className="text-gray-600">
            Utilize AI to generate detailed summaries and insights, helping you focus on critical issues quickly.
          </p>
        </div>
      </div>

      {/* Results or Trust Section */}
      <div className="bg-blue-50 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Proven Results for Legal Teams</h2>
        <p className="text-lg text-gray-700 mb-6 px-4">
          "eDiscoveryQC has helped us automate critical workflows, saving hours of manual labor and ensuring data integrity at every stage."
        </p>
        <p className="text-sm text-gray-600">- Legal Team, Top Law Firm</p>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-16 py-4">
        <p className="text-sm text-gray-600">
          © 2025 eDiscoveryQC. All rights reserved. | <a href="/terms" className="text-blue-700">Terms of Service</a> | <a href="/privacy" className="text-blue-700">Privacy Policy</a>
        </p>
      </div>
    </div>
  )
}
