// pages/login.tsx
import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo.png'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <Head>
        <title>Login – eDiscoveryQC</title>
      </Head>
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-xl text-center">
        <div className="mb-6">
          <Image src={logo} alt="eDiscoveryQC Logo" width={60} height={60} className="mx-auto" />
          <h1 className="text-2xl font-bold text-blue-900 mt-4">Sign in to eDiscoveryQC</h1>
        </div>
        <form className="space-y-4 text-left">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email address</label>
            <input type="email" className="w-full border border-gray-300 p-3 rounded-md" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="w-full border border-gray-300 p-3 rounded-md" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md font-medium">
            Sign In
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-600">
          Don’t have an account? <a href="/signup" className="text-blue-700 hover:underline font-medium">Start your 7-day free trial</a>
        </p>
      </div>
    </div>
  )
}
