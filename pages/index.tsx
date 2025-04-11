// pages/index.tsx
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
          <a href="#" className="flex items-center">
            <img 
              src="/ediscoveryqclogo.svg" 
              alt="eDiscoveryQC Logo" 
              className="h-20"
            />
          </a>
          <nav className="space-x-6">
            <Link href="/">
              <a className="text-blue-700 hover:text-blue-900 transition">Home</a>
            </Link>
            <Link href="/qc-tools">
              <a className="text-blue-700 hover:text-blue-900 transition">QC Tools</a>
            </Link>
            {/* Removed pricing link from here */}
            <Link href="#contact">
              <a className="text-blue-700 hover:text-blue-900 transition">Contact</a>
            </Link>
            <Link href="/signup">
              <a className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition">Start Free Trial</a>
            </Link>
            <Link href="/login">
              <a className="text-blue-700 font-medium hover:underline transition-all duration-200">Sign In</a>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
        <div className="px-6 py-12">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
            eDiscoveryQC: Revolutionizing QC in eDiscovery
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Automate your QC checks, ensure data integrity, and streamline the eDiscovery process with seamless integration into your existing workflow.
          </p>
          <div className="flex justify-center lg:justify-start gap-6">
            <a href="/signup" className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105">
              Start Free Trial
            </a>
            <Link href="/qc-tools">
              <a className="text-blue-700 font-medium hover:underline transition-all duration-200">
                Learn More
              </a>
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
            Don’t have an account? <Link href="/signup"><a className="text-blue-700 hover:underline font-medium">Start your 7-day free trial</a></Link>
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
