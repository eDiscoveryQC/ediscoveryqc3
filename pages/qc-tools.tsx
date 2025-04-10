// pages/qc-tools.tsx
import Head from 'next/head'

export default function QCTools() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-12">
      <Head>
        <title>eDiscoveryQC – QC Tools</title>
      </Head>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center py-12">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6">Discover eDiscoveryQC’s Powerful QC Tools</h1>
        <p className="text-lg text-gray-700 mb-8">
          Our suite of QC tools is designed to automate your eDiscovery workflows, ensuring **data integrity**, **compliance**, and **efficiency** before your data enters the review stage.
        </p>
        <a href="/signup" className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105">
          Start Free Trial
        </a>
      </div>

      {/* Preview of QC Tools */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center py-12">
        {/* Automated Hash & Metadata Validation */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Automated Hash & Metadata Validation</h3>
          <p className="text-gray-600">Ensure the integrity of your data with automated checks for hash values and metadata consistency.</p>
        </div>

        {/* Parent-Child Relationship Validation */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Parent-Child Relationship Validation</h3>
          <p className="text-gray-600">Automatically verify parent-child relationships to ensure all documents are properly associated.</p>
        </div>

        {/* AI-Powered Insights */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">AI-Powered Insights</h3>
          <p className="text-gray-600">Leverage AI to quickly identify key issues in large datasets and gain actionable insights.</p>
        </div>
      </div>

      {/* Tool Recommendations Section */}
      <div className="max-w-7xl mx-auto text-center py-12">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Have a Tool in Mind?</h2>
        <p className="text-lg text-gray-700 mb-8">We’re always looking to improve our platform. Let us know what tools you’d like to see in eDiscoveryQC!</p>
        <form className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Your Tool Idea</label>
              <textarea className="w-full border border-gray-300 p-3 rounded-md" rows={6} placeholder="Describe the QC tool you'd like to see..."></textarea>
            </div>
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105">
              Submit Your Idea
            </button>
          </div>
        </form>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto text-center py-12">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">How It Works</h2>
        <div className="space-y-6">
          <div className="text-lg text-gray-700">1. Upload your eDiscovery data.</div>
          <div className="text-lg text-gray-700">2. Run automated QC checks on your data.</div>
          <div className="text-lg text-gray-700">3. Review QC reports and fix any issues.</div>
          <div className="text-lg text-gray-700">4. Export your clean data for review platforms like Relativity or Everlaw.</div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto text-center py-12">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Why eDiscoveryQC?</h2>
        <p className="text-lg text-gray-700 mb-8">
          Automated QC checks, actionable insights, and compliance-ready reports—ensuring your eDiscovery process is seamless and error-free.
        </p>
      </div>

    </div>
  )
}
