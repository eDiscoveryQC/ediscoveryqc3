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
          <Link href="/">
            <img 
              src="/ediscoveryqclogo.svg" 
              alt="eDiscoveryQC Logo" 
              className="h-20"
            />
          </Link>
          <nav className="space-x-6 hidden md:flex">
            <Link href="/" className="text-blue-700 hover:text-blue-900 transition">Home</Link>
            <Link href="/qc-tools" className="text-blue-700 hover:text-blue-900 transition">QC Tools</Link>
            <Link href="/pricing" className="text-blue-700 hover:text-blue-900 transition">Pricing</Link>
            <Link href="#contact" className="text-blue-700 hover:text-blue-900 transition">Contact</Link>
            <Link href="/signup" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition">Start Free Trial</Link>
            <Link href="/login" className="text-blue-700 font-medium hover:underline transition-all duration-200">Sign In</Link>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-blue-700 hover:text-blue-900 focus:outline-none">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center py-12 mt-24">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6">Affordable Pricing for Every Team</h1>
        <p className="text-lg text-gray-700 mb-8">
          Choose the right plan that fits your team's needs. Start with a **7-day free trial** to experience eDiscoveryQC with no commitment.
        </p>
        <Link href="/signup">
          <a className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105">
            Start Free Trial
          </a>
        </Link>
      </div>

      {/* Pricing Plans Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full transform transition-all hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Free Trial</h3>
          <p className="text-gray-600 mb-4">Access all features for 7 days—no credit card required. Get a taste of the eDiscoveryQC experience!</p>
          <Link href="/signup">
            <a className="block mt-4 text-center text-blue-700 hover:text-blue-900 font-semibold">Start Free Trial</a>
          </Link>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full transform transition-all hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Pro Plan</h3>
          <p className="text-gray-600 text-lg font-semibold">$49/month</p>
          <p className="text-gray-600 mt-2">For larger teams needing advanced QC tools and priority support. Maximize efficiency and accuracy with our professional-grade features.</p>
          <Link href="/signup">
            <a className="block mt-4 text-center text-blue-700 hover:text-blue-900 font-semibold">Get Started</a>
          </Link>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full transform transition-all hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Enterprise Plan</h3>
          <p className="text-gray-600 text-lg font-semibold">Custom Pricing</p>
          <p className="text-gray-600 mt-2">Designed for large enterprises with custom needs. Includes dedicated support, advanced integrations, and scalable solutions.</p>
          <Link href="/contact">
            <a className="block mt-4 text-center text-blue-700 hover:text-blue-900 font-semibold">Contact Us for More Info</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Pricing
