import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'

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
            🚧 We are still in development and will be launching soon! Stay tuned for exciting features.
            <button onClick={closeModal} className="ml-4 text-blue-200 underline">Close</button>
          </p>
        </div>
      )}

      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">
          {/* Logo in the header */}
          <Link href="/" className="flex items-center">
            <img 
              src="/ediscoveryqclogo.svg" 
              alt="eDiscoveryQC Logo" 
              className="h-20"
            />
          </Link>
          <nav className="space-x-6">
            <Link href="/" className="text-blue-700 hover:text-blue-900 transition">Home</Link>
            <Link href="/qc-tools" className="text-blue-700 hover:text-blue-900 transition">QC Tools</Link>
            <Link href="/pricing" className="text-blue-700 hover:text-blue-900 transition">Pricing</Link>
            <Link href="#contact" className="text-blue-700 hover:text-blue-900 transition">Contact</Link>
            <Link href="/signup" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition">Start Free Trial</Link>
            <Link href="/login" className="text-blue-700 font-medium hover:underline transition-all duration-200">Sign In</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
        {/* Left Side - Hero Section */}
        <div className="px-6 py-12">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
            eDiscoveryQC: Revolutionizing QC in eDiscovery
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Automate your QC checks, ensure data integrity, and streamline the eDiscovery process with seamless integration into your existing workflow.
          </p>
          <div className="flex justify-center lg:justify-start gap-6">
            <Link href="/signup" className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105">
              Start Free Trial
            </Link>
            <Link href="#qc-tools" className="text-blue-700 font-medium hover:underline transition-all duration-200">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side - Sign In Form */}
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
            Don’t have an account? <Link href="/signup" className="text-blue-700 hover:underline font-medium">Start your 7-day free trial</Link>
          </p>
        </div>
      </div>

      {/* QC-Focused Section */}
      <div className="max-w-7xl mx-auto text-center py-12 mt-24">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6">QC-Focused Tool for eDiscovery Professionals</h2>
        <p className="text-lg text-gray-700 mb-8">
          eDiscoveryQC specializes in QC, ensuring data integrity and compliance at every stage, before and after review. Unlike review platforms, which focus primarily on document review, eDiscoveryQC ensures that the data is validated and verified throughout the entire process.
        </p>

        {/* Pre-Review QC Automation */}
        <div className="flex justify-center items-center gap-12 mb-12">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Pre-Review QC Automation</h3>
            <p className="text-gray-600">
              eDiscoveryQC helps users automatically check for common QC issues like missing files, corrupt data, and metadata mismatches before they start their review, ensuring that only clean data enters the review workflow.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Post-Review QC Automation</h3>
            <p className="text-gray-600">
              After review, eDiscoveryQC provides final QC checks, such as production validation and metadata re-checks, ensuring that the data is compliant and ready for production, preventing errors and rework.
            </p>
          </div>
        </div>

        {/* Increase Trust and Confidence */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Increase Trust and Confidence</h3>
          <p className="text-gray-600">
            By automating QC checks both before and after review, eDiscoveryQC ensures that data is ready for litigation, increasing the confidence of legal teams in the data they produce and the results of their review process. Legal teams can defend their work confidently, knowing that the data has been checked and validated at every step.
          </p>
        </div>
      </div>

      {/* QC Tools Section */}
      <div id="qc-tools" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Automated DAT File Validation</h3>
          <p className="text-gray-600">Easily validate DAT files for integrity, ensuring all metadata, hash values, and file extensions are correct.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">AI-Driven Data Insights</h3>
          <p className="text-gray-600">Gain powerful insights from your data with AI, optimizing review processes and identifying anomalies.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Parent-Child Relationship Checks</h3>
          <p className="text-gray-600">Automatically verify parent-child relationships to ensure all documents are properly associated.</p>
        </div>
      </div>

      {/* Contact Form Section */}
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
