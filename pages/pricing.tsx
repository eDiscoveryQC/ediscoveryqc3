// pages/pricing.tsx
import Head from 'next/head'
import Link from 'next/link'

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-12">
      <Head>
        <title>eDiscoveryQC – Pricing</title>
      </Head>

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
            <Link href="/pricing">
              <a className="text-blue-700 hover:text-blue-900 transition">Pricing</a>
            </Link>
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
      <div className="max-w-7xl mx-auto text-center py-12">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6">Affordable Pricing for Every Team</h1>
        <p className="text-lg text-gray-700 mb-8">
          Choose the right plan that fits your team's needs. Start with a **7-day free trial** to experience eDiscoveryQC.
        </p>
        <Link href="/signup">
          <a className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105">
            Start Free Trial
          </a>
        </Link>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto flex justify-center gap-6 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Free Trial</h3>
          <p className="text-gray-600">Access all features for 7 days—no credit card required.</p>
          <Link href="/signup">
            <a className="block mt-4 text-center text-blue-700 hover:text-blue-900 font-semibold">Start Free Trial</a>
          </Link>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Pro Plan</h3>
          <p className="text-gray-600">$49/month</p>
          <p className="text-gray-600 mt-2">For larger teams with advanced QC tools and priority support.</p>
          <Link href="/signup">
            <a className="block mt-4 text-center text-blue-700 hover:text-blue-900 font-semibold">Get Started</a>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Pricing
