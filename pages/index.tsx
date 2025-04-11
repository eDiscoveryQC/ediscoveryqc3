import Link from 'next/link';

export default function Home() {
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
            {/* Update link to QC Tools page */}
            <Link href="/qc-tools">
              <a className="text-blue-700 hover:text-blue-900 transition">QC Tools</a>
            </Link>
            <Link href="#pricing">
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

      {/* Other sections ... */}

      {/* QC Tools Section */}
      <div id="qc-tools" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center py-12">
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
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Parent-Child Relationship Checks</h3>
          <p className="text-gray-600">
            Automatically verify parent-child relationships in your data to avoid errors in document review.
          </p>
        </div>
      </div>

      {/* More sections ... */}
    </div>
  )
}
