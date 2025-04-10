// pages/index.tsx
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-12">
      <Head>
        <title>eDiscoveryQC – Revolutionizing QC in eDiscovery</title>
      </Head>

      {/* Modal for development notice */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full bg-blue-900 text-white py-3 text-center z-50">
          <p>
            🚧 We are still in development and will be launching soon! Stay tuned for exciting features.
            <button onClick={closeModal} className="ml-4 text-blue-200 underline">Close</button>
          </p>
        </div>
      )}

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
        <div className="px-6 py-12">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
            eDiscoveryQC: Revolutionizing QC in eDiscovery
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Automated QC checks, compliance-ready reports, and seamless integrations to ensure your data is production-ready—before it reaches the review stage.
          </p>
          <div className="flex justify-center lg:justify-start gap-6">
            <a href="/signup" className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105">
              Start Free Trial
            </a>
            <a href="#features" className="text-blue-700 font-medium hover:underline transition-all duration-200">
              Learn More
            </a>
          </div>
        </div>
        <div className="text-center">
          {/* Placeholder image for the hero section */}
          <img src="/your-dashboard-image.png" alt="eDiscoveryQC Dashboard Preview" className="w-full max-w-md mx-auto"/>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="mb-4">
            <img src="/icons/dat-icon.png" alt="DAT Validation" className="w-10 h-10 mx-auto"/>
          </div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Automated DAT File Validation</h3>
          <p className="text-gray-600">
            Easily validate DAT files for integrity, ensuring all metadata, hash values, and file extensions are correct.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="mb-4">
            <img src="/icons/ai-icon.png" alt="AI Insights" className="w-10 h-10 mx-auto"/>
          </div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">AI-Driven Data Insights</h3>
          <p className="text-gray-600">
            Gain powerful insights from your data with AI, optimizing review processes and identifying anomalies.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="mb-4">
            <img src="/icons/parent-child-icon.png" alt="Parent-Child Check" className="w-10 h-10 mx-auto"/>
          </div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Parent-Child Relationship Checks</h3>
          <p className="text-gray-600">
            Automatically verify parent-child relationships in your data to avoid errors in document review.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="max-w-7xl mx-auto py-12">
        <h2 className="text-3xl font-semibold text-blue-900 text-center mb-8">Contact Us</h2>
        <form className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" className="w-full border border-gray-300 p-3 rounded-md" placeholder="Your Name" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" className="w-full border border-gray-300 p-3 rounded-md" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
              <textarea className="w-full border border-gray-300 p-3 rounded-md" rows={6} placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105">
              Send Message
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}
