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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-10">
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Product Description */}
        <div className="text-center lg:text-left">
          <Image src="/logo.png" alt="eDiscoveryQC Logo" width={60} height={60} className="mx-auto lg:mx-0 mb-6" />
          <h1 className="text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Smarter eDiscovery <br /> Starts With Better QC
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            eDiscoveryQC is a SaaS platform that helps legal teams and litigation support specialists ensure data accuracy and defensibility before review begins. Run extension audits, validate metadata, identify hash mismatches, and more.
          </p>
          <ul className="text-left text-sm text-gray-600 list-disc pl-5 space-y-1">
            <li>✔ Validate DAT files, hash values, and file extensions</li>
            <li>✔ Parent-child relationship checks</li>
            <li>✔ Track missing files or metadata gaps</li>
            <li>✔ AI-assisted summaries and insights</li>
          </ul>
          <p className="mt-6 text-sm text-gray-600">
            Start your 7-day free trial — no credit card required.</p>
        </div>

        {/* Right Section - Dashboard Preview with CTA */}
        <div className="bg-white p-8 rounded-xl shadow-xl text-center max-w-md w-full mx-auto border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 animate__animated animate__fadeIn animate__delay-2s">Sign in to eDiscoveryQC</h2>
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
      {/* Trust Elements / Testimonials */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Trusted by Leading Legal Teams</h2>
        <div className="flex justify-center space-x-6">
          <Image src="/client1-logo.png" alt="Client 1" width={100} height={50} className="opacity-70" />
          <Image src="/client2-logo.png" alt="Client 2" width={100} height={50} className="opacity-70" />
          <Image src="/client3-logo.png" alt="Client 3" width={100} height={50} className="opacity-70" />
        </div>
      </div>
    </div>
  )
}
