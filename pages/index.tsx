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

      {/* Split Layout Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Hero Section */}
        <div className="text-center lg:text-left px-6 py-12">
          {/* Hero Content */}
          <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
            Your Data Deserves the Best: Smarter eDiscovery QC Starts Here
          </h1>
          <p className="text-lg text-gray-700 mb-8 px-4 lg:px-0">
            At eDiscoveryQC, we leverage AI and automation to make sure your data is validated, accurate, and ready for review. Seamlessly integrate our solution into your workflow and experience a whole new level of efficiency.
          </p>
          <div className="flex justify-center lg:justify-start gap-6">
            <a href="/signup" className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105">
              Start Free Trial
            </a>
            <a href="/login" className="text-blue-700 font-medium hover:underline transition-all duration-200">
              Already have an account? Sign in
            </a>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full mx-auto border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Sign in to eDiscoveryQC</h2>
          <form className="space-y-4 text-left">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email address</label>
              <input type="email" className="w-full border border-gray-300 p-3 rounded-md" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="w-full border border-gray-300 p-3 rounded-md" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md font-medium transform transition-transform hover:scale-105">
              Sign In
            </button>
          </form>
          <p className="mt-6 text-sm text-gray-600">
            Don’t have an account? <a href="/signup" className="text-blue-700 hover:underline font-medium">Start your 7-day free trial</a>
          </p>
        </div>
      </div>

      {/* Innovative Feature Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Automated DAT File Validation</h3>
          <p className="text-gray-600">
            Easily validate DAT files for integrity, ensuring all metadata, hash values, and file extensions are correct.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">AI-Driven Data Insights</h3>
          <p className="text-gray-600">
            Gain powerful insights from your data with AI, optimizing review processes and identifying anomalies.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Seamless Scalability</h3>
          <p className="text-gray-600">
            Scale your operations effortlessly as your eDiscovery needs grow, all while maintaining accuracy and speed.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-900 text-white py-12 text-center relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 z-10">Ready to Take Your eDiscovery to the Next Level?</h2>
        <p className="text-lg mb-8 z-10">
          Join thousands of legal professionals who trust eDiscoveryQC for their data validation and quality control. Start your free trial today and experience the power of smarter eDiscovery.
        </p>
        <a href="/signup" className="bg-white text-blue-900 hover:bg-gray-200 py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105 z-10">
          Start Free Trial
        </a>
      </div>

    </div>
  )
}
