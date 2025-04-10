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

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
        <div className="px-6 py-12">
          {/* Logo */}
          <img 
            src="/ediscoveryqclogo.png" 
            alt="eDiscoveryQC Logo" 
            className="mx-auto mb-6" 
            width={480} 
            height={240} 
          />
          <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
            Unleash the Power of Smarter eDiscovery QC
          </h1>
          <p className="text-lg text-gray-700 mb-8 px-4 lg:px-0">
            At eDiscoveryQC, we make sure your data is perfect and ready for the courtroom. Our platform empowers legal teams and compliance specialists to optimize their eDiscovery workflows.
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
        
        {/* Right Section - Hero Background */}
        <div className="px-6 py-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We don't just follow industry standards – we set them. With eDiscoveryQC, you’ll experience seamless automation, AI-powered insights, and best-in-class security, all designed to make your eDiscovery process faster and more efficient than ever.
          </p>
          <ul className="text-lg list-inside list-disc text-gray-700 space-y-4">
            <li>📊 **Automated workflows** for error-free data validation and review</li>
            <li>💡 **AI-driven insights** to help you focus on what's important</li>
            <li>🔒 **Secure, reliable** platform built with compliance in mind</li>
            <li>🚀 **Fast and scalable** solutions for your evolving needs</li>
          </ul>
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
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Speed & Scalability</h3>
          <p className="text-gray-600">
            Scale your eDiscovery operations without the headaches. We make it simple to grow as your needs evolve.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of eDiscovery?</h2>
        <p className="text-lg mb-8">
          Join the growing list of professionals who trust eDiscoveryQC to manage their eDiscovery needs. Start your free trial today!
        </p>
        <a href="/signup" className="bg-white text-blue-900 hover:bg-gray-200 py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105">
          Start Free Trial
        </a>
      </div>

    </div>
  )
}
