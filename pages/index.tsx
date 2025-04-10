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
          {/* Inline SVG Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 50"
            className="mx-auto mb-6"
            width="300"
            height="150"
            fill="#1E4268" // Change the color of the logo here
          >
            <path
              d="M10,10 L40,10 L40,40 L10,40 Z M50,10 L80,10 L80,40 L50,40 Z M90,10 L100,10 L100,40 L90,40 Z"
            />
            {/* Example SVG path, replace with actual logo SVG path */}
          </svg>
          <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
            Smarter eDiscovery Starts With Better QC
          </h1>
          <p className="text-lg text-gray-700 mb-8 px-4 lg:px-0">
            Ensure your data integrity with AI-driven insights and automated workflows for legal teams and compliance specialists. Simplify the process, save time, and ensure accuracy.
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

      {/* Features Section (Icons Removed) */}
      <div className="max-w-7xl mx-auto text-center py-12">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Our Key Features</h3>
        <p className="text-gray-600">
          Automated workflows, AI-driven insights, and seamless quality control for legal teams and compliance specialists.
        </p>
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
