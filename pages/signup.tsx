import Head from 'next/head'
import Link from 'next/link'

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <Head>
        <title>Sign Up – eDiscoveryQC</title>
      </Head>
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Create your account</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-3 rounded-md" />
          <input type="email" placeholder="Email" className="w-full border p-3 rounded-md" />
          <input type="password" placeholder="Password" className="w-full border p-3 rounded-md" />
          <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md">
            Start Free Trial
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          You’ll get full access to all tools for 7 days. No credit card required.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account? 
          <Link href="/login">
            <span className="text-blue-700 hover:underline">Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  )
}
